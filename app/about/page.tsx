import type { Metadata } from "next";
import AboutMuiContent from "@/app/components/about/AboutMuiContent";

export const metadata: Metadata = {
  title: "About Ajit Dev — Full Stack Developer & DevOps Engineer",
  description: "Learn about Ajit Dev (ajitdev01), a Full Stack Engineer and DevOps Specialist from Katihar, Bihar, India. BCA Cloud & Security student specializing in Next.js, MERN, AWS, Docker, and Cloud Security.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Ajit Dev — Full Stack Developer & DevOps Engineer",
    description: "Learn about Ajit Dev (ajitdev01), a Full Stack Engineer and DevOps Specialist from Katihar, Bihar, India.",
    url: "https://ajitdev.com/about",
  },
};

export default function AboutPage() {
  return <AboutMuiContent />;
}