import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kumar Shantanu | Software Technical Writer",

  description:
    "Software Technical Writer specializing in SaaS documentation, DITA XML, API documentation, user guides, release notes, troubleshooting guides, and knowledge base content.",

  keywords: [
    "Software Technical Writer",
    "Technical Writer",
    "DITA XML",
    "API Documentation",
    "User Guides",
    "Release Notes",
    "Knowledge Base",
    "Markdown",
    "Oxygen XML",
    "SaaS Documentation",
    "Next.js Portfolio",
  ],

  authors: [
    {
      name: "Kumar Shantanu",
    },
  ],

  creator: "Kumar Shantanu",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Kumar Shantanu | Software Technical Writer",
    description:
      "Software Technical Writer specializing in SaaS documentation, DITA XML, API documentation, and user guides.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />

        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
