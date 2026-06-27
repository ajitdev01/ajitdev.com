import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Shield, Cpu, Layers, Key, Terminal } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Technical Research & System Whitepapers | Ajit Dev",
  description: "Read technical research articles by Ajit Kumar. Detailed publications on Docker internals, Kubernetes architectures, Linux kernel system calls, and Zero Trust security models.",
  alternates: {
    canonical: "https://ajitdev.com/research",
  },
};

const RESEARCH_PAPERS = [
  {
    slug: "how-docker-works",
    title: "How Docker Works: Under the Hood",
    desc: "A deep dive into Linux Namespaces (PID, NET, MNT), Cgroups, and Union File Systems (OverlayFS) that enable container virtualization without hypervisors.",
    category: "Virtualization",
    icon: Layers,
    readTime: "8 min read",
    date: "June 2026"
  },
  {
    slug: "kubernetes-architecture",
    title: "Kubernetes Architecture & Orchestration",
    desc: "Analyzing Control Plane mechanics (apiserver, etcd, scheduler) and Worker Node daemons (kubelet, kube-proxy, CNI) in containerized distributed systems.",
    category: "Distributed Systems",
    icon: Cpu,
    readTime: "10 min read",
    date: "June 2026"
  },
  {
    slug: "linux-internals",
    title: "Linux Internals: System Calls & Virtual Memory",
    desc: "Understanding kernel space vs user space transition, scheduling queues, virtual memory paging, systemd, and the lifecycle of processes via fork/exec.",
    category: "Operating Systems",
    icon: Terminal,
    readTime: "9 min read",
    date: "May 2026"
  },
  {
    slug: "aws-iam-explained",
    title: "AWS IAM Policy Evaluation Logic & Access Roles",
    desc: "A security engineering guide to IAM principles, cross-account delegation roles, and the precise IAM policy evaluation engine rules.",
    category: "Cloud Security",
    icon: Key,
    readTime: "7 min read",
    date: "May 2026"
  },
  {
    slug: "zero-trust-security",
    title: "Zero Trust Security Architectures in Modern Cloud",
    desc: "Practical blueprints for implementing Zero Trust networks. Micro-segmentation, identity-aware proxies, and Shift-Left scanning pipelines.",
    category: "Cybersecurity",
    icon: Shield,
    readTime: "8 min read",
    date: "April 2026"
  },
  {
    slug: "authentication-vs-authorization",
    title: "Authentication vs Authorization Deep Dive",
    desc: "Comparing protocols: OAuth 2.0, OpenID Connect (OIDC), SAML, and JWT authentication mechanisms, with secure state-transfer guidelines.",
    category: "App Security",
    icon: Key,
    readTime: "6 min read",
    date: "March 2026"
  }
];

export default function ResearchIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/research/#breadcrumb",
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
        "name": "Research",
        "item": "https://ajitdev.com/research",
      },
    ],
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-[#030712] min-h-screen text-slate-100 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Nav */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-purple-500/20">
              <BookOpen className="w-3.5 h-3.5" /> Technical Publications
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Systems Engineering & Cloud Security Research
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-2">
              Whitepapers, logical blueprints, and detailed write-ups on container virtualization, kernel spaces, IAM trees, and zero-trust security layouts.
            </p>
          </div>

          {/* Grid of articles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESEARCH_PAPERS.map((paper) => {
              const Icon = paper.icon;
              return (
                <div
                  key={paper.slug}
                  className="group relative rounded-3xl p-6 glass-panel glass-panel-hover flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="px-2 py-0.5 bg-slate-900 border border-white/5 rounded-lg text-slate-400 font-medium">
                        {paper.category}
                      </span>
                      <span className="text-slate-500 font-semibold">{paper.date}</span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-purple-400 group-hover:text-indigo-450 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h2 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                      <Link href={`/research/${paper.slug}`}>{paper.title}</Link>
                    </h2>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      {paper.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-6 mt-6 border-t border-white/5">
                    <span className="text-slate-500 font-semibold">{paper.readTime}</span>
                    <Link
                      href={`/research/${paper.slug}`}
                      className="text-indigo-400 hover:text-indigo-300 font-bold hover:underline"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
