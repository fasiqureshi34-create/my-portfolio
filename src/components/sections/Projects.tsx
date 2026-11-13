import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    number: "01",
    title: "SaaS Analytics Dashboard",
    description:
      "An analytics dashboard concept for presenting business metrics, reports and data insights in a clean interface.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    description:
      "An online shopping application concept with product discovery, category browsing and a streamlined shopping experience.",
    stack: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    number: "03",
    title: "Task Management App",
    description:
      "A productivity application concept for organizing tasks, managing projects and tracking progress.",
    stack: ["Next.js", "TypeScript", "REST API"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title="Projects I've built."
          description="A selection of projects showcasing my technical skills and approach to solving problems."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="glass-card group rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-sm text-violet-400">
                  PROJECT / {project.number}
                </span>
                <ArrowUpRight
                  className="text-zinc-500 transition group-hover:text-violet-300"
                  size={22}
                />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h3>

              <p className="mt-4 min-h-20 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-6 border-t border-white/10 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub for ${project.title}`}
                  className="text-sm text-zinc-300 transition hover:text-white"
                >
                  <GithubIcon className="mr-2 inline" size={17} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Live demo for ${project.title}`}
                  className="text-sm text-zinc-300 transition hover:text-violet-300"
                >
                  <ExternalLink className="mr-2 inline" size={17} />
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
