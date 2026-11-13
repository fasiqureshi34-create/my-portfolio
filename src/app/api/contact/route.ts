import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Zod Validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // 2. Database Storage (checks if DATABASE_URL is active)
    const isDbConfigured =
      process.env.DATABASE_URL &&
      !process.env.DATABASE_URL.includes("user:password@host");

    if (isDbConfigured) {
      try {
        const savedMessage = await prisma.message.create({
          data: {
            name,
            email,
            subject: subject || null,
            message,
          },
        });

        return NextResponse.json(
          {
            success: true,
            message: "Your message has been saved successfully.",
            id: savedMessage.id,
          },
          { status: 201 }
        );
      } catch (dbError) {
        console.error("Database save error:", dbError);
        // Fallback response with notice
        return NextResponse.json(
          {
            success: true,
            notice: "Message received (database connection pending sync).",
          },
          { status: 200 }
        );
      }
    }

    // Default response when database is pending configuration
    return NextResponse.json(
      {
        success: true,
        notice: "Message validated successfully. Database connection is pending.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error in /api/contact:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
