import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="AR — Agyl Restu Hermanto, home">
          <span className="brand-mark" aria-hidden="true">AR</span>
          <span>Agyl Restu</span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
