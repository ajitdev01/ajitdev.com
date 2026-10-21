import type { Metadata } from "next";
import JSONLD from "./components/JSONLD";
import HeroAnimatedText from "./components/home/HeroAnimatedText";
import HeroCTAButtons from "./components/home/HeroCTAButtons";
import HeroSocialLinks from "./components/home/HeroSocialLinks";

import CodeSpace3D from "./components/home/CodeSpace3D";
import StatsSection from "./components/home/StatsSection";
import VerifiedCodingProfiles from "./components/home/VerifiedCodingProfiles";
import EducationSection from "./components/home/EducationSection";
import { getHomepageGraph } from "@/lib/schema";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ajit Dev | CTO @ Brainzima · Full Stack Developer & DevOps Engineer",
  description: "Ajit Dev (@ajitdev01, Ajit Kumar) is the CTO at Brainzima Innovation Institute, Full Stack Developer, DevOps Engineer & Cloud Security Specialist from Katihar, Bihar, India.",
  keywords: [...PAGE_KEYWORDS.home],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ajit Dev | CTO @ Brainzima · Full Stack Developer & DevOps Engineer",
    description: "Full Stack Developer, DevOps Engineer & Cloud Security portfolio by Ajit Dev (@ajitdev01). Next.js, React, MERN Stack, AWS, Docker, Kubernetes from Katihar, Bihar, India.",
    url: `${SITE_URL}/`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Ajit Dev Portfolio" }],
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Identity Graph — Person + WebSite + ProfilePage */}
      <JSONLD schema={getHomepageGraph()} />

      <div className="min-h-screen bg-slate-50 pt-20 sm:pt-28 md:pt-36 pb-8 md:pb-16 overflow-x-hidden relative">
        {/* Ambient Developer Grid & Soft Light Accents */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-20 select-none">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <HeroAnimatedText />
              <div className="mt-6 mb-8">
                <HeroCTAButtons />
              </div>
              <HeroSocialLinks />
            </div>

            {/* Right 3D Interactive Canvas */}
            <CodeSpace3D />
          </div>

          {/* Stats Section */}
          <div className="mb-12 md:mb-16">
            <StatsSection />
          </div>

          {/* Dedicated Verified Coding Profiles & Leadership Section */}
          <div className="mb-12 md:mb-20">
            <VerifiedCodingProfiles />
          </div>

          {/* Education & Qualifications Section */}
          <div>
            <EducationSection />
          </div>

        </div>
      </div>
    </>
  );
}
