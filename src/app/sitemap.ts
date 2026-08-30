import type { MetadataRoute } from "next";

import { profile, projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/certifications"].map((route) => ({
    url: `${profile.siteUrl}${route}`,
    lastModified: new Date(),
  }));

  return [
    ...routes,
    ...projects.map((project) => ({
      url: `${profile.siteUrl}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
