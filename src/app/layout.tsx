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
    default: "Tom | Software Engineer & Web Developer",
    template: "%s | Tom's Dev Portfolio",
  },
  description:
    "Personal developer portfolio showcasing modern web applications, technical skills, professional experience, and projects built with Next.js and TypeScript.",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Tom" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tom's Dev Portfolio",
    title: "Tom | Software Engineer & Web Developer",
    description:
      "Explore my projects, technical skills, experience, and ways to connect.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom | Software Engineer & Web Developer",
    description:
      "Explore my projects, technical skills, experience, and ways to connect.",
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
