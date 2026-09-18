import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  
  let posts: any[] = [];
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error("Error loading posts for Atom feed:", e);
  }

  const postsToShow = posts.slice(0, 50);
  const updatedTime = new Date().toISOString();

  const entries = postsToShow
    .map((post) => {
      const postUrl = `${baseUrl}/blog/${post.slug}`;
      const published = new Date(post.date).toISOString();
      const updated = new Date(post.updatedDate || post.date).toISOString();
      
      return `  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${postUrl}"/>
    <id>${postUrl}</id>
    <published>${published}</published>
    <updated>${updated}</updated>
    <summary type="html">${escapeXml(post.description)}</summary>
    <category term="${post.category}" />
  </entry>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Ajit Dev | Technical Blog</title>
  <subtitle>Technical engineering guides, Docker tutorials, AWS playbooks, and systems architecture blueprints by Ajit Dev.</subtitle>
  <link href="${baseUrl}/atom.xml" rel="self"/>
  <link href="${baseUrl}/blog"/>
  <id>${baseUrl}/blog</id>
  <updated>${updatedTime}</updated>
  <author>
    <name>Ajit Dev</name>
    <email>support@ajitdev.com</email>
  </author>
${entries}
</feed>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-max-age=1200, stale-while-revalidate=600",
    },
  });
}

function escapeXml(unsafe: string) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return c;
    }
  });
}
