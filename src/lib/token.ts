import { SignJWT } from "jose/jwt/sign";
import { jwtVerify } from "jose/jwt/verify";
import type { JWTPayload } from "jose";

const JWT_SECRET =
  process.env.JWT_SECRET || "portfolio-super-secret-jwt-key-2026";
const secretKey = new TextEncoder().encode(JWT_SECRET);

export interface TokenPayload extends JWTPayload {
  id: string;
  email: string;
  username: string;
}

export async function signToken(payload: TokenPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);
}

export async function verifyToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload as TokenPayload;
  } catch {
    return null;
  }
}
