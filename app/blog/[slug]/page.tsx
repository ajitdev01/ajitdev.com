import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { getPostBySlug, getPostSlugs, getPostsByCategory, getAllPosts } from "@/lib/blog";
import { MDXComponents } from "@/app/components/MDXComponents";
import JSONLD from "@/app/components/JSONLD";
import { getBlogPostingSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORIES = [
  "devops", "aws", "docker", "kubernetes", "terraform", "linux", "react", "nextjs", "system-design", "dsa", "mern", "lamp", "cloud-security",
  "programming", "c", "cpp", "java", "python", "javascript", "typescript", "cloud", "cybersecurity", "database", "career", "interview",
  "nodejs", "git", "ci-cd", "devsecops"
];

const CATEGORY_MAP: Record<string, { title: string; desc: string }> = {
  programming: {
    title: "Programming Core Concepts & Engineering",
    desc: "Guides and strategies to build a solid programming foundation, covering logic, paradigms, and software development practices.",
  },
  c: {
    title: "C Programming Language Roadmaps & Guides",
    desc: "Master low-level programming with C. Learn pointers, memory allocation, structure architectures, and file systems.",
  },
  cpp: {
    title: "C++ Programming & Advanced Journey",
    desc: "Master object-oriented programming, standard template library (STL), smart pointers, and high-performance algorithms in C++.",
  },
  java: {
    title: "Java & Spring Boot Core Engineering",
    desc: "Deep-dives into JVM architectures, collections, multithreading, garbage collection, and Spring Boot microservices.",
  },
  python: {
    title: "Python Roadmap & Backend Development",
    desc: "Explore clean scripting, OOP, decorators, generators, and backend architectures using FastAPI and Django.",
  },
  javascript: {
    title: "JavaScript Core, Async & Performance",
    desc: "Master execution contexts, closures, prototypes, asynchronous event loops, Promises, and UI performance strategies.",
  },
  typescript: {
    title: "TypeScript Static Architectures & Generics",
    desc: "Build highly reliable type systems. Learn interfaces, generic functions, utility helpers, and strict compiler configs.",
  },
  cloud: {
    title: "Cloud Engineering & Infrastructure Deployment",
    desc: "Architect scalable network systems using EC2, S3 buckets, VPC configurations, CloudFront caching, and Serverless.",
  },
  cybersecurity: {
    title: "Cyber Security & Application Hardening",
    desc: "Identify and defend web applications against OWASP Top 10 vulnerabilities, JWT security flaws, and network compromises.",
  },
  database: {
    title: "Database Architectures & Schema Optimization",
    desc: "Relational and non-relational database management. Optimizing query execution plans, indexes, sharding, and ACID controls.",
  },
  career: {
    title: "Developer Career Guidance & Growth",
    desc: "Actionable advice on scaling as a software engineer, building portfolios, preparing profiles, and negotiating developer roles.",
  },
  interview: {
    title: "Coding Interview Questions & Preparation",
    desc: "Master DSA challenges, system design patterns, and behavioral topics to ace modern technical interviews.",
  },
  devops: {
    title: "DevOps & Infrastructure Automation Tutorials",
    desc: "Production-grade DevOps playbooks on CI/CD pipelines, containerization, orchestration, and automated server workflows.",
  },
  aws: {
    title: "AWS Cloud Infrastructure Architectures",
    desc: "Amazon Web Services engineering resources. VPC configurations, serverless, load balancers, and AWS operations guides.",
  },
  docker: {
    title: "Docker Containerization Guides & Optimization",
    desc: "Optimizing container workloads. Learn multi-stage builds, runtime controls, Docker Compose orchestration, and registry deployments.",
  },
  kubernetes: {
    title: "Kubernetes Cluster Operations & EKS",
    desc: "Production-ready cluster topologies. Pod scheduling, EKS networking, Helm chart management, and continuous deployments.",
  },
  terraform: {
    title: "Terraform Infrastructure as Code (IaC)",
    desc: "Declarative infrastructure management. Construct robust, modular Terraform configurations to automate AWS network states.",
  },
  linux: {
    title: "Linux System Administration & Security Hardening",
    desc: "Linux server operations. Bash scripting automation, service managers, permissions hardening, and Nginx configurations.",
  },
  react: {
    title: "React.js & Frontend Engineering",
    desc: "Building highly interactive user interfaces. State operations, reusable hooks, visual design components, and animations.",
  },
  nextjs: {
    title: "Next.js App Router Performance Optimization",
    desc: "Server-side rendering engineering. Bundle optimization, layout hydration strategies, static generation, and high PageSpeed.",
  },
  "system-design": {
    title: "System Design, Microservices & API Scaling",
    desc: "Architecting high-traffic distributed backends. Rest controllers, database shards, rate limiting, and caching layouts.",
  },
  dsa: {
    title: "Data Structures & Competitive Programming Solutions",
    desc: "Solved algorithm problems from LeetCode. Analysis of arrays, trees, heaps, dynamic programming, and complexity benchmarks.",
  },
  mern: {
    title: "MERN Stack Engineering & Secure APIs",
    desc: "Full-stack development using MongoDB, Express, React, and Node.js. Learn JWT authentication, secure database design, and scaling guidelines.",
  },
  lamp: {
    title: "LAMP Stack Enterprise Web Platforms",
    desc: "Relational backend engineering using Linux, Apache, MySQL, and PHP. Hardening database queries, session controls, and Apache virtual hosts.",
  },
  "cloud-security": {
    title: "Cloud Security, Compliance & DevSecOps",
    desc: "Harden cloud infrastructure and pipelines. Zero-trust networks, IAM role permissions boundary policies, and automated security scans.",
  },
  nodejs: {
    title: "Node.js REST API & Microservice Engineering",
    desc: "Build scalable asynchronous Node.js backend controllers, middleware pipelines, event loops, and cluster setups.",
  },
  git: {
    title: "Git & GitHub Version Control & Workflows",
    desc: "Master Git branching strategies, rebasing, pull request reviews, merge conflict resolutions, and GitHub actions.",
  },
  "ci-cd": {
    title: "Continuous Integration & Delivery (CI/CD) Automation",
    desc: "Automate code checks, unit test suites, container image builds, and zero-downtime server deployments.",
  },
  devsecops: {
    title: "DevSecOps & Automated Pipeline Security",
    desc: "Integrate SAST, DAST, dependency vulnerability scanning, and compliance controls directly into CI/CD workflows.",
  },
};

export async function generateStaticParams() {
  const postSlugs = getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
  const categorySlugs = CATEGORIES.map((cat) => ({
    slug: cat,
  }));
  return [...postSlugs, ...categorySlugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();

  if (CATEGORIES.includes(slug)) {
    const info = CATEGORY_MAP[slug] || {
      title: `${slug.toUpperCase()} Development Guides`,
      desc: `Read guides, tutorials, and codebase setup resources on ${slug} on Ajit Dev Blog.`,
    };
    return {
      title: info.title,
      description: info.desc,
      alternates: {
        canonical: `/blog/${slug}`,
      },
    };
  }

  try {
    const post = getPostBySlug(resolvedParams.slug);
    return {
      title: post.title,
      description: post.description,
      alternates: {
        canonical: `/blog/${resolvedParams.slug}`,
      },
      openGraph: {
        title: `${post.title} — AJITDEV`,
        description: post.description,
        type: "article",
        url: `https://ajitdev.com/blog/${resolvedParams.slug}`,
        publishedTime: post.date,
        authors: ["https://ajitdev.com"],
      },
    };
  } catch (_e) {
    return {
      title: "Blog Post Not Found",
      description: "The requested technical article could not be found.",
    };
  }
}

export default async function BlogPostOrCategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();

  // ============================================
  // CASE A: CATEGORY LANDING ARCHIVE
  // ============================================
  if (CATEGORIES.includes(slug)) {
    const info = CATEGORY_MAP[slug] || {
      title: `${resolvedParams.slug.toUpperCase()} Tutorials`,
      desc: `Technical articles, guides, and engineering playbooks for ${resolvedParams.slug}.`,
    };
    const posts = getPostsByCategory(slug);

    return (
      <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link href="/blog">
              <Button variant="ghost" size="small" className="gap-2 text-slate-500 font-extrabold">
                <ArrowLeft className="w-4 h-4 text-indigo-600" /> Back to Blog Archive
              </Button>
            </Link>
          </div>

          <Card className="p-6 md:p-10 rounded-3xl border border-slate-200 bg-white mb-8 shadow-xs">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 capitalize mb-2">
              {resolvedParams.slug.replace("-", " ")} Guides &amp; Playbooks
            </h1>
            <p className="text-slate-600 font-medium leading-relaxed text-base">
              {info.desc}
            </p>
          </Card>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.slug} className="p-6 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <Badge variant="primary" className="text-[10px] font-extrabold">{post.category}</Badge>
                      <span className="text-xs font-bold text-slate-500">{post.readingTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="no-underline">
                      <h3 className="font-black text-slate-900 text-lg mb-2 hover:text-indigo-600 transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 mb-4 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-right">
                    <Link href={`/blog/${post.slug}`} className="no-underline">
                      <Button variant="link" size="sm" className="gap-1 font-extrabold text-indigo-600">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center rounded-3xl border border-slate-200 bg-white">
              <p className="text-base font-extrabold text-slate-500">
                No articles published in this category yet. Stay tuned!
              </p>
            </Card>
          )}
        </div>
      </div>
    );
  }

  // ============================================
  // CASE B: SINGLE BLOG ARTICLE READER
  // ============================================
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (_error) {
    notFound();
  }

  // Automated TOC Parser
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const headings: { text: string; id: string; level: number }[] = [];
  let match;
  while ((match = headingRegex.exec(post.content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    headings.push({ text, id, level });
  }

  const allPosts = getAllPosts();

  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && (p.category.toLowerCase() === post.category.toLowerCase() || p.tags.some((t) => post.tags.some(pt => pt.toLowerCase() === t.toLowerCase()))))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-40 pb-24">
      <JSONLD schema={getBlogPostingSchema(post)} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Link */}
        <div className="mb-6">
          <Link href="/blog">
            <Button variant="ghost" size="small" className="gap-2 text-slate-500 font-extrabold">
              <ArrowLeft className="w-4 h-4 text-indigo-600" /> Back to Blog Archive
            </Button>
          </Link>
        </div>

        {/* Article Header Card */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-slate-50 shadow-xs">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="primary" className="font-extrabold">{post.category}</Badge>
            {post.difficulty && (
              <Badge variant="success" className="font-extrabold">Difficulty: {post.difficulty}</Badge>
            )}
            <Badge variant="outline" className="font-bold gap-1">
              <Calendar className="w-3.5 h-3.5" /> Published: {post.date}
            </Badge>
            <Badge variant="outline" className="font-bold gap-1">
              <Clock className="w-3.5 h-3.5" /> Reading Time: {post.readingTime}
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-3 leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg font-bold text-slate-600 mb-4 leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-[11px] font-bold">
                #{tag}
              </Badge>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* TOC Sidebar */}
          {headings.length > 0 && (
            <div className="hidden lg:block lg:col-span-3">
              <Card className="p-6 rounded-2xl border border-slate-200 bg-slate-50 sticky top-32 shadow-xs">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-3">
                  <BookOpen className="w-4 h-4 text-indigo-600" /> Table of Contents
                </span>
                <nav className="flex flex-col gap-2">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="text-xs font-bold text-slate-600 hover:text-indigo-600 no-underline transition-colors leading-snug"
                      style={{ paddingLeft: h.level === 3 ? "12px" : "0px" }}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </Card>
            </div>
          )}

          {/* Article Body */}
          <div className={headings.length > 0 ? "lg:col-span-9" : "lg:col-span-12"}>
            <div className="prose prose-indigo max-w-none">
              <MDXRemote source={post.content} components={MDXComponents} />
            </div>

            {/* Author Bio Card */}
            <Card className="p-6 md:p-8 mt-12 rounded-3xl border border-slate-200 bg-slate-50 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-lg shrink-0">
                  AD
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    Ajit Dev <span className="text-slate-500 font-bold text-sm">(@ajitdev01)</span>
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 mb-3">
                    Full Stack Developer, DevOps Engineer &amp; Cloud Security Specialist from Katihar, Bihar, India.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-extrabold text-indigo-600">
                    <a href="https://github.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/ajitdev01" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      LinkedIn
                    </a>
                    <a href="https://leetcode.com/u/ajitdev01/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      LeetCode
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-black text-slate-900 mb-6">
                  Related Engineering Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedPosts.map((rp) => (
                    <Card key={rp.slug} className="p-5 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs">
                      <div>
                        <Badge variant="primary" className="text-[10px] mb-2">{rp.category}</Badge>
                        <Link href={`/blog/${rp.slug}`} className="no-underline">
                          <h4 className="font-black text-slate-900 text-sm line-clamp-2 hover:text-indigo-600 transition-colors mb-2">
                            {rp.title}
                          </h4>
                        </Link>
                      </div>
                      <Link href={`/blog/${rp.slug}`} className="no-underline">
                        <Button variant="link" size="sm" className="gap-1 p-0 text-indigo-600 font-extrabold">
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
