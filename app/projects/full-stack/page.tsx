import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Server, Database, BookOpen, ExternalLink, Github, Star } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Full Stack MERN & LAMP Projects | Ajit Dev Portfolio",
  description:
    "Explore production-grade Full Stack projects by Ajit Dev. High-performance Next.js apps, MERN stack dashboards, LAMP auth servers, and custom database APIs.",
  alternates: {
    canonical: "https://ajitdev.com/projects/full-stack",
  },
};

const fullStackProjects = [
  {
    title: "IRCTC Railway Booking System Clone",
    desc: "A production-ready MERN system with real-time seat availability, ticket transactions, user roles, email OTP authentication, and custom dashboard metrics.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Redis", "Socket.io", "JWT"],
    github: "https://github.com/ajitdev01/lamp-project/tree/main/IRCTC-Clone",
    live: "https://github.com/ajitdev01",
    stars: 28,
  },
  {
    title: "MERN Stack Learning Repository (45+ Lectures)",
    desc: "A curriculum and code archive teaching enterprise MERN development, containing MVC structure templates, Multer upload setups, and e-commerce models (BiKart).",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/ajitdev01/mern-fullstack",
    live: "https://github.com/ajitdev01",
    stars: 67,
  },
  {
    title: "BiKart E-commerce Platform",
    desc: "A full-featured shopping platform with interactive carts, Stripe gateway integrations, user wishlist, search query indexes, and admin data tables.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe", "Redux", "JWT"],
    github: "https://github.com/ajitdev01/mern-fullstack",
    live: "https://github.com/ajitdev01",
    stars: 53,
  },
  {
    title: "LAMP Stack Authentication Server",
    desc: "A traditional authentication system implementing PHP session guards, MySQL relational aggregates, secure email OTP validation, and standard CRUD panels.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    github: "https://github.com/ajitdev01/lamp-project",
    live: "https://ajitdev.com",
    stars: 24,
  },
];

export default function FullStackProjectsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/projects/full-stack/#breadcrumb",
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
        "name": "Full Stack",
        "item": "https://ajitdev.com/projects/full-stack",
      },
    ],
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://ajitdev.com/projects/full-stack/#projectlist",
    "name": "Full Stack Software Projects by Ajit Dev",
    "description": "Production-grade MERN and LAMP stack web applications built by Ajit Dev.",
    "url": "https://ajitdev.com/projects/full-stack",
    "numberOfItems": fullStackProjects.length,
    "itemListElement": fullStackProjects.map((p, idx) => ({
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
              Full Stack Web Applications
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              MERN Stack (MongoDB, Express, React, Node.js) and LAMP Stack application showcases. From real-time concurrent transactional backends to relational databases and payment integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fullStackProjects.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                      {idx % 2 === 0 ? <Server className="w-5 h-5" /> : <Database className="w-5 h-5" />}
                    </div>
                    <span className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 text-yellow-500" />
                      {p.stars} stars
                    </span>
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
