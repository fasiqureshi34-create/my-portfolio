import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // 1. Seed Projects
  const projectsCount = await prisma.project.count();
  if (projectsCount === 0) {
    await prisma.project.createMany({
      data: [
        {
          slug: "saas-analytics-dashboard",
          number: "01",
          title: "SaaS Analytics Dashboard",
          description:
            "An enterprise analytics dashboard concept for real-time business metrics, revenue tracking, and telemetry visualization.",
          stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL"],
          githubUrl: "https://github.com",
          liveUrl: "https://example.com",
          featured: true,
        },
        {
          slug: "ecommerce-cloud-platform",
          number: "02",
          title: "E-Commerce Cloud Platform",
          description:
            "High-concurrency online shopping application featuring instant product search, Stripe payment integration, and inventory management.",
          stack: ["React", "Node.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
          githubUrl: "https://github.com",
          liveUrl: "https://example.com",
          featured: true,
        },
        {
          slug: "task-collaboration-suite",
          number: "03",
          title: "Task Collaboration Suite",
          description:
            "A collaborative productivity workspace for cross-functional engineering teams with kanban workflows and progress tracking.",
          stack: ["Next.js", "TypeScript", "REST APIs", "PostgreSQL"],
          githubUrl: "https://github.com",
          liveUrl: "https://example.com",
          featured: true,
        },
      ],
    });
    console.log("✅ Seeded 3 projects.");
  }

  // 2. Seed Skills
  const skillsCount = await prisma.skill.count();
  if (skillsCount === 0) {
    await prisma.skill.createMany({
      data: [
        {
          category: "Frontend Development",
          description: "Building responsive, modern, and accessible user interfaces.",
          skills: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Next.js 15",
            "Tailwind CSS",
          ],
        },
        {
          category: "Backend & Systems",
          description: "Designing resilient APIs, microservices, and database schemas.",
          skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "PostgreSQL",
            "Prisma ORM",
            "JWT Auth",
          ],
        },
        {
          category: "DevOps & Tools",
          description: "Version control, deployment pipelines, and developer tooling.",
          skills: ["Git", "GitHub", "Docker", "Vercel", "VS Code", "Postman"],
        },
      ],
    });
    console.log("✅ Seeded 3 skill categories.");
  }

  // 3. Seed Experiences
  const expCount = await prisma.experience.count();
  if (expCount === 0) {
    await prisma.experience.createMany({
      data: [
        {
          role: "Senior Full-Stack Engineer",
          company: "TechNova Solutions",
          location: "Remote / Hybrid",
          type: "Full-Time",
          period: "2024 - Present",
          current: true,
          description:
            "Leading full-stack architecture and feature development for high-traffic SaaS web applications.",
          achievements: [
            "Architected Next.js 15 app router migration, boosting Core Web Vitals from 72 to 98.",
            "Engineered PostgreSQL database queries and Prisma ORM indexing, reducing p95 latency by 42%.",
          ],
          skills: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
        },
        {
          role: "Full-Stack Developer",
          company: "Apex Digital Labs",
          location: "On-Site",
          type: "Full-Time",
          period: "2023 - 2024",
          current: false,
          description:
            "Developed robust customer-facing web platforms, RESTful APIs, and administrative dashboards.",
          achievements: [
            "Built end-to-end authentication with role-based access control and JWT security.",
            "Integrated third-party payment gateways (Stripe) and transactional email systems.",
          ],
          skills: ["React", "Express.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
        },
      ],
    });
    console.log("✅ Seeded 2 experiences.");
  }

  // 4. Seed Education
  const eduCount = await prisma.education.count();
  if (eduCount === 0) {
    await prisma.education.createMany({
      data: [
        {
          degree: "Bachelor of Science",
          field: "Computer Science (BSCS)",
          institution: "National University of Sciences & Technology",
          location: "Islamabad, PK",
          period: "2019 - 2023",
          grade: "CGPA: 3.8 / 4.0",
          description:
            "Comprehensive curriculum focusing on software engineering principles, algorithms, distributed systems, and modern database management.",
          highlights: [
            "Dean's Honor Roll recipient",
            "Core: Data Structures, Distributed Systems, Cloud Architecture",
          ],
        },
      ],
    });
    console.log("✅ Seeded education records.");
  }

  console.log("🎉 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
