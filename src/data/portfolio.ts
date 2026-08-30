export type ProjectCategory = "Professional" | "Personal" | "Academic";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  period: string;
  category: ProjectCategory;
  featured: boolean;
  confidential?: boolean;
  eyebrow: string;
  summary: string;
  role: string;
  stack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  highlights: string[];
  links: ProjectLink[];
};

export type Certification = {
  title: string;
  issuer: string;
  issuedAt: string;
  validUntil?: string;
  credentialUrl: string;
  note?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: string;
};

export type Publication = {
  title: string;
  journal: string;
  year: string;
  authors: string;
  href: string;
};

export const profile = {
  name: "Agyl Restu Hermanto",
  role: "Software Engineer",
  location: "Cirebon, West Java, Indonesia",
  email: "agyl1restu@gmail.com",
  github: "https://github.com/Qwwn",
  linkedin: "https://linkedin.com/in/agyl-restu-hermanto",
  siteUrl: "https://agylrestu.vercel.app",
  summary:
    "Junior software engineer with hands-on experience building and maintaining full-stack web and Android applications. I enjoy turning operational problems into reliable, approachable software.",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Kotlin", "Java", "JavaScript", "TypeScript", "PHP", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frontend & Mobile",
    items: ["Jetpack Compose", "React.js", "Next.js", "Flutter", "Tailwind CSS"],
  },
  {
    label: "Backend & Data",
    items: ["REST APIs", "Node.js", "Express.js", "Slim Framework", "MySQL", "MongoDB"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "Firebase", "Google Cloud", "Terraform", "AI-assisted development"],
  },
] as const;

export const experiences: Experience[] = [
  {
    company: "CV Metro Multindo",
    role: "Software Engineer",
    period: "June 2025 — Present",
    location: "Cirebon, West Java, Indonesia",
    type: "Full-time · On-site",
  },
  {
    company: "PT MagerCoding Digital Indonesia",
    role: "Software Engineer",
    period: "March 2024 — November 2024",
    location: "Cilacap, Central Java, Indonesia",
    type: "Part-time · Hybrid",
  },
  {
    company: "Bangkit Academy by Google, GoTo, Traveloka",
    role: "Cloud Computing Learning Path",
    period: "August 2023 — January 2024",
    type: "MSIB · 2023 Batch 2",
  },
];

export const education = [
  {
    institution: "Institut Teknologi Telkom Purwokerto",
    degree: "Bachelor's Degree in Informatics Engineering",
    period: "2021 — Present",
    detail: "Purwokerto, Indonesia · GPA 3.86/4.00",
  },
  {
    institution: "SMA Negeri 3 Cirebon",
    degree: "High School Diploma in Science",
    period: "2018 — 2021",
    detail: "Cirebon, Indonesia",
  },
];

