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
    grade: "In Progress",
    description:
      "Rigorous academic curriculum with specialization in Software Architecture, Cross-Platform Mobile Engineering, Database Management Systems, and Object-Oriented Analysis & Design.",
    highlights: [
      "Head of Management for multi-purpose university conference event (500-600 guests)",
      "Focus Areas: Software Design Patterns, Mobile App Architecture, Distributed Systems, SQL/NoSQL Databases",
      "Lead developer on multiple departmental and independent software showcase projects"
    ]
  },
  {
    id: "edu-2",
    degree: "Higher Secondary School Certificate (HSSC)",
    field: "Pre-Engineering / Computer Science",
    institution: "Government College Kotli",
    location: "Kotli, AJK, Pakistan",
    period: "2020 - 2022",
    grade: "Grade: First Division",
    description:
      "Comprehensive education in advanced mathematics, analytical reasoning, physics, and computer science foundations.",
    highlights: [
      "Consistent academic performer in mathematics and algorithmic problem solving",
      "Active participant in technical and science society activities"
    ]
  }
];
