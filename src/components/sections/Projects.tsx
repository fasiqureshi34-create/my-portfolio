import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { prisma } from "@/lib/prisma";

const fallbackProjects = [
  {
    number: "01",
    title: "VICE DINE POS – Retro Vice City Edition",
    description:
      "Offline-first restaurant Point-of-Sale system featuring a 1980s synthwave 2D Flame engine UI, local SQLite storage, Bluetooth ESC/POS thermal receipt printing, Cloud Firestore synchronization, and an Urdu/Roman Urdu AI voice assistant.",
    stack: [
      "Flutter",
      "Dart",
      "Flame Engine",
      "SQLite",
      "Cloud Firestore",
      "Bluetooth ESC/POS",
    ],
    github: "https://github.com/fasiqureshi34-create",
    demo: "https://my-portfolio-phi-nine-38.vercel.app",
  },
  {
    number: "02",
    title: "APT Desktop – API Performance & Stress Tester",
    description:
      "Standalone cross-platform desktop load-testing suite converted from a VS Code extension into an Electron + React app. Supports HTTP/HTTPS stress testing up to 200 concurrent workers and 10,000 requests per run, live latency percentiles, real-time RPS charts, and schema-driven synthetic payload generation.",
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "Vite",
      "esbuild",
      "Faker.js",
    ],
    github: "https://github.com/fasiqureshi34-create",
    demo: "https://my-portfolio-phi-nine-38.vercel.app",
  },
  {
    number: "03",
    title: "Bismillah Takeaway POS & Ordering Terminal",
    description:
      "Offline-first takeaway restaurant POS and online food ordering terminal with local Hive NoSQL caching, Cloud Firestore real-time order sync, Firebase Authentication, voice-assisted menu search, and Bluetooth thermal receipt printing.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Cloud Firestore",
      "Hive",
      "Bluetooth Thermal",
    ],
    github: "https://github.com/fasiqureshi34-create",
    demo: "https://my-portfolio-phi-nine-38.vercel.app",
  },
  {
    number: "04",
    title: "EnergyMitr",
    description:
      "Smart energy consumption tracking and utility bill saving mobile and web platform with real-time smart meter telemetry APIs and usage analytics.",
    stack: [
      "React Native",
      "Expo",
      "Vite",
      "Python FastAPI",
      "REST APIs",
    ],
    github: "https://github.com/fasiqureshi34-create",
    demo: "https://my-portfolio-phi-nine-38.vercel.app",
  },
  {
    number: "05",
    title: "VoltSend",
    description:
      "Web-based SaaS push notification and multi-app delivery platform paired with a native Android WebView client app and admin moderation panel.",
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Android WebView",
    ],
    github: "https://github.com/fasiqureshi34-create",
    demo: "https://my-portfolio-phi-nine-38.vercel.app",
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
          description="Production systems, offline-first architectures, mobile terminals, desktop tools, and developer platforms."
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
