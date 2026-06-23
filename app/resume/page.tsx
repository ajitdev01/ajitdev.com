import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Professional Resume & CV Download | Ajit Dev Portfolio",
  description: "Download the developer resume of Ajit Dev. BCA Cloud & Security student, Full Stack Engineer (MERN & Next.js), and DevOps automation engineer.",
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
        "name": "resume",
        "item": "https://ajitdev.com/resume",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I contact Ajit Kumar?",
        "answer": {
          "@type": "Answer",
          "text": "Please submit inquiries via the /contact page or email ajitk23192@gmail.com directly."
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
                About & Credentials
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Professional Resume
            </h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Summary of professional software development capabilities, systems engineering skills, and academic training at Amity University Online and Brainzima Institute.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Topical Roadmap & Milestones</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
              <li>BCA Cloud & Security</li>
              <li>Brainzima Full Stack</li>
              <li>AWS Cloud Practitioner</li>
              <li>DevOps Systems Specialist</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Notes & Implementation Guidelines</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Specializing in next-generation web architectures, automated security pipelines (DevSecOps), and low-level algorithms optimization.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Recommended Learning Resources</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-500">Download PDF Copy</span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-500">LinkedIn Profile</span>
              <span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-500">GitHub Repositories</span>
            </div>
          </div>

          {/* Related Links */}
          <div className="bg-indigo-50 border border-indigo-100/80 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-indigo-900 mb-3">Related Subpages & Showcases</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/leetcode" className="px-3 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">LeetCode Profile</Link>
              <Link href="/about" className="px-3 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">About Me</Link>
              <Link href="/skills" className="px-3 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">Skills Matrix</Link>
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
