import Link from "next/link";
import {
  FiFolder, FiBarChart2, FiTrendingUp, FiBook,
  FiDatabase, FiGlobe, FiZap, FiMapPin, FiBriefcase
} from "@/lib/icons";
import ProjectsSection from "../components/projects/ProjectsSection";

// ========== STATS (DSA & Full Stack Focus) ==========
const stats = [
  { value: "450+", label: "LeetCode Problems", icon: FiBarChart2, gradient: "from-indigo-500/15 to-cyan-500/15", color: "text-indigo-400", highlight: true },
  { value: "180+", label: "Day Streak", icon: FiTrendingUp, gradient: "from-emerald-500/15 to-teal-500/15", color: "text-emerald-400" },
  { value: "8+", label: "Live Projects", icon: FiFolder, gradient: "from-purple-500/15 to-violet-500/15", color: "text-purple-400" },
  { value: "45+", label: "Lectures Created", icon: FiBook, gradient: "from-amber-500/15 to-orange-500/15", color: "text-amber-400" }
];

// ========== PORTFOLIO HIGHLIGHTS ==========
const highlights = [
  { title: "MERN Stack Mastery", description: "Full-stack JavaScript applications", count: 4, icon: FiDatabase, gradient: "from-indigo-500/10 to-cyan-500/10" },
  { title: "DSA Problem Solving", description: "450+ LeetCode solutions", count: 1, icon: FiBarChart2, gradient: "from-amber-500/10 to-orange-500/10", highlight: true },
  { title: "SEO Engineering", description: "Structured data & Core Web Vitals", count: 1, icon: FiGlobe, gradient: "from-rose-500/10 to-pink-500/10" },
  { title: "Production Mindset", description: "Real-world scalable apps", count: 8, icon: FiZap, gradient: "from-emerald-500/10 to-teal-500/10" }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 overflow-hidden relative">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none select-none z-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-emerald-500/4 rounded-full blur-[100px]" />
      </div>

      <main className="flex-grow pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          {/* === PAGE HEADER === */}
          <section className="text-center mb-16">
            <div className="inline-flex p-5 bg-indigo-500/10 rounded-2xl mb-6 border border-indigo-500/20 shadow-md">
              <FiFolder className="text-4xl text-indigo-400" />
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              Projects Portfolio
            </h1>

            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
              MERN • LAMP • Next.js • <span className="font-semibold text-indigo-400">450+ DSA problems solved</span>
            </p>

            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-white/5 rounded-full text-sm shadow-sm text-slate-300">
                <FiMapPin className="w-4 h-4 text-indigo-400" />
                Katihar, Bihar, India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-white/5 rounded-full text-sm shadow-sm text-slate-300">
                <FiBriefcase className="w-4 h-4 text-emerald-400" />
                Software Engineer • Problem Solver
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-sm text-indigo-400 shadow-sm font-semibold">
                <FiBarChart2 className="w-4 h-4" />
                LeetCode 450+ • 180 Day Streak
              </span>
            </div>

            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full" />
          </section>

          {/* === CLIENT PROJECTS COMPONENT === */}
          <ProjectsSection />

          {/* === STATS SECTION === */}
          <section className="mb-20">
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-white/5 p-10 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-purple-500/5" aria-hidden="true" />
              <div className="relative">
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-black text-white mb-2">Engineering Credentials</h2>
                  <p className="text-slate-400 text-sm">Proof of consistency, discipline, and real-world impact</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-3xl lg:text-4xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-slate-300 text-sm font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* === PORTFOLIO HIGHLIGHTS === */}
          <section className="mb-20">
            <div className="bg-slate-900/30 rounded-3xl p-10 border border-white/5 shadow-lg">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-white mb-3">Portfolio Highlights</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-sm">Specialized expertise across multiple domains</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {highlights.map((h, idx) => {
                  const HighlightIcon = h.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl bg-slate-900 border border-white/5 hover:border-indigo-500/20 hover:bg-slate-950 transition-all duration-300 ${h.highlight ? 'ring-2 ring-indigo-500/25' : ''}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center border border-white/5 flex-shrink-0">
                          <HighlightIcon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm">{h.title}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{h.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-white">{h.count}</span>
                        <span className="text-slate-550 text-xs ml-1 font-medium">projects</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* === DSA + CONSISTENCY SECTION === */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-indigo-500/5 p-10 text-center border border-indigo-500/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_40%)]" aria-hidden="true" />

              <div className="relative z-10">
                <div className="inline-flex p-4 bg-slate-900 border border-white/5 rounded-2xl mb-5">
                  <FiBarChart2 className="text-3xl text-indigo-400" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  450+ Problems Solved
                </h3>

                <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                  Consistently improving problem-solving skills through daily DSA practice,
                  maintaining a <span className="font-semibold text-indigo-450">180+ day coding streak</span>,
                  and solving challenges across multiple domains on LeetCode.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {["Arrays & Strings", "Hash Tables", "Binary Search", "Two Pointers", "Dynamic Programming", "Backtracking", "Problem Solving"].map(item => (
                    <span key={item} className="px-4 py-2 bg-slate-900 border border-white/5 rounded-full text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4">
                    <h4 className="text-2xl font-black text-indigo-400">457+</h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold">Problems Solved</p>
                  </div>

                  <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4">
                    <h4 className="text-2xl font-black text-indigo-400">180</h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold">Day Streak</p>
                  </div>

                  <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4">
                    <h4 className="text-2xl font-black text-indigo-400">72</h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold">Hard Problems</p>
                  </div>

                  <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4">
                    <h4 className="text-2xl font-black text-indigo-400">1580</h4>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold">Contest Rating</p>
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
              <li><a href="https://leetcode.com/ajitdev01">LeetCode — Ajit Dev 450+ Problems</a></li>
            </ul>
          </nav>

        </div>
      </main>
    </div>
  );
}