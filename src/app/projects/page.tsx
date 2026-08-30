import type { Metadata } from "next";

import { ProjectFilter } from "@/components/project-filter";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Professional, personal, and academic software projects by Agyl Restu Hermanto.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="page-shell shell">
      <div className="page-hero">
        <p className="eyebrow">Project archive</p>
        <h1>Work that documents the journey.</h1>
        <p>
          From production Android and full-stack systems to cloud automation and academic projects—each one added a practical lesson to how I build software.
        </p>
      </div>
      <ProjectFilter projects={projects} />
    </div>
  );
}
