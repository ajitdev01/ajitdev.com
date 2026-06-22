import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ajit Kumar | Full Stack Engineer — MERN, Next.js, TypeScript",
  description:
    "Ajit Kumar is a Full Stack Engineer from Katihar, Bihar, India specializing in MERN Stack, Next.js, TypeScript, and scalable web applications. Available for remote opportunities.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    title: "Ajit Kumar | Full Stack Engineer — MERN & Next.js Developer",
    description:
      "Full Stack Engineer from Katihar, Bihar specializing in MERN Stack, Next.js, TypeScript. View projects and hire for opportunities.",
    url: "https://ajitdev.com/about",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Kumar | Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in MERN Stack, Next.js, and TypeScript.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
