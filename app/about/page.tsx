import Link from "next/link";
import Image from "next/image";

// ========== INLINE SVG ICONS (eliminates react-icons bundle) ==========
const IP = { strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
const ic = (s: number, c?: string) => ({ width: s, height: s, viewBox: "0 0 24 24", className: c, stroke: "currentColor", ...IP });

const FiUser = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const FiCode = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>;
const FiBriefcase = ({ className }: { className?: string }) => <svg {...ic(24, className)}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>;
const FiMapPin = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const FiMail = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const FiGithub = ({ className }: { className?: string }) => <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>;
const FiLinkedin = ({ className }: { className?: string }) => <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" /></svg>;
const FiBookOpen = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
const FiCheckCircle = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>;
const FiDatabase = ({ className }: { className?: string }) => <svg {...ic(24, className)}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;
const FiAward = ({ className }: { className?: string }) => <svg {...ic(24, className)}><circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" /></svg>;
const FiExternalLink = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>;

// ========== SKILLS DATA ==========
const skills = [
  { name: "MERN Stack", icon: FiCode, color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", icon: FiCode, color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", icon: FiCode, color: "from-blue-600 to-indigo-500" },
  { name: "React.js", icon: FiCode, color: "from-cyan-500 to-blue-500" },
  { name: "Node.js", icon: FiDatabase, color: "from-green-500 to-teal-500" },
  { name: "MongoDB", icon: FiDatabase, color: "from-green-600 to-lime-500" },
  { name: "Express.js", icon: FiCode, color: "from-gray-600 to-gray-800" },
  { name: "Tailwind CSS", icon: FiCode, color: "from-teal-400 to-cyan-400" },
];

// ========== CONTACT DETAILS ==========
const contactDetails = [
  { icon: FiMail, label: "Support Email", value: "support@ajitdev.com", href: "mailto:support@ajitdev.com" },
  { icon: FiMail, label: "Personal Email", value: "ajitk23192@gmail.com", href: "mailto:ajitk23192@gmail.com" },
  { icon: FiMapPin, label: "Location", value: "Katihar, Bihar, India", href: null },
  { icon: FiBriefcase, label: "Role", value: "Full Stack Developer & DevOps Engineer", href: null },
  { icon: FiAward, label: "Experience", value: "Building scalable web applications", href: null },
];

// ========== MAIN ABOUT COMPONENT ==========
const About = () => {
  return (
    <div className="min-h-screen bg-white transition-opacity duration-300">
      <main className="pt-20 pb-16" id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ===== HERO SECTION ===== */}
          <section className="text-center mb-16">
            <div className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl mb-6">
              <FiUser className="w-8 h-8 text-blue-600" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
              Ajit Dev
            </h1>

            <p className="text-sm text-gray-650 font-medium mb-4">
              (ajitdev01)
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />

            <p className="text-xl text-gray-650 max-w-2xl mx-auto">
              <span className="font-semibold text-gray-900">
                Full Stack Developer · DevOps Engineer
              </span>
              <br />
              MERN Stack · Next.js · AWS · Cloud Security
            </p>
          </section>

          {/* ===== MAIN CONTENT GRID ===== */}
          <div className="grid lg:grid-cols-3 gap-12 mb-1">

            {/* LEFT COLUMN - Profile & Contact */}
            <div className="lg:col-span-1">
              {/* Profile Image */}
              <div className="mb-6">
                <Image
                  src="/my.jpeg"
                  alt="Ajit Kumar - Full Stack Engineer from Katihar, Bihar, India"
                  width={400}
                  height={400}
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-lg border border-gray-200 h-auto"
                  priority
                />
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                {contactDetails.map((detail) => {
                  const IconComp = detail.icon;
                  return (
                    <div
                      key={detail.label}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                    >
                      <IconComp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-650 mb-0.5">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-gray-800 text-sm hover:text-blue-600 transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-gray-800 text-sm">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN - About Content (2 cols) */}
            <div className="lg:col-span-2">
              {/* Professional Summary */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I&apos;m <strong className="text-gray-900">Ajit Dev</strong> (ajitdev01), a <strong>Full Stack Developer</strong> and <strong>DevOps Engineer</strong> from{" "}
                    <strong>Katihar, Bihar, India</strong>. I specialize in building{" "}
                    <strong>production-grade web applications</strong> using the{" "}
                    <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js),{" "}
                    <strong>Next.js</strong>, and <strong>TypeScript</strong>. I also work with{" "}
                    <strong>AWS, Docker, Kubernetes, Terraform</strong> and focus on{" "}
                    <strong>Cloud Security</strong> and <strong>DevOps</strong> practices.
                  </p>
                  <p>
                    My focus is on writing clean, maintainable code and creating scalable
                    architectures that solve real business problems. I&apos;ve delivered multiple
                    full-stack projects from concept to deployment, ensuring performance,
                    security, and great user experiences.
                  </p>
                  <p>
                    <Link href="/projects" className="text-blue-600 font-medium hover:text-blue-700 hover:underline inline-flex items-center gap-1">
                      View my projects <FiExternalLink className="w-3 h-3" />
                    </Link>{" "}
                    to see my work in action, or{" "}
                    <Link href="/skills" className="text-blue-600 font-medium hover:text-blue-700 hover:underline">
                      explore my technical skills
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`bg-gradient-to-br ${skill.color} p-3 rounded-lg text-center`}
                      >
                        <SkillIcon className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-white text-xs font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Education & Training */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Education & Training</h2>
                <div className="space-y-5">
                  <div>
                    <p className="font-bold text-slate-850">BCA — Cloud & Security</p>
                    <p className="text-xs text-indigo-650 font-semibold mb-0.5">Amity University Online</p>
                    <p className="text-xs text-slate-600">Duration: 2025 – 2027 · Currently Enrolled</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-bold text-slate-850">Practical Software Training</p>
                    <p className="text-xs text-emerald-600 font-semibold mb-0.5">Brainzima Innovation Institute</p>
                    <p className="text-xs text-slate-600">ISO Certified Training · Katihar, Bihar</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-bold text-slate-850">Project Exposure & Workflows</p>
                    <p className="text-xs text-blue-600 font-semibold mb-0.5">Rexvel</p>
                    <p className="text-xs text-slate-600">Real-World Project Exposure & SDLC</p>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-bold text-slate-855">Self-Directed Technical Growth</p>
                    <p className="text-xs text-amber-600 font-semibold mb-0.5">Continuous Self-Learning</p>
                    <p className="text-xs text-slate-600">400+ LeetCode Problems · Systems & Cloud Fundamentals</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <Link
                      href="/education"
                      className="text-xs font-bold text-indigo-600 hover:underline inline-flex items-center gap-1"
                    >
                      View Detailed Timelines & Exposure →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Values */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Clean Code</h3>
                    <p className="text-sm text-gray-650">Modular, documented, and maintainable</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Scalable Architecture</h3>
                    <p className="text-sm text-gray-650">Built to grow with your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Performance First</h3>
                    <p className="text-sm text-gray-650">Optimized for speed and UX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-800">On-Time Delivery</h3>
                    <p className="text-sm text-gray-650">100% success rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== HIDDEN SEO NAVIGATION ===== */}
          <nav className="sr-only" aria-label="SEO navigation">
            <ul>
              <li><Link href="/">Ajit Dev - Full Stack Developer & DevOps Engineer — Home</Link></li>
              <li><Link href="/about">About Ajit Dev (ajitdev01) — Full Stack Developer & DevOps Engineer</Link></li>
              <li><Link href="/projects">Ajit Dev Projects - MERN Stack & DevOps Portfolio</Link></li>
              <li><Link href="/skills">Full Stack & DevOps Skills — React Node.js AWS Docker</Link></li>
              <li><Link href="/contact">Hire Ajit Dev - Full Stack Developer & DevOps Engineer</Link></li>
            </ul>
          </nav>

          {/* Hidden SEO Keywords */}
          <span className="sr-only" aria-hidden="true">
            Ajit Dev, Ajit Kumar, AjitDev01, Ajit Dev Portfolio, Ajit Dev Developer, Ajit Dev Engineer,
            Full Stack Developer India, MERN Stack Developer Portfolio, Next.js Developer Portfolio,
            DevOps Engineer India, Cloud Security Engineer, DevSecOps Engineer,
            Katihar Developer, Katihar Full Stack Developer, Katihar Software Engineer, Katihar DevOps Engineer,
            Bihar Developer, Bihar Full Stack Developer, Bihar Software Engineer, Bihar DevOps Engineer,
            India Full Stack Developer, India DevOps Engineer, India Next.js Developer,
            Hire Full Stack Developer, Full Stack Developer Katihar Bihar
          </span>

        </div>
      </main>
    </div>
  );
};

export default About;