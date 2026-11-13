import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminRequest } from "@/lib/adminAuth";
import { Prisma } from "@prisma/client";

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function PUT(req: NextRequest, context: RouteContext) {
  const auth = await verifyAdminRequest(req);
  if (auth.error) return auth.error;

  try {
    const { id } = await context.params;
    const body = await req.json();

    const {
      title,
      slug,
      number,
      description,
      stack,
      githubUrl,
      liveUrl,
      featured,
    } = body;

    const dataToUpdate: Prisma.ProjectUpdateInput = {};

    if (title !== undefined) dataToUpdate.title = title.trim();
    if (slug !== undefined) dataToUpdate.slug = slug.trim();
    if (number !== undefined) dataToUpdate.number = number.trim();
    if (description !== undefined) dataToUpdate.description = description.trim();
    if (stack !== undefined) {
      const stackArray: string[] = Array.isArray(stack)
        ? stack
        : typeof stack === "string"
        ? stack.split(",").map((s: string) => s.trim()).filter(Boolean)
        : [];
      dataToUpdate.stack = stackArray;
    }
    if (githubUrl !== undefined) dataToUpdate.githubUrl = githubUrl?.trim() || null;
    if (liveUrl !== undefined) dataToUpdate.liveUrl = liveUrl?.trim() || null;
    if (featured !== undefined) dataToUpdate.featured = Boolean(featured);

    const updated = await prisma.project.update({
      where: { id },
      data: dataToUpdate,
    });

    return NextResponse.json({ success: true, project: updated });
  } catch (error: unknown) {
    console.error("Error updating project:", error);
    const err = error as { code?: string; message?: string };
    if (err.code === "P2002") {
      return NextResponse.json(
        { error: "Another project already uses this slug." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Failed to update project." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  const auth = await verifyAdminRequest(req);
  if (auth.error) return auth.error;

  try {
    const { id } = await context.params;

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, message: "Project deleted successfully." });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project." },
      { status: 500 }
    );
  }
}
