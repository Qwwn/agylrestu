"use client";

import { useDeferredValue, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Project, ProjectCategory } from "@/data/portfolio";

type Filter = "All" | ProjectCategory | "Archive";

const filters: Filter[] = ["All", "Professional", "Personal", "Academic", "Archive"];

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visibleProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "All" ||
      (activeFilter === "Archive" ? !project.featured : project.category === activeFilter);
    const searchable = `${project.title} ${project.summary} ${project.stack.join(" ")}`.toLowerCase();
    return matchesCategory && (!deferredQuery || searchable.includes(deferredQuery));
  });

  return (
    <>
      <div className="project-controls">
        <div className="filter-group" aria-label="Filter projects">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "filter-button active" : "filter-button"}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="project-search">
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by project or technology"
          />
        </label>
      </div>
      <p className="result-count" aria-live="polite">
        Showing {visibleProjects.length} of {projects.length} projects
      </p>
      {visibleProjects.length > 0 ? (
        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} eager={index < 2} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No projects found</h2>
          <p>Try another keyword or category.</p>
        </div>
      )}
    </>
  );
}
