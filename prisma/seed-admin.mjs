import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🔐 Checking / Seeding Admin User in Neon Database...");

  const existingAdmin = await prisma.adminUser.findFirst({
    where: {
      OR: [
        { username: "admin" },
        { email: "admin@portfolio.dev" },
      ],
    },
  });

  const passwordHash = await bcrypt.hash("Admin2026!", 12);

  if (existingAdmin) {
    console.log(`ℹ️ Admin user already exists: ${existingAdmin.username} (${existingAdmin.email})`);
    // Update password to ensure it matches
    await prisma.adminUser.update({
      where: { id: existingAdmin.id },
      data: { passwordHash },
    });
    console.log("✅ Admin credentials verified & password synchronized (Password: Admin2026!)");
  } else {
    const newAdmin = await prisma.adminUser.create({
      data: {
        username: "admin",
        email: "admin@portfolio.dev",
        passwordHash,
        role: "ADMIN",
      },
    });
    console.log(`🎉 Admin user created successfully: ${newAdmin.username} (${newAdmin.email})`);
    console.log("🔑 Default credentials: username='admin' or email='admin@portfolio.dev', password='Admin2026!'");
  }
}

main()
  .catch((e) => {
    console.error("❌ Admin seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
