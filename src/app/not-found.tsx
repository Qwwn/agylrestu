import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found shell">
      <p className="eyebrow">404</p>
      <h1>This page took a different route.</h1>
      <p>The page you requested does not exist or has moved.</p>
      <Link className="button primary" href="/">Return home</Link>
    </div>
  );
}
