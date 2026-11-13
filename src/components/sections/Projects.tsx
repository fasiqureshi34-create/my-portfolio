import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { prisma } from "@/lib/prisma";

const fallbackProjects = [
  {
    number: "01",
    title: "VICE DINE POS",
    description:
      "High-performance cloud-connected Point of Sale & restaurant operating system with order dispatch, live kitchen telemetry, and split table billing.",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    number: "02",
    title: "EnergyMitr",
    description:
      "Intelligent energy analytics and IoT telemetry platform monitoring industrial power consumption, solar yield, and peak-demand forecasting.",
    stack: ["React", "Node.js", "PostgreSQL", "Time-Series Data", "IoT"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    number: "03",
    title: "VoltSend",
    description:
      "Ultra-fast developer webhook and transactional event delivery pipeline with automatic exponential retry policies, HMAC verification, and delivery analytics.",
    stack: ["TypeScript", "REST APIs", "Redis Queue", "Docker", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

export default async function Projects() {
  let projectList = fallbackProjects;

  try {
    const dbProjects = await prisma.project.findMany({
      orderBy: { number: "asc" },
    });
    if (dbProjects && dbProjects.length > 0) {
      projectList = dbProjects.map((p) => ({
        number: p.number,
        title: p.title,
        description: p.description,
        stack: p.stack,
        github: p.githubUrl || "https://github.com/",
        demo: p.liveUrl || "https://example.com",
      }));
    }
  } catch (error) {
    console.error("Failed to load projects from Neon DB:", error);
  }

  return (
    <section id="projects" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title="Projects I've built."
          description="Production systems, scalable architectures, and developer platforms built with modern technology."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projectList.map((project) => (
            <article
              key={project.number + project.title}
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
