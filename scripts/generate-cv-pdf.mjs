import fs from "fs";
import path from "path";

// Generates a clean, valid ATS PDF file conforming to PDF 1.4 specifications
function createPDF(lines) {
  let streamContent = "BT\n";
  streamContent += "/F1 20 Tf\n";
  streamContent += "50 780 Td\n";
  streamContent += `(${escapePdf(lines.name)}) Tj\n`;
  streamContent += "ET\n";

  streamContent += "BT\n";
  streamContent += "/F2 10 Tf\n";
  streamContent += "50 762 Td\n";
  streamContent += `(${escapePdf(lines.subtitle)}) Tj\n`;
  streamContent += "ET\n";

  streamContent += "BT\n";
  streamContent += "/F1 9 Tf\n";
  streamContent += "50 746 Td\n";
  streamContent += `(${escapePdf(lines.contact)}) Tj\n`;
  streamContent += "ET\n";

  // Horizontal divider
  streamContent += "0.5 w\n0.7 0.7 0.7 RG\n50 735 m 560 735 l S\n";

  let y = 718;

  for (const section of lines.sections) {
    // Section Title
    streamContent += "BT\n";
    streamContent += "/F2 11 Tf\n";
    streamContent += "0.15 0.15 0.4 rg\n"; // Dark violet-navy
    streamContent += `50 ${y} Td\n`;
    streamContent += `(${escapePdf(section.title)}) Tj\n`;
    streamContent += "ET\n";
    y -= 14;

    streamContent += "/F1 9 Tf\n";
    streamContent += "0 0 0 rg\n";

    for (const item of section.items) {
      if (typeof item === "string") {
        streamContent += "BT\n";
        streamContent += "/F1 9 Tf\n";
        streamContent += `50 ${y} Td\n`;
        streamContent += `(${escapePdf(item)}) Tj\n`;
        streamContent += "ET\n";
        y -= 12;
      } else if (item.heading) {
        streamContent += "BT\n";
        streamContent += "/F2 9.5 Tf\n";
        streamContent += `50 ${y} Td\n`;
        streamContent += `(${escapePdf(item.heading)}) Tj\n`;
        if (item.sub) {
          streamContent += ` (${escapePdf("  |  " + item.sub)}) Tj\n`;
        }
        streamContent += "ET\n";
        y -= 12;

        if (item.bullets) {
          for (const b of item.bullets) {
            streamContent += "BT\n";
            streamContent += "/F1 8.5 Tf\n";
            streamContent += `62 ${y} Td\n`;
            streamContent += `(- ${escapePdf(b)}) Tj\n`;
            streamContent += "ET\n";
            y -= 11;
          }
        }
      }
    }
    y -= 8;
  }

  const streamBytes = Buffer.from(streamContent, "utf-8");
  const streamLength = streamBytes.length;

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLength} >>
stream
${streamContent}endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000256 00000 n 
000000${String(300 + streamLength).padStart(4, "0")} 00000 n 
000000${String(380 + streamLength).padStart(4, "0")} 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
${460 + streamLength}
%%EOF`;

  return Buffer.from(pdf, "utf-8");
}

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const cvData = {
  name: "FASI UR REHMAN",
  subtitle: "BS Software Engineering Student | Full-Stack Web & Mobile Software Engineer",
  contact: "Phone: 03055219276  |  Email: fasiqureshi34@gmail.com  |  Location: Kotli, AJK, Pakistan  |  LinkedIn: linkedin.com/in/fasi-qureshi-1b5764353",
  sections: [
    {
      title: "PROFESSIONAL SUMMARY",
      items: [
        "Motivated Software Engineering student at University of Kotli, AJK with strong expertise in mobile and web development.",
        "Skilled in Flutter, React Native, Python (FastAPI), JavaScript, Next.js, and database systems (PostgreSQL, SQLite, MySQL).",
        "Proven leadership and administrative track record through conference event management and computer operations experience."
      ]
    },
    {
      title: "TECHNICAL SKILLS",
      items: [
        "Mobile & Frontend: Flutter, Dart, React Native, Expo, Next.js, TypeScript, Tailwind CSS, Android App Development",
        "Backend & DB: Python (FastAPI), PHP, Node.js, PostgreSQL (Neon), MySQL, SQLite, Cloud Firestore, Prisma ORM",
        "DevOps & Tools: Docker, Git, REST APIs, Linux/Windows Server, Bluetooth ESC/POS Thermal Printing, Postman",
        "Languages: English (Professional proficiency), Urdu (Native)"
      ]
    },
    {
      title: "FLAGSHIP SOFTWARE PROJECTS",
      items: [
        {
          heading: "VICE DINE POS - Retro Vice City Edition",
          sub: "Flutter, Dart, SQLite, Cloud Firestore, Bluetooth ESC/POS",
          bullets: [
            "Engineered offline-first restaurant POS with local SQLite storage, split table billing, and cloud telemetry sync.",
            "Integrated Bluetooth ESC/POS thermal printing pipeline and Urdu/Roman Urdu AI voice assistant."
          ]
        },
        {
          heading: "EnergyMitr - Smart Energy Tracking & Utility Platform",
          sub: "React Native, Expo, Vite, Python FastAPI, PostgreSQL",
          bullets: [
            "Built smart electricity consumption tracking mobile and web system with smart meter telemetry APIs and bill analytics."
          ]
        },
        {
          heading: "VoltSend - SaaS Web Push Notification Engine",
          sub: "PHP, MySQL, Android WebView Client, REST APIs",
          bullets: [
            "Architected developer-focused push delivery backend with automated retry queues and Android WebView wrapper."
          ]
        }
      ]
    },
    {
      title: "WORK EXPERIENCE & LEADERSHIP",
      items: [
        {
          heading: "Head of Management - Campus Conference Event (May 2026)",
          sub: "University of Kotli, AJK",
          bullets: [
            "Managed 3-day multi-purpose hall conference operations for 500-600 guests, faculty, and student delegates.",
            "Directed guest accreditation, audiovisual pipelines, stage management, and safety protocols with zero delays."
          ]
        },
        {
          heading: "Data Entry Operator & Computer Operator (1.5 Years)",
          sub: "Master Internet Cafe, Kotli",
          bullets: [
            "Entered, updated, and audited computerized records ensuring quality, accuracy, and strict data confidentiality.",
            "Operated administrative office systems, document printing, digital filing, and client technical support."
          ]
        }
      ]
    },
    {
      title: "EDUCATION & CERTIFICATIONS",
      items: [
        {
          heading: "Bachelor of Science in Software Engineering (BSSE)",
          sub: "University of Kotli, Azad Jammu & Kashmir (Ongoing)",
          bullets: [
            "Focus: Software Architecture, Mobile Application Development, Distributed Systems, Database Management"
          ]
        },
        {
          heading: "Diploma in Computer Operation",
          sub: "Friends Institute of Kotli (Completed)",
          bullets: ["Office automation, documentation, spreadsheet management, and hardware maintenance."]
        },
        {
          heading: "Intermediate (ICS - Computer Science)",
          sub: "Government Intermediate Science College Kotli, AJK",
          bullets: ["Score: 736 Marks. Core: Computer Science, Mathematics, Statistics, Physics."]
        },
        {
          heading: "Matriculation (Computer Science)",
          sub: "Ibne Sina Model College Kotli",
          bullets: ["Score: 815 Marks with First Division."]
        }
      ]
    }
  ]
};

const pdfBuffer = createPDF(cvData);

const outPublic = path.resolve("public");
fs.writeFileSync(path.join(outPublic, "CV.pdf"), pdfBuffer);
fs.writeFileSync(path.join(outPublic, "resume.pdf"), pdfBuffer);
console.log("✅ Successfully generated public/CV.pdf and public/resume.pdf!");
