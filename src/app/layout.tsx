import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Prasad | Backend & AI Engineer",
  description:
    "Backend & AI Engineer specializing in Node.js, TypeScript, Express, MySQL,React, LangChain, and AI-powered applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}