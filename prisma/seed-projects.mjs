import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("⚡ Updating Showcase Projects to real projects (VICE DINE POS, EnergyMitr, VoltSend)...");

  // Upsert VICE DINE POS
  await prisma.project.upsert({
    where: { slug: "vice-dine-pos" },
    update: {
      number: "01",
      title: "VICE DINE POS",
      description:
        "High-performance cloud-connected Point of Sale & restaurant operating system with order dispatch, live kitchen telemetry, and split table billing.",
      stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true,
    },
    create: {
      slug: "vice-dine-pos",
      number: "01",
      title: "VICE DINE POS",
      description:
        "High-performance cloud-connected Point of Sale & restaurant operating system with order dispatch, live kitchen telemetry, and split table billing.",
      stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true,
    },
  });

  // Upsert EnergyMitr
  await prisma.project.upsert({
    where: { slug: "energymitr" },
    update: {
      number: "02",
      title: "EnergyMitr",
      description:
        "Intelligent energy analytics and IoT telemetry platform monitoring industrial power consumption, solar yield, and peak-demand forecasting.",
      stack: ["React", "Node.js", "PostgreSQL", "Time-Series Data", "IoT"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true,
    },
    create: {
      slug: "energymitr",
      number: "02",
      title: "EnergyMitr",
      description:
        "Intelligent energy analytics and IoT telemetry platform monitoring industrial power consumption, solar yield, and peak-demand forecasting.",
      stack: ["React", "Node.js", "PostgreSQL", "Time-Series Data", "IoT"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true,
    },
  });

  // Upsert VoltSend
  await prisma.project.upsert({
    where: { slug: "voltsend" },
    update: {
      number: "03",
      title: "VoltSend",
      description:
        "Ultra-fast developer webhook and transactional event delivery pipeline with automatic exponential retry policies, HMAC verification, and delivery analytics.",
      stack: ["TypeScript", "REST APIs", "Redis Queue", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true,
    },
    create: {
      slug: "voltsend",
      number: "03",
      title: "VoltSend",
      description:
        "Ultra-fast developer webhook and transactional event delivery pipeline with automatic exponential retry policies, HMAC verification, and delivery analytics.",
      stack: ["TypeScript", "REST APIs", "Redis Queue", "Docker", "PostgreSQL"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com",
      featured: true,
    },
  });

  console.log("✅ Showcase projects updated successfully in Neon DB!");
}

main()
  .catch((e) => {
    console.error("❌ Project seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
