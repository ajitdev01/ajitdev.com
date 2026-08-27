import type { Metadata } from "next";
import AboutMuiContent from "@/app/components/about/AboutMuiContent";
import JSONLD from "@/app/components/JSONLD";
import { getProfilePageSchema } from "@/lib/schema";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Ajit Dev – Full Stack & DevOps Engineer (India)",
  description: "Learn about Ajit Dev, a Full-Stack (MERN/Next.js) & DevOps engineer from Katihar, Bihar. Builds scalable web/cloud apps and cloud security pipelines.",
  keywords: [...PAGE_KEYWORDS.about],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Ajit Dev – Full Stack & DevOps Engineer (India)",
    description: "Learn about Ajit Dev, a Full-Stack (MERN/Next.js) & DevOps engineer from Katihar, Bihar, India.",
    url: "https://ajitdev.com/about",
    type: "profile",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Ajit Dev — Full Stack & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ajit Dev – Full Stack & DevOps Engineer (India)",
    description: "Learn about Ajit Dev, a Full-Stack (MERN/Next.js) & DevOps engineer from Katihar, Bihar, India.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

export default function AboutPage() {
  const profileSchema = getProfilePageSchema(
    "About Ajit Dev – Full Stack & DevOps Engineer",
    "Learn about Ajit Dev, a Full-Stack (MERN/Next.js) & DevOps engineer from Katihar, Bihar, India.",
    "https://ajitdev.com/about"
  );

  return (
    <>
      <JSONLD schema={profileSchema} />
      <AboutMuiContent />
    </>
  );
}