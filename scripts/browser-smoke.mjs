import { mkdir, writeFile } from "node:fs/promises";

const cdpPort = 9225;
const baseUrl = "http://127.0.0.1:3000";
const targets = await fetch(`http://127.0.0.1:${cdpPort}/json/list`).then((response) => response.json());
const target = targets.find((entry) => entry.type === "page");

if (!target) {
  throw new Error("No Chrome page target is available.");
}

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let commandId = 0;
const pending = new Map();
const eventWaiters = new Map();
const browserErrors = [];

socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);

  if (message.id) {
    const request = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
    return;
  }

  if (message.method === "Runtime.exceptionThrown") {
    browserErrors.push(message.params.exceptionDetails.text);
  }

  if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") {
    browserErrors.push(message.params.args.map((argument) => argument.value ?? argument.description).join(" "));
  }

  const waiters = eventWaiters.get(message.method) ?? [];
  eventWaiters.delete(message.method);
  for (const waiter of waiters) waiter(message.params);
});

function send(method, params = {}) {
  const id = ++commandId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

function waitForEvent(method, timeout = 10000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeout);
    const waiters = eventWaiters.get(method) ?? [];
    waiters.push((params) => {
      clearTimeout(timer);
      resolve(params);
    });
    eventWaiters.set(method, waiters);
  });
}

async function evaluate(expression) {
  const { result, exceptionDetails } = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });

  if (exceptionDetails) throw new Error(exceptionDetails.text);
  return result.value;
}

async function navigate(path) {
  const loaded = waitForEvent("Page.loadEventFired");
  await send("Page.navigate", { url: `${baseUrl}${path}` });
  await loaded;
  await new Promise((resolve) => setTimeout(resolve, 350));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true,
});

await navigate("/");
const mobileLayout = await evaluate(`(async () => ({
  width: window.innerWidth,
  scrollWidth: document.documentElement.scrollWidth,
  heading: document.querySelector('h1')?.textContent,
  resumeStatus: await fetch('/resume.pdf').then((response) => response.status),
  unsafeBlankLinks: [...document.querySelectorAll('a[target="_blank"]')]
    .filter((link) => !link.relList.contains('noreferrer')).length
}))()`);
assert(mobileLayout.width === 390, `Expected a 390px viewport, received ${mobileLayout.width}px.`);
assert(mobileLayout.scrollWidth <= mobileLayout.width, `Mobile page overflows to ${mobileLayout.scrollWidth}px.`);
assert(mobileLayout.heading?.includes("useful software"), "Home heading is missing.");
assert(mobileLayout.resumeStatus === 200, "Resume PDF did not return HTTP 200.");
assert(mobileLayout.unsafeBlankLinks === 0, "An external blank-target link is missing rel=noreferrer.");

const initialTheme = await evaluate("document.documentElement.dataset.theme");
await evaluate("document.querySelector('.theme-toggle').click(); true");
const toggledTheme = await evaluate("document.documentElement.dataset.theme");
assert(initialTheme !== toggledTheme, "Theme toggle did not change the active theme.");

await send("Runtime.evaluate", { expression: "document.body.focus()" });
await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Tab", code: "Tab" });
await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Tab", code: "Tab" });
const focusedElement = await evaluate("document.activeElement?.className || document.activeElement?.tagName");
assert(String(focusedElement).includes("skip-link"), "Keyboard focus did not reach the skip link first.");

await mkdir(".screenshots", { recursive: true });
const mobileScreenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
await writeFile(".screenshots/home-mobile-cdp.png", Buffer.from(mobileScreenshot.data, "base64"));

await navigate("/projects");
await evaluate(`{
  const button = [...document.querySelectorAll('.filter-button')].find((item) => item.textContent === 'Archive');
  button.click();
  true;
}`);
await new Promise((resolve) => setTimeout(resolve, 250));
const archiveResult = await evaluate("document.querySelector('.result-count').textContent.trim()");
assert(archiveResult === "Showing 8 of 14 projects", `Unexpected Archive result: ${archiveResult}`);

await evaluate(`{
  [...document.querySelectorAll('.filter-button')].find((item) => item.textContent === 'All').click();
  const input = document.querySelector('.project-search input');
  Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, 'Terraform');
  input.dispatchEvent(new Event('input', { bubbles: true }));
  true;
}`);
await new Promise((resolve) => setTimeout(resolve, 350));
const searchResult = await evaluate("document.querySelector('.result-count').textContent.trim()");
assert(searchResult === "Showing 1 of 14 projects", `Unexpected search result: ${searchResult}`);

await navigate("/projects/pdam-digital-service-ecosystem");
const professionalSafety = await evaluate(`({
  hasNotice: Boolean(document.querySelector('.confidential-note')),
  repositoryLinks: [...document.querySelectorAll('.case-links a')].length,
  text: document.body.innerText
})`);
assert(professionalSafety.hasNotice, "Professional confidentiality notice is missing.");
assert(professionalSafety.repositoryLinks === 0, "Professional project exposes an external project link.");
assert(!/password|secret|token|private key/i.test(professionalSafety.text), "Sensitive terminology appeared in the professional case study.");

await navigate("/certifications");
const credentialState = await evaluate(`({
  total: document.querySelectorAll('.certification-row').length,
  active: document.querySelectorAll('.status-active').length,
  expired: document.querySelectorAll('.status-expired').length,
  completed: document.querySelectorAll('.status-completed').length
})`);
assert(credentialState.total === 11, `Expected 11 certifications, found ${credentialState.total}.`);
assert(credentialState.active > 0 && credentialState.expired > 0 && credentialState.completed > 0, "Certification statuses are incomplete.");

await navigate("/this-page-does-not-exist");
const notFoundText = await evaluate("document.querySelector('h1')?.textContent");
assert(notFoundText?.includes("different route"), "Custom 404 page was not rendered.");

assert(browserErrors.length === 0, `Browser errors detected: ${browserErrors.join(" | ")}`);
console.log(JSON.stringify({ mobileLayout, archiveResult, searchResult, credentialState, browserErrors }, null, 2));
socket.close();
