import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clean() {
  const result = await prisma.project.deleteMany({
    where: {
      slug: {
        in: [
          "saas-analytics-dashboard",
          "ecommerce-cloud-platform",
          "task-collaboration-suite",
        ],
      },
    },
  });

  console.log(`Deleted ${result.count} dummy projects.`);

  const current = await prisma.project.findMany({ orderBy: { number: "asc" } });
  console.log("Current active projects in Neon DB:");
  current.forEach((p) => console.log(` - [${p.number}] ${p.title} (${p.slug})`));
}

clean()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
