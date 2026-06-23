import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, Clock, Tag, BookOpen } from "lucide-react";
import { getPostBySlug, getPostSlugs, getPostsByCategory, getAllPosts } from "@/lib/blog";
import { MDXComponents } from "@/app/components/MDXComponents";
import JSONLD from "@/app/components/JSONLD";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORIES = ["devops", "aws", "docker", "kubernetes", "terraform", "linux", "react", "nextjs", "system-design", "dsa", "mern", "lamp", "cloud-security"];

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

  // Automated TOC Parser
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const headings: { text: string; id: string; level: number }[] = [];
  let match;
  while ((match = headingRegex.exec(post.content)) !== null) {
    const level = match[1].length; // 2 for h2, 3 for h3
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ text, id, level });
  }

  // Related Posts logic
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog Archive
          </Link>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* TOC SIDEBAR */}
            {headings.length > 0 ? (
              <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-28 p-6 bg-gray-50/50 border border-gray-200/60 rounded-2xl shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-500" /> Table of Contents
                  </h4>
                  <nav className="space-y-2.5">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className={`block text-xs text-gray-500 hover:text-indigo-600 transition-colors font-semibold ${
                          h.level === 3 ? "pl-4 text-gray-400 border-l border-gray-100" : ""
                        }`}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            ) : (
              <div className="hidden lg:block lg:col-span-1" />
            )}

            {/* MAIN ARTICLE BODY */}
            <div className={`col-span-1 lg:col-span-3 ${headings.length === 0 ? "lg:col-span-4 max-w-4xl mx-auto" : ""}`}>
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

              {/* AUTHOR BIO SECTION */}
              <div className="mt-16 pt-8 border-t border-gray-100">
                <div className="flex items-start gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    AD
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Ajit Dev <span className="text-gray-500 text-sm font-normal">(ajitdev01)</span>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar, India.
                      Specializing in Next.js, React, MERN Stack, AWS, Docker, Kubernetes, Terraform, and System Design.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "GitHub", url: "https://github.com/ajitdev01" },
                        { name: "LinkedIn", url: "https://linkedin.com/in/ajitdev01" },
                        { name: "LeetCode", url: "https://leetcode.com/ajitdev01" },
                        { name: "Twitter/X", url: "https://twitter.com/ajitdev01" },
                        { name: "Dev.to", url: "https://dev.to/ajitdev01" },
                      ].map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="me noopener noreferrer"
                          className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RELATED POSTS SECTION */}
              {relatedPosts.length > 0 && (
                <div className="mt-20 pt-10 border-t border-gray-200">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Related Articles
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map((rp) => (
                      <div
                        key={rp.slug}
                        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col h-full group"
                      >
                        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider mb-2 block">
                          {rp.category}
                        </span>
                        <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors text-sm mb-2 line-clamp-2">
                          <Link href={`/blog/${rp.slug}`}>{rp.title}</Link>
                        </h4>
                        <p className="text-gray-500 text-xs line-clamp-3 mb-4 leading-relaxed flex-1">
                          {rp.description}
                        </p>
                        <Link
                          href={`/blog/${rp.slug}`}
                          className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors mt-auto block text-right"
                        >
                          Read Article →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

