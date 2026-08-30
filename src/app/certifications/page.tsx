import type { Metadata } from "next";

import { certifications } from "@/data/portfolio";
import { formatMonth, getCertificationStatus } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Cloud, web development, backend, and IT certifications earned by Agyl Restu Hermanto.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <div className="page-shell shell">
      <div className="page-hero">
        <p className="eyebrow">Credentials</p>
        <h1>Continuous learning, documented.</h1>
        <p>Cloud, backend, web, networking, and infrastructure credentials earned throughout my learning journey.</p>
      </div>

      <div className="certification-list">
        {certifications.map((certification) => {
          const status = getCertificationStatus(certification.validUntil);
          return (
            <article className="certification-row" key={certification.title}>
              <div className="certification-main">
                <span className={`status status-${status.toLowerCase()}`}>{status}</span>
                <h2>{certification.title}</h2>
                <p>{certification.issuer}{certification.note ? ` · ${certification.note}` : ""}</p>
              </div>
              <div className="certification-date">
                <span>Issued {formatMonth(certification.issuedAt)}</span>
                {certification.validUntil ? <span>Valid until {formatMonth(certification.validUntil)}</span> : null}
              </div>
              <a className="button secondary" href={certification.credentialUrl} target="_blank" rel="noreferrer">
                View credential ↗
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
