import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://ajitdev.com";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <image:image>
      <image:loc>${baseUrl}/og-image.png</image:loc>
      <image:title>Ajit Dev — Full Stack Developer &amp; DevOps Engineer Portfolio</image:title>
      <image:caption>AJITDEV developer portfolio showcasing cloud infrastructure, DevOps pipelines, cybersecurity, and full-stack web engineering.</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <image:image>
      <image:loc>${baseUrl}/logo.png</image:loc>
      <image:title>Ajit Dev — Full Stack Developer &amp; DevOps Engineer</image:title>
      <image:caption>Ajit Dev, BCA Cloud &amp; Security student and Full Stack Engineer from Katihar, Bihar, India.</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/projects</loc>
    <image:image>
      <image:loc>${baseUrl}/og-image.png</image:loc>
      <image:title>Ajit Dev Projects Portfolio</image:title>
      <image:caption>Full-stack MERN, Next.js, Docker, Kubernetes, and AWS projects.</image:caption>
    </image:image>
  </url>
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-max-age=86400, stale-while-revalidate=3600",
    },
  });
}
