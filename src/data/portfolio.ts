export type ProjectCategory = "Professional" | "Personal" | "Academic";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectWorkstream = {
  title: string;
  summary: string;
  responsibilities: string[];
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
  workstreams?: ProjectWorkstream[];
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
      "An end-to-end digital ecosystem for multiple Indonesian water-utility deployments, spanning Android apps, internal administration, monitoring, public websites, and backend services.",
    role:
      "Software engineer with full ownership of the Android applications and hands-on contributions across web, backend, database integration, and notifications.",
    stack: ["Kotlin", "Jetpack Compose", "React.js", "Next.js", "PHP", "MySQL", "REST APIs"],
    challenge:
      "Deliver consistent mobile and web experiences across multiple deployments while working with different generations of systems and practical constraints.",
    solution:
      "Built reusable mobile patterns, integrated REST services, maintained admin and monitoring interfaces, and adapted shared capabilities to each deployment without exposing sensitive configuration.",
    outcome:
      "A family of web and Android products supporting customer service, internal administration, system monitoring, and field operations.",
    highlights: [
      "Public-facing Android applications built with Kotlin and Jetpack Compose",
      "Admin portals, monitoring dashboards, and public websites",
      "REST API and MySQL integration across application workflows",
      "Firebase push notifications and WhatsApp API communication",
    ],
    links: [],
    workstreams: [
      {
        title: "Public-facing Android applications",
        summary: "I fully developed the Android applications used for public-facing services across the utility deployments.",
        responsibilities: [
          "Implemented screens and user flows with Kotlin and Jetpack Compose",
          "Integrated authenticated REST API endpoints and service workflows",
          "Handled local data, loading states, errors, and app-level navigation",
        ],
      },
      {
        title: "Field reporting — W-Survei",
        summary: "I owned the Android implementation for a field-reporting workflow inside the ecosystem.",
        responsibilities: [
          "Built assignment and structured-report flows for field staff",
          "Implemented camera and GPS evidence capture",
          "Added encrypted local drafts, synchronization, and retry handling for unstable connections",
          "Integrated branch-scoped Firebase notifications for assignment updates",
        ],
      },
      {
        title: "Admin, monitoring, and public web",
        summary: "I contributed to the web interfaces used by internal teams and the public.",
        responsibilities: [
          "Built and refined admin portals, monitoring dashboards, and public websites",
          "Worked with React.js, Next.js, Vite, and Tailwind CSS",
          "Connected interface states to existing service and reporting workflows",
        ],
      },
      {
        title: "Backend and data integration",
        summary: "I contributed to the API and database layer supporting the product family.",
        responsibilities: [
          "Developed and integrated PHP/Slim REST API endpoints with MySQL",
          "Implemented database-backed integration between mobile, web, and administrative products",
          "Supported data exchange between interface and service layers",
        ],
      },
      {
        title: "Customer communication",
        summary: "I implemented communication capabilities used across customer-facing services.",
        responsibilities: [
          "Implemented push-notification delivery with Firebase Cloud Messaging",
          "Integrated the WhatsApp API for service information",
          "Adapted shared product capabilities for different deployment contexts without exposing configuration",
        ],
      },
    ],
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
    category: "Professional",
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
    category: "Academic",
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

  for (const workstream of project.workstreams ?? []) {
    if (!workstream.title || !workstream.summary || workstream.responsibilities.length === 0) {
      throw new Error(`Workstream for ${project.slug} is missing required content.`);
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
