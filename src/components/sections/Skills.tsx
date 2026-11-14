import SectionHeading from "@/components/ui/SectionHeading";

const skillGroups = [
  {
    category: "Mobile & Desktop",
    description: "Cross-platform mobile and desktop software engineering with native performance and offline reliability.",
    skills: [
      "Flutter",
      "Dart",
      "React Native",
      "Expo",
      "Electron",
      "Android SDK",
    ],
  },
  {
    category: "Frontend Web",
    description: "Modern, performant, and responsive web user interfaces and Single-Page/Fullstack applications.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Backend & Databases",
    description: "High-throughput APIs, microservices, relational and NoSQL databases, and real-time syncing pipelines.",
    skills: [
      "Python (FastAPI)",
      "PHP",
      "Node.js",
      "PostgreSQL (Neon)",
      "MySQL",
      "SQLite",
      "Cloud Firestore",
      "Hive",
      "Prisma",
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Modern development workflows, containerization, build tooling, and API protocol standards.",
    skills: [
      "Docker",
      "Git",
      "esbuild",
      "REST APIs",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="02 — Technical Skills"
          title="My technology stack."
          description="Technologies, frameworks, and database architectures I use to design, build, and deploy production software across web, mobile, and desktop."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 border border-white/[0.06] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {group.category}
                </h3>
                <p className="mt-2 min-h-12 text-xs leading-5 text-zinc-400">
                  {group.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-200 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
