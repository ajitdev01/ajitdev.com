import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Full Stack Web Applications Portfolio",
  description:
    "Full Stack web application projects by Ajit Kumar. MERN Stack, Next.js, TypeScript — real-world applications with live demos.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
