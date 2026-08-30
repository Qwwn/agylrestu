import { certifications, projects } from "@/data/portfolio";

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getCertificationStatus(validUntil?: string) {
  if (!validUntil) {
    return "Completed" as const;
  }

  return new Date(`${validUntil}T23:59:59Z`).getTime() >= Date.now()
    ? ("Active" as const)
    : ("Expired" as const);
}

export function formatMonth(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function getSelectedCertifications() {
  const preferred = new Set(["Associate Cloud Engineer", "Google Cloud Skills Boost Badges"]);
  return certifications.filter((certification) => preferred.has(certification.title));
}
