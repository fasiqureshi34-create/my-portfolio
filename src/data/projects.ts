export interface Project {
  slug: string;
  number: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
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
    githubUrl: "https://github.com/fasiqureshi34-create",
    liveUrl: "https://my-portfolio-phi-nine-38.vercel.app",
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
    githubUrl: "https://github.com/fasiqureshi34-create",
    liveUrl: "https://my-portfolio-phi-nine-38.vercel.app",
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
    githubUrl: "https://github.com/fasiqureshi34-create",
    liveUrl: "https://my-portfolio-phi-nine-38.vercel.app",
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
    githubUrl: "https://github.com/fasiqureshi34-create",
    liveUrl: "https://my-portfolio-phi-nine-38.vercel.app",
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
    githubUrl: "https://github.com/fasiqureshi34-create",
    liveUrl: "https://my-portfolio-phi-nine-38.vercel.app",
    featured: true,
  },
];
