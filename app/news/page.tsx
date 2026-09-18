import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Newspaper,
  Cpu,
  Shield,
  Zap,
} from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import NewsFeed from "@/app/components/NewsFeed";
import { getCollectionPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ajit Dev Tech News – Latest DevOps & Cloud News",
  description: "Stay updated with real-time tech news on DevOps, cloud computing, and software development from trusted sources (powered by RSS).",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Ajit Dev Tech News – Latest DevOps & Cloud News",
    description: "Stay updated with real-time tech news on DevOps, cloud computing, and software development from trusted sources.",
    url: "https://ajitdev.com/news",
    images: [
      {
        url: "https://ajitdev.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ajit Dev Real-time Technology News Feed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Dev Tech News – Latest DevOps & Cloud News",
    description: "Stay updated with real-time tech news on DevOps, cloud computing, and software development.",
    images: ["https://ajitdev.com/og-image.png"],
  },
};

export default function TechNewsPage() {
  const collectionSchema = getCollectionPageSchema(
    "Ajit Dev Tech News – Latest DevOps & Cloud News",
    "Real-time technology news feed covering DevOps, Cloud Security, AI, and Software Engineering.",
    "https://ajitdev.com/news"
  );
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
    <div className="min-h-screen bg-slate-50 pt-32 md:pt-40 pb-24">
      <JSONLD schema={collectionSchema} />
      <JSONLD schema={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Link */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="small" className="gap-2 text-slate-500 font-extrabold">
              <ArrowLeft className="w-4 h-4 text-indigo-600" /> Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Banner Card */}
        <Card className="p-6 sm:p-10 mb-8 rounded-3xl border border-slate-200 bg-gradient-to-br from-pink-50 via-white to-indigo-50 text-center shadow-xs">
          <div className="inline-flex p-4 rounded-2xl bg-pink-100 text-pink-600 mb-4">
            <Newspaper className="w-8 h-8" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 mb-2">
            Real-time Technology News Feed
          </h1>

          <p className="text-sm sm:text-base font-extrabold text-slate-700 mb-4">
            Artificial Intelligence • Cloud &amp; DevOps Security • Framework Releases &amp; Vulnerability Alerts
          </p>

          <div className="w-24 h-1 rounded-full bg-pink-600 mx-auto mb-6" />

          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="py-1 px-3 text-xs gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-pink-600" /> AI &amp; Machine Learning
            </Badge>
            <Badge variant="success" className="py-1 px-3 text-xs gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-600" /> Cloud Security &amp; Threats
            </Badge>
            <Badge variant="primary" className="py-1 px-3 text-xs gap-1.5">
              <Zap className="w-3.5 h-3.5 text-indigo-600" /> Software Engineering Release News
            </Badge>
          </div>
        </Card>

        {/* Client News Feed Grid */}
        <NewsFeed />

      </div>
    </div>
  );
}
