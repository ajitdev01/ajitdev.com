"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Target,
  Shield,
  Zap,
  Globe,
  Database,
  Server,
  Cloud,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import PrintButton from "@/app/components/PrintButton";

// ── Inline SVG Icons ──────────────────────────────────────────────────────────
const Github = ({ className }: { className?: string }) => (
  <svg className={className || "w-3.5 h-3.5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className || "w-3.5 h-3.5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
  </svg>
);
const Leetcode = ({ className }: { className?: string }) => (
  <svg className={className || "w-3.5 h-3.5"} fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

// ── Screen-only Stat Badge ────────────────────────────────────────────────────
function StatBadge({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-2.5 text-center shadow-sm">
      <span className="text-indigo-500 mb-1">{icon}</span>
      <span className="text-base font-black text-slate-800 leading-none">{value}</span>
      <span className="text-[10px] text-slate-500 font-medium mt-0.5">{label}</span>
    </div>
  );
}

// ── Section Heading — screen ──────────────────────────────────────────────────
function SectionHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <h2 className="
      flex items-center gap-2
      text-[10px] font-black uppercase tracking-[0.18em] text-slate-500
      border-b-2 border-indigo-100 pb-2 mb-4
      print:text-[7.5pt] print:font-black print:tracking-widest print:text-black
      print:border-b print:border-black print:pb-0.5 print:mb-1.5
    ">
      <span className="text-indigo-500 print:hidden">{icon}</span>
      {children}
    </h2>
  );
}

// ── Skill Tag — screen ────────────────────────────────────────────────────────
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="
      inline-flex items-center px-2 py-0.5 rounded-md
      text-[10px] font-semibold bg-slate-100 border border-slate-200 text-slate-600
      print:bg-transparent print:border-0 print:p-0 print:text-[7pt] print:text-black print:font-normal
      print:after:content-['·'] print:after:mx-0.5 print:last:after:content-['']
    ">
      {children}
    </span>
  );
}

// ── Bullet ────────────────────────────────────────────────────────────────────
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="
      flex gap-2 text-[11px] text-slate-600 leading-relaxed
      print:flex print:gap-0 print:text-[7.5pt] print:text-black print:leading-snug print:list-disc print:list-outside print:ml-3
    ">
      <span className="mt-[3px] text-indigo-400 shrink-0 print:hidden">▸</span>
      <span>{children}</span>
    </li>
  );
}

// ── Print-only skill row ───────────────────────────────────────────────────────
function PrintSkillRow({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div className="hidden print:flex print:gap-1 print:text-[7pt] print:text-black print:leading-snug print:mb-0.5">
      <span className="font-bold shrink-0 w-20">{label}:</span>
      <span>{tags.join(" · ")}</span>
    </div>
  );
}

