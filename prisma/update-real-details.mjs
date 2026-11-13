import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Updating Neon Database with Fasi's full CV details...\n");

  // 1. Projects
  console.log("📦 1. Synchronizing Flagship Projects...");
  await prisma.project.deleteMany({});
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
  console.log("   ✅ 3 Flagship Projects synchronized.");

  // 2. Experiences
  console.log("💼 2. Synchronizing Full Experience Timeline...");
  await prisma.experience.deleteMany({});
  await prisma.experience.createMany({
    data: [
      {
        role: "Full-Stack Web & Mobile Software Engineer",
        company: "Independent & Flagship Projects",
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
  console.log("   ✅ 4 Experience records synchronized.");

  // 3. Education
  console.log("🎓 3. Synchronizing Full Education Records...");
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
          "Head of Management for multi-purpose university conference event (500–600 guests)",
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
  console.log("   ✅ 4 Education records synchronized.");

  console.log("\n🎉 NEON POSTGRESQL DB FULLY SYNCHRONIZED!");
}

main()
  .catch((e) => {
    console.error("❌ Error updating database:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