export const projects: Project[] = [
  {
    slug: "pdam-digital-service-ecosystem",
    title: "PDAM Digital Service Ecosystem",
    period: "2025 — Present",
    category: "Professional",
    featured: true,
    confidential: true,
    eyebrow: "Multi-product utility platform",
    summary:
      "An end-to-end digital ecosystem used across six Indonesian water utilities, spanning customer mobile apps, internal administration, monitoring, public websites, and backend services.",
    role:
      "Software engineer with full ownership of the Android applications and hands-on contributions across web, backend, database integration, notifications, and customer communication.",
    stack: ["Kotlin", "Jetpack Compose", "React.js", "Next.js", "PHP", "MySQL", "REST APIs"],
    challenge:
      "Deliver consistent customer and staff experiences across multiple organizations while working with different generations of systems and operational constraints.",
    solution:
      "Built reusable mobile patterns, integrated REST services, maintained admin and monitoring interfaces, and adapted shared capabilities to each deployment without exposing sensitive configuration.",
    outcome:
      "A maintainable family of web and Android products supporting customer service, internal administration, system monitoring, and field operations.",
    highlights: [
      "Customer Android applications built with Kotlin and Jetpack Compose",
      "Admin portals, monitoring dashboards, and public websites",
      "REST API and MySQL integration across customer and billing workflows",
      "Firebase push notifications and WhatsApp API communication",
    ],
    links: [],
  },
  {
    slug: "w-survei-field-operations",
    title: "W-Survei Field Operations",
    period: "2026",
    category: "Professional",
    featured: true,
    confidential: true,
    eyebrow: "Android field workflow",
    summary:
      "A secure Android application for field teams to receive assignments, complete structured reports, capture photo and GPS evidence, and submit work reliably from unstable networks.",
    role:
      "Owned the Android implementation end to end and integrated it with authenticated backend workflows and branch-scoped notifications.",
    stack: ["Kotlin", "Jetpack Compose", "CameraX", "GPS", "WorkManager", "Firebase", "SQLite"],
    challenge:
      "Field submissions combine structured data, camera evidence, location data, and intermittent connectivity, so partial or duplicate uploads could not be allowed.",
    solution:
      "Designed encrypted drafts, idempotent submissions, background retry, evidence validation, topic-based notifications, and clear recovery paths for interrupted work.",
    outcome:
      "A mobile-first workflow that helps field staff complete and track operational reports with dependable evidence handling.",
    highlights: [
      "Camera and GPS evidence capture",
      "Encrypted local drafts and offline-safe retry",
      "Branch-scoped Firebase notifications",
      "Accessible Compose UI with light and dark themes",
    ],
    links: [],
  },
  {
    slug: "google-cloud-devops-terraform",
    title: "Google Cloud DevOps with Terraform",
    period: "2024",
    category: "Personal",
    featured: true,
    eyebrow: "Infrastructure as code",
    summary:
      "A Google Cloud DevOps project that provisions infrastructure with Terraform and automates delivery through GitHub Actions.",
    role: "Designed the infrastructure workflow and CI/CD automation as a cloud engineering project.",
    stack: ["Google Cloud", "Terraform", "GitHub Actions", "CI/CD"],
    challenge: "Make cloud infrastructure reproducible and reduce manual deployment steps.",
    solution: "Defined infrastructure as code and connected validation and deployment steps to a GitHub Actions pipeline.",
    outcome: "A repeatable cloud delivery workflow demonstrating infrastructure automation fundamentals.",
    highlights: ["Infrastructure as code", "Automated CI/CD", "Google Cloud deployment"],
    links: [{ label: "GitHub", href: "https://github.com/Qwwn/gcp-terraform" }],
  },
  {
    slug: "bloommate",
    title: "BloomMate",
    period: "2023 — 2024",
    category: "Academic",
    featured: true,
    eyebrow: "Bangkit capstone",
    summary:
      "A flower recognition application that accepts camera or gallery images and connects a mobile experience to a deployed machine-learning service.",
    role: "Worked as backend and cloud engineer, building Node.js services and deploying application and model workloads to Google Cloud.",
    stack: ["Node.js", "Google Cloud", "Python", "Machine Learning", "REST APIs"],
    challenge: "Connect a client application to a deployable image-classification workflow.",
    solution: "Built backend interfaces and cloud deployment paths for the application and classification model.",
    outcome: "A team capstone that brought mobile, cloud, backend, and machine-learning work into one product concept.",
    highlights: ["Cloud-hosted backend", "Model deployment", "Team CH2-PS209"],
    links: [{ label: "GitHub organization", href: "https://github.com/bloommate-team" }],
  },
  {
    slug: "simaggot-marketplace",
    title: "SiMaggot Marketplace",
    period: "2023 — 2024",
    category: "Academic",
    featured: true,
    eyebrow: "MERN marketplace",
    summary:
      "A web marketplace designed to facilitate buying and selling maggots through a React frontend and Node.js API.",
    role: "Worked on backend development using Node.js, Express.js, and MongoDB.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    challenge: "Model a two-sided marketplace and connect its frontend to persistent product and transaction data.",
    solution: "Implemented backend services and API integration for the marketplace workflow.",
    outcome: "A functional team project covering the essential layers of a MERN application.",
    highlights: ["Marketplace workflows", "Backend API", "MongoDB persistence"],
    links: [
      { label: "Frontend", href: "https://github.com/Qwwn/siMaggot-website" },
      { label: "Backend", href: "https://github.com/Qwwn/backend-SiMaggot" },
      { label: "Live demo", href: "https://simaggot.vercel.app" },
    ],
  },
  {
    slug: "devacademy-platform",
    title: "DevAcademy Platform",
    period: "2024",
    category: "Personal",
    featured: true,
    eyebrow: "React and Laravel platform",
    summary: "A full-stack learning platform prototype combining a React/Vite frontend with a Laravel API.",
    role: "Contributed across frontend integration and backend API development.",
    stack: ["React", "Vite", "Laravel", "PHP", "REST APIs"],
    challenge: "Connect a modern client application to a structured PHP backend.",
    solution: "Separated the frontend and API into focused repositories with a clear HTTP integration boundary.",
    outcome: "A practical full-stack project demonstrating React and Laravel interoperability.",
    highlights: ["React/Vite frontend", "Laravel API", "Full-stack integration"],
    links: [
      { label: "Frontend", href: "https://github.com/Qwwn/DevAcademy---Frontend" },
      { label: "API", href: "https://github.com/Qwwn/devacademy-api" },
    ],
  },
  {
    slug: "seblak-sulthane-mobile",
    title: "Seblak Sulthane Mobile App",
    period: "2025",
    category: "Personal",
    featured: false,
    eyebrow: "Flutter mobile application",
    summary: "A Flutter mobile application project for a local food brand.",
    role: "Built and iterated on the mobile application using Flutter and Dart.",
    stack: ["Flutter", "Dart", "Mobile UI"],
    challenge: "Translate a food business experience into a focused mobile interface.",
    solution: "Implemented the application structure and user-facing screens in Flutter.",
    outcome: "A practical mobile project expanding experience beyond native Android development.",
    highlights: ["Flutter UI", "Mobile application structure"],
    links: [{ label: "GitHub", href: "https://github.com/Qwwn/seblak_sulthane_app" }],
  },
  {
    slug: "fermata-course",
    title: "Fermata Course Platform",
    period: "2024",
    category: "Personal",
    featured: false,
    eyebrow: "Course platform prototype",
    summary: "A course platform prototype exploring content delivery and web application structure.",
    role: "Worked on the public course interface and supporting application concepts.",
    stack: ["JavaScript", "Web Development"],
    challenge: "Organize course content into an approachable web experience.",
    solution: "Created a dedicated course interface and separated frontend concerns from backend services.",
    outcome: "A focused prototype for learning-platform workflows.",
    highlights: ["Course interface", "Frontend architecture"],
    links: [{ label: "GitHub", href: "https://github.com/Qwwn/fermata-course" }],
  },
  {
    slug: "batik-classification-backend",
    title: "Batik Classification Backend",
    period: "2024",
    category: "Academic",
    featured: false,
    eyebrow: "Backend integration",
    summary: "A backend project supporting an image-classification workflow for Indonesian batik patterns.",
    role: "Worked on the backend integration layer for the classification application.",
    stack: ["Backend API", "Machine Learning Integration"],
    challenge: "Expose a classification workflow through a simple application-facing interface.",
    solution: "Created a dedicated backend repository to isolate model integration from the client experience.",
    outcome: "A reusable backend foundation for the batik classification project.",
    highlights: ["Model integration", "Application API"],
    links: [{ label: "GitHub", href: "https://github.com/Qwwn/backend-batik" }],
  },
  {
    slug: "banyumas-farm-fresh",
    title: "Banyumas Farm Fresh",
    period: "2023",
    category: "Academic",
    featured: false,
    eyebrow: "Agricultural e-commerce",
    summary: "A responsive e-commerce website for promoting and selling fresh agricultural products from Banyumas.",
    role: "Developed and styled the frontend using HTML, CSS, JavaScript, and React.",
    stack: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
    challenge: "Present regional agricultural products through a clear and responsive shopping interface.",
    solution: "Built reusable frontend sections and responsive layouts integrated with the team backend.",
    outcome: "A team e-commerce project with a complete customer-facing interface.",
    highlights: ["Responsive UI", "E-commerce frontend", "Team collaboration"],
    links: [{ label: "GitHub", href: "https://github.com/Qwwn/banyumas-farm-fresh" }],
  },
  {
    slug: "pharmacy-management-system",
    title: "Pharmacy Management System",
    period: "2023",
    category: "Academic",
    featured: false,
    eyebrow: "Java desktop application",
    summary: "A Java desktop system for medicine inventory, purchases, sales, and customer records.",
    role: "Developed application features, desktop forms, and MySQL-backed data management with a student team.",
    stack: ["Java", "Java Swing", "MySQL", "Desktop Application"],
    challenge: "Replace manual pharmacy records with an integrated desktop workflow.",
    solution: "Implemented forms and database-backed modules for core pharmacy operations.",
    outcome: "A working object-oriented programming project covering CRUD and transactional records.",
    highlights: ["Inventory management", "Sales and purchasing", "MySQL integration"],
    links: [{ label: "GitHub", href: "https://github.com/Qwwn/PharmacyManagementSystem" }],
  },
  {
    slug: "bookshelf-api",
    title: "Bookshelf API",
    period: "2023",
    category: "Academic",
    featured: false,
    eyebrow: "Backend fundamentals",
    summary: "A REST API for managing a bookshelf, created as part of Dicoding backend training.",
    role: "Implemented the API and its book-management endpoints in Node.js.",
    stack: ["Node.js", "JavaScript", "REST APIs"],
    challenge: "Apply HTTP and backend fundamentals in a focused CRUD service.",
    solution: "Built a small API with clear routes, validation, and predictable responses.",
    outcome: "A compact demonstration of core backend development practices.",
    highlights: ["CRUD API", "Request validation", "HTTP fundamentals"],
    links: [{ label: "GitHub", href: "https://github.com/Qwwn/Bookshelf-API" }],
  },
  {
    slug: "streamlit-data-visualization",
    title: "Streamlit Data Visualization",
    period: "2023",
    category: "Academic",
    featured: false,
    eyebrow: "Python data application",
    summary: "A Streamlit application for exploring and presenting data through an interactive web interface.",
    role: "Worked on the Python application and its containerized deployment workflow.",
    stack: ["Python", "Streamlit", "Docker", "Data Visualization"],
    challenge: "Turn analysis results into an interface that others could run and explore.",
    solution: "Built a Streamlit UI and documented both Docker and local execution paths.",
    outcome: "A portable data visualization project with a reproducible runtime.",
    highlights: ["Interactive visualization", "Dockerized runtime", "Python application"],
    links: [
      { label: "Visualization", href: "https://github.com/Qwwn/Tubes-Pemfug" },
      { label: "Deployment", href: "https://github.com/Qwwn/py-web-srvc" },
    ],
  },
  {
    slug: "questionnaire-reporting",
    title: "Questionnaire Reporting Automation",
    period: "2024",
    category: "Personal",
    featured: false,
    eyebrow: "Python document automation",
    summary: "A Python utility that processes questionnaire CSV data and produces structured Word reports with tables and charts.",
    role: "Designed the data-processing and document-generation workflow.",
    stack: ["Python", "CSV Processing", "Document Automation", "Charts"],
    challenge: "Convert repeated survey exports into consistent, presentation-ready reports.",
    solution: "Automated grouping, tabulation, chart generation, and Word document output.",
    outcome: "A repeatable reporting workflow that reduces manual formatting work.",
    highlights: ["CSV processing", "Automated charts", "Word report generation"],
    links: [{ label: "GitHub", href: "https://github.com/Qwwn/kuisoner" }],
  },
];

