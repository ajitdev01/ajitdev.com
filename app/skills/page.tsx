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
  { value: "450+", label: "LeetCode Problems Solved", icon: FiBarChart2, gradient: "from-indigo-500/15 to-cyan-500/15", color: "text-indigo-400", highlight: true },
  { value: "180+", label: "Days Active Streak", icon: FiCalendar, gradient: "from-emerald-500/15 to-teal-500/15", color: "text-emerald-400" },
  { value: "5+", label: "Production Projects", icon: FiPackage, gradient: "from-purple-500/15 to-violet-500/15", color: "text-purple-400" },
  { value: "4+", label: "Tech Stacks Mastered", icon: FiCode, gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-400" },
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
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 overflow-hidden relative">
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

      <div className="fixed inset-0 pointer-events-none select-none z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <main className="flex-grow pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          {/* ===== PROFESSIONAL SUMMARY ===== */}
          <div className="text-center mb-16">
            <div className="inline-flex p-5 bg-indigo-500/10 rounded-2xl mb-6 border border-indigo-500/20 shadow-md">
              <FiCode className="text-4xl text-indigo-400" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              Skills & Expertise
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
              MERN • LAMP • Next.js • <span className="font-semibold text-indigo-455">450+ DSA problems solved</span>
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />

            <div className="flex justify-center gap-3 mt-8 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-white/5 text-sm text-slate-300 rounded-full shadow-sm">
                <FiMapPin className="w-4 h-4 text-indigo-400" />
                Katihar, Bihar, India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-white/5 text-sm text-slate-300 rounded-full shadow-sm">
                <FiBriefcase className="w-4 h-4 text-emerald-400" />
                Full Stack Engineer • Problem Solver
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-400 rounded-full shadow-sm font-semibold">
                <FiBarChart2 className="w-4 h-4" />
                LeetCode 450+ • Active Streak
              </span>
            </div>

            {/* Professional summary paragraph */}
            <div className="max-w-3xl mx-auto mt-8 p-6 glass-panel">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Full Stack Engineer with <strong className="text-white">production-grade expertise in MERN, LAMP, and Next.js</strong>.
                Proven problem-solving ability with <strong className="text-indigo-400">450+ LeetCode problems solved</strong> and a disciplined daily coding streak.
                I build <strong className="text-white">scalable, SEO-optimized, high-performance web applications</strong> with clean architecture and modern best practices.
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
                  className={`relative overflow-hidden rounded-2xl p-6 bg-slate-900 border border-white/5 shadow-md text-center transition-all duration-300 hover:-translate-y-1 ${s.highlight ? 'ring-2 ring-indigo-500/25' : ''}`}
                >
                  <StatIcon className={`absolute top-3 right-3 w-6 h-6 ${s.color} opacity-25`} />
                  <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">{s.label}</div>
                </div>
              );
            })}
          </div>

          {/* ===== STRENGTHS & MINDSET SECTION ===== */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-3xl p-8 glass-panel">
                <div className="flex items-center gap-3 mb-6">
                  <FiStar className="w-8 h-8 text-amber-400" />
                  <h3 className="text-xl font-bold text-white">Core Strengths</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base">Full Stack Architecture</span>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">End-to-end application design with MERN + LAMP stacks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base">DSA & Problem Solving</span>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">450+ LeetCode problems — clean, optimized, real-world application</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base">Performance & SEO</span>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">Core Web Vitals, structured data, SSR/SSG optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-white text-sm sm:text-base">Consistency × Discipline</span>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">Daily coding streak — balancing development, DSA, and continuous learning</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl p-8 glass-panel">
                <div className="flex items-center gap-3 mb-6">
                  <FiTarget className="w-8 h-8 text-indigo-400" />
                  <h3 className="text-xl font-bold text-white">Next Targets</h3>
                </div>
                <ul className="space-y-3">
                  {nextTargets.map((target, i) => (
                    <li key={i} className="flex items-start gap-3 p-1">
                      <FiArrowRight className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{target}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ===== CAREER POSITIONING STATEMENT ===== */}
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-white/5 p-10 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex justify-center gap-2 mb-4">
                  <FiCode className="w-8 h-8 text-indigo-400" />
                  <FiServer className="w-8 h-8 text-emerald-400" />
                  <FiDatabase className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                  Full Stack Engineer — Not Just Code, Production-Ready Solutions
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  I bridge the gap between robust backend logic, performant frontend experiences,
                  and algorithmic thinking. Every project is an opportunity to build something
                  <span className="text-indigo-400 font-semibold"> scalable, maintainable, and impactful</span>.
                </p>
                <div className="mt-6 flex justify-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-xs text-slate-400 font-semibold">MERN</span>
                  <span className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-xs text-slate-400 font-semibold">LAMP</span>
                  <span className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-xs text-slate-400 font-semibold">Next.js</span>
                  <span className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-xs text-slate-400 font-semibold">450+ DSA</span>
                  <span className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-xs text-slate-400 font-semibold">SEO Expert</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}