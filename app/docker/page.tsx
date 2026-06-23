import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Docker Containerization & Image Tuning | Ajit Dev",
  description: "Deep-dive into Docker containerization guidelines. Multi-stage Dockerfile builds, Compose orchestration, and registry image scanning.",
  alternates: {
    canonical: "https://ajitdev.com/docker",
  },
};

export default function DockerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/docker/#breadcrumb",
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
        "name": "docker",
        "item": "https://ajitdev.com/docker",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are multi-stage Docker builds?",
        "answer": {
          "@type": "Answer",
          "text": "A method to discard compilation SDKs from the final runtime image, minimizing payload size and threat targets."
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
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50">
                DevOps
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Docker Containerization
            </h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Packaging code, libraries, runtime environments, and system files into light containers that run identically on local machines and production networks.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Topical Roadmap & Milestones</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
              <li>Docker Engine & CLI</li>
              <li>Dockerfile Best Practices</li>
              <li>Docker Compose Multi-Container</li>
              <li>Image Layer Optimization</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Notes & Implementation Guidelines</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We optimize container payloads using multi-stage compile builds, alpine base operating systems, and non-root users.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Recommended Learning Resources</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-500">Docker Reference Docs</span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-500">Alpine Base Images</span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-500">Trivy Security Scan</span>
            </div>
          </div>

          {/* Related Links */}
          <div className="bg-indigo-50 border border-indigo-100/80 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-indigo-900 mb-3">Related Subpages & Showcases</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/devops" className="px-3 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">DevOps Operations</Link>
              <Link href="/aws" className="px-3 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">AWS Cloud Setup</Link>
              <Link href="/docker" className="px-3 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">Docker Containerization</Link>
              <Link href="/system-design" className="px-3 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">System Design Patterns</Link>
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
