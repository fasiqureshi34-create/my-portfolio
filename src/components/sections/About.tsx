import { Code2, Target, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const principles = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Maintainable, readable and reliable software.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Turning complex challenges into practical solutions.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "Learning new technologies and improving every day.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/[0.06] py-24">
      <div className="container-width">
        <SectionHeading
          eyebrow="01 — About Me"
          title="Engineering with purpose."
          description="A little about who I am and how I approach software development."
        />

        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-5 leading-8 text-zinc-400">
            <p>
              I&apos;m a Software Engineer passionate about building useful
              digital products and solving real-world problems through
              technology.
            </p>
            <p>
              I enjoy working across modern web technologies, creating intuitive
              interfaces and developing reliable applications with clean
              architecture.
            </p>
            <p>
              My goal is to keep learning, write better software and contribute
              to products that make a meaningful difference.
            </p>
          </div>

          <div className="space-y-4">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card flex gap-4 rounded-2xl p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
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
