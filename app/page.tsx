import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import client-heavy sections with no SSR
const CodeSpace3D = dynamic(() => import("./components/home/CodeSpace3D"));
const StatsSection = dynamic(() => import("./components/home/StatsSection"));
const EducationSection = dynamic(() => import("./components/home/EducationSection"));

// ============================================
// ICONS (White Theme Friendly)
// ============================================
const FiGithub = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const FiLinkedin = ({ className }: { className?: string }) => (
  <svg className={className || "w-5 h-5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
  </svg>
);

const FiArrowRight = ({ className }: { className?: string }) => (
  <svg className={className || "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// ============================================
// FEATURED TECH STACK (Static CSS badges)
// ============================================
const FeaturedTech = () => {
  const techs = [
    "React", "Next.js", "TypeScript", "Node.js",
    "Express", "MongoDB", "Tailwind CSS", "Redux"
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {techs.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://ajitdev.com/#person",
                name: "Ajit Dev",
                alternateName: ["Ajit Kumar", "AjitDev01"],
                url: "https://ajitdev.com",
                email: "support@ajitdev.com",
                telephone: "+916205526784",
                jobTitle: ["Full Stack Developer", "DevOps Engineer", "Cloud Security Enthusiast"],
                description: "Ajit Dev (ajitdev01) — Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India. Available for hire.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Katihar",
                  addressRegion: "Bihar",
                  addressCountry: "India",
                },
                sameAs: allSocialUrls,
                knowsAbout: ["MERN Stack", "Next.js", "TypeScript", "React", "Node.js", "DevOps", "Cloud Security", "AWS", "Docker", "Kubernetes", "Terraform", "Linux", "CI/CD", "System Design"],
                hasOccupation: {
                  "@type": "Occupation",
                  name: "Full Stack Developer",
                  skills: "React, Next.js, Node.js, Express, MongoDB, TypeScript, AWS, Docker, Kubernetes, Terraform, CI/CD",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://ajitdev.com/#website",
                url: "https://ajitdev.com",
                name: "Ajit Dev — Full Stack Developer & DevOps Engineer Portfolio",
                description: "Portfolio of Ajit Dev (ajitdev01), a Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India.",
                publisher: { "@id": "https://ajitdev.com/#person" },
              },
              {
                "@type": "Organization",
                "@id": "https://ajitdev.com/#organization",
                name: "AjitDev",
                alternateName: ["ajitdev01", "Ajit Kumar", "Ajit Dev Portfolio"],
                url: "https://ajitdev.com",
                sameAs: allSocialUrls,
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "support@ajitdev.com",
                  contactType: "professional services",
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl" />
            <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-pink-100/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6 text-center lg:text-left transition-all duration-700">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 mx-auto lg:mx-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-indigo-700 tracking-wide">Available for Opportunities</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-gray-900">
                  <span className="relative inline-block pb-2">
                    <span className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      Full Stack Engineer
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 origin-left rounded-full scale-x-100 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  I build <span className="text-gray-900 font-semibold">production-grade web applications</span> that solve real business problems.
                  Specialized in <span className="text-indigo-600 font-medium">MERN Stack</span>, <span className="text-indigo-600 font-medium">Next.js</span>,
                  and <span className="text-indigo-600 font-medium">TypeScript</span>.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
                    <span className="relative z-10 flex items-center gap-2">
                      Hire Me → Build Scalable Apps
                      <FiArrowRight />
                    </span>
                  </Link>

                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-700 bg-white border border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
                  >
                    View Portfolio
                    <FiArrowRight />
                  </Link>
                </div>

                <FeaturedTech />

                <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
                  <div className="flex -space-x-2">
                    <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200" aria-label="GitHub">
                      <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200" aria-label="LinkedIn">
                      <FiLinkedin />
                    </a>
                    <a href="https://leetcode.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200 text-[10px] font-bold text-gray-700">
                      LC
                    </a>
                    <a href="https://dev.to/ajitdev01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center hover:bg-indigo-100 transition-colors duration-200 text-[10px] font-bold text-gray-700">
                      DEV
                    </a>
                  </div>
                  <span className="text-xs text-gray-500">
                    @ajitdev01 everywhere
                  </span>
                </div>
              </div>

              <CodeSpace3D />
            </div>

            <StatsSection />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-700">
            <div className="flex flex-col items-center gap-2">
              <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center" aria-hidden="true">
                <div className="w-1 h-2 bg-indigo-500 rounded-full mt-1 animate-bounce-slow" />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <EducationSection />
      </div>

      {/* Hidden SEO Keywords */}
      <span className="sr-only" aria-hidden="true">
        Ajit Dev, Ajit Kumar, AjitDev01, Ajit Dev Portfolio, Ajit Dev Developer,
        Full Stack Developer India, MERN Stack Developer Portfolio, Next.js Developer Portfolio,
        DevOps Engineer India, Cloud Security Engineer, DevSecOps Engineer,
        Katihar Developer, Katihar Full Stack Developer, Katihar Software Engineer,
        Bihar Developer, Bihar Full Stack Developer, Bihar DevOps Engineer,
        India Full Stack Developer, India DevOps Engineer, India Next.js Developer,
        React Node.js Developer, TypeScript Full Stack, MongoDB Express React Node
      </span>
    </>
  );
}
