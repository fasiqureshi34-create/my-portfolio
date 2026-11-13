import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Updating Neon Database with Fasi's real personal and technical portfolio details...\n");

  // 1. Update Projects
  console.log("📦 1. Synchronizing Flagship Projects...");
  await prisma.project.deleteMany({}); // Clear existing to prevent duplicate slugs
  await prisma.project.createMany({
    data: [
      {
        slug: "vice-dine-pos",
        number: "01",
        title: "VICE DINE POS – Retro Vice City Edition",
        description:
          "Offline-first restaurant Point-of-Sale system built with Flutter, 2D Flame engine (1980s synthwave UI), local SQLite storage, Bluetooth ESC/POS thermal receipt printing, Cloud Firestore sync, and Urdu/Roman Urdu AI voice assistant.",
        stack: [
          "Flutter",
          "Dart",
          "Flame 2D",
          "SQLite",
          "Cloud Firestore",
          "Bluetooth ESC/POS",
        ],
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
      },
      {
        slug: "energymitr",
        number: "02",
        title: "EnergyMitr",
        description:
          "Smart energy consumption tracking and utility bill saving mobile & web platform built with React Native, Expo, Vite, Python FastAPI, and smart meter telemetry APIs.",
        stack: [
          "React Native",
          "Expo",
          "Vite",
          "Python FastAPI",
          "IoT Telemetry",
          "PostgreSQL",
        ],
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
      },
      {
        slug: "voltsend",
        number: "03",
        title: "VoltSend",
        description:
          "Web-based SaaS push notification and developer delivery platform built with PHP, MySQL, and an Android WebView client app.",
        stack: ["PHP", "MySQL", "Android WebView", "REST APIs", "Tailwind CSS"],
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
      },
    ],
  });
  console.log("   ✅ 3 Flagship Projects updated in Neon DB.");

  // 2. Update Skills
  console.log("🛠️ 2. Synchronizing Technical Skills...");
  await prisma.skill.deleteMany({});
  await prisma.skill.createMany({
    data: [
      {
        category: "Mobile & Frontend",
        description: "Cross-platform mobile apps & responsive, modern web interfaces.",
        skills: [
          "Flutter",
          "Dart",
          "React Native",
          "Expo",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        category: "Backend & Databases",
        description: "High-throughput APIs, offline databases & cloud document stores.",
        skills: [
          "Python (FastAPI)",
          "PHP",
          "Node.js",
          "PostgreSQL (Neon)",
          "MySQL",
          "SQLite",
          "Cloud Firestore",
          "Prisma",
        ],
      },
      {
        category: "DevOps & Tools",
        description: "Deployment pipelines, version control & hardware communication.",
        skills: [
          "Docker",
          "Git",
          "REST APIs",
          "Linux/Windows Server",
          "ESC/POS Thermal Printing",
        ],
      },
    ],
  });
  console.log("   ✅ Technical skills synchronized in Neon DB.");

  // 3. Update Experiences
  console.log("💼 3. Synchronizing Experience & Leadership...");
  await prisma.experience.deleteMany({});
  await prisma.experience.createMany({
    data: [
      {
        role: "Full-Stack Web & Mobile Software Engineer",
        company: "Freelance & Independent Projects",
        location: "Kotli, AJK, Pakistan (Remote)",
        type: "Contract / Independent",
        period: "2023 - Present",
        current: true,
        description:
          "Engineering end-to-end production applications ranging from offline-first mobile systems to IoT energy telemetry dashboards and SaaS notification backends.",
        achievements: [
          "Engineered VICE DINE POS with Flutter, local SQLite storage, Bluetooth thermal printing, and bilingual AI voice assistant.",
          "Developed EnergyMitr IoT analytics platform integrating React Native, Vite frontend, and Python FastAPI telemetry microservices.",
          "Created VoltSend push notification distribution infrastructure with PHP, MySQL, and Android client apps.",
        ],
        skills: [
          "Flutter",
          "React Native",
          "Next.js",
          "Python FastAPI",
          "PostgreSQL",
          "SQLite",
          "PHP",
          "Docker",
        ],
      },
      {
        role: "Head of Management – Campus Conference Event",
        company: "University of Kotli, AJK",
        location: "Kotli, Azad Kashmir",
        type: "Leadership",
        period: "May 2026",
        current: false,
        description:
          "Spearheaded operations and logistics for a major 3-day university conference held in the multi-purpose auditorium, hosting 500–600 distinguished guests, faculty members, and student delegates.",
        achievements: [
          "Directed cross-functional student teams across security, guest accreditation, multimedia scheduling, and protocol management.",
          "Coordinated auditorium seating layouts, speaker stage audio-visual pipelines, and executive hospitality.",
          "Delivered zero-delay event execution throughout all three conference days with commendation from department leadership.",
        ],
        skills: [
          "Event Operations",
          "Team Leadership",
          "Crisis Management",
          "Public Relations",
          "Protocol Management",
        ],
      },
    ],
  });
  console.log("   ✅ Experiences synchronized in Neon DB.");

  // 4. Update Education
  console.log("🎓 4. Synchronizing Education...");
  await prisma.education.deleteMany({});
  await prisma.education.createMany({
    data: [
      {
        degree: "Bachelor of Science",
        field: "Software Engineering (BSSE)",
        institution: "University of Kotli, Azad Jammu & Kashmir",
        location: "Kotli, AJK, Pakistan",
        period: "2022 - Present",
        grade: "In Progress",
        description:
          "Rigorous academic curriculum with specialization in Software Architecture, Cross-Platform Mobile Engineering, Database Management Systems, and Object-Oriented Analysis & Design.",
        highlights: [
          "Head of Management for multi-purpose university conference event (500-600 guests)",
          "Focus: Software Design Patterns, Mobile App Architecture, Distributed Systems, SQL/NoSQL Databases",
          "Lead developer on multiple departmental and independent software showcase projects",
        ],
      },
    ],
  });
  console.log("   ✅ Education records synchronized in Neon DB.");

  console.log("\n🎉 ALL DATABASE MODELS SUCCESSFULLY UPDATED IN NEON POSTGRESQL!");
}

main()
  .catch((e) => {
    console.error("❌ Error updating database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
