import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Download,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-[130px]" />
      <div className="grid-background absolute inset-0 opacity-60" />

      <div className="container-width relative z-10 grid items-center gap-12 py-14 pb-20 sm:py-20 lg:grid-cols-[1.25fr_.75fr] lg:gap-12">
        {/* Left Column: Introduction & CTAs */}
        <div className="animate-fade-up">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-1.5 text-xs text-violet-200">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Available for Opportunities
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-400">
              <MapPin size={13} className="text-violet-400" />
              Kotli, Azad Jammu &amp; Kashmir
            </div>
          </div>

          <p className="mb-3 text-lg font-medium text-zinc-400">
            Hello, I&apos;m <span className="text-white font-semibold">Fasi Ur Rehman</span>{" "}
            <span className="text-violet-400 font-mono text-sm">(Fasi Qureshi)</span>
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            Full-Stack Web &amp;
            <br />
            Mobile Software
            <br />
            <span className="gradient-text">Engineer.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            Specializing in offline-first mobile apps, intelligent IoT telemetry platforms, and high-concurrency web systems using <span className="text-white font-medium">Flutter</span>, <span className="text-white font-medium">React Native</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-white font-medium">Python FastAPI</span>.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Flagship Work
              <ArrowRight className="ml-2 inline" size={16} />
            </a>

            <a
              href="/CV.pdf"
              download="CV.pdf"
              className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-violet-400/60 hover:bg-violet-500/10"
            >
              <Download className="mr-2 inline" size={15} />
              Download CV
            </a>
          </div>

          {/* Socials & Direct Contact Icons */}
          <div className="mt-10 flex items-center gap-4 text-zinc-400">
            <a
              href="https://www.linkedin.com/in/fasi-qureshi-1b5764353"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-zinc-300 transition hover:border-violet-400 hover:bg-violet-500/15 hover:text-white"
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href="https://wa.me/923055219276"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Chat"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-emerald-400 transition hover:border-emerald-500 hover:bg-emerald-500/15 hover:text-white"
            >
              <Phone size={15} />
              <span>03055219276</span>
            </a>

            <a
              href="mailto:fasiqureshi34@gmail.com"
              aria-label="Email Fasi"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-violet-300 transition hover:border-violet-400 hover:bg-violet-500/15 hover:text-white"
            >
              <Mail size={15} />
              <span>fasiqureshi34@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right Column: Formal Portrait & Developer Badge */}
        <div className="relative mx-auto w-full max-w-sm">
          {/* Glowing frame around photo */}
          <div className="relative rounded-3xl border border-violet-500/30 bg-gradient-to-b from-violet-500/20 via-zinc-900/60 to-black/80 p-3 shadow-2xl backdrop-blur-xl">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-zinc-950">
              <Image
                src="/fasi.jpg"
                alt="Fasi Ur Rehman (Fasi Qureshi) - Software Engineer"
                fill
                priority
                className="object-cover object-top transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Overlay Label */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Fasi Ur Rehman</h3>
                    <p className="text-[11px] font-mono text-violet-300">
                      BS Software Engineering
                    </p>
                  </div>
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                </div>
              </div>
            </div>

            {/* Quick Tech Tag Row under photo */}
            <div className="mt-3 flex items-center justify-between px-2 py-1 text-[11px] font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-violet-300">
                <Terminal size={13} />
                Kotli, AJK
              </span>
              <span>Python • Flutter • Next.js</span>
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
