import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Clock, Tag, BookOpen } from "lucide-react";
import { getPostBySlug, getPostSlugs, getPostsByCategory } from "@/lib/blog";
import { MDXComponents } from "@/app/components/MDXComponents";
import JSONLD from "@/app/components/JSONLD";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORIES = ["devops", "aws", "docker", "kubernetes", "terraform", "linux", "react", "nextjs", "system-design", "dsa"];

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

  // 1. Check if it is a category page
  if (CATEGORIES.includes(slug)) {
    const info = CATEGORY_MAP[slug] || {
      title: `${slug.toUpperCase()} Development Guides`,
      desc: `Read guides, tutorials, and codebase setup resources on ${slug} on Ajit Dev Blog.`,
    };
    return {
      title: `${info.title} | Ajit Dev Blog`,
      description: info.desc,
      alternates: {
        canonical: `https://ajitdev.com/blog/${slug}`,
      },
    };
  }

  // 2. Otherwise, treat as a blog post
  try {
    const post = getPostBySlug(resolvedParams.slug);
    return {
      title: `${post.title} | Ajit Dev Blog`,
      description: post.description,
      alternates: {
        canonical: `https://ajitdev.com/blog/${resolvedParams.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.description,
        type: "article",
        url: `https://ajitdev.com/blog/${resolvedParams.slug}`,
        publishedTime: post.date,
        authors: ["https://ajitdev.com"],
      },
    };
  } catch (e) {
    return {
      title: "Blog Post Not Found | Ajit Dev",
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

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `https://ajitdev.com/blog/${slug}/#breadcrumb`,
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
          "name": resolvedParams.slug.toUpperCase(),
          "item": `https://ajitdev.com/blog/${slug}`,
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
                {resolvedParams.slug.replace("-", " ")} Guides
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

  // ============================================
  // CASE B: SINGLE BLOG ARTICLE READER
  // ============================================
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (error) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://ajitdev.com/blog/${post.slug}/#breadcrumb`,
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
        "name": post.title,
        "item": `https://ajitdev.com/blog/${post.slug}`,
      },
    ],
  };

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://ajitdev.com/blog/${post.slug}/#article`,
    "isPartOf": {
      "@id": "https://ajitdev.com/#website",
    },
    "mainEntityOfPage": `https://ajitdev.com/blog/${post.slug}`,
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@id": "https://ajitdev.com/#person",
    },
    "publisher": {
      "@id": "https://ajitdev.com/#person",
    },
    "keywords": post.tags.join(", "),
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={blogPostSchema} />
      {post.faq && post.faq.length > 0 && (
        <JSONLD
          schema={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": post.faq.map((f) => ({
              "@type": "Question",
              "name": f.question,
              "answer": {
                "@type": "Answer",
                "text": f.answer,
              },
            })),
          }}
        />
      )}

      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog Archive
          </Link>

          <header className="mb-10 pb-8 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-4">
              <span className="bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-lg"
                >
                  <Tag className="w-3 h-3 text-gray-400" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-indigo max-w-none">
            <MDXRemote source={post.content} components={MDXComponents} />
          </div>
        </div>
      </article>
    </>
  );
}
