import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/BrandIcons";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07070a] py-12">
      <div className="container-width">
        <div className="flex flex-col items-center justify-between gap-6 pb-8 border-b border-white/[0.06] md:flex-row">
          {/* Brand Logo */}
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="gradient-text">{"<"}</span>
            <span className="text-white">FullStack</span>
            <span className="text-violet-400 font-mono">.Dev</span>
            <span className="gradient-text">{" />"}</span>
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-violet-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-zinc-400 hover:text-white hover:bg-white/[0.05] transition"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-zinc-400 hover:text-white hover:bg-white/[0.05] transition"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="rounded-lg p-2 text-zinc-400 hover:text-white hover:bg-white/[0.05] transition"
            >
              <TwitterIcon size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Full-Stack Portfolio. Crafted with Next.js 15, TypeScript & Tailwind CSS.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-violet-300 transition"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
