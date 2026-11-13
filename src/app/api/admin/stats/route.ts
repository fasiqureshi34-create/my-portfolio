import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminRequest } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req);
  if (auth.error) return auth.error;

  try {
    const [messagesTotal, messagesUnread, projectsTotal, skillsTotal] =
      await Promise.all([
        prisma.message.count(),
        prisma.message.count({ where: { read: false } }),
        prisma.project.count(),
        prisma.skill.count(),
      ]);

    const recentMessages = await prisma.message.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        subject: true,
        read: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      stats: {
        messagesTotal,
        messagesUnread,
        projectsTotal,
        skillsTotal,
      },
      recentMessages,
      dbStatus: "Healthy (Neon PostgreSQL Connected)",
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard metrics." },
      { status: 500 }
    );
  }
}
