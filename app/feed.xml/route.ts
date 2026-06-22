import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  let posts = [];
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error("Error loading posts for feed generator:", e);
  }

  const feedItems = posts
    .map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
    </item>
  `).join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Ajit Dev | Technical Blog</title>
  <link>${baseUrl}/blog</link>
  <description>Technical engineering guides, Docker tutorials, AWS playbooks, and systems architecture blueprints by Ajit Dev.</description>
  <language>en-in</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
  ${feedItems}
</channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-max-age=1200, stale-while-revalidate=600",
    },
  });
}
