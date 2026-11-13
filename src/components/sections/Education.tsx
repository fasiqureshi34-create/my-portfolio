import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { educationList } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="05 // Education"
          title="Academic Qualifications."
          description="Formal education, academic foundations, computer science background, and specialized coursework."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {educationList.map((item) => (
            <article
              key={item.id}
              className="glass-card group flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.15)]"
            >
              <div>
                {/* Header row with Icon and Grade */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300 transition duration-300 group-hover:bg-violet-500 group-hover:text-white">
                    <GraduationCap size={26} />
                  </div>

                  {item.grade && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold text-violet-300">
                      <Award size={13} />
                      {item.grade}
                    </span>
                  )}
                </div>

                {/* Period & Location */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-1 text-violet-300 font-medium">
                    <Calendar size={13} className="text-violet-400" />
                    {item.period}
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="inline-flex items-center gap-1 text-zinc-400">
                    <MapPin size={12} className="text-zinc-500" />
                    {item.location}
                  </span>
                </div>

                {/* Degree & Field */}
                <h3 className="mt-3 text-xl font-bold tracking-tight text-white group-hover:text-violet-200 transition">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-violet-400">
                  {item.field}
                </p>

                <p className="mt-2 text-sm font-semibold text-zinc-300">
                  {item.institution}
                </p>

                {/* Description */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                      <BookOpen size={13} className="text-violet-400" />
                      Key Coursework & Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {item.highlights.map((high, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-xs leading-relaxed text-zinc-400 flex items-start gap-2"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                          <span>{high}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
