import Link from "next/link";
import {
  FiCode, FiServer, FiDatabase, FiCheck, FiBarChart2,
  FiTarget, FiMapPin, FiBriefcase,
  FiCalendar, FiPackage, FiStar, FiArrowRight
} from "@/lib/icons";
import SkillsSection from "../components/skills/SkillsSection";

// ========== STRUCTURED DATA ==========
const skillsForSchema = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "TypeScript",
  "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "REST APIs", "JWT",
  "AWS EC2", "AWS S3", "Docker", "Git", "GitHub Actions", "Data Structures", "Algorithms",
  "LeetCode", "Problem Solving", "System Design", "Performance Optimization", "SEO"
];

const stats = [
  { value: "450+", label: "LeetCode Problems Solved", icon: FiBarChart2, gradient: "from-blue-500/15 to-cyan-500/15", color: "text-blue-600", highlight: true },
  { value: "180+", label: "Days Active Streak", icon: FiCalendar, gradient: "from-emerald-500/15 to-teal-500/15", color: "text-emerald-600" },
  { value: "15+", label: "Production Projects", icon: FiPackage, gradient: "from-purple-500/15 to-violet-500/15", color: "text-purple-600" },
  { value: "4+", label: "Tech Stacks Mastered", icon: FiCode, gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-600" },
];

const nextTargets = [
  "Complete 500+ LeetCode problems (Graphs, DP mastery)",
  "Build and deploy a production-scale Next.js + Node.js app",
  "Master full-stack TypeScript in real-world projects",
  "AWS Certified Developer Associate",
  "Contribute to open source React/Next.js libraries"
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Schema.org microdata for Skills */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Ajit Dev's Technical Skills & Expertise",
            "description": "Skills and technical stack profile of Ajit Dev (ajitdev01). Highlighting MERN, Next.js, and DSA problem-solving competency.",
            "mainEntity": {
              "@type": "Person",
              "name": "Ajit Dev",
              "knowsAbout": skillsForSchema
            }
          })
        }}
      />

      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <main className="flex-grow pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          {/* ===== PROFESSIONAL SUMMARY ===== */}
          <div className="text-center mb-16">
            <div className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40">
              <FiCode className="text-4xl text-blue-600" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Skills & Expertise
            </h1>

            <p className="text-xl text-gray-650 max-w-3xl mx-auto mb-6">
              MERN • LAMP • Next.js • <span className="font-semibold text-amber-600">450+ DSA problems solved</span>
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full" />

            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700 shadow-sm">
                <FiMapPin className="w-4 h-4 text-blue-500" />
                Katihar, Bihar, India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-700 shadow-sm">
                <FiBriefcase className="w-4 h-4 text-emerald-500" />
                Full Stack Engineer • Problem Solver
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200 text-sm text-amber-700 shadow-sm">
                <FiBarChart2 className="w-4 h-4" />
                LeetCode 450+ • 180+ Active Streak
              </span>
            </div>

            {/* Professional summary paragraph */}
            <div className="max-w-3xl mx-auto mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Full Stack Engineer with <strong className="text-gray-900">production-grade expertise in MERN, LAMP, and Next.js</strong>.
                Proven problem-solving ability with <strong className="text-amber-700">450+ LeetCode problems solved</strong> and a disciplined daily coding streak.
                I build <strong className="text-gray-900">scalable, SEO-optimized, high-performance web applications</strong> with clean architecture and modern best practices.
              </p>
            </div>
          </div>

          {/* ===== CLIENT COMPONENT GRID & TABS ===== */}
          <SkillsSection />

          {/* ===== STATS SECTION ===== */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {stats.map((s, i) => {
              const StatIcon = s.icon;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${s.gradient} border border-white/50 shadow-md text-center transition-transform duration-300 hover:scale-105 ${s.highlight ? 'ring-2 ring-amber-300/50' : ''}`}
                >
                  <StatIcon className={`absolute top-3 right-3 w-6 h-6 ${s.color} opacity-25`} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
                  <div className="text-gray-650 text-sm font-medium">{s.label}</div>
                </div>
              );
            })}
          </div>

          {/* ===== STRENGTHS & MINDSET SECTION ===== */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <FiStar className="w-8 h-8 text-amber-500" />
                  <h3 className="text-xl font-bold text-gray-900">Core Strengths</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Full Stack Architecture</span>
                      <p className="text-sm text-gray-650">End-to-end application design with MERN + LAMP stacks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">DSA & Problem Solving</span>
                      <p className="text-sm text-gray-655">450+ LeetCode problems — clean, optimized, real-world application</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Performance & SEO</span>
                      <p className="text-sm text-gray-650">Core Web Vitals, structured data, SSR/SSG optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Consistency × Discipline</span>
                      <p className="text-sm text-gray-650">Daily coding streak — balancing development, DSA, and continuous learning</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center gap-3 mb-6">
                  <FiTarget className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Next Targets</h3>
                </div>
                <ul className="space-y-3">
                  {nextTargets.map((target, i) => (
                    <li key={i} className="flex items-start gap-3 p-2">
                      <FiArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ===== CAREER POSITIONING STATEMENT ===== */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-10 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex justify-center gap-2 mb-4">
                  <FiCode className="w-8 h-8 text-blue-400" />
                  <FiServer className="w-8 h-8 text-emerald-400" />
                  <FiDatabase className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Full Stack Engineer — Not Just Code, Production-Ready Solutions
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  I bridge the gap between robust backend logic, performant frontend experiences,
                  and algorithmic thinking. Every project is an opportunity to build something
                  <span className="text-amber-300 font-semibold"> scalable, maintainable, and impactful</span>.
                </p>
                <div className="mt-6 flex justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">MERN</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">LAMP</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Next.js</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">450+ DSA</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">SEO Expert</span>
                </div>
              </div>
            </div>
          </div>

          {/* === CONTEXTUAL INTERNAL NAVIGATION === */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              Connect Skills to Real-World Projects & Systems
            </h4>
            <div className="flex flex-wrap gap-3 text-xs font-semibold">
              <Link href="/projects/full-stack" className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-xs">
                MERN & Full Stack Projects
              </Link>
              <Link href="/projects/devops" className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-xs">
                DevOps & Docker Deployments
              </Link>
              <Link href="/projects/cloud" className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-xs">
                AWS Cloud Architecture
              </Link>
              <Link href="/projects/security" className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-xs">
                Cloud Security & DevSecOps
              </Link>
              <Link href="/dsa" className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-xs">
                Algorithmic DSA Problem Solving
              </Link>
              <Link href="/system-design" className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-xs">
                System Design Patterns
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}