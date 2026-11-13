import { Smartphone, Server, Users, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    icon: Smartphone,
    title: "Mobile & Offline-First",
    description:
      "Architecting resilient mobile applications with Flutter and React Native that operate flawlessly even without active internet connectivity.",
  },
  {
    icon: Server,
    title: "Scalable Backends & DBs",
    description:
      "Designing high-throughput REST APIs and data pipelines using Python (FastAPI), Node.js, PostgreSQL (Neon), and SQLite.",
  },
  {
    icon: Users,
    title: "Leadership & Execution",
    description:
      "Proven management track record, having organized large-scale conferences for 500+ attendees at University of Kotli.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="01 — About Me"
          title="Engineering with purpose & precision."
          description="A background on my journey, engineering philosophy, and the problems I solve."
        />

        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-5 leading-8 text-zinc-300">
            <p>
              I&apos;m <span className="text-white font-semibold">Fasi Ur Rehman (Fasi Qureshi)</span>, a Full-Stack Web &amp; Mobile Software Engineer based in Kotli, Azad Jammu &amp; Kashmir, Pakistan. I am pursuing my <span className="text-violet-300 font-medium">Bachelor of Science in Software Engineering (BSSE)</span> at the <span className="text-white">University of Kotli, AJK</span>.
            </p>
            <p>
              My passion lies at the intersection of modern mobile development, intelligent IoT data systems, and offline-first software architecture. Whether it&apos;s crafting a retro-themed restaurant Point of Sale in <span className="text-white font-medium">Flutter with SQLite &amp; Cloud Firestore sync</span>, building an energy optimization platform in <span className="text-white font-medium">React Native &amp; Python FastAPI</span>, or architecting developer SaaS platforms, I focus on performance, reliability, and user delight.
            </p>
            <p>
              Beyond code, I have demonstrated organizational leadership as the <span className="text-violet-300 font-medium">Head of Management</span> for a university conference serving 500–600 participants, combining technical rigor with effective team coordination.
            </p>
          </div>

          <div className="space-y-4">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card flex gap-4 rounded-2xl p-5 border border-white/[0.06] hover:border-violet-400/30 transition"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs sm:text-sm leading-6 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
