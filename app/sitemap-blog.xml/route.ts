import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  
  let posts: any[] = [];
  try {
    posts = getAllPosts();
  } catch (e) {
    console.error("Error loading blog posts for sitemap:", e);
  }

  // Define sitemaps for the blog archive and categories
  const blogArchivePaths = [
    "/blog",
    "/blog/devops",
    "/blog/aws",
    "/blog/docker",
    "/blog/kubernetes",
    "/blog/terraform",
    "/blog/linux",
    "/blog/react",
    "/blog/nextjs",
    "/blog/system-design",
    "/blog/dsa",
    "/blog/mern",
    "/blog/lamp",
    "/blog/cloud-security",
    "/blog/programming",
    "/blog/c",
    "/blog/cpp",
    "/blog/java",
    "/blog/python",
    "/blog/javascript",
    "/blog/typescript",
    "/blog/cloud",
    "/blog/cybersecurity",
    "/blog/database",
    "/blog/career",
    "/blog/interview"
  ];

  const archiveNodes = blogArchivePaths.map((path) => {
    return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  const postNodes = posts.map((post) => {
    const lastModDate = post.updatedDate || post.date || new Date().toISOString().split("T")[0];
    const isoDate = new Date(lastModDate).toISOString();
    return `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${isoDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...archiveNodes, ...postNodes].join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-max-age=86400, stale-while-revalidate=3600",
    },
  });
}
