import type { Metadata } from "next";
import AboutContent from "@/app/components/about/AboutContent";
import JSONLD from "@/app/components/JSONLD";
import { getProfilePageSchema, getBreadcrumbSchema, getPersonSchema } from "@/lib/schema";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Ajit Dev – Full Stack Developer & DevOps Engineer from Katihar, Bihar",
  description: "Learn about Ajit Dev (ajitdev01), a Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India. MERN Stack, Next.js, TypeScript, AWS, Docker, Kubernetes specialist.",
  keywords: [...PAGE_KEYWORDS.about],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Ajit Dev – Full Stack Developer & DevOps Engineer",
    description: "Learn about Ajit Dev, a Full Stack Developer & DevOps Engineer from Katihar, Bihar, India. Specializing in MERN Stack, Next.js, AWS, Docker & Cloud Security.",
    url: `${SITE_URL}/about`,
    type: "profile",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "About Ajit Dev — Full Stack Developer & DevOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ajit Dev – Full Stack Developer & DevOps Engineer",
    description: "Learn about Ajit Dev, a Full Stack Developer & DevOps Engineer from Katihar, Bihar, India.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function AboutPage() {
  const profileSchema = getProfilePageSchema(
    "About Ajit Dev – Full Stack Developer & DevOps Engineer",
    "Learn about Ajit Dev, a Full Stack Developer & DevOps Engineer from Katihar, Bihar, India. Specializing in MERN Stack, Next.js, AWS, Docker & Cloud Security.",
    `${SITE_URL}/about`
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ]);

  return (
    <>
      <JSONLD schema={profileSchema} />
      <JSONLD schema={breadcrumbSchema} />
      <AboutContent />
    </>
  );
}