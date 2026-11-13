import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminRequest } from "@/lib/adminAuth";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: NextRequest, context: RouteContext) {
  const auth = await verifyAdminRequest(req);
  if (auth.error) return auth.error;

  try {
    const { id } = await context.params;
    const body = await req.json();

    const updated = await prisma.message.update({
      where: { id },
      data: {
        read: typeof body.read === "boolean" ? body.read : true,
      },
    });

    return NextResponse.json({ success: true, message: updated });
  } catch (error) {
    console.error("Error updating message:", error);
    return NextResponse.json(
      { error: "Failed to update message status." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  const auth = await verifyAdminRequest(req);
  if (auth.error) return auth.error;

  try {
    const { id } = await context.params;

    await prisma.message.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { error: "Failed to delete message." },
      { status: 500 }
    );
  }
}
