import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  const projectPaths = [
    "/projects",
    "/projects/full-stack",
    "/projects/devops",
    "/projects/cloud",
    "/projects/security",
    "/case-studies/portfolio",
    "/case-studies/qr-menu-saas",
    "/case-studies/weather-app",
    "/case-studies/library-management-system"
  ];

  const urlNodes = projectPaths
    .map((path) => {
      return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
