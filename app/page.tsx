import JSONLD from "./components/JSONLD";
import HeroAnimatedText from "./components/home/HeroAnimatedText";
import HeroCTAButtons from "./components/home/HeroCTAButtons";
import HeroSocialLinks from "./components/home/HeroSocialLinks";

import CodeSpace3D from "./components/home/CodeSpace3D";
import StatsSection from "./components/home/StatsSection";
import EducationSection from "./components/home/EducationSection";

export default function HomePage() {
  const allSocialUrls = [
    "https://github.com/ajitdev01",
    "https://linkedin.com/in/ajitdev01",
    "https://instagram.com/ajitdev01",
    "https://facebook.com/ajitdev01",
    "https://t.me/ajitdev01",
    "https://snapchat.com/add/ajitdev01",
    "https://leetcode.com/ajitdev01",
    "https://codeforces.com/profile/ajitdev01",
    "https://twitter.com/ajitdev01",
    "https://youtube.com/@ajitdev01",
    "https://medium.com/@ajitdev01",
    "https://hashnode.com/@ajitdev01",
    "https://dev.to/ajitdev01",
  ];

  return (
    <>
      {/* JSON-LD Schema */}
      <JSONLD
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://ajitdev.com/#person",
              "name": "Ajit Dev",
              "alternateName": ["Ajit Kumar", "AjitDev01", "ajitdev01"],
              "url": "https://ajitdev.com",
              "mainEntityOfPage": {
                "@id": "https://ajitdev.com/#profilepage"
              },
              "image": {
                "@type": "ImageObject",
                "@id": "https://ajitdev.com/#personimage",
                "url": "https://ajitdev.com/logo.png",
                "width": 400,
                "height": 400,
                "caption": "Ajit Dev — DevOps, DevSecOps & Cloud Security Developer"
              },
              "jobTitle": [
                "Full Stack Developer",
                "DevOps Engineer",
                "Cloud Security Enthusiast",
                "DevSecOps Engineer"
              ],
              "description": "Ajit Dev (ajitdev01) — Full Stack Developer, DevOps Engineer, Cloud Security and Cybersecurity Enthusiast from Katihar, Bihar, India. Student at Amity University Online and learner at Brainzima Innovation Institute. Specializes in Next.js, React, MERN Stack, cloud computing, CI/CD automation, security engineering, Linux, Docker, AWS, Kubernetes, Terraform.",
              "gender": "Male",
              "nationality": "Indian",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Katihar",
                "addressRegion": "Bihar",
                "addressCountry": "IN",
                "postalCode": "854105"
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "@id": "https://amityonline.com/#org",
                  "name": "Amity University Online",
                  "url": "https://amityonline.com"
                },
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://www.brainzima.com/#org",
                  "name": "Brainzima Innovation Institute",
                  "url": "https://www.brainzima.com/"
                }
              ],
              "sameAs": allSocialUrls
            },
            {
              "@type": "WebSite",
              "@id": "https://ajitdev.com/#website",
              "url": "https://ajitdev.com",
              "name": "AJITDEV",
              "alternateName": "Ajit Dev Portfolio & Technical Engineering Hub",
              "description": "Full Stack & DevOps Engineer Portfolio of Ajit Dev. Highlighting MERN, Next.js, Cloud Security, Docker, Kubernetes, and DSA (632+ solved).",
              "publisher": {
                "@id": "https://ajitdev.com/#person"
              }
            }
          ]
        }}
      />

      <div className="min-h-screen bg-slate-50 pt-20 sm:pt-28 md:pt-36 pb-8 md:pb-16 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

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
          <div className="mb-12 md:mb-20">
            <StatsSection />
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
