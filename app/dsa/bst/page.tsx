import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Binary Search Trees (BST) Study Notes & scaling | Ajit Dev",
  description: "Ordered tree nodes, balance conditions, AVL models, and node operations. Master class implementation notes, tradeoffs analysis, and scaling parameters in DSA.",
  alternates: {
    canonical: "https://ajitdev.com/dsa/bst",
  },
};

export default function dsaBstPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/dsa/bst/#breadcrumb",
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
        "name": "DSA",
        "item": "https://ajitdev.com/dsa",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "bst",
        "item": "https://ajitdev.com/dsa/bst",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is covered under this Binary Search Trees (BST) guide?",
        "answer": {
          "@type": "Answer",
          "text": "This guide covers implementation guidelines, common trade-offs, scalability checkpoints, and clean code configurations for Binary Search Trees (BST)."
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
            href="/dsa"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to DSA Hub
          </Link>

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50">
                Algorithms & Logic
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Binary Search Trees (BST)
            </h1>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Ordered tree nodes, balance conditions, AVL models, and node operations.
            </p>
          </div>

          
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Algorithmic Study Guide & Progress</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I solve problems in C++ daily. Under my public LeetCode handle <strong>ajitdev01</strong>, I have resolved 430+ challenges.
          Here is my learning journal and notes on <strong>Binary Search Trees (BST)</strong>:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">Complexity & Performance</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              We analyze the best, average, and worst-case time complexity, optimizing algorithms to run within strict constraints.
            </p>
          </div>
          <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">LeetCode Optimization Rules</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Utilize sliding windows, fast pointer lookups, and heap-based maps to avoid memory limits and exceed speed targets.
            </p>
          </div>
        </div>
        <div className="p-5 border border-indigo-100 rounded-xl bg-indigo-50/50">
          <span className="text-indigo-950 font-bold text-sm block mb-1">Interactive Progress Tracker</span>
          <p className="text-indigo-900 text-xs leading-relaxed">
            Status: <span className="font-semibold text-emerald-600">Completed (30+ Problems Solved)</span>. Verified on LeetCode.
          </p>
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
