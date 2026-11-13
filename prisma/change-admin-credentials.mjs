import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

/**
 * Usage:
 *   node prisma/change-admin-credentials.mjs <new_username> <new_email> <new_password>
 *
 * Example:
 *   node prisma/change-admin-credentials.mjs fasi fasi.qureshi@example.com MySecretPass123!
 */

async function main() {
  const args = process.argv.slice(2);
  const newUsername = args[0] || "fasi";
  const newEmail = args[1] || "fasi.developer@gmail.com";
  const newPassword = args[2] || "Admin2026!";

  console.log("🔐 Updating Admin Credentials in Neon Database...");
  console.log(`- Username: ${newUsername}`);
  console.log(`- Email:    ${newEmail}`);
  console.log(`- Password: ${"*".repeat(newPassword.length)}`);

  const passwordHash = await bcrypt.hash(newPassword, 12);

  const existing = await prisma.adminUser.findFirst();

  if (existing) {
    const updated = await prisma.adminUser.update({
      where: { id: existing.id },
      data: {
        username: newUsername.toLowerCase(),
        email: newEmail.toLowerCase(),
        passwordHash,
      },
    });
    console.log(`\n✅ Admin credentials updated successfully!`);
    console.log(`   ID: ${updated.id}`);
    console.log(`   Username: ${updated.username}`);
    console.log(`   Email:    ${updated.email}`);
  } else {
    const created = await prisma.adminUser.create({
      data: {
        username: newUsername.toLowerCase(),
        email: newEmail.toLowerCase(),
        passwordHash,
        role: "ADMIN",
      },
    });
    console.log(`\n🎉 New admin user created!`);
    console.log(`   ID: ${created.id}`);
    console.log(`   Username: ${created.username}`);
    console.log(`   Email:    ${created.email}`);
  }
}

main()
  .catch((e) => {
    console.error("❌ Error updating credentials:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
