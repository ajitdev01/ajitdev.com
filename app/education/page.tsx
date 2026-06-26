import React from "react";
import { Metadata } from "next";
import EducationClient from "./EducationClient";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Education & Learning Journey | Ajit Dev Portfolio",
  description:
    "Academic credentials, specialized certifications in AWS & Web Security, and self-directed software engineering learning journey of Ajit Dev.",
  alternates: {
    canonical: "https://ajitdev.com/education",
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