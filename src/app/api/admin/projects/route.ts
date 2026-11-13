import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAdminRequest } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req);
  if (auth.error) return auth.error;

  try {
    const projects = await prisma.project.findMany({
      orderBy: { number: "asc" },
    });

    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const auth = await verifyAdminRequest(req);
  if (auth.error) return auth.error;

  try {
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

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required." },
        { status: 400 }
      );
    }

    // Generate slug if not provided
    const cleanSlug =
      slug?.trim() ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    // Process stack as string array
    const stackArray: string[] = Array.isArray(stack)
      ? stack
      : typeof stack === "string"
      ? stack.split(",").map((s: string) => s.trim()).filter(Boolean)
      : [];

    // Count existing projects to assign number if not given
    const count = await prisma.project.count();
    const formattedNumber =
      number?.trim() || String(count + 1).padStart(2, "0");

    const project = await prisma.project.create({
      data: {
        title: title.trim(),
        slug: cleanSlug,
        number: formattedNumber,
        description: description.trim(),
        stack: stackArray,
        githubUrl: githubUrl?.trim() || null,
        liveUrl: liveUrl?.trim() || null,
        featured: Boolean(featured),
      },
    });

    return NextResponse.json({ success: true, project }, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating project:", error);
    const err = error as { code?: string; message?: string };
    if (err.code === "P2002") {
      return NextResponse.json(
        { error: "A project with this slug already exists." },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create project." },
      { status: 500 }
    );
  }
}
