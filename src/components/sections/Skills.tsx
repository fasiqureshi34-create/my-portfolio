import SectionHeading from "@/components/ui/SectionHeading";

const skillGroups = [
  {
    category: "Mobile & Frontend",
    description: "Cross-platform mobile apps & responsive, modern web interfaces.",
    skills: [
      "Flutter",
      "Dart",
      "React Native",
      "Expo",
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Backend & Databases",
    description: "High-throughput APIs, offline databases & cloud document stores.",
    skills: [
      "Python (FastAPI)",
      "PHP",
      "Node.js",
      "PostgreSQL (Neon)",
      "MySQL",
      "SQLite",
      "Cloud Firestore",
      "Prisma ORM",
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Deployment pipelines, version control & hardware communication.",
    skills: [
      "Docker",
      "Git / GitHub",
      "REST APIs",
      "Linux Server",
      "Windows Server",
      "ESC/POS Thermal Printing",
      "Postman",
      "VS Code",
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
          description="Technologies, frameworks, and database architectures I use to design, build, and deploy production software."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 border border-white/[0.06]"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.category}
              </h3>
              <p className="mt-2 min-h-12 text-xs sm:text-sm leading-6 text-zinc-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-200 font-mono"
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
