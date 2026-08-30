import Link from "next/link";
import Image from "next/image";

import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  eager?: boolean;
};

export function ProjectCard({ project, eager = false }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link className="project-cover" href={`/projects/${project.slug}`}>
        <Image
          className="project-cover-image"
          src="/images/abstract-project-cover.svg"
          alt=""
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 800px) 100vw, 50vw"
        />
        <span className="cover-orbit orbit-one" />
        <span className="cover-orbit orbit-two" />
        <span className="cover-index">{project.category.slice(0, 3).toUpperCase()}</span>
        <strong>{project.title}</strong>
      </Link>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.period}</span>
        </div>
        <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.stack.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <Link className="text-link" href={`/projects/${project.slug}`}>
          View case study <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
