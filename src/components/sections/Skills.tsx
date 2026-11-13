import SectionHeading from "@/components/ui/SectionHeading";

const skillGroups = [
  {
    category: "Frontend Development",
    description: "Building responsive and interactive interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Development",
    description: "Building APIs and server-side applications.",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Workflow",
    description: "Development, collaboration and deployment tools.",
    skills: ["Git", "GitHub", "VS Code", "Docker", "Vercel", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="02 — Technical Skills"
          title="My technology stack."
          description="Technologies and tools I use to design, build and deliver software."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.category}
              </h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300"
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
