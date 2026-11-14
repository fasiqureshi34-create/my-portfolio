import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting complete portfolio database synchronization on Neon PostgreSQL...\n");

  // 1. PROJECTS (All 5 Flagship Projects)
  console.log("📦 1. Synchronizing 5 Flagship Projects...");
  await prisma.project.deleteMany({});
  await prisma.project.createMany({
    data: [
      {
        slug: "vice-dine-pos",
        number: "01",
        title: "VICE DINE POS – Retro Vice City Edition",
        description:
          "Offline-first restaurant Point-of-Sale system featuring a 1980s synthwave 2D Flame engine UI, local SQLite storage, Bluetooth ESC/POS thermal receipt printing, Cloud Firestore synchronization, and an Urdu/Roman Urdu AI voice assistant.",
        stack: [
          "Flutter",
          "Dart",
          "Flame Engine",
          "SQLite",
          "Cloud Firestore",
          "Bluetooth ESC/POS",
        ],
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
      },
      {
        slug: "apt-desktop",
        number: "02",
        title: "APT Desktop – API Performance & Stress Tester",
        description:
          "Standalone cross-platform desktop load-testing suite converted from a VS Code extension into an Electron + React app. Supports HTTP/HTTPS stress testing up to 200 concurrent workers and 10,000 requests per run, live latency percentiles, real-time RPS charts, and schema-driven synthetic payload generation.",
        stack: [
          "Electron",
          "React",
          "TypeScript",
          "Vite",
          "esbuild",
          "Faker.js",
        ],
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
      },
      {
        slug: "bismillah-takeaway-pos",
        number: "03",
        title: "Bismillah Takeaway POS & Ordering Terminal",
        description:
          "Offline-first takeaway restaurant POS and online food ordering terminal with local Hive NoSQL caching, Cloud Firestore real-time order sync, Firebase Authentication, voice-assisted menu search, and Bluetooth thermal receipt printing.",
        stack: [
          "Flutter",
          "Dart",
          "Firebase Auth",
          "Cloud Firestore",
          "Hive",
          "Bluetooth Thermal",
        ],
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
      },
      {
        slug: "energymitr",
        number: "04",
        title: "EnergyMitr",
        description:
          "Smart energy consumption tracking and utility bill saving mobile and web platform with real-time smart meter telemetry APIs and usage analytics.",
        stack: [
          "React Native",
          "Expo",
          "Vite",
          "Python FastAPI",
          "REST APIs",
        ],
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
      },
      {
        slug: "voltsend",
        number: "05",
        title: "VoltSend",
        description:
          "Web-based SaaS push notification and multi-app delivery platform paired with a native Android WebView client app and admin moderation panel.",
        stack: [
          "PHP",
          "MySQL",
          "JavaScript",
          "Android WebView",
        ],
        githubUrl: "https://github.com/",
        liveUrl: "https://example.com",
        featured: true,
      },
    ],
  });
  console.log("   ✅ 5 Flagship Projects successfully seeded.");

  // 2. TECHNICAL SKILLS (4 Distinct Categories)
  console.log("⚡ 2. Synchronizing Technical Skills...");
  await prisma.skill.deleteMany({});
  await prisma.skill.createMany({
    data: [
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
    ],
  });
  console.log("   ✅ 4 Technical Skill categories successfully seeded.");

  // 3. EXPERIENCES (Including May 2026 Leadership & Technical)
  console.log("💼 3. Synchronizing Experience Timeline...");
  await prisma.experience.deleteMany({});
  await prisma.experience.createMany({
    data: [
      {
        role: "Full-Stack Web, Mobile & Desktop Software Engineer",
        company: "Independent & Flagship Projects",
        location: "Kotli, AJK, Pakistan (Remote)",
        type: "Engineering",
        period: "2023 - Present",
        current: true,
        description:
          "Engineering end-to-end production software across mobile, desktop, and web architectures—delivering offline-first POS terminals, high-concurrency desktop stress testers, and IoT energy analytics platforms.",
        achievements: [
          "Engineered VICE DINE POS with Flutter, Flame 2D engine, SQLite, Bluetooth thermal printing, and bilingual AI voice assistant.",
          "Developed APT Desktop API load tester in Electron + React supporting 200 concurrent workers and 10,000 requests per run.",
          "Built Bismillah Takeaway POS with Hive NoSQL caching, Firestore sync, and Bluetooth receipt printing.",
          "Architected EnergyMitr telemetry platform integrating React Native, Vite frontend, and Python FastAPI microservices.",
          "Created VoltSend push notification platform paired with PHP, MySQL, and Android client apps.",
        ],
        skills: [
          "Flutter",
          "Electron",
          "React Native",
          "Next.js",
          "Python FastAPI",
          "PostgreSQL",
          "SQLite",
          "Hive",
          "Docker",
        ],
      },
      {
        role: "Head of Management – University Campus Event",
        company: "University of Kotli, AJK",
        location: "Kotli, Azad Kashmir",
        type: "Leadership",
        period: "May 2026",
        current: false,
        description:
          "Led operational execution and crowd management for a 3-day multi-purpose hall university event hosting 500–600 guests at University of Kotli, AJK.",
        achievements: [
          "Directed cross-functional student teams across attendee registration, security coordination, hall operations, and VIP protocol.",
          "Coordinated auditorium stage layout, audio-visual feeds, and schedule adherence for all multi-purpose hall sessions.",
          "Delivered zero-delay event execution with formal commendation from faculty and department leadership.",
        ],
        skills: [
          "Operations Management",
          "Team Leadership",
          "Crowd Coordination",
          "Crisis Management",
          "Protocol Administration",
        ],
      },
      {
        role: "Data Entry Operator",
        company: "Master Internet Cafe",
        location: "Kotli, Azad Jammu & Kashmir",
        type: "Professional",
        period: "1 Year",
        current: false,
        description:
          "Entered, updated, and verified electronic records in computer systems maintaining confidentiality and high accuracy.",
        achievements: [
          "Audited computerized records ensuring quality, accuracy, and data consistency.",
          "Handled client document workflows and electronic submissions.",
        ],
        skills: ["Data Verification", "Record Management", "Quality Assurance"],
      },
      {
        role: "Computer Operator",
        company: "Master Internet Cafe",
        location: "Kotli, Azad Jammu & Kashmir",
        type: "Professional",
        period: "6 Months",
        current: false,
        description:
          "Operated digital computer systems and administrative office software for client documentation and printing.",
        achievements: [
          "Managed official typing, document formatting, and high-volume hardware printing.",
          "Provided workstation troubleshooting and client technical support.",
        ],
        skills: ["Computer Operations", "Document Formatting", "Hardware Peripherals"],
      },
    ],
  });
  console.log("   ✅ 4 Experience records successfully seeded.");

  // 4. EDUCATION
  console.log("🎓 4. Synchronizing Education Records...");
  await prisma.education.deleteMany({});
  await prisma.education.createMany({
    data: [
      {
        degree: "Bachelor of Science",
        field: "Software Engineering (BSSE)",
        institution: "University of Kotli, Azad Jammu & Kashmir",
        location: "Kotli, AJK, Pakistan",
        period: "2022 - Present",
        grade: "Ongoing",
        description:
          "Specialization in Software Architecture, Cross-Platform Mobile Engineering, Database Management Systems, and Distributed Systems.",
        highlights: [
          "Head of Management for multi-purpose university campus event (500–600 guests)",
          "Lead developer on departmental and independent software showcase projects",
        ],
      },
      {
        degree: "Diploma",
        field: "Computer Operation",
        institution: "Friends Institute of Kotli",
        location: "Kotli, AJK, Pakistan",
        period: "Completed",
        grade: "Certified",
        description:
          "Practical diploma covering digital computer operations, documentation, and office automation software.",
        highlights: [
          "Practical mastery in document automation, spreadsheet data, and database entry",
        ],
      },
      {
        degree: "Intermediate in Computer Science (ICS)",
        field: "Computer Science & Mathematics",
        institution: "Government Intermediate Science College Kotli",
        location: "Kotli, AJK, Pakistan",
        period: "Completed",
        grade: "Score: 736 Marks",
        description:
          "Rigorous pre-university academic foundation in Computer Science, Advanced Mathematics, and Physics.",
        highlights: [
          "Strong foundation in algorithmic reasoning and mathematical problem solving",
        ],
      },
      {
        degree: "Matriculation",
        field: "Computer Science",
        institution: "Ibne Sina Model College Kotli",
        location: "Kotli, AJK, Pakistan",
        period: "Completed",
        grade: "Score: 815 Marks (First Division)",
        description:
          "Secondary school education focusing on science and computer foundations with first division honors.",
        highlights: ["First Division honors in science and computing curriculum"],
      },
    ],
  });
  console.log("   ✅ 4 Education records successfully seeded.");

  console.log("\n🎉 NEON POSTGRESQL DATABASE 100% IN SYNC WITH ALL 5 PROJECTS & REAL DETAILS!");
}

main()
  .catch((e) => {
    console.error("❌ Database seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
