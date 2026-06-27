import React from "react";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogSearch from "@/app/components/BlogSearch";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "Technical Blog | Ajit Dev — Full Stack Developer, DevOps & Cloud Security",
  description:
    "Explore Ajit Dev's (ajitdev01) technical tutorials on Next.js, MERN Stack, AWS, DevOps, Kubernetes CI/CD, Cloud Security, and System Design.",
  alternates: {
    canonical: "https://ajitdev.com/blog",
  },
};

export default function BlogArchivePage() {
  const posts = getAllPosts();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/blog/#breadcrumb",
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
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What topics does Ajit Dev blog about?",
        "answer": {
          "@type": "Answer",
          "text": "Ajit Dev blogs about DevOps pipelines, Cloud Security audits, AWS cloud configurations, Next.js optimization, and DSA competitive programming.",
        },
      },
      {
        "@type": "Question",
        "name": "Can I request a custom guide or collaboration?",
        "answer": {
          "@type": "Answer",
          "text": "Yes! Reach out via the /contact page or email support@ajitdev.com or ajitk23192@gmail.com for writing collaborations, custom playbooks, or contracts.",
        },
      },
    ],
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />
      
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Technical Blog
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Deep-dives into cloud engineering, container operations, system architecture, database performance, and type-safe frontends. Written by a MERN & Cloud Security developer from Katihar, Bihar.
            </p>
          </div>

          <BlogSearch initialPosts={posts} />
        </div>
      </section>

      {/* Hidden SEO Keywords */}
      <span className="sr-only" aria-hidden="true">
        Ajit Dev Blog, Ajit Dev DevOps, Ajit Dev Cloud Security, Ajit Dev Projects,
        Full Stack Developer Blog, DevOps Engineer Blog, Next.js Developer Blog,
        Ajit Dev, Ajit Kumar, AjitDev01, Katihar Developer Blog, Bihar Developer Blog,
        India Full Stack Developer Blog, MERN Stack Tutorials, AWS Cloud Engineering
      </span>
    </>
  );
}
