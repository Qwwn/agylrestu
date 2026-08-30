import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { education, experiences, profile, publication, skillGroups } from "@/data/portfolio";
import { getFeaturedProjects, getSelectedCertifications, getCertificationStatus } from "@/lib/portfolio";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const selectedCertifications = getSelectedCertifications();

  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="availability">
            <span className="availability-dot" aria-hidden="true" />
            <span>Open to junior software engineering opportunities</span>
          </p>
          <p className="hero-kicker">Hello, I&apos;m {profile.name}.</p>
          <h1>I build useful software for the web and Android.</h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/projects">Explore my work</Link>
            <a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume</a>
          </div>
          <div className="hero-links" aria-label="Profile links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="/resume.pdf" download>Download resume ↓</a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Software engineering disciplines">
          <div className="hero-panel panel-main">
            <span>Current focus</span>
            <strong>Full-stack + Android</strong>
            <p>Building reliable product experiences from interface to API.</p>
          </div>
          <div className="hero-panel panel-code" aria-hidden="true">
            <span className="code-dot" /><span className="code-dot" /><span className="code-dot" />
            <code>build → test → learn → improve</code>
          </div>
          <div className="floating-chip chip-one">Kotlin</div>
          <div className="floating-chip chip-two">React</div>
          <div className="floating-chip chip-three">MySQL</div>
        </div>
      </section>

      <section className="section shell" id="skills">
        <SectionHeading
          eyebrow="Capabilities"
          title="A practical toolkit for product development."
          description="Comfortable moving across interfaces, application logic, APIs, and data while keeping the user experience in view."
        />
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.label}>
              <h3>{group.label}</h3>
              <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint" id="experience">
        <div className="shell">
          <SectionHeading eyebrow="Experience" title="Learning through real products and real constraints." />
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.company}-${experience.period}`}>
                <div className="timeline-date">{experience.period}</div>
                <div className="timeline-content">
                  <h3>{experience.role}</h3>
                  <p className="timeline-company">{experience.company}</p>
                  <p>{[experience.type, experience.location].filter(Boolean).join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="featured-projects">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="Featured work"
            title="Projects across mobile, web, backend, and cloud."
            description="A selection of professional systems and learning projects that shaped how I build software today."
          />
          <Link className="text-link desktop-link" href="/projects">View all projects <span aria-hidden="true">→</span></Link>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} eager={index < 2} />
          ))}
        </div>
        <Link className="button secondary mobile-link" href="/projects">View all projects</Link>
      </section>

      <section className="section section-tint">
        <div className="shell split-section">
          <div>
            <SectionHeading eyebrow="Education" title="Foundations that support the work." />
            <div className="compact-list">
              {education.map((item) => (
                <article key={item.institution}>
                  <p className="list-date">{item.period}</p>
                  <h3>{item.institution}</h3>
                  <p>{item.degree}</p>
                  <small>{item.detail}</small>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Publication" title="Research and technical communication." />
            <article className="publication-card">
              <p className="list-date">{publication.year}</p>
              <h3>{publication.title}</h3>
              <p>{publication.authors}</p>
              <small>{publication.journal}</small>
              <a className="text-link" href={publication.href} target="_blank" rel="noreferrer">Read publication ↗</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading-row">
          <SectionHeading eyebrow="Credentials" title="Selected cloud certifications." />
          <Link className="text-link desktop-link" href="/certifications">View all credentials <span aria-hidden="true">→</span></Link>
        </div>
        <div className="credential-grid">
          {selectedCertifications.map((certification) => (
            <article className="credential-card" key={certification.title}>
              <div>
                <span className={`status status-${getCertificationStatus(certification.validUntil).toLowerCase()}`}>
                  {getCertificationStatus(certification.validUntil)}
                </span>
                <h3>{certification.title}</h3>
                <p>{certification.issuer}{certification.note ? ` · ${certification.note}` : ""}</p>
              </div>
              <a className="text-link" href={certification.credentialUrl} target="_blank" rel="noreferrer">View credential ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div>
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Looking for a junior developer who is ready to learn and contribute?</h2>
          <p>I&apos;m open to software engineering opportunities where I can grow with a strong team and help ship useful products.</p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>Send an email</a>
          <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        </div>
      </section>
    </>
  );
}