export const certifications: Certification[] = [
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    issuedAt: "2024-03-30",
    validUntil: "2027-03-30",
    credentialUrl: "https://www.credly.com/badges/49523495-6bd8-4856-8c84-1229f0470046/linked_in_profile",
  },
  {
    title: "Menjadi Google Cloud Architect",
    issuer: "Dicoding Indonesia",
    issuedAt: "2024-05-06",
    validUntil: "2027-05-06",
    credentialUrl: "https://www.dicoding.com/certificates/53XEOJ3J0ZRN",
  },
  {
    title: "Google Cloud Skills Boost Badges",
    issuer: "Google Cloud",
    issuedAt: "2023-01-01",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/77d27ae2-4a5b-448c-9ee2-b0d25e3feba7",
    note: "26 completion badges",
  },
  {
    title: "Become a Google Cloud Engineer",
    issuer: "Dicoding Indonesia",
    issuedAt: "2023-10-01",
    validUntil: "2026-10-01",
    credentialUrl: "https://www.dicoding.com/certificates/KEXLLV35MXG2",
  },
  {
    title: "Build Back-End Applications with Google Cloud",
    issuer: "Dicoding Indonesia",
    issuedAt: "2023-09-01",
    validUntil: "2026-09-01",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQ8M5GVZO1",
  },
  {
    title: "Learn Basic Web Programming",
    issuer: "Dicoding Indonesia",
    issuedAt: "2023-09-01",
    validUntil: "2026-09-01",
    credentialUrl: "https://www.dicoding.com/certificates/1OP81Y88LZQK",
  },
  {
    title: "System Administration and IT Infrastructure Services",
    issuer: "Coursera",
    issuedAt: "2023-09-01",
    credentialUrl: "https://coursera.org/verify/5FWK9XTKQKLD",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    issuedAt: "2023-08-01",
    credentialUrl: "https://coursera.org/verify/3BTAEEPFJ9LR",
  },
  {
    title: "Learn to Build Back-End Applications for Beginners",
    issuer: "Dicoding Indonesia",
    issuedAt: "2023-07-01",
    validUntil: "2026-07-01",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ09NG4NZ65",
  },
  {
    title: "Basic JavaScript Programming",
    issuer: "Dicoding Indonesia",
    issuedAt: "2023-06-01",
    validUntil: "2026-06-01",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQG5OG2ZO1",
  },
  {
    title: "Cloud Practitioner Essentials",
    issuer: "Dicoding Indonesia",
    issuedAt: "2023-05-01",
    validUntil: "2026-05-01",
    credentialUrl: "https://www.dicoding.com/certificates/81P237WLNXOY",
    note: "AWS Cloud fundamentals",
  },
];

