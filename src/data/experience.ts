export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Engineer",
    company: "TechNova Solutions",
    location: "Remote / Hybrid",
    type: "Full-Time",
    period: "2024 - Present",
    current: true,
    description:
      "Leading full-stack architecture and feature development for high-traffic SaaS web applications, ensuring scalable backend microservices and snappy frontend performance.",
    achievements: [
      "Architected Next.js 15 app router migration, boosting Core Web Vitals score from 72 to 98.",
      "Engineered PostgreSQL database queries and Prisma ORM indexing, reducing p95 API response times by 42%.",
      "Mentored junior developers, standardized code reviews, and implemented automated CI/CD deployment pipelines."
    ],
    skills: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Docker"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer",
    company: "Apex Digital Labs",
    location: "On-Site",
    type: "Full-Time",
    period: "2023 - 2024",
    current: false,
    description:
      "Developed robust customer-facing web platforms, RESTful APIs, and administrative dashboards with real-time data sync.",
    achievements: [
      "Built end-to-end authentication with role-based access control (RBAC) and JWT security.",
      "Integrated third-party payment gateways (Stripe) and transactional email systems.",
      "Designed reusable UI component systems with Tailwind CSS, accelerating team feature delivery by 30%."
    ],
    skills: ["React", "Express.js", "PostgreSQL", "REST APIs", "Tailwind CSS", "Git", "Jest"]
  },
  {
    id: "exp-3",
    role: "Junior Frontend Engineer",
    company: "CodeCraft Studios",
    location: "Hybrid",
    type: "Full-Time",
    period: "2022 - 2023",
    current: false,
    description:
      "Crafted responsive and interactive user interfaces for modern web applications, focusing on clean code, accessibility, and pixel-perfect design fidelity.",
    achievements: [
      "Converted complex Figma designs into responsive, accessible web pages with cross-browser compatibility.",
      "Optimized assets and client bundle sizes, trimming initial page load times by 1.8 seconds."
    ],
    skills: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "Git", "Figma", "UI/UX"]
  }
];
