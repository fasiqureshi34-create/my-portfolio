import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="04 // Experience"
          title="Professional Journey."
          description="A chronological timeline of my professional career, technical responsibilities, and impactful contributions."
        />

        <div className="relative ml-2 space-y-12 border-l-2 border-violet-500/20 pl-6 sm:ml-4 sm:pl-10">
          {experiences.map((item) => (
            <article key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#08080c] transition duration-300 group-hover:scale-125 ${
                  item.current
                    ? "bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]"
                    : "bg-zinc-600 group-hover:bg-violet-400"
                }`}
              >
                {item.current && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.15)]">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 font-medium text-violet-300">
                      <Calendar size={14} className="text-violet-400" />
                      {item.period}
                    </span>
                    <span className="text-white/20">/</span>
                    <span className="inline-flex items-center gap-1 text-zinc-400">
                      <MapPin size={13} className="text-zinc-500" />
                      {item.location}
                    </span>
                  </div>

                  <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                    {item.type}
                  </span>
                </div>

                {/* Role and Company */}
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-violet-200 transition">
                    {item.role}
                  </h3>
                  <p className="text-base font-semibold text-violet-400 flex items-center gap-1.5">
                    <Briefcase size={16} />
                    {item.company}
                  </p>
                </div>

                {/* Summary Description */}
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">
                  {item.description}
                </p>

                {/* Achievements List */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-5 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Key Impact & Achievements:
                    </p>
                    <ul className="space-y-2">
                      {item.achievements.map((ach, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-zinc-300"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-violet-400"
                          />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-4">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-violet-500/15 bg-violet-500/[0.08] px-3 py-1 text-xs font-medium text-violet-200 transition hover:bg-violet-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
