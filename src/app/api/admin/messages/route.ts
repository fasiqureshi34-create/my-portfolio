import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminRequest } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req);
  if (auth.error) return auth.error;

  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });

    const total = messages.length;
    const unread = messages.filter((m) => !m.read).length;

    return NextResponse.json({
      success: true,
      messages,
      stats: { total, unread, read: total - unread },
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages from database." },
      { status: 500 }
    );
  }
}
