import {
  ArrowDown,
  ArrowRight,
  Mail,
  Terminal,
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

      <div className="container-width relative z-10 grid items-center gap-12 py-14 pb-20 sm:py-20 lg:grid-cols-[1.4fr_.6fr] lg:gap-16">
        <div className="animate-fade-up">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-4 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <p className="mb-5 text-lg text-zinc-400">
            Hello, I&apos;m <span className="text-white">Your Name</span>
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            I build digital
            <br />
            experiences that
            <br />
            <span className="gradient-text">make an impact.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m a Software Engineer focused on building modern web
            applications, scalable systems and thoughtful user experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-500 px-7 py-4 font-semibold text-white transition hover:bg-violet-400"
            >
              Explore My Work
              <ArrowRight className="ml-2 inline" size={17} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-4 font-semibold transition hover:border-violet-400/60"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5 text-zinc-400">
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
              href="mailto:hello@example.com"
              aria-label="Email"
              className="transition hover:text-white"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glass-card relative rounded-[32px] p-7">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-zinc-500">developer.ts</span>
            </div>

            <div className="space-y-4 font-mono text-sm leading-7">
              <p className="text-zinc-500">// A little about me</p>
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">developer</span> = {"{"}
              </p>
              <p className="pl-5">
                name: <span className="text-green-300">&quot;Your Name&quot;</span>,
              </p>
              <p className="pl-5">
                role: <span className="text-green-300">&quot;Engineer&quot;</span>,
              </p>
              <p className="pl-5">
                passion: <span className="text-green-300">&quot;Building&quot;</span>,
              </p>
              <p className="pl-5">
                coffee: <span className="text-orange-300">true</span>,
              </p>
              <p>{"};"}</p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Terminal size={15} className="text-violet-400" />
                  Always learning. Always building.
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
