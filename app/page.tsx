import dynamic from "next/dynamic";
import Link from "next/link";
import JSONLD from "./components/JSONLD";

// Dynamically import interactive sections
const CodeSpace3D = dynamic(() => import("./components/home/CodeSpace3D"));
const StatsSection = dynamic(() => import("./components/home/StatsSection"));
const EducationSection = dynamic(() => import("./components/home/EducationSection"));

// Inline SVG Icons for better bundle size and performance
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
  <svg className={className || "w-4 h-4"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const TECH_STACK_GROUPS = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Material UI", "Framer Motion", "GSAP", "Shadcn UI"]
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express.js", "PHP", "REST API", "JWT Authentication", "MongoDB", "MySQL", "SQL", "MVC Architecture"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Linux", "Git", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Nginx", "DevSecOps Basics"]
  },
  {
    category: "Languages",
    items: ["C++", "JavaScript", "TypeScript", "PHP", "Python", "SQL"]
  }
];

export default function HomePage() {
  const allSocialUrls = [
    "https://github.com/ajitdev01",
    "https://linkedin.com/in/ajitdev01",
    "https://instagram.com/ajitdev01",
    "https://facebook.com/ajitdev01",
    "https://t.me/ajitdev01",
    "https://leetcode.com/ajitdev01",
    "https://twitter.com/ajitdev01",
  ];

  return (
    <>
      <JSONLD
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://ajitdev.com/#person",
              "name": "Ajit Kumar",
              "alternateName": ["Ajit Dev", "AjitDev01", "ajitdev01"],
              "url": "https://ajitdev.com",
              "image": "https://ajitdev.com/logo.png",
              "jobTitle": [
                "Software Engineer",
                "Full Stack Developer",
                "DevOps Engineer",
                "Cloud Security Engineer"
              ],
              "description": "Ajit Kumar (Ajit Dev) - Software Engineer, Full Stack Developer, DevOps and Cloud Security Engineer. BCA Student at Amity University Online. Expert in Next.js, Docker, Kubernetes, Terraform, and DSA.",
              "gender": "Male",
              "nationality": "Indian",
              "sameAs": allSocialUrls
            }
          ]
        }}
      />

      <div className="relative min-h-screen bg-[#030712] overflow-hidden text-slate-100 selection:bg-indigo-500/30 selection:text-white">
        
        {/* Glow Background Gradients */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-[120px] opacity-60" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] opacity-40" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] opacity-40" />
        </div>

        {/* Hero Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline & Bio */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold tracking-wide uppercase">Open for Opportunities</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white">
                Hi, I'm <span className="text-gradient">Ajit Kumar</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300">
                Software Engineer & Cloud Specialist
              </h2>

              <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                I build secure, high-concurrency <span className="text-white font-semibold">Full Stack web applications</span> and optimize automated infrastructure pipelines.
                Currently pursuing a <span className="text-indigo-400 font-semibold">Bachelor of Computer Applications</span> in Cloud & Security at Amity University Online, with a strong foundation in <span className="text-indigo-400 font-semibold">Data Structures & Algorithms</span>.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <Link
                  href="/contact"
                  className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40"
                >
                  Hire Me / Collaborate
                  <FiArrowRight />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 bg-slate-900/60 border border-white/10 hover:border-indigo-500/30 hover:bg-slate-900/90 transition-all duration-200"
                >
                  Explore Projects
                  <FiArrowRight />
                </Link>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-4 justify-center lg:justify-start pt-4 text-slate-400">
                <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="https://leetcode.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 text-xs font-bold bg-slate-900 border border-white/10 hover:border-indigo-500/30 hover:text-white rounded-lg transition-colors">
                  LeetCode: 450+ Solved
                </a>
              </div>
            </div>

            {/* Right Column: Code block */}
            <div className="relative z-10">
              <CodeSpace3D />
            </div>
          </div>

          {/* Stats section */}
          <StatsSection />
        </section>

        {/* Tech Stack section */}
        <section className="relative z-10 py-16 bg-slate-950/20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Advanced Technical Stack</h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
                Comprehensive toolkit for building, securing, containerizing, and deploying production-grade systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {TECH_STACK_GROUPS.map((group) => (
                <div key={group.category} className="p-6 rounded-2xl glass-panel">
                  <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 border border-white/5 text-slate-300 hover:border-indigo-500/30 hover:text-indigo-400 transition-all duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Industry Timeline */}
        <EducationSection />

        {/* GitHub Activity & Streaks Grid (Mock Visualization) */}
        <section className="relative z-10 py-16 border-t border-white/5 bg-slate-950/25">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Text column */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                  Consistency
                </span>
                <h2 className="text-3xl font-black text-white">Daily Commits & Contribution Activity</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I believe consistency builds mastery. Practicing coding daily, resolving LeetCode logic puzzles, and committing backend microservices modules to GitHub handles.
                </p>
                <div className="pt-2">
                  <a
                    href="https://github.com/ajitdev01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-300 hover:underline"
                  >
                    Check my GitHub Profile
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Grid Column */}
              <div className="lg:col-span-7 p-6 rounded-2xl glass-panel">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-semibold text-white">GitHub Activity Mock Grid</div>
                  <div className="text-[10px] text-slate-500">ajitdev01 / 2026 contributions</div>
                </div>
                <div className="grid grid-flow-col grid-rows-7 gap-1 h-32 overflow-hidden select-none">
                  {Array.from({ length: 364 }).map((_, i) => {
                    const level = Math.random() > 0.45 ? (Math.random() > 0.6 ? (Math.random() > 0.7 ? "bg-emerald-500" : "bg-emerald-600") : "bg-emerald-700") : "bg-slate-900";
                    return (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-xs transition-colors duration-300 hover:scale-125 ${level}`}
                        title={`Day ${i + 1}`}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 mt-4 text-[10px] text-slate-500 justify-between">
                  <div className="flex gap-1.5 items-center">
                    <span>Less</span>
                    <span className="w-2.5 h-2.5 bg-slate-900 rounded-xs" />
                    <span className="w-2.5 h-2.5 bg-emerald-700 rounded-xs" />
                    <span className="w-2.5 h-2.5 bg-emerald-600 rounded-xs" />
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-xs" />
                    <span>More</span>
                  </div>
                  <div className="font-bold text-slate-400">Total: 1,840+ Commits</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials & Certifications */}
        <section className="relative z-10 py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Trust & Certifications</h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
                Industry training, verified credentials, and client endorsements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial card */}
              <div className="p-6 rounded-2xl glass-panel relative flex flex-col justify-between">
                <span className="absolute top-6 right-6 text-6xl font-serif text-white/5 pointer-events-none select-none">“</span>
                <p className="text-slate-350 italic text-sm leading-relaxed mb-6">
                  "Ajit Dev has a high degree of technical capability, especially in designing MERN stack architectures and automated scripting tasks. His problem-solving speeds and work ethic are exceptional."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-indigo-400 text-xs border border-white/5">
                    BI
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Industry Mentor</h4>
                    <p className="text-[10px] text-slate-500">Brainzima Innovation Institute</p>
                  </div>
                </div>
              </div>

              {/* Certifications card */}
              <div className="p-6 rounded-2xl glass-panel space-y-4">
                <h3 className="text-base font-bold text-white border-b border-white/5 pb-2">Verified Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-white">DevOps System Specialist Training</h4>
                      <p className="text-[10px] text-slate-500">Brainzima Institute (ISO Certified)</p>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold rounded-lg border border-emerald-500/20 flex-shrink-0">ISO Certified</span>
                  </li>
                  <li className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-white">BCA Coursework Completion (Ongoing)</h4>
                      <p className="text-[10px] text-slate-500">Amity University Online</p>
                    </div>
                    <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-lg border border-indigo-500/20 flex-shrink-0">Cloud & Security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Authority Showcases (Blog, Research, News) */}
        <section className="relative z-10 py-16 border-t border-white/5 bg-slate-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white">Explore My Platforms</h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
                Read deep-dive tech blogs, explore research whitepapers, or browse the latest tech news feeds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Blog Card */}
              <div className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block mb-2">Technical Blog</span>
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-indigo-400 transition-colors">
                    <Link href="/blog">TypeScript & Next.js Performance Guides</Link>
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    In-depth articles optimizing bundle sizes, SSR page hydration, and securing REST APIs with JWT cookies.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300"
                >
                  Browse Blog Feed
                  <span>→</span>
                </Link>
              </div>

              {/* Research Card */}
              <div className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-2">Research Papers</span>
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-purple-400 transition-colors">
                    <Link href="/research">Docker & Kubernetes Architecture Deep Dive</Link>
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Professional write-ups detailing namespaces, Union File System layers, and consensus orchestration in distributed control planes.
                  </p>
                </div>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-purple-300"
                >
                  Explore Research Hub
                  <span>→</span>
                </Link>
              </div>

              {/* News Card */}
              <div className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block mb-2">Latest News</span>
                  <h3 className="text-lg font-bold text-white mb-2 hover:text-pink-400 transition-colors">
                    <Link href="/news">AI & DevOps Real-time Industry Tracker</Link>
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    Stay up-to-date with tech updates, OpenAI model releases, AWS cloud changes, and software engineering framework logs.
                  </p>
                </div>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1 text-xs font-bold text-pink-400 hover:text-pink-300"
                >
                  Read News Feed
                  <span>→</span>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Contact Form trigger */}
        <section className="relative z-10 py-16 border-t border-white/5 bg-gradient-to-b from-transparent to-slate-950/40">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-white">Let's Build Something Premium Together</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              I am open to software development roles, DevOps automation, cloud networking audits, and technical writing projects. Drop me a line!
            </p>
            <div className="pt-4 flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all"
              >
                Send Message / Contact Me
                <FiArrowRight />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 bg-slate-900 border border-white/10 hover:border-indigo-500/25 transition-all"
              >
                Download Resume PDF
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
