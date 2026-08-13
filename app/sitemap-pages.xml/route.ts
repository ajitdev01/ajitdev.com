import { NextResponse } from "next/server";
import { RESEARCH_DB } from "@/lib/research";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  const dynamicResearchPaths = Object.keys(RESEARCH_DB).map(slug => `/research/${slug}`);
  const staticPaths = [
    "",
    "/about",
    "/now",
    "/skills",
    "/education",
    "/contact",
    "/resume",
    "/leetcode",
    "/dsa",
    "/system-design",
    "/devops",
    "/devsecops",
    "/cloud",
    "/aws",
    "/docker",
    "/kubernetes",
    "/terraform",
    "/linux",
    "/cloud-security",
    "/cyber-security",
    "/case-studies",
    "/privacy",
    "/terms",
    "/lamp-stack",
    "/mern-stack",
    "/react",
    "/nextjs",
    "/javascript",
    "/typescript",
    "/nodejs",
    "/php",
    "/mysql",
    "/mongodb",
    "/github-actions",
    "/ci-cd",
    "/hld",
    "/lld",
    
    // DSA nested
    "/dsa/arrays",
    "/dsa/strings",
    "/dsa/hashing",
    "/dsa/linked-list",
    "/dsa/stack",
    "/dsa/queue",
    "/dsa/binary-search",
    "/dsa/trees",
    "/dsa/bst",
    "/dsa/heap",
    "/dsa/graph",
    "/dsa/backtracking",
    "/dsa/greedy",
    "/dsa/dynamic-programming",

    // System Design nested
    "/system-design/load-balancer",
    "/system-design/cache",
    "/system-design/database-scaling",
    "/system-design/microservices",
    "/system-design/message-queues",
    "/system-design/cdn",
    "/system-design/design-whatsapp",
    "/system-design/design-youtube",
    "/system-design/design-netflix",
    "/system-design/design-uber",

    // DevOps nested
    "/devops/docker",
    "/devops/kubernetes",
    "/devops/terraform",
    "/devops/github-actions",
    "/devops/cicd",
    "/devops/aws",
    "/devops/linux",

    // Main portfolio update routes
    "/research",
    "/blog",
    "/news",
    ...dynamicResearchPaths
  ];

  const urlNodes = staticPaths
    .map((path) => {
      return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlNodes}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-max-age=86400, stale-while-revalidate=3600",
    },
  });
}
