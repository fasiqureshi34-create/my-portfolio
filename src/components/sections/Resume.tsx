import { Download, ExternalLink, FileText, CheckCircle2, Sparkles } from "lucide-react";

export default function Resume() {
  const highlights = [
    "Flutter & React Native cross-platform mobile development",
    "Offline-first systems with local SQLite & Cloud Firestore sync",
    "High-performance Python FastAPI, Node.js & PostgreSQL APIs",
    "Auditorium event operations management (500+ attendees)"
  ];

  return (
    <section id="resume" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <div className="glass-card relative overflow-hidden rounded-3xl border border-violet-500/20 p-8 sm:p-14 transition duration-300 hover:border-violet-500/40">
          {/* Ambient glow circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-indigo-600/15 blur-[110px]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-300">
              <Sparkles size={13} className="text-violet-400" />
              06 // Verified Credentials
            </div>

            <div className="mx-auto mt-6 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300 shadow-[0_0_25px_rgba(167,139,250,0.3)]">
              <FileText size={32} />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Curriculum Vitae &amp; Resume
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
              Review my full technical stack proficiencies, project accomplishments, leadership roles, and academic qualifications at University of Kotli, AJK.
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-xs sm:text-sm text-zinc-300"
                >
                  <CheckCircle2 size={16} className="shrink-0 text-violet-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/resume.pdf"
                download="Fasi_Ur_Rehman_CV.pdf"
                className="inline-flex items-center gap-2.5 rounded-full bg-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-600/25 transition duration-200 hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download size={18} />
                Download CV (PDF)
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold text-zinc-300 transition duration-200 hover:border-violet-400/50 hover:bg-white/[0.04] hover:text-white"
              >
                <ExternalLink size={17} />
                Preview in Tab
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
