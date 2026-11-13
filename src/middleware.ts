import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/token";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only run for admin pages
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("admin_token")?.value;
  const isAuth = token ? await verifyToken(token) : null;

  // If hitting the login page
  if (pathname === "/admin/login") {
    if (isAuth) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // If hitting root /admin, redirect to /admin/dashboard or /admin/login
  if (pathname === "/admin") {
    if (isAuth) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Any other /admin/* protected route
  if (!isAuth) {
    const loginUrl = new URL("/admin/login", req.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