export const publication: Publication = {
  title: "Perbandingan Arsitektur MobileNetV2 dan ResNet50 untuk Klasifikasi Jenis Buah Kurma",
  journal: "JUSTIN (Jurnal Sistem dan Teknologi Informasi), Vol. 12 No. 4, pp. 630–637",
  year: "2024",
  authors: "Agyl Restu Hermanto, A. Aziz, and Sudianto",
  href: "https://doi.org/10.26418/justin.v12i4.80358",
};

const slugs = projects.map((project) => project.slug);
if (new Set(slugs).size !== slugs.length) {
  throw new Error("Project slugs must be unique.");
}

for (const project of projects) {
  if (
    !project.title ||
    !project.period ||
    !project.summary ||
    !project.role ||
    !project.challenge ||
    !project.solution ||
    !project.outcome ||
    project.stack.length === 0 ||
    project.highlights.length === 0
  ) {
    throw new Error(`Project ${project.slug} is missing required content.`);
  }

  for (const link of project.links) {
    if (new URL(link.href).protocol !== "https:") {
      throw new Error(`Project link for ${project.slug} must use HTTPS.`);
    }
  }
}

for (const certification of certifications) {
  const issuedAt = new Date(`${certification.issuedAt}T00:00:00Z`);
  const validUntil = certification.validUntil
    ? new Date(`${certification.validUntil}T23:59:59Z`)
    : undefined;

  if (!certification.title || !certification.issuer || Number.isNaN(issuedAt.getTime())) {
    throw new Error(`Certification ${certification.title || "untitled"} has invalid required content.`);
  }

  if (validUntil && (Number.isNaN(validUntil.getTime()) || validUntil < issuedAt)) {
    throw new Error(`Certification ${certification.title} has an invalid validity period.`);
  }

  if (new URL(certification.credentialUrl).protocol !== "https:") {
    throw new Error(`Credential link for ${certification.title} must use HTTPS.`);
  }
}
