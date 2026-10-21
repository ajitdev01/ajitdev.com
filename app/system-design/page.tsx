import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Network, Terminal, Database, ArrowRight, ExternalLink, Cpu, CheckCircle2 } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Distributed System Design & High-Availability Architecture | Ajit Dev",
  description: "System design patterns and distributed systems by Ajit Dev. Horizontal scaling, Redis caching strategies, database sharding, message queues (Kafka), and microservices from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.systemDesign],
  alternates: {
    canonical: "/system-design",
  },
  openGraph: {
    title: "System Design Patterns & Distributed Systems | Ajit Dev",
    description: "System design engineering by Ajit Dev. Database scaling, microservices, API gateways, and distributed caching.",
    url: `${SITE_URL}/system-design`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "System Design Engineering by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "System Design Patterns & Distributed Systems | Ajit Dev",
    description: "Distributed system architecture and scalability patterns by Ajit Dev.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function SystemDesignPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/system-design/#breadcrumb`,
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
        "name": "System Design Architecture",
        "item": `${SITE_URL}/system-design`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Ajit Dev prevent Cache Stampedes in distributed systems?",
        "answer": {
          "@type": "Answer",
          "text": "By implementing probabilistic early expiration (XFetch algorithm) and distributed mutex locking (Redlock) in Redis, ensuring only one worker queries the database to re-populate the cache while others wait or serve slightly stale data."
        }
      },
      {
        "@type": "Question",
        "name": "What is the CAP Theorem tradeoff in production architectures?",
        "answer": {
          "@type": "Answer",
          "text": "During network partitions (P), a distributed system must choose between Consistency (all nodes see the same data simultaneously) or Availability (every request receives a non-error response without guarantee of latest data). Ajit Dev selects CP for financial/ledger records and AP for high-throughput activity feeds."
        }
      },
      {
        "@type": "Question",
        "name": "How is database sharding implemented effectively?",
        "answer": {
          "@type": "Answer",
          "text": "Using consistent hashing algorithms across shard keys (such as user_id or tenant_id), preventing hot-spot servers and minimizing record migration when adding new database nodes."
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
              <span className="text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/30">
                High Availability
              </span>
              <span className="text-xs font-bold text-slate-300">
                Architect: <strong className="text-white">Ajit Dev (@ajitdev01)</strong>
              </span>
              <span className="text-xs font-bold text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              Distributed System Design &amp; Scalability
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Architectural blueprints for high-throughput backends. Distributed Redis caching, database sharding, asynchronous message brokers (Kafka/RabbitMQ), and horizontal microservice decoupling.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-indigo-300 border-indigo-500/40 bg-indigo-950/40">
                Distributed Redis Caching
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                Consistent Hashing &amp; Sharding
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                Asynchronous Event Streaming
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                Fault-Tolerant Circuit Breakers
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: DISTRIBUTED ARCHITECTURE BLUEPRINT */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. High-Throughput Distributed System Blueprint
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Decoupled Microservices with Load Balancing &amp; Caching
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              When scaling web platforms beyond 50,000 concurrent connections, monolithic request-response cycles fail. Ajit Dev designs systems using decoupled asynchronous message streams:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto mb-6 leading-relaxed border border-slate-800">
              <div className="text-indigo-400 font-bold mb-2">// High-Availability Distributed System Layout</div>
{`[ Global Clients ] ──▶ [ Cloudflare CDN / Edge WAF ]
                              │
                              ▼
                [ AWS ALB (Layer 7 Round Robin) ]
                              │
         ┌────────────────────┴────────────────────┐
         ▼                                         ▼
[ Next.js Edge Pods ]                     [ Node.js API Gateway ]
         │                                         │
         ▼ (Cache Aside)                           ▼ (Token Bucket Limiter)
┌─────────────────────────────────┐       ┌─────────────────────────────────┐
│ Redis Cluster (Multi-AZ Master) │       │ Kafka / RabbitMQ Event Queue    │
│  └── Sub-millisecond reads      │       │  └── Decouples async workloads  │
└────────────────┬────────────────┘       └────────────────┬────────────────┘
                 │ (Cache Miss)                            │ (Consumer Pull)
                 ▼                                         ▼
┌─────────────────────────────────┐       ┌─────────────────────────────────┐
│ Primary Database (Write Shard)  │       │ Worker Processing Nodes (ECS)   │
│  └── Replicated to Read Nodes   │       │  └── Batch emails, video trans  │
└─────────────────────────────────┘       └─────────────────────────────────┘`}
            </div>
          </Card>

          {/* SECTION 2: TESTED REDIS CACHING CODE */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. Tested Redis Caching with Cache Stampede Protection
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Atomic Locks Preventing Database Overload on Expiration
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Production implementation of the Cache-Aside pattern utilizing atomic locks to guarantee that only one node queries the database on cache misses:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-emerald-400 font-bold mb-2">// services/cacheService.ts — Stampede-Safe Cache Getter</div>
{`import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL);

export async function getOrSetCache<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttlSeconds: number = 300
): Promise<T> {
  const cached = await redis.get(key);
  if (cached) {
    return JSON.parse(cached) as T;
  }

  // Acquire distributed mutex lock
  const lockKey = \`lock:\${key}\`;
  const acquired = await redis.set(lockKey, "1", "NX", "EX", 5);

  if (!acquired) {
    // Wait briefly and retry fetching cached value
    await new Promise((resolve) => setTimeout(resolve, 50));
    return getOrSetCache(key, fetchFn, ttlSeconds);
  }

  try {
    const freshData = await fetchFn();
    await redis.set(key, JSON.stringify(freshData), "EX", ttlSeconds);
    return freshData;
  } finally {
    await redis.del(lockKey);
  }
}`}
            </div>
          </Card>

          {/* SECTION 3: SYSTEM DESIGN TRADE-OFFS & METRICS */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. Latency &amp; Throughput Benchmark Matrix
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Hardware &amp; Network Level Scalability Constants
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-indigo-600">0.5 ms</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">L1 Cache / RAM Access</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-emerald-600">1.2 ms</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Redis Cluster Ping</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-purple-600">12 ms</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Postgres Indexed Read</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-slate-900">80 ms</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Cross-Region Roundtrip</div>
              </div>
            </div>
          </Card>

          {/* ACTIONS & NAVIGATION */}
          <div className="p-6 md:p-8 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-purple-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600 mb-1 block">
                Infrastructure Automation
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Explore DevOps &amp; Kubernetes Orchestration
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                See how Docker containerization, Kubernetes pod autoscaling (HPA), and Terraform automate distributed backend states.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/devops" className="no-underline">
                <Button variant="default" size="sm" className="gap-1.5 font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white">
                  View DevOps Roadmap <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects" className="no-underline">
                <Button variant="outline" size="sm" className="gap-1.5 font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-100">
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
              <Link href="/mern-stack" className="hover:text-indigo-600 transition-colors">MERN Stack</Link>
              <Link href="/cloud-security" className="hover:text-indigo-600 transition-colors">Cloud Security</Link>
              <Link href="/devsecops" className="hover:text-indigo-600 transition-colors">DevSecOps</Link>
              <Link href="/devops" className="hover:text-indigo-600 transition-colors">DevOps Operations</Link>
              <Link href="/aws" className="hover:text-indigo-600 transition-colors">AWS Infrastructure</Link>
              <Link href="/docker" className="hover:text-indigo-600 transition-colors">Docker Builds</Link>
              <Link href="/kubernetes" className="hover:text-indigo-600 transition-colors">Kubernetes Pods</Link>
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
