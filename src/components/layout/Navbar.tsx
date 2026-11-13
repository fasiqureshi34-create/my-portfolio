"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#08080c]/85 backdrop-blur-xl">
      <nav className="container-width flex h-[76px] items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">{"<"}</span>
          <span className="text-white">Fasi</span>
          <span className="text-violet-400 font-mono">.Dev</span>
          <span className="gradient-text">{" />"}</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-violet-400/40 px-5 py-2.5 text-sm text-violet-200 transition hover:bg-violet-500/10 lg:block"
        >
          Let&apos;s Talk
          <ArrowUpRight className="ml-1 inline" size={15} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b0b12] p-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-zinc-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Let&apos;s Talk
              <ArrowUpRight className="ml-1 inline" size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
