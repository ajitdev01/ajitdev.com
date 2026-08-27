import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Button,
} from "@mui/material";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  BookOpen,
  ArrowRight,
  User,
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
      <Box sx={{ minHeight: "100vh", backgroundColor: "#f8fafc", pt: { xs: 16, md: 20 }, pb: 12 }}>
        <Container maxWidth="lg">
          <Link href="/blog" className="no-underline">
            <Button startIcon={<ArrowLeft className="w-4 h-4" />} sx={{ fontWeight: 800, textTransform: "none", color: "#64748b", mb: 3 }}>
              Back to Blog Archive
            </Button>
          </Link>

          <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", mb: 6 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 900, color: "#0f172a", textTransform: "capitalize", mb: 1 }}>
              {resolvedParams.slug.replace("-", " ")} Guides & Playbooks
            </Typography>
            <Typography variant="body1" sx={{ color: "#64748b", lineHeight: 1.7 }}>
              {info.desc}
            </Typography>
          </Paper>

          {posts.length > 0 ? (
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }, gap: 4 }}>
              {posts.map((post) => (
                <Paper key={post.slug} elevation={0} sx={{ p: 3, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                      <Chip label={post.category} color="primary" size="small" sx={{ fontWeight: 800, fontSize: "0.65rem" }} />
                      <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 700 }}>{post.readingTime}</Typography>
                    </Box>
                    <Link href={`/blog/${post.slug}`} className="no-underline">
                      <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", fontSize: "1.05rem", mb: 1, "&:hover": { color: "#4f46e5" } }}>
                        {post.title}
                      </Typography>
                    </Link>
                    <Typography variant="body2" sx={{ color: "#64748b", fontSize: "0.85rem", mb: 2 }}>
                      {post.description}
                    </Typography>
                  </Box>
                  <Box sx={{ pt: 2, borderTop: "1px solid #f1f5f9", textAlign: "right" }}>
                    <Link href={`/blog/${post.slug}`} className="no-underline">
                      <Button size="small" endIcon={<ArrowRight className="w-4 h-4" />} sx={{ fontWeight: 800, textTransform: "none", color: "#4f46e5" }}>
                        Read Article
                      </Button>
                    </Link>
                  </Box>
                </Paper>
              ))}
            </Box>
          ) : (
            <Paper elevation={0} sx={{ p: 6, textAlign: "center", borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff" }}>
              <Typography variant="h6" sx={{ color: "#64748b", fontWeight: 800 }}>
                No articles published in this category yet. Stay tuned!
              </Typography>
            </Paper>
          )}
        </Container>
      </Box>
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
  const currentIdx = allPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const nextPost = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;

  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && (p.category.toLowerCase() === post.category.toLowerCase() || p.tags.some((t) => post.tags.some(pt => pt.toLowerCase() === t.toLowerCase()))))
    .slice(0, 3);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#ffffff", pt: { xs: 16, md: 20 }, pb: 12 }}>
      <JSONLD schema={getBlogPostingSchema(post)} />
      <Container maxWidth="lg">
        
        {/* Navigation Link */}
        <Link href="/blog" className="no-underline">
          <Button startIcon={<ArrowLeft className="w-4 h-4" />} sx={{ fontWeight: 800, textTransform: "none", color: "#64748b", mb: 3 }}>
            Back to Blog Archive
          </Button>
        </Link>

        {/* Article Header Paper */}
        <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc", mb: 6 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
            <Chip label={post.category} color="primary" size="small" sx={{ fontWeight: 800 }} />
            {post.difficulty && (
              <Chip label={`Difficulty: ${post.difficulty}`} color="success" size="small" variant="outlined" sx={{ fontWeight: 800 }} />
            )}
            <Chip icon={<Calendar className="w-3.5 h-3.5" />} label={`Published: ${post.date}`} size="small" variant="outlined" sx={{ fontWeight: 700 }} />
            <Chip icon={<Clock className="w-3.5 h-3.5" />} label={`Reading Time: ${post.readingTime}`} size="small" variant="outlined" sx={{ fontWeight: 700 }} />
          </Box>

          <Typography variant="h3" component="h1" sx={{ fontWeight: 900, color: "#0f172a", fontSize: { xs: "1.8rem", md: "2.8rem" }, mb: 2, lineHeight: 1.25 }}>
            {post.title}
          </Typography>

          <Typography variant="h6" sx={{ color: "#475569", fontWeight: 700, fontSize: "1.1rem", mb: 3, lineHeight: 1.6 }}>
            {post.description}
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
            {post.tags.map((tag) => (
              <Chip key={tag} label={`#${tag}`} size="small" variant="outlined" sx={{ fontWeight: 700, fontSize: "0.7rem" }} />
            ))}
          </Box>
        </Paper>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: headings.length > 0 ? "3fr 9fr" : "1fr" }, gap: 6 }}>
          
          {/* TOC Sidebar */}
          {headings.length > 0 && (
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Paper elevation={0} sx={{ p: 3, borderRadius: "20px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc", position: "sticky", top: 120 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a", textTransform: "uppercase", letterSpacing: "1px", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                  <BookOpen className="w-4 h-4 text-indigo-600" /> Table of Contents
                </Typography>
                <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className="text-xs font-bold text-slate-600 hover:text-indigo-600 no-underline transition-colors"
                      style={{ paddingLeft: h.level === 3 ? "12px" : "0px" }}
                    >
                      {h.text}
                    </a>
                  ))}
                </Box>
              </Paper>
            </Box>
          )}

          {/* Article Body */}
          <Box>
            <Box className="prose prose-indigo max-w-none">
              <MDXRemote source={post.content} components={MDXComponents} />
            </Box>

            {/* Author Bio Paper */}
            <Paper elevation={0} sx={{ p: 4, mt: 8, borderRadius: "24px", border: "1px solid #e2e8f0", backgroundColor: "#f8fafc" }}>
              <Box sx={{ display: "flex", gap: 3, alignItems: "start" }}>
                <Box sx={{ width: 52, height: 52, borderRadius: "16px", backgroundColor: "#4f46e5", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, flexShrink: 0 }}>
                  AD
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a" }}>
                    Ajit Dev <span className="text-slate-500 font-bold text-sm">(@ajitdev01)</span>
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748b", mt: 0.5, mb: 2 }}>
                    Full Stack Developer, DevOps Engineer & Cloud Security Specialist from Katihar, Bihar, India.
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                    {[
                      { name: "GitHub", url: "https://github.com/ajitdev01" },
                      { name: "LinkedIn", url: "https://linkedin.com/in/ajitdev01" },
                      { name: "LeetCode", url: "https://leetcode.com/ajitdev01" },
                    ].map((link) => (
                      <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xs font-extrabold text-indigo-600 hover:underline">
                        {link.name}
                      </a>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <Box sx={{ mt: 8 }}>
                <Typography variant="h5" sx={{ fontWeight: 900, color: "#0f172a", mb: 3 }}>
                  Related Engineering Articles
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 3 }}>
                  {relatedPosts.map((rp) => (
                    <Paper key={rp.slug} elevation={0} sx={{ p: 3, borderRadius: "20px", border: "1px solid #e2e8f0", backgroundColor: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <Box>
                        <Chip label={rp.category} color="primary" size="small" sx={{ fontWeight: 800, fontSize: "0.6rem", mb: 1 }} />
                        <Link href={`/blog/${rp.slug}`} className="no-underline">
                          <Typography variant="subtitle2" sx={{ fontWeight: 900, color: "#0f172a", "&:hover": { color: "#4f46e5" }, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", mb: 1 }}>
                            {rp.title}
                          </Typography>
                        </Link>
                      </Box>
                      <Link href={`/blog/${rp.slug}`} className="no-underline">
                        <Button size="small" endIcon={<ArrowRight className="w-3.5 h-3.5" />} sx={{ fontWeight: 800, textTransform: "none", color: "#4f46e5", p: 0 }}>
                          Read Article
                        </Button>
                      </Link>
                    </Paper>
                  ))}
                </Box>
              </Box>
            )}

          </Box>

        </Box>

      </Container>
    </Box>
  );
}
