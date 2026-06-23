import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Designing Netflix Video Streaming Study Notes & scaling | Ajit Dev",
  description: "Processing file formats, content delivery networks, and dashboard databases. Master class implementation notes, tradeoffs analysis, and scaling parameters in System Design.",
  alternates: {
    canonical: "https://ajitdev.com/system-design/design-netflix",
  },
};

export default function systemdesignDesignNetflixPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/system-design/design-netflix/#breadcrumb",
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
        "name": "System Design",
        "item": "https://ajitdev.com/system-design",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "design netflix",
        "item": "https://ajitdev.com/system-design/design-netflix",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is covered under this Designing Netflix Video Streaming guide?",
        "answer": {
          "@type": "Answer",
          "text": "This guide covers implementation guidelines, common trade-offs, scalability checkpoints, and clean code configurations for Designing Netflix Video Streaming."
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
            href="/system-design"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to System Design Hub
          </Link>

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50">
                System Architecture
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Designing Netflix Video Streaming
            </h1>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Processing file formats, content delivery networks, and dashboard databases.
            </p>
          </div>

          
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">High & Low Level Architecture Analysis</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Detailed notes, trade-offs, and scaling guidelines for <strong>Designing Netflix Video Streaming</strong> systems.
        </p>
        
        {/* Architecture Diagram Mock */}
        <div className="border border-gray-200 rounded-xl p-6 bg-slate-900 font-mono text-xs text-indigo-400 mb-8 leading-relaxed">
          <div className="text-center border-b border-gray-800 pb-3 mb-3 text-white font-bold">
            ARCHITECTURE FLOW DIAGRAM
          </div>
          [User Client Browser] <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ (HTTPS traffic via DNS Route53)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br />
          [Load Balancer Engine] <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ (Distributing workload across API nodes)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──► [Server Node A] ──► [Redis Cache (Fast Reads)]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──► [Server Node B] ──► [MongoDB / MySQL Database (Primary)]
        </div>

        <div className="space-y-4">
          <div className="p-4 border-l-4 border-indigo-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">High Level Design (HLD)</h3>
            <p className="text-gray-500 text-xs mt-1">Decoupled systems using load balancers, caching partitions, and queue models to process messages asynchronously.</p>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">Low Level Design (LLD) & Patterns</h3>
            <p className="text-gray-500 text-xs mt-1">Structured class objects adhering to SOLID rules, deploying Creational (Factory, Singleton) patterns to isolate database calls.</p>
          </div>
          <div className="p-4 border-l-4 border-pink-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">System Trade-offs</h3>
            <p className="text-gray-500 text-xs mt-1">We balance read latency against write synchronization rules according to the CAP Theorem constraints.</p>
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
