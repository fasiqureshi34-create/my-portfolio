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
    id: "exp-2",
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
    id: "exp-3",
    role: "Data Entry Operator",
    company: "Master Internet Cafe",
    location: "Kotli, Azad Jammu & Kashmir",
    type: "Professional",
    period: "1 Year",
    current: false,
    description:
      "Responsible for accurate electronic record management, data processing, and document formatting.",
    achievements: [
      "Entered, updated, and audited computerized records ensuring data quality, precision, and confidentiality.",
      "Managed client document workflows, digital file organization, and official online submissions.",
    ],
    skills: ["Data Verification", "Record Management", "Quality Assurance"],
  },
  {
    id: "exp-4",
    role: "Computer Operator",
    company: "Master Internet Cafe",
    location: "Kotli, Azad Jammu & Kashmir",
    type: "Professional",
    period: "6 Months",
    current: false,
    description:
      "Operated digital computer systems, client technical workstations, and administrative office documentation software.",
    achievements: [
      "Handled official typing, document formatting, high-volume printing, and peripheral hardware operation.",
      "Provided customer technical support, troubleshooting internet connections and system configurations.",
    ],
    skills: ["Computer Operations", "Document Formatting", "Hardware Peripherals"],
  },
];