export default function ResumePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/resume/#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ajitdev.com" },
      { "@type": "ListItem", position: 2, name: "Resume", item: "https://ajitdev.com/resume" },
    ],
  };
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajit Kumar",
    jobTitle: "Software Engineer | Full Stack Engineer | DevOps & Cloud Security",
    url: "https://ajitdev.com",
    email: "support@ajitdev.com",
    telephone: "+916205526784",
    address: { "@type": "PostalAddress", addressLocality: "Katihar", addressRegion: "Bihar", addressCountry: "IN" },
    sameAs: ["https://github.com/ajitdev01", "https://linkedin.com/in/ajitdev01", "https://leetcode.com/ajitdev01"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Amity University Online" },
  };

  const techStack = [
    { label: "Languages", tags: ["C++", "JavaScript", "TypeScript", "PHP", "Python", "SQL"] },
    { label: "Frontend", tags: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Bootstrap", "MUI", "Framer Motion"] },
    { label: "Backend", tags: ["Node.js", "Express", "PHP", "REST APIs", "JWT", "RBAC", "Auth"] },
    { label: "Database", tags: ["MongoDB", "MySQL", "Redis", "SQL"] },
    { label: "Cloud/DevOps", tags: ["AWS", "EC2", "S3", "VPC", "IAM", "CloudWatch", "Terraform", "Docker", "Kubernetes", "Nginx", "GitHub Actions", "CI/CD", "Linux"] },
    { label: "Security", tags: ["OWASP", "DevSecOps", "Trivy", "SAST", "Container Security", "Zero Trust", "Secrets Mgmt"] },
  ];

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={personSchema} />

      {/* ── Global print styles ────────────────────────────────────────────── */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 11mm 12mm 11mm 12mm;
          }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif !important; }

          /* Hide everything outside the resume sheet */
          header, footer, nav { display: none !important; }

          /* Reset the card visuals */
          .resume-card {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }

          /* Column layout for print */
          .print-grid {
            display: grid !important;
            grid-template-columns: 62% 38% !important;
            gap: 0 !important;
          }

          .print-left {
            padding: 0 10pt 0 0 !important;
            border-right: 0.5pt solid #cbd5e1 !important;
          }
          .print-right {
            padding: 0 0 0 10pt !important;
            background: transparent !important;
            border-radius: 0 !important;
          }

          /* Project cards */
          .project-card {
            border: 0.5pt solid #e2e8f0 !important;
            border-radius: 3pt !important;
            padding: 4pt 5pt !important;
            background: transparent !important;
            margin-bottom: 4pt !important;
            page-break-inside: avoid !important;
          }

          /* Experience blocks */
          .exp-block {
            page-break-inside: avoid !important;
            margin-bottom: 8pt !important;
          }

          /* No page break after section heading */
          h2 { page-break-after: avoid !important; }
          h3 { page-break-after: avoid !important; }

          /* Tag cluster in print */
          .tag-cluster {
            display: inline !important;
          }
        }
      `}</style>

      {/* ── PAGE WRAPPER ─────────────────────────────────────────────────── */}
      <section
        className="min-h-screen bg-slate-50 py-10 relative overflow-hidden print:bg-white print:py-0 print:min-h-0"
        aria-label="Ajit Kumar — Resume"
      >
        {/* Ambient blobs — screen only */}
        <div className="pointer-events-none select-none absolute inset-0 print:hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-indigo-100/60 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-100/50 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 print:px-0 print:max-w-full">

          {/* ── SCREEN NAV (hidden on print) ────────────────────────────── */}
          <div className="flex justify-between items-center mb-6 print:hidden">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <PrintButton />
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              RESUME CARD
          ═══════════════════════════════════════════════════════════════ */}
          <div className="resume-card rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/80 print:rounded-none print:border-none print:shadow-none">

            {/* ════ HEADER ════════════════════════════════════════════════ */}
            <div className="
              relative overflow-hidden rounded-t-3xl
              bg-gradient-to-br from-white via-indigo-50/60 to-white
              px-8 pt-7 pb-5 border-b border-slate-100
              print:rounded-none print:px-0 print:pt-0 print:pb-3 print:border-b print:border-black print:bg-white
            ">
              {/* Dot grid — screen only */}
              <div className="absolute inset-0 print:hidden" aria-hidden="true"
                style={{ backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
              />

              <div className="relative">
                {/* ── Print header: centered name block ── */}
                <div className="hidden print:block print:text-center print:mb-2">
                  <h1 className="print:text-[22pt] print:font-black print:text-black print:leading-none print:tracking-tight">
                    Ajit Kumar
                  </h1>
                  <p className="print:text-[9pt] print:font-bold print:text-black print:mt-0.5">
                    Software Engineer · Full Stack · DevOps · Cloud Security · DevSecOps
                  </p>
                  {/* Print contact row */}
                  <p className="print:text-[7pt] print:text-black print:mt-1 print:leading-relaxed">
                    support@ajitdev.com &nbsp;·&nbsp; ajitk23192@gmail.com &nbsp;·&nbsp; +91 62055 26784 &nbsp;·&nbsp; Katihar, Bihar, India
                  </p>
                  <p className="print:text-[7pt] print:text-black print:leading-relaxed">
                    github.com/ajitdev01 &nbsp;·&nbsp; linkedin.com/in/ajitdev01 &nbsp;·&nbsp; ajitdev.com &nbsp;·&nbsp; leetcode.com/ajitdev01
                  </p>
                  {/* Print summary */}
                  <p className="print:text-[7.5pt] print:text-black print:mt-1.5 print:leading-snug print:text-left">
                    Results-driven Full Stack Engineer with hands-on LAMP Stack production experience and a strong foundation in
                    MERN Stack, Next.js, and cloud-native infrastructure. Engineered 4+ production-grade web applications covering
                    authentication systems, admin dashboards, CMS portals, and REST API integrations. Proficient in Docker, AWS,
                    Terraform, and GitHub Actions CI/CD with a DevSecOps mindset. 518+ LeetCode problems solved; advancing in
                    System Design, Distributed Systems, and Cloud Security.
                  </p>
                </div>

                {/* ── Screen header ── */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5 print:hidden">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
                        Ajit Kumar
                      </h1>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Open to Work
                      </span>
                    </div>
                    <p className="text-sm font-bold text-indigo-600 tracking-wide mt-1">
                      Software Engineer · Full Stack · DevOps · Cloud Security · DevSecOps
                    </p>
                    <p className="mt-3 text-[12px] text-slate-500 leading-relaxed max-w-2xl">
                      Results-driven Full Stack Engineer with hands-on LAMP Stack production experience and a
                      strong foundation in MERN Stack, Next.js, and cloud-native infrastructure. Engineered
                      4+ production-grade web applications covering authentication systems, admin dashboards,
                      CMS portals, and REST API integrations. Proficient in Docker, AWS, Terraform, and
                      GitHub Actions CI/CD pipelines with a security-first DevSecOps mindset. Active competitive
                      programmer with 518+ LeetCode problems solved, continuously advancing in System Design,
                      Distributed Systems, and Cloud Security.
                    </p>
                    {/* Stat badges */}
                    <div className="mt-4 grid grid-cols-4 gap-2 max-w-lg">
                      <StatBadge value="518+" label="LeetCode" icon={<Leetcode className="w-3.5 h-3.5" />} />
                      <StatBadge value="242+" label="Day Streak" icon={<Zap className="w-3 h-3" />} />
                      <StatBadge value="4+" label="Live Projects" icon={<Globe className="w-3 h-3" />} />
                      <StatBadge value="6mo" label="Eng. XP" icon={<Briefcase className="w-3 h-3" />} />
                    </div>
                  </div>
                  {/* Contact */}
                  <div className="shrink-0 space-y-1.5 text-[11px] text-slate-500">
                    {[
                      { icon: <Mail className="w-3 h-3" />, href: "mailto:support@ajitdev.com", label: "support@ajitdev.com" },
                      { icon: <Mail className="w-3 h-3" />, href: "mailto:ajitk23192@gmail.com", label: "ajitk23192@gmail.com" },
                      { icon: <Phone className="w-3 h-3" />, href: "tel:+916205526784", label: "+91 62055 26784" },
                      { icon: <MapPin className="w-3 h-3" />, href: null, label: "Katihar, Bihar, India" },
                      { icon: <Github className="w-3 h-3" />, href: "https://github.com/ajitdev01", label: "github.com/ajitdev01" },
                      { icon: <Linkedin className="w-3 h-3" />, href: "https://linkedin.com/in/ajitdev01", label: "linkedin.com/in/ajitdev01" },
                      { icon: <Globe className="w-3 h-3" />, href: "https://ajitdev.com", label: "ajitdev.com" },
                      { icon: <Leetcode className="w-3 h-3" />, href: "https://leetcode.com/ajitdev01", label: "leetcode.com/ajitdev01" },
                    ].map(({ icon, href, label }) => (
                      <div key={label} className="flex items-center gap-2">
                        <span className="text-indigo-500">{icon}</span>
                        {href ? (
                          <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                            className="hover:text-indigo-600 transition-colors">{label}</a>
                        ) : <span>{label}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ════ BODY ═══════════════════════════════════════════════════ */}
            <div className="print-grid grid md:grid-cols-12">

              {/* ════ LEFT COLUMN ══════════════════════════════════════════ */}
              <div className="print-left md:col-span-8 px-8 py-6 space-y-7 border-r border-slate-100 print:space-y-0 print:px-0 print:py-0 print:border-slate-300">

                {/* ── EXPERIENCE ──────────────────────────────────────── */}
                <div className="print:mb-3">
                  <SectionHeading icon={<Briefcase className="w-3.5 h-3.5" />}>
                    Professional Experience
                  </SectionHeading>

                  <div className="space-y-5 print:space-y-0">

                    {/* Exp 1 */}
                    <div className="exp-block relative pl-4 border-l-2 border-indigo-300 print:pl-0 print:border-0 print:border-l-0">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-white print:hidden" />
                      <div className="flex flex-wrap justify-between items-start gap-1 mb-1.5 print:mb-0.5">
                        <div>
                          <h3 className="text-[13px] font-bold text-slate-800 print:text-[8.5pt] print:font-bold print:text-black">
                            Full Stack Engineer — Web Development
                          </h3>
                          <p className="text-[11px] text-indigo-600 font-semibold print:text-[7.5pt] print:text-black print:font-semibold">
                            Freelance / Contract · LAMP Stack · REST APIs · MVC Architecture
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded print:bg-transparent print:border-0 print:text-[7.5pt] print:text-black print:font-normal print:px-0">
                          6 Months · 2024
                        </span>
                      </div>
                      <ul className="space-y-1.5 print:space-y-0.5 print:list-disc print:list-outside print:ml-4">
                        <Bullet>Engineered 4+ production-ready LAMP Stack web applications encompassing business portals, admin dashboards, authentication systems, and CMS-driven sites deployed on Apache/Linux.</Bullet>
                        <Bullet>Designed responsive, cross-browser-compatible UI layouts using HTML5, CSS3, and Bootstrap, reducing page rendering inconsistencies across Chrome, Firefox, and Safari.</Bullet>
                        <Bullet>Developed reusable PHP backend modules with MVC-style architecture, implementing role-based access control, session management, and secure form validation workflows.</Bullet>
                        <Bullet>Integrated RESTful APIs and third-party SMTP mail services to enable automated client communication pipelines within production environments.</Bullet>
                        <Bullet>Optimized MySQL database queries through indexing strategies and JOIN refactoring, improving average query execution time across high-frequency data retrieval endpoints.</Bullet>
                        <Bullet>Automated deployment workflows using Git/GitHub version control and Apache VirtualHost configuration, streamlining production release cycles.</Bullet>
                        <Bullet>Implemented on-page SEO optimizations including semantic HTML structure, meta tags, and structured content, improving search engine indexability for client websites.</Bullet>
                        <Bullet>Resolved production bugs across backend authentication flows and frontend rendering pipelines, maintaining uptime and stability for active client deployments.</Bullet>
                      </ul>
                    </div>

                    {/* Exp 2 */}
                    <div className="exp-block relative pl-4 border-l-2 border-violet-300 print:pl-0 print:border-0 print:mt-3">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-violet-500 ring-2 ring-white print:hidden" />
                      <div className="flex flex-wrap justify-between items-start gap-1 mb-1.5 print:mb-0.5">
                        <div>
                          <h3 className="text-[13px] font-bold text-slate-800 print:text-[8.5pt] print:font-bold print:text-black">
                            Web Developer — Contributor
                          </h3>
                          <a href="https://rexvel.com" target="_blank" rel="noopener noreferrer"
                            className="text-[11px] text-violet-600 font-semibold hover:text-violet-700 inline-flex items-center gap-1 print:text-[7.5pt] print:text-black print:font-semibold print:no-underline">
                            RexVel Web Solution <ExternalLink className="w-2.5 h-2.5 print:hidden" />
                          </a>
                          <p className="text-[10px] text-slate-400 print:text-[7pt] print:text-black">Digital Branding &amp; Web Development Agency · rexvel.com</p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded print:hidden">
                          Collaborative
                        </span>
                      </div>
                      <ul className="space-y-1.5 print:space-y-0.5 print:list-disc print:list-outside print:ml-4">
                        <Bullet>Contributed to development and maintenance of responsive business websites and digital solutions, delivering pixel-accurate UI components and PHP-driven backend features.</Bullet>
                        <Bullet>Designed reusable front-end components with Bootstrap and vanilla CSS, ensuring consistent branding and cross-device responsiveness across client deliverables.</Bullet>
                        <Bullet>Maintained and extended PHP backend codebases implementing database-driven functionality, dynamic content rendering, and secure authentication modules.</Bullet>
                        <Bullet>Integrated MySQL databases with optimized query structures to support data-driven web portals, admin panels, and dynamic landing pages.</Bullet>
                        <Bullet>Delivered client customizations and feature enhancements within defined scope, meeting deadlines and maintaining production deployment stability.</Bullet>
                        <Bullet>Supported SEO improvements and cross-browser compatibility fixes enhancing page performance and discoverability for agency client portfolios.</Bullet>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* ── PROJECTS ────────────────────────────────────────── */}
                <div className="print:mb-3">
                  <SectionHeading icon={<Code className="w-3.5 h-3.5" />}>
                    Featured Engineering Projects
                  </SectionHeading>

                  <div className="space-y-3.5 print:space-y-0">
                    {[
                      {
                        title: "DevSecOps Automation Pipeline — Shift-Left Security CI/CD",
                        tags: ["GitHub Actions", "Docker", "Trivy", "SAST", "OWASP"],
                        bullets: [
                          "Architected a multi-stage GitHub Actions CI/CD pipeline integrating Trivy container image vulnerability scanning and OWASP dependency-check SAST analysis before every Docker registry push.",
                          "Containerized a React application with multi-stage Dockerfile, reducing final image size by isolating build and runtime layers, and enforcing non-root container execution for security hardening.",
                          "Configured automated workflow gates that block deployments on high/critical CVE detections, implementing a shift-left security model aligned with OWASP DevSecOps practices.",
                          "Instrumented pipeline with secrets management best practices—injecting API keys via GitHub Encrypted Secrets, preventing credential exposure in build logs.",
                        ],
                      },
                      {
                        title: "Cloud Security Lab — AWS VPC Network Isolation",
                        tags: ["AWS", "Terraform", "IAM", "VPC", "EC2", "CloudWatch"],
                        bullets: [
                          "Provisioned a production-grade AWS VPC architecture using Terraform IaC, segregating database nodes inside private non-egress subnets while routing public traffic through an Application Load Balancer and NAT Gateway.",
                          "Configured granular IAM policies with least-privilege boundaries for EC2 instances, S3 buckets, and CloudWatch monitoring to eliminate over-privileged access vectors.",
                          "Designed Security Group firewall rules enforcing explicit ingress/egress allowlists, blocking unauthorized lateral movement between VPC tiers aligned with Zero Trust networking principles.",
                          "Automated infrastructure provisioning with Terraform state management enabling reproducible multi-environment deployments and infrastructure drift detection.",
                        ],
                      },
                      {
                        title: "Stateless MERN Platform — JWT Auth + Redis Caching Layer",
                        tags: ["MongoDB", "Express", "React", "Node.js", "Redis", "JWT"],
                        bullets: [
                          "Engineered a scalable MERN Stack web platform with stateless JWT authentication via HTTP-only cookies, eliminating XSS-based token theft vectors and maintaining secure session lifecycle.",
                          "Implemented Cache-Aside pattern using Redis to intercept high-frequency MongoDB read operations, reducing database round-trips and improving response latency for frequently queried resources.",
                          "Designed normalized MongoDB schema with compound indexing strategies, optimizing aggregation pipeline performance for data-intensive dashboard queries.",
                          "Secured REST API endpoints with Express middleware enforcing input sanitization, rate limiting, and RBAC guards aligned with OWASP API Security Top 10.",
                        ],
                      },
                      {
                        title: "LAMP Stack Production Applications — 4+ Client Deployments",
                        tags: ["PHP", "MySQL", "Apache", "Linux", "REST API", "Bootstrap"],
                        bullets: [
                          "Delivered 4+ production-ready LAMP Stack applications: a business CRM portal, multi-role admin dashboard, client authentication system, and CMS-driven brochure website with SEO optimization.",
                          "Architected role-based authentication modules with PHP session management and MySQL-backed user permission tables, independently securing admin, editor, and client access tiers.",
                          "Integrated third-party REST APIs and SMTP mail services for contact forms and automated notification workflows within deployed production environments.",
                          "Optimized SQL query execution through strategic indexing, query refactoring, and EXPLAIN analysis, reducing database load on high-frequency data fetch operations.",
                        ],
                      },
                    ].map(({ title, tags, bullets }) => (
                      <div key={title} className="project-card rounded-xl bg-slate-50 border border-slate-200 p-4 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
                        <div className="flex flex-wrap justify-between items-start gap-1 mb-1.5 print:mb-0.5">
                          <h3 className="text-[12px] font-bold text-slate-800 print:text-[8pt] print:font-bold print:text-black">
                            {title}
                          </h3>
                          <div className="flex flex-wrap gap-1 print:hidden">
                            {tags.map(t => <Tag key={t}>{t}</Tag>)}
                          </div>
                          {/* Print inline tag list */}
                          <span className="hidden print:inline text-[7pt] text-black">
                            {tags.join(" · ")}
                          </span>
                        </div>
                        <ul className="space-y-1 print:space-y-0 print:list-disc print:list-outside print:ml-4">
                          {bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── EDUCATION ───────────────────────────────────────── */}
                <div>
                  <SectionHeading icon={<GraduationCap className="w-3.5 h-3.5" />}>
                    Education &amp; Training
                  </SectionHeading>
                  <div className="space-y-4 print:space-y-1.5">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-[13px] font-bold text-slate-800 print:text-[8.5pt] print:font-bold print:text-black">
                          Bachelor of Computer Applications (BCA)
                        </h3>
                        <p className="text-[11px] text-indigo-600 font-semibold print:text-[7.5pt] print:text-black print:font-normal">
                          Specialization: Cloud Computing &amp; Security
                        </p>
                        <p className="text-[10px] text-slate-400 print:text-[7pt] print:text-black">Amity University Online</p>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 print:bg-transparent print:border-0 print:text-[7.5pt] print:text-black print:font-normal print:px-0">
                        Ongoing
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="text-[13px] font-bold text-slate-800 print:text-[8.5pt] print:font-bold print:text-black">
                          DevOps Engineering &amp; Full Stack Specialist Program
                        </h3>
                        <p className="text-[11px] text-indigo-600 font-semibold print:text-[7.5pt] print:text-black print:font-normal">
                          Brainzima Innovation Institute
                        </p>
                        <p className="text-[10px] text-slate-500 mt-0.5 max-w-lg leading-relaxed print:text-[7pt] print:text-black">
                          MERN Stack development, Linux server administration, Docker/Kubernetes orchestration, Git workflows, and cloud-native infrastructure fundamentals.
                        </p>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 print:bg-transparent print:border-0 print:text-[7.5pt] print:text-black print:font-normal print:px-0">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* ════ RIGHT COLUMN ═════════════════════════════════════════ */}
              <div className="print-right md:col-span-4 px-6 py-6 space-y-6 bg-slate-50/50 rounded-br-3xl print:space-y-0 print:px-0 print:py-0 print:bg-white print:rounded-none">

                {/* ── KEY HIGHLIGHTS ─────────────────────────────────── */}
                <div className="print:mb-3">
                  <SectionHeading icon={<Award className="w-3.5 h-3.5" />}>
                    Key Highlights
                  </SectionHeading>
                  {/* Screen list */}
                  <ul className="space-y-2 print:hidden">
                    {[
                      { label: "518+ LeetCode Problems Solved", sub: "242+ Day Active Streak" },
                      { label: "4+ Live Production Projects", sub: "LAMP · MERN · Next.js" },
                      { label: "6 Months Full Stack Engineering", sub: "PHP · MySQL · REST APIs" },
                      { label: "RexVel Web Solution Contributor", sub: "rexvel.com" },
                      { label: "BCA Cloud & Security", sub: "Amity University Online" },
                      { label: "DevSecOps Pipeline Implemented", sub: "Trivy · GitHub Actions" },
                      { label: "AWS VPC + Terraform IaC Labs", sub: "IAM · EC2 · S3 · VPC" },
                      { label: "Docker Container Hardening", sub: "Multi-stage · Non-root" },
                      { label: "Active GitHub Contributions", sub: "Boilerplates · OSS" },
                      { label: "DSA Foundations Mastered", sub: "Advancing: Graphs · DP" },
                    ].map(({ label, sub }) => (
                      <li key={label} className="flex gap-2 items-start">
                        <CheckCircle className="w-3 h-3 text-indigo-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-[11px] font-semibold text-slate-700 leading-tight">{label}</p>
                          <p className="text-[10px] text-slate-400">{sub}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Print compact list */}
                  <ul className="hidden print:block print:space-y-0.5">
                    {[
                      "518+ LeetCode Problems · 242+ Day Streak",
                      "4+ Live Production Projects (LAMP · MERN · Next.js)",
                      "6 Months Full Stack Engineering (PHP · MySQL · REST APIs)",
                      "RexVel Web Solution Contributor — rexvel.com",
                      "BCA Cloud & Security — Amity University Online",
                      "DevSecOps Pipeline (Trivy · GitHub Actions · SAST)",
                      "AWS VPC + Terraform IaC (IAM · EC2 · S3 · VPC)",
                      "Docker Multi-stage Container Hardening",
                      "Active GitHub Contributions — Boilerplates & OSS",
                      "DSA Mastered — Advancing: Graphs · DP · System Design",
                    ].map((item) => (
                      <li key={item} className="flex gap-1 items-start text-[7pt] text-black leading-snug list-none">
                        <span className="shrink-0 mt-[1pt]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── TECH STACK ─────────────────────────────────────── */}
                <div className="print:mb-3">
                  <SectionHeading icon={<Code className="w-3.5 h-3.5" />}>
                    Tech Stack
                  </SectionHeading>

                  {/* Screen tag groups */}
                  <div className="space-y-3 print:hidden">
                    {techStack.map(({ label, tags }) => (
                      <div key={label}>
                        <h3 className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1.5">
                          {label}
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {tags.map(t => <Tag key={t}>{t}</Tag>)}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Print tech stack */}
                  <div className="hidden print:block print:space-y-0.5">
                    {techStack.map(({ label, tags }) => (
                      <PrintSkillRow key={label} label={label} tags={tags} />
                    ))}
                  </div>
                </div>

                {/* ── CORE CS ────────────────────────────────────────── */}
                <div className="print:mb-3">
                  <SectionHeading icon={<GraduationCap className="w-3.5 h-3.5" />}>
                    Core CS
                  </SectionHeading>
                  <div className="flex flex-wrap gap-1 print:hidden">
                    {["Data Structures", "Algorithms", "OS", "Computer Networks", "DBMS", "OOP", "System Design", "Cloud Computing", "Cyber Security", "Distributed Systems"].map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <p className="hidden print:block print:text-[7pt] print:text-black">
                    Data Structures · Algorithms · OS · Computer Networks · DBMS · OOP · System Design · Cloud Computing · Cyber Security · Distributed Systems
                  </p>
                </div>

                {/* ── CURRENT LEARNING ───────────────────────────────── */}
                <div className="print:mb-3">
                  <SectionHeading icon={<Target className="w-3.5 h-3.5" />}>
                    Current Learning
                  </SectionHeading>
                  <ul className="space-y-1.5 print:hidden">
                    {[
                      ["Advanced Graph Algorithms", "Active"],
                      ["Dynamic Programming", "Active"],
                      ["Low-Level Design (LLD)", "Active"],
                      ["High-Level Design (HLD)", "Active"],
                      ["Distributed Systems", "Focus"],
                      ["Kubernetes Deep Dive", "Focus"],
                      ["AWS Solutions Architecture", "Focus"],
                      ["Zero Trust Networking", "Focus"],
                    ].map(([topic, status]) => (
                      <li key={topic} className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-500">{topic}</span>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border
                          ${status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-indigo-50 text-indigo-700 border-indigo-200"}`}>
                          {status}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="hidden print:block print:text-[7pt] print:text-black">
                    Advanced Graph Algorithms · Dynamic Programming · LLD · HLD · Distributed Systems · Kubernetes · AWS Architecture · Zero Trust Networking
                  </p>
                </div>

                {/* ── TARGET ROLES ───────────────────────────────────── */}
                <div>
                  <SectionHeading icon={<Target className="w-3.5 h-3.5" />}>
                    Target Roles
                  </SectionHeading>
                  <div className="flex flex-wrap gap-1 print:hidden">
                    {["Software Engineer", "Full Stack Engineer", "Backend Engineer", "DevOps Engineer", "Cloud Engineer", "DevSecOps Engineer"].map(role => (
                      <span key={role} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700">
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="hidden print:block print:text-[7pt] print:text-black">
                    Software Engineer · Full Stack Engineer · Backend Engineer · DevOps Engineer · Cloud Engineer · DevSecOps Engineer
                  </p>
                </div>

                {/* Print footer */}
                <div className="hidden print:block print:mt-4 print:pt-2 print:border-t print:border-slate-300 print:text-center print:text-[6.5pt] print:text-black">
                  ajitdev.com · github.com/ajitdev01 · linkedin.com/in/ajitdev01
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
