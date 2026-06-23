import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Terraform Infrastructure Study Notes & scaling | Ajit Dev",
  description: "Declarative AWS networks, VPC configs, and version-controlled states. Master class implementation notes, tradeoffs analysis, and scaling parameters in DevOps.",
  alternates: {
    canonical: "https://ajitdev.com/devops/terraform",
  },
};

export default function devopsTerraformPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/devops/terraform/#breadcrumb",
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
        "name": "DevOps",
        "item": "https://ajitdev.com/devops",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "terraform",
        "item": "https://ajitdev.com/devops/terraform",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is covered under this Terraform Infrastructure guide?",
        "answer": {
          "@type": "Answer",
          "text": "This guide covers implementation guidelines, common trade-offs, scalability checkpoints, and clean code configurations for Terraform Infrastructure."
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
            href="/devops"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to DevOps Hub
          </Link>

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50">
                Continuous Operations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Terraform Infrastructure
            </h1>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Declarative AWS networks, VPC configs, and version-controlled states.
            </p>
          </div>

          
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuous Integration & Infrastructure Notes</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Deployment guides, build commands, and script templates for <strong>Terraform Infrastructure</strong> operations.
        </p>

        {/* Cheat Sheet CLI block */}
        <div className="bg-slate-900 border border-gray-800 rounded-xl p-5 mb-8 font-mono text-xs text-emerald-400">
          <span className="text-gray-500 block mb-2"># CLI Cheat Sheet commands for Terraform Infrastructure</span>
          $ npm run build <br />
          $ docker build -t ajitdev-app:latest . <br />
          $ kubectl apply -f deployment.yaml <br />
          $ terraform plan -out=tfplan
        </div>

        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
          <li><strong>CI/CD Pipelines</strong>: Automating static checks, linting rules, and compilation tasks.</li>
          <li><strong>Deployment Strategy</strong>: Configuring zero-downtime rolling container updates.</li>
          <li><strong>Real Projects</strong>: Active templates published under the ajitdev01 GitHub profile.</li>
        </ul>
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
