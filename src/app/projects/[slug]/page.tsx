import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/portfolio";
import { getProjectBySlug } from "@/lib/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="case-study shell">
      <Link className="back-link" href="/projects">← All projects</Link>
      <header className="case-header">
        <div>
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
        </div>
        <dl className="case-facts">
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Period</dt><dd>{project.period}</dd></div>
          <div><dt>Role</dt><dd>{project.role}</dd></div>
        </dl>
      </header>

      <div className="case-cover" aria-hidden="true">
        <Image
          className="case-cover-image"
          src="/images/abstract-project-cover.svg"
          alt=""
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1120px"
        />
        <span>{project.category}</span>
        <strong>{project.title}</strong>
        <div className="case-cover-grid" />
      </div>

      {project.confidential ? (
        <aside className="confidential-note">
          <strong>Professional case study</strong>
          <p>This overview intentionally omits client names, source code, customer data, and infrastructure details.</p>
        </aside>
      ) : null}

      {project.workstreams?.length ? (
        <section className="case-workstreams" aria-labelledby="workstreams-heading">
          <p className="eyebrow">Areas of contribution</p>
          <h2 id="workstreams-heading">What I worked on across the ecosystem</h2>
          <div className="workstream-grid">
            {project.workstreams.map((workstream) => (
              <article className="workstream-card" key={workstream.title}>
                <h3>{workstream.title}</h3>
                <p>{workstream.summary}</p>
                <ul>
                  {workstream.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <div className="case-body">
        <section>
          <p className="eyebrow">01 · Challenge</p>
          <h2>What needed to be solved</h2>
          <p>{project.challenge}</p>
        </section>
        <section>
          <p className="eyebrow">02 · Approach</p>
          <h2>How I approached it</h2>
          <p>{project.solution}</p>
        </section>
        <section>
          <p className="eyebrow">03 · Outcome</p>
          <h2>What the project delivered</h2>
          <p>{project.outcome}</p>
        </section>
      </div>

      <div className="case-details">
        <section>
          <h2>Key highlights</h2>
          <ul className="highlight-list">
            {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </section>
        <section>
          <h2>Technology</h2>
          <ul className="tag-list large">
            {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          {project.links.length > 0 ? (
            <div className="case-links">
              {project.links.map((link) => (
                <a className="button secondary" key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </div>
          ) : null}
        </section>
      </div>

      <nav className="case-next" aria-label="Project navigation">
        <Link href="/projects">Browse the full project archive <span aria-hidden="true">→</span></Link>
      </nav>
    </article>
  );
}
