import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { getPostsByCategory } from "@/lib/blog";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "AWS Cloud Architecture & Services Tutorials | Ajit Dev Blog",
  description:
    "Learn about Amazon Web Services cloud infrastructure designs. Practical playbooks on VPC networking, serverless Lambda routing, IAM policies, and RDS database scaling.",
  alternates: {
    canonical: "https://ajitdev.com/blog/aws",
  },
};

export default function AWSCategoryPage() {
  const posts = getPostsByCategory("AWS");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/blog/aws/#breadcrumb",
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
        "name": "AWS",
        "item": "https://ajitdev.com/blog/aws",
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
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
              AWS Cloud Tutorials
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Design secure, scalable, and cost-efficient cloud systems. We explore private VPC subnets, AWS Lambda API integrations, database redundancy, and access controls.
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
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700">
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

                    <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center bg-white border border-gray-200 rounded-2xl">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-sm font-semibold mb-2">No AWS articles published yet.</p>
              <p className="text-gray-400 text-xs">Articles are scheduled weekly. Stay tuned!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
