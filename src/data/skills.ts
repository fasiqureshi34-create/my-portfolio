export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "Mobile & Desktop",
    description: "Cross-platform mobile and desktop software engineering with native performance and offline reliability.",
    skills: ["Flutter", "Dart", "React Native", "Expo", "Electron", "Android SDK"],
  },
  {
    category: "Frontend Web",
    description: "Modern, performant, and responsive web user interfaces and Single-Page/Fullstack applications.",
    skills: ["Next.js", "React", "TypeScript", "Vite", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "Backend & Databases",
    description: "High-throughput APIs, microservices, relational and NoSQL databases, and real-time syncing pipelines.",
    skills: [
      "Python (FastAPI)",
      "PHP",
      "Node.js",
      "PostgreSQL (Neon)",
      "MySQL",
      "SQLite",
      "Cloud Firestore",
      "Hive",
      "Prisma",
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Modern development workflows, containerization, build tooling, and API protocol standards.",
    skills: ["Docker", "Git", "esbuild", "REST APIs"],
  },
];
