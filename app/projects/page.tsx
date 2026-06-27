import Link from "next/link";
import {
  FiFolder, FiBarChart2, FiTrendingUp, FiBook,
  FiDatabase, FiGlobe, FiZap, FiMapPin, FiBriefcase
} from "@/lib/icons";
import ProjectsSection from "../components/projects/ProjectsSection";

// ========== STATS (DSA + Full Stack Focus) ==========
const stats = [
  { value: "450+", label: "LeetCode Problems", icon: FiBarChart2, gradient: "from-blue-500/15 to-cyan-500/15", color: "text-blue-600", highlight: true },
  { value: "180+", label: "Day Streak", icon: FiTrendingUp, gradient: "from-emerald-500/15 to-teal-500/15", color: "text-emerald-600" },
  { value: "8", label: "Live Projects", icon: FiFolder, gradient: "from-purple-500/15 to-violet-500/15", color: "text-purple-600" },
  { value: "45+", label: "Lectures Created", icon: FiBook, gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-600" }
];

// ========== PORTFOLIO HIGHLIGHTS ==========
const highlights = [
  { title: "MERN Stack Mastery", description: "Full-stack JavaScript applications", count: 4, icon: FiDatabase, gradient: "from-blue-500/15 to-cyan-500/15" },
  { title: "DSA Problem Solving", description: "450+ LeetCode solutions", count: 1, icon: FiBarChart2, gradient: "from-amber-500/15 to-orange-500/15", highlight: true },
  { title: "SEO Engineering", description: "Structured data & Core Web Vitals", count: 1, icon: FiGlobe, gradient: "from-rose-500/15 to-pink-500/15" },
  { title: "Production Mindset", description: "Real-world scalable apps", count: 8, icon: FiZap, gradient: "from-emerald-500/15 to-teal-500/15" }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-emerald-500/4 rounded-full blur-3xl" />
      </div>

      <main className="flex-grow pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          {/* === PAGE HEADER === */}
          <section className="text-center mb-16">
            <div className="inline-flex p-5 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl mb-6 border border-white/40">
              <FiFolder className="text-4xl text-blue-600" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Projects Portfolio
            </h1>

            <p className="text-xl text-gray-655 max-w-3xl mx-auto mb-6">
              MERN • LAMP • Next.js • <span className="font-semibold text-amber-600">450+ DSA problems solved</span>
            </p>

            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm shadow-sm text-gray-700">
                <FiMapPin className="w-4 h-4 text-blue-500" />
                Katihar, Bihar, India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm shadow-sm text-gray-700">
                <FiBriefcase className="w-4 h-4 text-emerald-500" />
                Full Stack Engineer • Problem Solver
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200 text-sm text-amber-700 shadow-sm">
                <FiBarChart2 className="w-4 h-4" />
                LeetCode 450+ • 180 Day Streak
              </span>
            </div>

            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto mt-8 rounded-full" />
          </section>

          {/* === CLIENT PROJECTS COMPONENT === */}
          <ProjectsSection />

          {/* === STATS SECTION === */}
          <section className="mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-10 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10" aria-hidden="true" />
              <div className="relative">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Engineering Credentials</h2>
                  <p className="text-gray-300">Proof of consistency, discipline, and real-world impact</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* === PORTFOLIO HIGHLIGHTS === */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-10 border border-blue-100 shadow-lg">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Portfolio Highlights</h2>
                <p className="text-gray-650 max-w-xl mx-auto">Specialized expertise across multiple domains</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {highlights.map((h, idx) => {
                  const HighlightIcon = h.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${h.gradient} border border-white/60 transition-transform duration-300 hover:scale-105 ${h.highlight ? 'ring-2 ring-amber-300/50' : ''}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center">
                          <HighlightIcon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{h.title}</p>
                          <p className="text-xs text-gray-650">{h.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900">{h.count}</span>
                        <span className="text-gray-650 text-sm ml-1">projects</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* === DSA + CONSISTENCY SECTION === */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 p-10 text-center border border-amber-200">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_40%)]" aria-hidden="true" />

              <div className="relative z-10">
                <div className="inline-flex p-4 bg-amber-100 rounded-2xl mb-5">
                  <FiBarChart2 className="text-3xl text-amber-600" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  450+ Problems Solved
                </h3>

                <p className="text-lg text-gray-655 max-w-3xl mx-auto leading-relaxed">
                  Consistently improving problem-solving skills through daily DSA practice,
                  maintaining a <span className="font-semibold text-amber-600">180+ day coding streak</span>,
                  and solving challenges across multiple domains on LeetCode.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {["Arrays & Strings", "Hash Tables", "Binary Search", "Two Pointers", "Dynamic Programming", "Backtracking", "Problem Solving"].map(item => (
                    <span key={item} className="px-4 py-2 bg-white shadow-sm rounded-full text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <div className="bg-white/70 rounded-2xl p-4">
                    <h4 className="text-2xl font-bold text-amber-600">457+</h4>
                    <p className="text-sm text-gray-650">Problems Solved</p>
                  </div>

                  <div className="bg-white/70 rounded-2xl p-4">
                    <h4 className="text-2xl font-bold text-amber-600">180</h4>
                    <p className="text-sm text-gray-655">Day Streak</p>
                  </div>

                  <div className="bg-white/70 rounded-2xl p-4">
                    <h4 className="text-2xl font-bold text-amber-605">50</h4>
                    <p className="text-sm text-gray-650">Hard Problems</p>
                  </div>

                  <div className="bg-white/70 rounded-2xl p-4">
                    <h4 className="text-2xl font-bold text-amber-600">1580</h4>
                    <p className="text-sm text-gray-650">Contest Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* === HIDDEN INTERNAL LINKS (SEO) === */}
          <nav className="sr-only" aria-label="Site navigation">
            <ul>
              <li><Link href="/">Ajit Dev — Full Stack Developer & DevOps Engineer Home</Link></li>
              <li><Link href="/skills">Technical Skills — MERN • DevOps • AWS • Cloud Security</Link></li>
              <li><Link href="/projects">Ajit Dev Projects — Full Stack & DevOps Portfolio</Link></li>
              <li><Link href="/contact">Hire Ajit Dev — Full Stack Developer & DevOps Engineer</Link></li>
              <li><a href="https://github.com/ajitdev01">GitHub — Ajit Dev Code Portfolio</a></li>
              <li><a href="https://leetcode.com/ajitdev01">LeetCode — Ajit Dev 400+ Problems</a></li>
            </ul>
          </nav>

          {/* Hidden SEO Keywords */}
          <span className="sr-only" aria-hidden="true">
            Ajit Dev Projects, Ajit Dev GitHub, Ajit Dev Portfolio,
            Ajit Dev, Ajit Kumar, AjitDev01, Next.js Developer,
            MERN Stack Developer, Full Stack Projects Portfolio,
            Katihar Developer, Katihar Full Stack Developer,
            India Full Stack Developer, India DevOps Engineer,
            Bihar Software Engineer, DevOps Projects Portfolio
          </span>

        </div>
      </main>
    </div>
  );
}