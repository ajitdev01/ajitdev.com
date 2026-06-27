import Link from "next/link";
import ContactForm from "../components/contact/ContactForm";

// ========== INLINE SVG ICONS (eliminates react-icons bundle) ==========
const IP = { strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
const ic = (s: number, c?: string) => ({ width: s, height: s, viewBox: "0 0 24 24", className: c || undefined, stroke: "currentColor", ...IP });

const FiMail = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const FiMapPin = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const FiBookOpen = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
const FiBriefcase = ({ className }: { className?: string }) => <svg {...ic(24, className)}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>;
const FiGithub = ({ className }: { className?: string }) => <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>;
const FiLinkedin = ({ className }: { className?: string }) => <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" /></svg>;
const FiFileText = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>;
const FiClock = ({ className }: { className?: string }) => <svg {...ic(24, className)}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
const FiGlobe = ({ className }: { className?: string }) => <svg {...ic(24, className)}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>;
const FiTrendingUp = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>;
const FiCode = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>;
const FiZap = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" /></svg>;
const FiFolder = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;

// ========== CONTACT DATA ==========
const contactInfo = [
  {
    icon: FiMail,
    title: "Primary Email",
    content: "support@ajitdev.com",
    link: "mailto:support@ajitdev.com",
    gradient: "from-blue-500 to-cyan-500",
    description: "Business & support queries"
  },
  {
    icon: FiMail,
    title: "Personal Email",
    content: "ajitk23192@gmail.com",
    link: "mailto:ajitk23192@gmail.com",
    gradient: "from-indigo-500 to-blue-500",
    description: "Direct communication • 24hr response"
  },
  {
    icon: FiMapPin,
    title: "Location",
    content: "Katihar, Bihar, India",
    link: null,
    gradient: "from-emerald-500 to-teal-500",
    description: "Available worldwide • Remote"
  },
  {
    icon: FiBookOpen,
    title: "Education",
    content: "BCA — Cloud & Security",
    link: null,
    gradient: "from-purple-500 to-pink-500",
    description: "Amity University Online • CGPA 7.95+"
  },
  {
    icon: FiBriefcase,
    title: "Status",
    content: "Open to Opportunities",
    link: null,
    gradient: "from-amber-500 to-orange-500",
    description: "Full Stack Engineer • Remote"
  }
];

const socialLinks = [
  { icon: FiGithub, label: "GitHub", url: "https://github.com/ajitdev01", gradient: "from-gray-700 to-gray-900", external: true },
  { icon: FiLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ajitdev01/", gradient: "from-blue-600 to-indigo-600", external: true },
  { icon: FiCode, label: "LeetCode", url: "https://leetcode.com/ajitdev01", gradient: "from-amber-500 to-orange-500", external: true },
  { icon: FiMail, label: "Support", url: "mailto:support@ajitdev.com", gradient: "from-rose-500 to-pink-500", external: false },
  { icon: FiMail, label: "Personal", url: "mailto:ajitk23192@gmail.com", gradient: "from-indigo-500 to-blue-500", external: false },
  { icon: FiFileText, label: "Resume", url: "/resume.pdf", gradient: "from-emerald-500 to-teal-500", external: true },
  { icon: FiGlobe, label: "Portfolio", url: "/", gradient: "from-purple-500 to-violet-500", external: false }
];

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Ajit Kumar — Full Stack Engineer",
            url: "https://ajitdev.com/contact",
            description: "Contact page for Ajit Kumar, a Full Stack Engineer specializing in MERN, Next.js, and LAMP stacks.",
            about: {
              "@type": "Person",
              name: "Ajit Kumar",
              jobTitle: "Full Stack Engineer",
              email: ["support@ajitdev.com", "ajitk23192@gmail.com"],
              url: "https://ajitdev.com",
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What technologies does Ajit Kumar specialize in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ajit specializes in MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js for SSR/SSG, TypeScript, Tailwind CSS, and has strong DSA foundation with 450+ LeetCode problems solved."
                }
              },
              {
                "@type": "Question",
                name: "Is Ajit Kumar available for Full Stack Engineer roles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Ajit is actively seeking Full Stack Engineer roles worldwide, available for remote positions immediately."
                }
              }
            ]
          }),
        }}
      />

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden">
        {/* Background Blobs */}
        <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/6 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <main className="flex-grow pt-4 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

            {/* Hidden SEO Content */}
            <section className="sr-only" aria-label="Contact Overview">
              <h1>Contact Full Stack Engineer — Ajit Kumar | MERN • Next.js • DSA 450+</h1>
              <p>
                Ajit Kumar is a Full Stack Engineer from Katihar, Bihar, India specializing in MERN Stack,
                Next.js. With 450+ LeetCode problems solved and a 180+ day coding streak.
                Available for remote Full Stack Engineer roles worldwide.
              </p>
            </section>

            {/* ===== HERO SECTION ===== */}
            <section className="text-center mb-20">
              <div className="inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl mb-6 border border-gray-200/20">
                <FiMail className="text-4xl text-blue-600" />
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 tracking-tight">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>

              <p className="text-xl text-gray-655 max-w-2xl mx-auto mb-6">
                Full Stack Engineer • MERN • Next.js •{" "}
                <span className="font-semibold text-amber-600">450+ DSA Problems Solved</span>
              </p>

              <div className="flex justify-center gap-3 flex-wrap mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                  <FiMapPin className="w-4 h-4" />
                  Katihar, Bihar, India
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
                  <FiGlobe className="w-4 h-4" />
                  Available Worldwide • Remote
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium border border-amber-100">
                  <FiClock className="w-4 h-4" />
                  Response: 24 Hours
                </span>
              </div>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            </section>

            {/* ===== MAIN GRID ===== */}
            <div className="space-y-12">
              <ContactForm />

              {/* Side Panels - contact details and socials under the main form */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Cards */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 shadow-xl">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    {contactInfo.map((item, idx) => {
                      const IconComp = item.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50/30 transition-all duration-200"
                        >
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            <IconComp className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-400 uppercase">{item.title}</p>
                            {item.link ? (
                              <a href={item.link} className="text-gray-900 font-medium hover:text-blue-600 transition-colors">
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-gray-900 font-medium">{item.content}</p>
                            )}
                            <p className="text-xs text-gray-650 mt-0.5">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Social Links Grid */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 shadow-xl">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Connect Online</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((s, idx) => {
                      const SIcon = s.icon;
                      return (
                        <a
                          key={idx}
                          href={s.url}
                          target={s.external ? "_blank" : undefined}
                          rel={s.external ? "noopener noreferrer" : undefined}
                          className={`h-16 rounded-xl bg-gradient-to-br ${s.gradient} text-white flex flex-col items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
                          aria-label={`Ajit Kumar ${s.label}`}
                        >
                          <SIcon className="w-5 h-5 mb-1" />
                          <span className="text-xs font-medium">{s.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden Internal Links (SEO) */}
            <nav className="sr-only" aria-label="Site Navigation">
              <ul>
                <li><Link href="/">Home — Full Stack Engineer Portfolio</Link></li>
                <li><Link href="/skills">Technical Skills — MERN • Next.js • DSA 450+</Link></li>
                <li><Link href="/projects">Full Stack Projects — Production Portfolio</Link></li>
                <li><Link href="/about">About Ajit Kumar — Full Stack Engineer</Link></li>
              </ul>
            </nav>
          </div>
        </main>
      </div>
    </>
  );
}
