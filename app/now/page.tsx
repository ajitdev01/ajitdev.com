import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Now — What Ajit Dev is Working On Right Now",
  description: "What Ajit Dev (ajitdev01) is currently focused on, building, learning, and reading right now. Updated regularly for project updates and current priorities.",
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    title: "Now — What Ajit Dev is Working On Right Now",
    description: "What Ajit Dev (ajitdev01) is currently focused on, building, learning, and reading right now.",
    url: "https://ajitdev.com/now",
  },
};

// SVG Icons
const IP = { strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
const ic = (s: number, c?: string) => ({ width: s, height: s, viewBox: "0 0 24 24", className: c, stroke: "currentColor", ...IP });

const FiClock = ({ className }: { className?: string }) => <svg {...ic(24, className)}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
const FiCode = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>;
const FiServer = ({ className }: { className?: string }) => <svg {...ic(24, className)}><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>;
const FiBookOpen = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
const FiMapPin = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
const FiCheckCircle = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>;
const FiZap = ({ className }: { className?: string }) => <svg {...ic(24, className)}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const FiBriefcase = ({ className }: { className?: string }) => <svg {...ic(24, className)}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>;
const FiExternalLink = ({ className }: { className?: string }) => <svg {...ic(24, className)}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>;

export default function NowPage() {
  const currentDateStr = "August 2026";

  return (
    <div className="min-h-screen bg-slate-50/50">
      <main className="pt-16 pb-20" id="main-content">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Badge & Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200/60 rounded-full mb-4 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                What I&apos;m Doing Now
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Now Page
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              This page acts as a public status update — inspired by{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
              >
                Derek Sivers&apos; /now movement <FiExternalLink className="w-3.5 h-3.5" />
              </a>
              . Here is what I am focused on right now.
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
              <FiClock className="w-4 h-4 text-blue-600" />
              <span>Last updated: {currentDateStr}</span>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

            {/* CARD 1: Core Focus & Projects */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <FiZap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Current Priorities</h2>
                  <p className="text-xs text-slate-500">Active engineering focus</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Building Scalable Web Apps:</span>{" "}
                    <span className="text-slate-600 text-sm">
                      Crafting full-stack applications with Next.js 15, TypeScript, Tailwind CSS, and MERN stack.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">BCA Cloud & Security Degree:</span>{" "}
                    <span className="text-slate-600 text-sm">
                      Enrolled at Amity University Online focusing on cloud architecture, networks, and system security.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Freelance & Contract Work:</span>{" "}
                    <span className="text-slate-600 text-sm">
                      Accepting select full-stack web development and DevOps automation projects.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* CARD 2: DevOps & Cloud Infrastructure */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <FiServer className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">DevOps & Cloud Security</h2>
                  <p className="text-xs text-slate-500">Infrastructure & System Design</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCode className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Containerization & Orchestration:</span>{" "}
                    <span className="text-slate-600 text-sm">
                      Deep diving into Docker containers, Kubernetes deployments, and automated CI/CD workflows.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCode className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">AWS Infrastructure:</span>{" "}
                    <span className="text-slate-600 text-sm">
                      Configuring AWS EC2, S3, RDS, CloudFront, Lambda, and IAM security policies.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiCode className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Infrastructure as Code:</span>{" "}
                    <span className="text-slate-600 text-sm">
                      Automating cloud environment setups with Terraform and Ansible playbooks.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* CARD 3: Algorithms & Continuous Learning */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <FiCode className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">DSA & Problem Solving</h2>
                  <p className="text-xs text-slate-500">Coding Practice & Algorithms</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Consistently refining Data Structures & Algorithms expertise on LeetCode (518+ problems solved across Trees, Graphs, Dynamic Programming, Arrays, and Strings).
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg">518+ LeetCode Solved</span>
                <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg">System Design</span>
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">Low-Level Design</span>
              </div>
            </div>

            {/* CARD 4: Reading & Location */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <FiBookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Reading & Base</h2>
                  <p className="text-xs text-slate-500">Current location & knowledge</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <FiMapPin className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Based In:</span> Katihar, Bihar, India 🇮🇳
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <FiBookOpen className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Currently Reading:</span>{" "}
                    <em>Designing Data-Intensive Applications</em> by Martin Kleppmann
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <FiBriefcase className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-800">Status:</span> Open for innovative projects & client engineering tasks
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Quick links banner */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold">Interested in collaborating or hiring?</h3>
              <p className="text-blue-100 text-sm">Explore my projects or get in touch directly.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/projects"
                className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-xl text-sm hover:bg-blue-50 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-500/50 border border-blue-400 text-white font-semibold rounded-xl text-sm hover:bg-blue-500/80 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
