import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ajit Dev — Full Stack & DevOps Applications Portfolio",
  description:
    "Full Stack and DevOps projects by Ajit Dev (ajitdev01). MERN Stack, Next.js, TypeScript, AWS, Docker, Kubernetes — real-world applications with live demos.",
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
