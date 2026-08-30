# Agyl Restu Hermanto — Portfolio

Personal software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

The site presents selected professional case studies, public personal and academic work,
certifications, experience, education, publication, and a downloadable resume. Professional
projects are intentionally anonymized and do not expose private repositories or client data.

## Local development

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Content lives in `src/data/portfolio.ts` and is validated at build time for unique project
slugs, required project fields, HTTPS links, and certification validity periods.

The production site is deployed at [agylrestu.vercel.app](https://agylrestu.vercel.app).
