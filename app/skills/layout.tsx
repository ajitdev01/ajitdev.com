import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Expertise | Full Stack Development",
  description:
    "Technical skills and expertise of Ajit Kumar. Full Stack Development with React, Node.js, Next.js, TypeScript, MongoDB, and cloud deployment.",
  alternates: {
    canonical: "/skills",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
