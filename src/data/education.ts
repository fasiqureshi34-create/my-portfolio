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
    field: "Software Engineering (BSSE)",
    institution: "University of Kotli, Azad Jammu & Kashmir",
    location: "Kotli, AJK, Pakistan",
    period: "2022 - Present",
    grade: "Ongoing",
    description:
      "Comprehensive academic curriculum focusing on Software Architecture, Cross-Platform Mobile Engineering, Database Management Systems, and Object-Oriented Software Design.",
    highlights: [
      "Head of Management for 3-day campus conference event (500–600 participants)",
      "Specialization in Mobile App Architecture, Distributed Systems, SQL/NoSQL Databases",
      "Lead developer on departmental and independent flagship software projects"
    ]
  },
  {
    id: "edu-2",
    degree: "Diploma",
    field: "Computer Operation",
    institution: "Friends Institute of Kotli",
    location: "Kotli, AJK, Pakistan",
    period: "Completed",
    grade: "Certified",
    description:
      "Hands-on technical diploma covering digital computer operations, office automation software, spreadsheet data management, and computer hardware fundamentals.",
    highlights: [
      "Practical mastery in document automation, spreadsheet formulas, and database entry",
      "Computer workstation hardware setup and operational maintenance"
    ]
  },
  {
    id: "edu-3",
    degree: "Intermediate in Computer Science (ICS)",
    field: "Computer Science & Mathematics",
    institution: "Government Intermediate Science College Kotli",
    location: "Kotli, AJK, Pakistan",
    period: "Completed",
    grade: "Score: 736 Marks",
    description:
      "Rigorous pre-university academic foundation in Computer Science, Advanced Mathematics, Physics, and Analytical Logic.",
    highlights: [
      "Strong foundation in algorithmic reasoning and mathematical problem solving",
      "Core coursework in C/C++ fundamentals, logic design, and discrete structures"
    ]
  },
  {
    id: "edu-4",
    degree: "Matriculation",
    field: "Computer Science",
    institution: "Ibne Sina Model College Kotli",
    location: "Kotli, AJK, Pakistan",
    period: "Completed",
    grade: "Score: 815 Marks (First Division)",
    description:
      "Secondary school education focusing on science and computer foundations with high academic standing.",
    highlights: [
      "Graduated with First Division honors",
      "Core subjects in Computer Science, Mathematics, Physics, and Chemistry"
    ]
  }
];
