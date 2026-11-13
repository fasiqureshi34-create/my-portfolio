import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const viewport: Viewport = {
  themeColor: "#08080c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fasi Ur Rehman (Fasi Qureshi) | Full-Stack Web & Mobile Software Engineer",
    template: "%s | Fasi Ur Rehman Portfolio",
  },
  description:
    "Official developer portfolio of Fasi Ur Rehman (Fasi Qureshi) – Full-Stack Web & Mobile Software Engineer based in Kotli, AJK, Pakistan. Specialist in Flutter, React Native, Next.js, Python FastAPI, PostgreSQL, and scalable systems.",
  keywords: [
    "Fasi Ur Rehman",
    "Fasi Qureshi",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Flutter Developer",
    "React Native",
    "Next.js 15",
    "Python FastAPI",
    "PostgreSQL",
    "Kotli AJK",
    "Software Engineer Pakistan",
  ],
  authors: [{ name: "Fasi Ur Rehman (Fasi Qureshi)" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fasi Ur Rehman - Dev Portfolio",
    title: "Fasi Ur Rehman (Fasi Qureshi) | Full-Stack Web & Mobile Software Engineer",
    description:
      "Explore production-grade mobile applications, full-stack systems, offline-first architectures, and engineering projects by Fasi Ur Rehman.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fasi Ur Rehman | Full-Stack Web & Mobile Software Engineer",
    description:
      "Explore production-grade mobile applications, full-stack systems, and engineering projects by Fasi Ur Rehman.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
