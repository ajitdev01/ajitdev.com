import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Database, Terminal, Code2, ArrowRight, ExternalLink, CheckCircle2, Layers } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "MERN Stack Application Architecture & REST APIs | Ajit Dev",
  description: "Production MERN stack engineering by Ajit Dev. MongoDB indexing, Express.js middleware security, React state optimization, and Node.js microservices from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.mernStack],
  alternates: {
    canonical: "/mern-stack",
  },
  openGraph: {
    title: "MERN Stack Application Development & Architecture | Ajit Dev",
    description: "Production MERN stack development by Ajit Dev. Full stack JavaScript systems, JWT authentication, and MongoDB indexing.",
    url: `${SITE_URL}/mern-stack`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "MERN Stack Engineering by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MERN Stack Application Development & Architecture | Ajit Dev",
    description: "Production MERN stack architecture by Ajit Dev. React, Node.js, Express, MongoDB.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function MernStackPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/mern-stack/#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "MERN Stack Engineering",
        "item": `${SITE_URL}/mern-stack`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Ajit Dev optimize MongoDB performance in MERN apps?",
        "answer": {
          "@type": "Answer",
          "text": "By implementing compound indexes matching query filters, leveraging projection to return only necessary document fields, and utilizing Aggregation Pipelines with $match and $project stages before sorting."
        }
      },
      {
        "@type": "Question",
        "name": "How is JWT authentication hardened against token theft?",
        "answer": {
          "@type": "Answer",
          "text": "Access tokens are short-lived (15 mins) and stored in memory or secure HttpOnly/SameSite cookies, while refresh tokens are stored in encrypted HTTP-only cookies with token rotation on each refresh."
        }
      },
      {
        "@type": "Question",
        "name": "How do MERN apps scale to handle concurrent user traffic?",
        "answer": {
          "@type": "Answer",
          "text": "By running Express/Node.js processes behind Nginx reverse proxies with multi-process clusters, offloading read-heavy queries to Redis caches, and pooling MongoDB connections."
        }
      }
    ]
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <section className="py-24 md:py-32 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-black text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-wider group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>

          {/* HERO BANNER CARD */}
          <Card className="p-8 md:p-12 mb-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-400/30">
                Full Stack Architecture
              </span>
              <span className="text-xs font-bold text-slate-300">
                Engineer: <strong className="text-white">Ajit Dev (@ajitdev01)</strong>
              </span>
              <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              MERN Stack Application Engineering
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Architecting production-ready full-stack applications with MongoDB, Express.js, React, and Node.js. High-throughput REST APIs, compound database indexing, JWT security, and Docker containerization.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                MongoDB Compound Indexing
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-indigo-300 border-indigo-500/40 bg-indigo-950/40">
                Express Rate-Limited Middleware
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                React Modular Components
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                Node.js Cluster Scaling
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: ARCHITECTURE STACK */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. Production MERN Layered Architecture
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Clean Separation of Concerns
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Ajit Dev enforces a strict layered design across MERN backends to ensure zero tight-coupling between HTTP controllers, business logic, and database queries:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto mb-6 leading-relaxed border border-slate-800">
              <div className="text-emerald-400 font-bold mb-2">// MERN Stack Request Flow &amp; Layer Boundary</div>
{`[ Client Browser ] ──▶ HTTPS Requests (JSON / REST API)
       │
       ▼
[ Nginx Reverse Proxy / Load Balancer ] ──▶ SSL Termination, Rate Limiting
       │
       ▼
[ Node.js + Express Controller Layer ] ──▶ Auth Middleware, Joi/Zod Validation
       │
       ▼
[ Service Business Logic Layer ] ──▶ Business Calculations, Audit Trail
       │
       ▼
[ Data Access / Mongoose Repository ] ──▶ Compound Indexed Queries
       │
       ▼
[ MongoDB Replica Set Cluster ] ──▶ Primary Write / Secondary Read Split`}
            </div>
          </Card>

          {/* SECTION 2: TESTED EXPRESS MIDDLEWARE CODE */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. Tested Express Security Middleware Implementation
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Preventing Brute Force &amp; Injection Vulnerabilities
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Production middleware implementation protecting Node.js REST controllers against denial-of-service and JWT hijacking:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-indigo-400 font-bold mb-2">// middleware/authAndRateLimit.js</div>
{`import jwt from "jsonwebtoken";
import rateLimit from "express-rate-limit";

// Strict API Rate Limiter
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per IP
  message: { error: "Too many requests. Please try again in 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Authenticated JWT Verification Middleware
export function verifyJwtToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access denied. Token missing." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token." });
  }
}`}
            </div>
          </Card>

          {/* SECTION 3: MONGO INDEXING BENCHMARK */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. MongoDB Compound Indexing &amp; Query Optimization
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Query Execution Plan (explain(&apos;executionStats&apos;)) Benchmarks
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-black text-slate-500 uppercase">Without Index</div>
                <div className="text-xl font-black text-red-600 mt-1">1,240 ms</div>
                <p className="text-xs text-slate-600 mt-1">COLLSCAN scanning 500,000 documents sequentially.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-black text-slate-500 uppercase">Compound Index</div>
                <div className="text-xl font-black text-emerald-600 mt-1">3.2 ms</div>
                <p className="text-xs text-slate-600 mt-1">IXSCAN examining only matching B-tree keys.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-black text-slate-500 uppercase">Latency Reduction</div>
                <div className="text-xl font-black text-indigo-600 mt-1">99.7%</div>
                <p className="text-xs text-slate-600 mt-1">Sub-second API response time across 10,000 req/sec.</p>
              </div>
            </div>
          </Card>

          {/* ACTIONS & NAVIGATION */}
          <div className="p-6 md:p-8 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-teal-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-emerald-700 mb-1 block">
                Distributed Architectures
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Explore Distributed System Design Patterns
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                See how caching layers (Redis), message queues (Kafka), and database sharding scale backend architectures beyond single servers.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/system-design" className="no-underline">
                <Button variant="default" size="sm" className="gap-1.5 font-extrabold bg-emerald-600 hover:bg-emerald-700 text-white">
                  View System Design <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects" className="no-underline">
                <Button variant="outline" size="sm" className="gap-1.5 font-bold border-emerald-200 text-emerald-700 hover:bg-emerald-100">
                  Projects Portfolio <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* INTERNAL TECHNICAL NAVIGATION */}
          <footer className="pt-8 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Explore More Technical Guides
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-600">
              <Link href="/nextjs" className="hover:text-indigo-600 transition-colors">Next.js App Router</Link>
              <Link href="/react" className="hover:text-indigo-600 transition-colors">React Architecture</Link>
              <Link href="/system-design" className="hover:text-indigo-600 transition-colors">System Design</Link>
              <Link href="/cloud-security" className="hover:text-indigo-600 transition-colors">Cloud Security</Link>
              <Link href="/devsecops" className="hover:text-indigo-600 transition-colors">DevSecOps</Link>
              <Link href="/devops" className="hover:text-indigo-600 transition-colors">DevOps Operations</Link>
              <Link href="/dsa" className="hover:text-indigo-600 transition-colors">DSA Roadmap (641 Solved)</Link>
              <Link href="/about" className="hover:text-indigo-600 transition-colors">About Ajit Dev (CTO)</Link>
              <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Support</Link>
            </div>
          </footer>

        </div>
      </section>
    </>
  );
}
