import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/_next/static/", "/_next/image/"],
      disallow: [
        "/admin/",
        "/dashboard/",
        "/api/",
        "/dev/",
        "/staging/",
        "/drafts/",
        "/private/",
      ],
    },
    sitemap: "https://ajitdev.com/sitemap.xml",
    host: "https://ajitdev.com",
  };
}
