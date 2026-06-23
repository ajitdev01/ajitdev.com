import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Developer Portfolio Implementation Study Study Notes & scaling | Ajit Dev",
  description: "Optimizing Next.js bundle footprint, static schemas generation, and RSS XML feeds. Master class implementation notes, tradeoffs analysis, and scaling parameters in Case Studies.",
  alternates: {
    canonical: "https://ajitdev.com/case-studies/portfolio",
  },
};

export default function casestudiesPortfolioPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/case-studies/portfolio/#breadcrumb",
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
        "name": "Case Studies",
        "item": "https://ajitdev.com/case-studies",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "portfolio",
        "item": "https://ajitdev.com/case-studies/portfolio",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is covered under this Developer Portfolio Implementation Study guide?",
        "answer": {
          "@type": "Answer",
          "text": "This guide covers implementation guidelines, common trade-offs, scalability checkpoints, and clean code configurations for Developer Portfolio Implementation Study."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a repository mapping for this guide?",
        "answer": {
          "@type": "Answer",
          "text": "Yes, public code scripts and configurations are shared on the ajitdev01 GitHub handle."
        }
      }
    ]
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies Hub
          </Link>

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50">
                System Post-Mortems
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Developer Portfolio Implementation Study
            </h1>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Optimizing Next.js bundle footprint, static schemas generation, and RSS XML feeds.
            </p>
          </div>

          
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">Project Implementation Architecture Post-Mortem</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Review the engineering steps, security checkpoints, and database choices deployed for <strong>Developer Portfolio Implementation Study</strong>.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">1. Problem & Business Goal</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Analyzing concurrent client request loads, database queries latencies, and designing layouts optimized for high conversion rates.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">2. Solution & Architecture</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We developed a decoupled Next.js frontend with isolated Node.js API controllers, routing data queries dynamically.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">3. Database Design & Security Considerations</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Created indexes on database keys, implemented Prepared Statements, secured Express CORS rules, and deployed JWT tokens inside HTTP-only cookies.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">4. CI/CD & Deployment Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Configured GitHub Actions pipelines to run SAST security tests, compile react assets, and push Docker containers to cloud hosts.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">5. Performance Optimization & Lessons Learned</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leveraged Redis caching partitions and dynamic image optimizations to yield high Lighthouse scores, learning to evaluate database indices early.
            </p>
          </div>
        </div>
      </div>
    

          {/* Contextual internal linking (10+ links across layout) */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Explore More Technical Guides</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-gray-500">
              <Link href="/devops" className="hover:text-indigo-600 transition-colors">DevOps Engineering</Link>
              <Link href="/aws" className="hover:text-indigo-600 transition-colors">AWS Operations</Link>
              <Link href="/cloud-security" className="hover:text-indigo-600 transition-colors">Cloud Security</Link>
              <Link href="/cyber-security" className="hover:text-indigo-600 transition-colors">Cybersecurity</Link>
              <Link href="/docker" className="hover:text-indigo-600 transition-colors">Docker Containers</Link>
              <Link href="/kubernetes" className="hover:text-indigo-600 transition-colors">Kubernetes Pods</Link>
              <Link href="/terraform" className="hover:text-indigo-600 transition-colors">Terraform IaC</Link>
              <Link href="/leetcode" className="hover:text-indigo-600 transition-colors">LeetCode Stats</Link>
              <Link href="/dsa" className="hover:text-indigo-600 transition-colors">DSA Roadmap</Link>
              <Link href="/system-design" className="hover:text-indigo-600 transition-colors">System Design</Link>
              <Link href="/about" className="hover:text-indigo-600 transition-colors">About Ajit Dev</Link>
              <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Me</Link>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
