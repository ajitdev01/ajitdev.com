import { NextResponse } from "next/server";
import { RESEARCH_DB } from "@/lib/research";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  const dynamicResearchPaths = Object.keys(RESEARCH_DB).map(slug => `/research/${slug}`);

  // High Priority Core Hubs (1.0 - 0.9)
  const coreHubs = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "/about", priority: "0.9", changefreq: "weekly" },
    { path: "/projects", priority: "0.9", changefreq: "daily" },
    { path: "/skills", priority: "0.9", changefreq: "weekly" },
    { path: "/education", priority: "0.9", changefreq: "weekly" },
    { path: "/contact", priority: "0.9", changefreq: "weekly" },
    { path: "/resume", priority: "0.9", changefreq: "weekly" },
    { path: "/blog", priority: "0.9", changefreq: "daily" },
    { path: "/news", priority: "0.9", changefreq: "daily" },
    { path: "/research", priority: "0.9", changefreq: "daily" },
    { path: "/dsa", priority: "0.9", changefreq: "daily" },
    { path: "/system-design", priority: "0.9", changefreq: "weekly" },
    { path: "/devops", priority: "0.9", changefreq: "weekly" },
    { path: "/leetcode", priority: "0.8", changefreq: "daily" },
    { path: "/now", priority: "0.8", changefreq: "weekly" },
  ];

  // Pillar Topic Pages (0.8)
  const pillarPages = [
    "/cloud", "/aws", "/docker", "/kubernetes", "/terraform", "/linux",
    "/cloud-security", "/cyber-security", "/case-studies", "/devsecops",
    "/lamp-stack", "/mern-stack", "/react", "/nextjs", "/javascript",
    "/typescript", "/nodejs", "/php", "/mysql", "/mongodb",
    "/github-actions", "/ci-cd", "/hld", "/lld",
  ].map(p => ({ path: p, priority: "0.8", changefreq: "weekly" }));

  // DSA Topic Routes (0.8)
  const dsaPages = [
    "/dsa/arrays", "/dsa/strings", "/dsa/hashing", "/dsa/linked-list",
    "/dsa/stack", "/dsa/queue", "/dsa/binary-search", "/dsa/trees",
    "/dsa/bst", "/dsa/heap", "/dsa/graph", "/dsa/backtracking",
    "/dsa/greedy", "/dsa/dynamic-programming",
  ].map(p => ({ path: p, priority: "0.8", changefreq: "weekly" }));

  // System Design Topic Routes (0.8)
  const systemDesignPages = [
    "/system-design/load-balancer", "/system-design/cache", "/system-design/database-scaling",
    "/system-design/microservices", "/system-design/message-queues", "/system-design/cdn",
    "/system-design/design-whatsapp", "/system-design/design-youtube",
    "/system-design/design-netflix", "/system-design/design-uber",
  ].map(p => ({ path: p, priority: "0.8", changefreq: "weekly" }));

  // DevOps Topic Routes (0.8)
  const devopsPages = [
    "/devops/docker", "/devops/kubernetes", "/devops/terraform",
    "/devops/github-actions", "/devops/cicd", "/devops/aws", "/devops/linux",
  ].map(p => ({ path: p, priority: "0.8", changefreq: "weekly" }));

  // Research Whitepapers (0.8)
  const researchPages = dynamicResearchPaths.map(p => ({ path: p, priority: "0.8", changefreq: "monthly" }));

  // Legal & Utility Pages (0.4)
  const legalPages = [
    "/privacy", "/terms"
  ].map(p => ({ path: p, priority: "0.4", changefreq: "monthly" }));

  const allPages = [
    ...coreHubs,
    ...pillarPages,
    ...dsaPages,
    ...systemDesignPages,
    ...devopsPages,
    ...researchPages,
    ...legalPages,
  ];

  const nowIso = new Date().toISOString();

  const urlNodes = allPages
    .map((item) => {
      return `  <url>
    <loc>${baseUrl}${item.path}</loc>
    <lastmod>${nowIso}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-favicon.xsl"?>
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
