import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Newspaper } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import NewsFeed from "@/app/components/NewsFeed";

export const metadata: Metadata = {
  title: "Latest Technology News Feed | Ajit Dev",
  description: "Browse the latest industry updates across Artificial Intelligence, Cloud Computing, Cybersecurity, DevOps tools, and Software Engineering frameworks.",
  alternates: {
    canonical: "https://ajitdev.com/news",
  },
};

export default function TechNewsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/news/#breadcrumb",
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
        "name": "News Hub",
        "item": "https://ajitdev.com/news",
      },
    ],
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen text-gray-800 relative overflow-hidden">
        {/* Soft Background Glow */}
        <div className="fixed inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute top-[15%] right-[20%] w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[15%] left-[20%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Nav */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-pink-700 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-pink-100">
              <Newspaper className="w-3.5 h-3.5" /> Industry Tracker
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Real-time Technology News Feed
            </h1>
            <p className="text-gray-655 text-sm sm:text-base leading-relaxed mt-2">
              Stay updated on system design guidelines, cloud security warnings, artificial intelligence breakthroughs, and package update announcements.
            </p>
          </div>

          <NewsFeed />

        </div>
      </section>
    </>
  );
}

