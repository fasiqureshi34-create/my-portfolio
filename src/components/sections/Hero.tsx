import {
  ArrowDown,
  ArrowRight,
  Mail,
  Terminal,
  MapPin,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="grid-background absolute inset-0 opacity-60" />

      <div className="container-width relative z-10 grid items-center gap-12 py-14 pb-20 sm:py-20 lg:grid-cols-[1.35fr_.65fr] lg:gap-14">
        <div className="animate-fade-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-1.5 text-xs text-violet-200">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-400">
              <MapPin size={13} className="text-violet-400" />
              Kotli, AJK, Pakistan
            </div>
          </div>

          <p className="mb-3 text-lg font-medium text-zinc-400">
            Hello, I&apos;m <span className="text-white font-semibold">Fasi Ur Rehman</span>{" "}
            <span className="text-violet-400 font-mono text-sm">(Fasi Qureshi)</span>
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            Full-Stack Web &amp;
            <br />
            Mobile Software
            <br />
            <span className="gradient-text">Engineer.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Specializing in offline-first mobile apps, intelligent IoT telemetry platforms, and high-concurrency web systems using <span className="text-white font-medium">Flutter</span>, <span className="text-white font-medium">React Native</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-white font-medium">Python FastAPI</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Flagship Work
              <ArrowRight className="ml-2 inline" size={16} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-violet-400/60 hover:text-white"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-zinc-400">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-white"
            >
              <GithubIcon size={21} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-white"
            >
              <LinkedinIcon size={21} />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="transition hover:text-white"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>

        {/* Developer Info Card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="glass-card relative rounded-[32px] p-7 border border-violet-500/20 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500">fasi_profile.ts</span>
            </div>

            <div className="space-y-3 font-mono text-xs sm:text-sm leading-6">
              <p className="text-zinc-500">// Software Engineer profile</p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">engineer</span> = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-green-300">&quot;Fasi Ur Rehman&quot;</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-green-300">&quot;Full-Stack &amp; Mobile&quot;</span>,
              </p>
              <p className="pl-4">
                degree: <span className="text-green-300">&quot;BSSE (Kotli, AJK)&quot;</span>,
              </p>
              <p className="pl-4">
                focus: <span className="text-green-300">&quot;Offline-First &amp; Cloud&quot;</span>,
              </p>
              <p className="pl-4">
                coffee: <span className="text-orange-300">true</span>,
              </p>
              <p>{"};"}</p>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <Terminal size={14} className="text-violet-400 shrink-0" />
                  Flutter • FastAPI • Next.js • PostgreSQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 transition hover:text-white sm:block"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
