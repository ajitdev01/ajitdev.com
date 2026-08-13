import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Resume & CV",
  description: "View and print the professional resume of Ajit Dev (ajitdev01), Full Stack Engineer and DevOps Specialist from Katihar, Bihar, India.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Professional Resume & CV — AJITDEV",
    description: "View and print the professional resume of Ajit Dev (ajitdev01), Full Stack Engineer and DevOps Specialist.",
    url: "https://ajitdev.com/resume",
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
