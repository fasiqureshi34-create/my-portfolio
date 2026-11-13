import { NextRequest, NextResponse } from "next/server";
import { verifyToken, TokenPayload } from "./token";

export async function verifyAdminRequest(
  req: NextRequest
): Promise<{ error: NextResponse | null; user: TokenPayload | null }> {
  const token = req.cookies.get("admin_token")?.value;

  if (!token) {
    return {
      error: NextResponse.json(
        { error: "Unauthorized. Admin session required." },
        { status: 401 }
      ),
      user: null,
    };
  }

  const payload = await verifyToken(token);
  if (!payload || !payload.id) {
    return {
      error: NextResponse.json(
        { error: "Invalid or expired session. Please log in again." },
        { status: 401 }
      ),
      user: null,
    };
  }

  return { error: null, user: payload };
}
