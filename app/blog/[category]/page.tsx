import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen, Tag } from "lucide-react";
import { getPostsByCategory } from "@/lib/blog";
import JSONLD from "@/app/components/JSONLD";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const CATEGORY_MAP: Record<string, { title: string; desc: string }> = {
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
};

export async function generateStaticParams() {
  return [
    { category: "devops" },
    { category: "aws" },
    { category: "docker" },
    { category: "kubernetes" },
    { category: "terraform" },
    { category: "linux" },
    { category: "react" },
    { category: "nextjs" },
    { category: "system-design" },
    { category: "dsa" },
  ];
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category.toLowerCase();
  const info = CATEGORY_MAP[category] || {
    title: `${resolvedParams.category.toUpperCase()} Development Guides`,
    desc: `Read guides, tutorials, and codebase setup resources on ${resolvedParams.category} on Ajit Dev Blog.`,
  };

  return {
    title: `${info.title} | Ajit Dev Blog`,
    description: info.desc,
    alternates: {
      canonical: `https://ajitdev.com/blog/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category.toLowerCase();
  const info = CATEGORY_MAP[categorySlug] || {
    title: `${resolvedParams.category.toUpperCase()} Tutorials`,
    desc: `Technical articles, guides, and engineering playbooks for ${resolvedParams.category}.`,
  };

  // Find posts matching category slug
  const posts = getPostsByCategory(categorySlug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://ajitdev.com/blog/${categorySlug}/#breadcrumb`,
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
        "name": "Blog",
        "item": "https://ajitdev.com/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": resolvedParams.category.toUpperCase(),
        "item": `https://ajitdev.com/blog/${categorySlug}`,
      },
    ],
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to All Blogs
          </Link>

          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 capitalize">
              {resolvedParams.category.replace("-", " ")} Guides
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {info.desc}
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 uppercase">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-gray-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2.5">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 text-xs text-right">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white border border-gray-200 rounded-2xl">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-sm font-semibold mb-2">No articles published in this category yet.</p>
              <p className="text-gray-400 text-xs">Articles are scheduled weekly. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
