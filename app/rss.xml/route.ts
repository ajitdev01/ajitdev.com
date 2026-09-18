import { NextResponse } from "next/server";
import RSS from "rss";
import { getAllPosts, BlogPost } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  let posts: BlogPost[] = [];
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error("Error loading posts for RSS feed generator:", e);
  }

  const feed = new RSS({
    title: "AJITDEV — Technical Articles & Engineering Guides",
    description:
      "Deep technical articles on C++, DSA, Systems Architecture, Next.js, React, Node.js, DevOps, AWS, Docker, Kubernetes, DevSecOps, and Cloud Security by Ajit Dev (ajitdev01).",
    feed_url: `${baseUrl}/rss.xml`,
    site_url: `${baseUrl}/blog`,
    image_url: `${baseUrl}/logo.png`,
    managingEditor: "support@ajitdev.com (Ajit Dev)",
    webMaster: "support@ajitdev.com (Ajit Dev)",
    copyright: `${new Date().getFullYear()} Ajit Dev`,
    language: "en-us",
    pubDate: new Date().toUTCString(),
    ttl: 60,
  });

  // Include published posts sorted by date
  posts.slice(0, 100).forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      guid: `${baseUrl}/blog/${post.slug}`,
      categories: [post.category, ...(post.tags || [])],
      author: "Ajit Dev (ajitdev01)",
      date: post.date ? new Date(post.date) : new Date(),
    });
  });

  const xmlContent = feed.xml({ indent: true });

  return new NextResponse(xmlContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-max-age=3600, stale-while-revalidate=1800",
    },
  });
}
