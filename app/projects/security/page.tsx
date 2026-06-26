import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, ExternalLink } from "lucide-react";
import { FiGithub as Github } from "@/lib/icons";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "DevSecOps & Cloud Security Projects | Ajit Dev Portfolio",
  description:
    "Explore cybersecurity and DevSecOps engineering projects by Ajit Dev. Audits against OWASP vulnerabilities, pipeline static scanner configurations, and server hardening playbooks.",
  alternates: {
    canonical: "https://ajitdev.com/projects/security",
  },
};

const securityProjects = [
  {
    title: "DevSecOps Security Scanner Integration",
    desc: "Shift-left application security workflow implementing automated static analysis (SAST), software composition analysis (SCA) dependency checks, and container image scans within a CI/CD build chain.",
    tech: ["Trivy", "Snyk", "ESLint Security", "GitHub Actions", "Docker", "Linux"],
    github: "https://github.com/ajitdev01",
    live: "https://github.com/ajitdev01",
  },
  {
    title: "OWASP Top 10 Web Security Audit & Hardening",
    desc: "A hands-on environment hardening project resolving security weaknesses in express backend systems, configuring CORS policies, encrypting session data, and implementing JWT auth.",
    tech: ["Express Security", "CORS Headers", "JWT Verification", "OWASP Rules", "Linux VPS"],
    github: "https://github.com/ajitdev01",
    live: "https://github.com/ajitdev01",
  },
];

export default function SecurityProjectsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/projects/security/#breadcrumb",
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
        "name": "Projects",
        "item": "https://ajitdev.com/projects",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Security",
        "item": "https://ajitdev.com/projects/security",
      },
    ],
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://ajitdev.com/projects/security/#projectlist",
    "name": "DevSecOps & Cybersecurity Projects by Ajit Dev",
    "description": "Enterprise application and cloud security projects designed by Ajit Dev.",
    "url": "https://ajitdev.com/projects/security",
    "numberOfItems": securityProjects.length,
    "itemListElement": securityProjects.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.title,
      "description": p.desc,
      "url": p.github,
    })),
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={projectListSchema} />

      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects Portfolio
          </Link>

          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
              DevSecOps & Cloud Security
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Identify configuration flaws, secure network access parameters, and defend application services against critical security vulnerabilities. Building automated guards to protect software systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityProjects.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                      {idx === 0 ? <Shield className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-gray-100 border border-gray-200 text-gray-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-10 inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl text-xs font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repo
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-200 rounded-xl hover:bg-indigo-50 text-indigo-600 flex items-center justify-center transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
