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
      "Created VoltSend push notification distribution infrastructure with PHP, MySQL, and Android client apps."
    ],
    skills: ["Flutter", "React Native", "Next.js", "Python FastAPI", "PostgreSQL", "SQLite", "PHP", "Docker"]
  },
  {
    id: "exp-2",
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
      "Delivered zero-delay event execution throughout all three conference days with commendation from department leadership."
    ],
    skills: ["Event Operations", "Team Leadership", "Crisis Management", "Public Relations", "Protocol Management"]
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
      "Managed client document workflows, digital file organization, and official online submissions."
    ],
    skills: ["Data Verification", "Record Management", "Fast Typing", "MS Office", "Quality Assurance"]
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
      "Provided customer technical support, troubleshooting internet connections and system configurations."
    ],
    skills: ["Computer Operations", "Document Formatting", "Hardware Peripherals", "Customer Support"]
  }
];
