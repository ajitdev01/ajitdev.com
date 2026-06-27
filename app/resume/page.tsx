import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Briefcase, GraduationCap, Code, Star, CheckCircle } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import PrintButton from "@/app/components/PrintButton";

export const metadata: Metadata = {
  title: "Professional Resume & CV | Ajit Kumar",
  description: "View and download the developer resume of Ajit Kumar. BCA Cloud & Security student at Amity, Software Engineer, and DevOps automation builder.",
  alternates: {
    canonical: "https://ajitdev.com/resume",
  },
};

export default function ResumePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/resume/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ajitdev.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resume",
        "item": "https://ajitdev.com/resume",
      },
    ],
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-[#030712] min-h-screen text-slate-100 relative overflow-hidden print:bg-white print:text-black">
        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 print:hidden" aria-hidden="true">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Nav & Actions */}
          <div className="flex justify-between items-center mb-12 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <PrintButton />
          </div>

          {/* Resume Frame */}
          <div className="bg-slate-900/40 border border-white/5 p-8 md:p-12 rounded-3xl shadow-2xl relative print:border-none print:bg-transparent print:p-0 print:shadow-none">
            
            {/* Header info */}
            <div className="border-b border-white/5 pb-8 mb-8 flex flex-col md:flex-row md:justify-between md:items-start gap-6 print:border-slate-200">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-black text-white print:text-black">
                  Ajit Kumar
                </h1>
                <p className="text-lg font-semibold text-indigo-400 print:text-indigo-600">
                  Software Engineer & DevOps Specialist
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 print:text-slate-600">
                  <span>Katihar, Bihar, India 🇮🇳</span>
                  <span>•</span>
                  <a href="mailto:support@ajitdev.com" className="hover:underline">support@ajitdev.com</a>
                  <span>•</span>
                  <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/ajitdev01</a>
                </div>
              </div>
              <div className="flex flex-col md:items-end text-xs text-slate-400 print:text-slate-600 space-y-1">
                <div>LeetCode: <strong className="text-white print:text-black">450+ Solved</strong></div>
                <div>Streak: <strong className="text-white print:text-black">180+ Days</strong></div>
                <div>Target Pathways: <span className="text-indigo-350 font-semibold print:text-indigo-600">Full Stack, DevOps, Security</span></div>
              </div>
            </div>

            {/* Target Pathways details */}
            <div className="mb-8 space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                Target Career Roles
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Software Engineer",
                  "Full Stack Developer",
                  "DevOps Engineer",
                  "DevSecOps Engineer",
                  "Cloud Security Engineer",
                  "Cloud Engineer"
                ].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 bg-slate-900 border border-white/5 text-slate-350 text-xs font-semibold rounded-lg print:border-slate-200 print:text-slate-800"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              
              {/* Left Column: Education & Experience */}
              <div className="md:col-span-8 space-y-8">
                
                {/* Education */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    Academic Training
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-indigo-500/30 print:border-indigo-600/30">
                      <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 print:bg-indigo-600" />
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-bold text-white print:text-black text-sm">Bachelor of Computer Applications (BCA)</h3>
                          <p className="text-xs text-indigo-400 print:text-indigo-600 font-semibold mt-0.5">Amity University Online</p>
                        </div>
                        <span className="text-[10px] text-slate-400 print:text-slate-650 bg-slate-900 border border-white/5 px-2 py-0.5 rounded-lg flex-shrink-0">Cloud & Security</span>
                      </div>
                      <p className="text-slate-450 text-xs mt-2 leading-relaxed">
                        Enrolled in an online BCA program focusing heavily on distributed compute operations, systems virtualizations, computer networking, secure authorization policies, and algorithms.
                      </p>
                    </div>

                    <div className="relative pl-6 border-l-2 border-indigo-500/30 print:border-indigo-600/30">
                      <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 print:bg-indigo-600" />
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-bold text-white print:text-black text-sm">Practical Software Training</h3>
                          <p className="text-xs text-purple-400 print:text-purple-600 font-semibold mt-0.5">Brainzima Innovation Institute</p>
                        </div>
                        <span className="text-[10px] text-slate-400 print:text-slate-650 bg-slate-900 border border-white/5 px-2 py-0.5 rounded-lg flex-shrink-0">ISO Certified</span>
                      </div>
                      <p className="text-slate-450 text-xs mt-2 leading-relaxed">
                        Completed structured systems specialist and developer training focusing on full-stack coding (MERN), Linux administration, and git pipelines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Algorithmic Skills */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Code className="w-4 h-4 text-indigo-400" />
                    Problem Solving Capabilities
                  </h2>
                  <div className="relative pl-6 border-l-2 border-indigo-500/30 print:border-indigo-600/30">
                    <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 print:bg-indigo-600" />
                    <h3 className="font-bold text-white print:text-black text-sm">LeetCode Algorithm Solves</h3>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                      Resolved <strong className="text-white print:text-black">450+ dynamic challenges</strong>. Covered core topics including Arrays, Strings, Hashing, Two Pointers, Sliding Window, Binary Search, Stacks, Queues, Linked Lists, Recursion, and Backtracking.
                    </p>
                    <p className="text-slate-450 text-xs mt-1.5">
                      Currently deep-diving into Trees, Heaps, Graphs, Dynamic Programming, and Object-Oriented System Design.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column: Skills Matrix */}
              <div className="md:col-span-4 space-y-8">
                
                {/* Tech Skills */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Star className="w-4 h-4 text-indigo-400" />
                    Skills Matrix
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[11px] font-bold text-indigo-400 print:text-indigo-600 uppercase mb-1.5">Languages</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {["C++", "JavaScript", "TypeScript", "PHP", "Python", "SQL"].map((lang) => (
                          <span key={lang} className="text-[10px] px-2 py-0.5 bg-slate-900 border border-white/5 rounded-md text-slate-300">{lang}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-indigo-400 print:text-indigo-600 uppercase mb-1.5">Frontend</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {["React.js", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "GSAP"].map((fw) => (
                          <span key={fw} className="text-[10px] px-2 py-0.5 bg-slate-900 border border-white/5 rounded-md text-slate-300">{fw}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-indigo-400 print:text-indigo-600 uppercase mb-1.5">Backend & DB</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {["Node.js", "Express.js", "PHP", "MongoDB", "MySQL", "JWT Auth", "REST API"].map((be) => (
                          <span key={be} className="text-[10px] px-2 py-0.5 bg-slate-900 border border-white/5 rounded-md text-slate-300">{be}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-indigo-400 print:text-indigo-600 uppercase mb-1.5">Cloud & DevOps</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {["Linux Admin", "Git / GitHub", "Docker", "Kubernetes", "AWS Cloud", "Terraform", "CI/CD"].map((dev) => (
                          <span key={dev} className="text-[10px] px-2 py-0.5 bg-slate-900 border border-white/5 rounded-md text-slate-300">{dev}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Core certifications */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    Key Credentials
                  </h2>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex gap-2 items-start">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>DevOps Specialist Certification</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-indigo-400 font-bold">•</span>
                      <span>BCA Online Enrollment (Amity)</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Bottom Section: Project references */}
            <div className="mt-8 pt-8 border-t border-white/5 print:border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                Featured Project Portfolios
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl">
                  <h3 className="text-xs font-bold text-white print:text-black">IRCTC Railway Booking System Clone</h3>
                  <p className="text-[11px] text-slate-405 mt-1 leading-relaxed">
                    Highly scalable seat reservation system built on MERN. Implements custom JWT authentication tokens and RESTful endpoints.
                  </p>
                </div>
                <div className="p-4 bg-slate-900/40 border border-white/5 rounded-xl">
                  <h3 className="text-xs font-bold text-white print:text-black">MERN Full Stack Learning Platform</h3>
                  <p className="text-[11px] text-slate-405 mt-1 leading-relaxed">
                    45+ lectures database compiling custom controllers, file uploads via Multer, and e-commerce models (BiKart).
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
