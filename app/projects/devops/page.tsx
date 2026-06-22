import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cpu, Terminal, GitBranch, ExternalLink, Github } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "DevOps & Pipeline Automation Projects | Ajit Dev Portfolio",
  description:
    "Explore DevOps and deployment automation projects by Ajit Dev. Automated CI/CD pipelines, Docker containerized services, and Linux scripting playbooks.",
  alternates: {
    canonical: "https://ajitdev.com/projects/devops",
  },
};

const devopsProjects = [
  {
    title: "GitHub Actions CI/CD Pipeline Automation",
    desc: "Automated continuous integration and deployment pipeline that lint checks, compiles React / Next.js builds, runs container scans, and deploys to virtual instances with zero downtime.",
    tech: ["GitHub Actions", "Docker", "Node.js", "Nginx", "Linux Scripting"],
    github: "https://github.com/ajitdev01",
    live: "https://github.com/ajitdev01",
  },
  {
    title: "Python & Linux Core Automation Toolkit",
    desc: "A library of production automation scripts automating server logs analysis, web scraping tasks with Selenium, server resource checks, and cron-scheduled database updates.",
    tech: ["Python", "Selenium", "BeautifulSoup", "Bash", "Linux SysAdmin"],
    github: "https://github.com/ajitdev01/python-core-to-advanced",
    live: "https://github.com/ajitdev01",
  },
];

export default function DevOpsProjectsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/projects/devops/#breadcrumb",
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
        "name": "DevOps",
        "item": "https://ajitdev.com/projects/devops",
      },
    ],
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://ajitdev.com/projects/devops/#projectlist",
    "name": "DevOps & Automation Projects by Ajit Dev",
    "description": "Continuous Integration, Delivery, and Linux automation tools designed by Ajit Dev.",
    "url": "https://ajitdev.com/projects/devops",
    "numberOfItems": devopsProjects.length,
    "itemListElement": devopsProjects.map((p, idx) => ({
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
              DevOps & CI/CD Projects
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Automated deployment, configuration, and monitoring environments. Minimizing build cycle durations, containerizing application nodes, and scripting server housekeeping routines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {devopsProjects.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                      {idx % 2 === 0 ? <Terminal className="w-5 h-5" /> : <GitBranch className="w-5 h-5" />}
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
