import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { prisma } from "@/lib/prisma";

const fallbackProjects = [
  {
    number: "01",
    title: "VICE DINE POS – Retro Vice City Edition",
    description:
      "Offline-first restaurant Point-of-Sale system built with Flutter, 2D Flame engine (1980s synthwave UI), local SQLite storage, Bluetooth ESC/POS thermal receipt printing, Cloud Firestore sync, and Urdu/Roman Urdu AI voice assistant.",
    stack: [
      "Flutter",
      "Dart",
      "Flame 2D",
      "SQLite",
      "Cloud Firestore",
      "Bluetooth ESC/POS",
    ],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    number: "02",
    title: "EnergyMitr",
    description:
      "Smart energy consumption tracking and utility bill saving mobile & web platform built with React Native, Expo, Vite, Python FastAPI, and smart meter telemetry APIs.",
    stack: [
      "React Native",
      "Expo",
      "Vite",
      "Python FastAPI",
      "IoT Telemetry",
      "PostgreSQL",
    ],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    number: "03",
    title: "VoltSend",
    description:
      "Web-based SaaS push notification and developer delivery platform built with PHP, MySQL, and an Android WebView client app.",
    stack: ["PHP", "MySQL", "Android WebView", "REST APIs", "Tailwind CSS"],
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
          title="Flagship Projects."
          description="Production systems, offline-first architectures, and mobile & developer platforms."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projectList.map((project) => (
            <article
              key={project.number + project.title}
              className="glass-card group rounded-2xl p-7 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 border border-white/[0.06] flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm text-violet-400 font-semibold">
                    PROJECT / {project.number}
                  </span>
                  <ArrowUpRight
                    className="text-zinc-500 transition group-hover:text-violet-300"
                    size={20}
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-violet-200 transition">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-300 text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200 font-mono"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-6 border-t border-white/10 pt-5 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub for ${project.title}`}
                  className="text-zinc-300 transition hover:text-white"
                >
                  <GithubIcon className="mr-2 inline" size={17} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Live demo for ${project.title}`}
                  className="text-zinc-300 transition hover:text-violet-300"
                >
                  <ExternalLink className="mr-2 inline" size={17} />
                  Live Preview
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
