export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  description: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science",
    field: "Computer Science (BSCS)",
    institution: "National University of Sciences & Technology",
    location: "Islamabad, PK",
    period: "2019 — 2023",
    grade: "CGPA: 3.8 / 4.0",
    description:
      "Comprehensive curriculum focusing on software engineering principles, algorithms, distributed systems, and modern database management.",
    highlights: [
      "Graduated with Magna Cum Laude / Dean's Honor Roll",
      "Final Year Project: Scalable Cloud-Native IoT Telemetry Dashboard",
      "Core Coursework: Data Structures & Algorithms, Database Systems, Cloud Computing, Operating Systems, Web Technologies"
    ]
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Pre-Engineering / Computer Science",
    institution: "Punjab College of Information Technology",
    location: "Punjab, PK",
    period: "2017 — 2019",
    grade: "Grade: A+ (88%)",
    description:
      "Strong foundation in advanced mathematics, analytical reasoning, physics, and computer science fundamentals.",
    highlights: [
      "Merit Scholarship recipient for academic excellence",
      "Lead participant in Inter-College Programming Competitions"
    ]
  }
];
