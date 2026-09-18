import React from "react";
import { Metadata } from "next";
import EducationClient from "./EducationClient";
import JSONLD from "@/app/components/JSONLD";
import { PAGE_KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ajit Dev Education & Certifications – BCA, Cloud Security",
  description:
    "Ajit Dev holds a BCA in Computer Applications and certifications in Cloud Computing & Security. View his education timeline and professional training.",
  keywords: [...PAGE_KEYWORDS.education],
  alternates: {
    canonical: "/education",
  },
  openGraph: {
    title: "Ajit Dev Education & Certifications – BCA, Cloud Security",
    description: "Academic credentials, specialized certifications in Cloud Security & AWS, and self-directed software engineering learning journey of Ajit Dev.",
    url: "https://ajitdev.com/education",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev Education & Certifications Timeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev Education & Certifications – BCA, Cloud Security",
    description: "Ajit Dev holds a BCA in Computer Applications and certifications in Cloud Computing & Security.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

export default function EducationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOccupationalCredential",
        "@id": "https://ajitdev.com/education/#bca",
        "name": "Bachelor of Computer Applications (BCA)",
        "credentialCategory": "degree",
        "educationalLevel": "Bachelor",
        "about": {
          "@type": "Thing",
          "name": "Cloud & Security"
        },
        "recognizedBy": {
          "@type": "EducationalOrganization",
          "name": "Amity University Online",
          "url": "https://amityonline.com"
        }
      },
      {
        "@type": "Course",
        "@id": "https://ajitdev.com/education/#brainzima",
        "name": "Full Stack Software Development",
        "description": "ISO Certified training program in web development and full stack.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Brainzima Innovation Institute",
          "url": "https://www.brainzima.com"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://rexvel.com",
        "name": "Rexvel",
        "url": "https://rexvel.com",
        "description": "Project Exposure & Real-World Development Experience"
      }
    ]
  };

  return (
    <>
      <JSONLD schema={schema} />
      <EducationClient />
    </>
  );
}