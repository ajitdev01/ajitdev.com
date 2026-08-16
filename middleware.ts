import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 60; // 60 requests per minute per IP

// In-memory store for edge runtime (resets per cold start — use Upstash Redis for persistence)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  if (forwarded) return forwarded.split(",")[0].trim();
  if (realIp) return realIp;
  return "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) return true;
  return false;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getClientIp(request);

  // Apply rate limiting to API routes only
  if (pathname.startsWith("/api/")) {
    if (isRateLimited(ip)) {
      return new NextResponse(
        JSON.stringify({ error: "Too many requests. Please slow down." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
            "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }
  }

  // Block obviously bad paths (path traversal, common exploit probes)
  const blockedPatterns = [
    /\.\.(\/|\\)/,        // Path traversal
    /\.(env|git|htaccess)/, // Config file exposure
    /wp-admin/,           // WordPress probes
    /phpMyAdmin/i,        // phpMyAdmin probes
  ];

  for (const pattern of blockedPatterns) {
    if (pattern.test(pathname)) {
      return new NextResponse("Not Found", { status: 404 });
    }
  }

  const response = NextResponse.next();

  // Add CSRF origin check for API mutation requests
  if (pathname.startsWith("/api/") && ["POST", "PUT", "PATCH", "DELETE"].includes(request.method)) {
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      "https://ajitdev.com",
      "https://www.ajitdev.com",
      ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
    ];

    if (origin && !allowedOrigins.includes(origin)) {
      return new NextResponse(
        JSON.stringify({ error: "CSRF: Origin not allowed." }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  // Security response headers (supplements next.config.ts static headers)
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-DNS-Prefetch-Control", "on");

  return response;
}

export { proxy as middleware };

export const config = {
  matcher: [
    // Apply to all paths except static assets, images, and next internals
    "/((?!_next/static|_next/image|favicon.ico|logo.png|og-image.png|site.webmanifest|sw.js|robots.txt|sitemap|feed).*)",
  ],
};
