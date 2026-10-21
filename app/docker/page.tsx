import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Box, Terminal, Layers, ArrowRight, ExternalLink, Zap, CheckCircle2 } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Docker Containerization & Multi-Stage Builds | Ajit Dev",
  description: "Docker containerization and optimization by Ajit Dev. Multi-stage builds, Alpine base images reducing payloads to 118MB, Docker Compose orchestration, and container security from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.docker],
  alternates: {
    canonical: "/docker",
  },
  openGraph: {
    title: "Docker Containerization & Multi-Stage Optimization | Ajit Dev",
    description: "Production container optimization by Ajit Dev. Multi-stage builds, non-root users, and minimal Alpine payloads.",
    url: `${SITE_URL}/docker`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Docker Engineering by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Docker Containerization & Multi-Stage Optimization | Ajit Dev",
    description: "Production Docker container optimization and security by Ajit Dev.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function DockerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/docker/#breadcrumb`,
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
        "name": "Docker Containerization",
        "item": `${SITE_URL}/docker`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does multi-stage build reduce Docker image size?",
        "answer": {
          "@type": "Answer",
          "text": "By splitting the build into separate builder and runner stages, build tools (compilers, devDependencies, git) stay in discarded intermediary layers, copying only compiled static binaries into the lean production image."
        }
      },
      {
        "@type": "Question",
        "name": "Why is running Docker containers as root dangerous?",
        "answer": {
          "@type": "Answer",
          "text": "If an attacker achieves remote code execution inside a container running as root, container breakout vulnerabilities can grant them root privileges over the host operating system kernel."
        }
      },
      {
        "@type": "Question",
        "name": "How does Docker layer caching accelerate CI/CD builds?",
        "answer": {
          "@type": "Answer",
          "text": "By copying package.json and running dependency installation before copying the full source code, Docker reuses cached dependency layers whenever code changes without new dependencies, saving 80% of build time."
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
              <span className="text-xs font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-400/30">
                Containerization
              </span>
              <span className="text-xs font-bold text-slate-300">
                Architect: <strong className="text-white">Ajit Dev (@ajitdev01)</strong>
              </span>
              <span className="text-xs font-bold text-blue-300 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              Docker Containerization &amp; Image Optimization
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Architecting ultra-lean, secure Docker containers. Multi-stage build pipelines, non-root user isolation, layer cache optimization, and multi-service Docker Compose networks engineered by Ajit Dev.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-blue-300 border-blue-500/40 bg-blue-950/40">
                Multi-Stage Build Pipelines
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                Alpine 118MB Lean Images
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                Non-Root UID 1001 Security
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                Layer Cache Acceleration
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: MULTI-STAGE DOCKERFILE ARCHITECTURE */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <Box className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. Tested Production Next.js 16 Multi-Stage Dockerfile
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Zero Development Bloat Shipped to Production
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Production Dockerfile engineered by Ajit Dev for standalone Next.js App Router applications, running under an unprivileged system user:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-blue-400 font-bold mb-2"># Dockerfile — Hardened Multi-Stage Pipeline</div>
{`FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Create unprivileged system user
RUN addgroup --system --gid 1001 nodejs && \\
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]`}
            </div>
          </Card>

          {/* SECTION 2: DOCKER COMPOSE ORCHESTRATION */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. Multi-Service Docker Compose with Network Isolation
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Local Dev to Staging Parity
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Orchestrating Next.js, Redis, and PostgreSQL with explicit healthcheck dependencies:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-purple-400 font-bold mb-2"># docker-compose.yml — Microservices Topology</div>
{`version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/ajitdev
      - REDIS_URL=redis://cache:6379
    depends_on:
      db:
        condition: service_healthy
    networks:
      - internal-net

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: ajitdev
    volumes:
      - db-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d ajitdev"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks:
      - internal-net

networks:
  internal-net:
    driver: bridge

volumes:
  db-data:`}
            </div>
          </Card>

          {/* SECTION 3: PAYLOAD BENCHMARKS */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. Image Size &amp; Security Benchmarks
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Measured Improvements in CI/CD Deployment Velocity
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-indigo-600 mb-1">118 MB</div>
                <h4 className="font-black text-slate-900 text-sm">Standalone Image Size</h4>
                <p className="text-xs text-slate-600 mt-1">Reduced from 1.1GB unoptimized image down to 118MB.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-600 mb-1">12 sec</div>
                <h4 className="font-black text-slate-900 text-sm">Cache Hit Build Time</h4>
                <p className="text-xs text-slate-600 mt-1">Docker layer caching avoids reinstalling npm packages.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-purple-600 mb-1">0 CVEs</div>
                <h4 className="font-black text-slate-900 text-sm">High/Critical Vulnerabilities</h4>
                <p className="text-xs text-slate-600 mt-1">Verified via Trivy vulnerability scanner on Alpine base.</p>
              </div>
            </div>
          </Card>

          {/* ACTIONS & NAVIGATION */}
          <div className="p-6 md:p-8 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-blue-700 mb-1 block">
                Cluster Orchestration
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Explore Kubernetes Pod Deployments
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                See how Docker images are orchestrated across Amazon EKS clusters with horizontal autoscaling and rolling updates.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/kubernetes" className="no-underline">
                <Button variant="default" size="sm" className="gap-1.5 font-extrabold bg-blue-600 hover:bg-blue-700 text-white">
                  View Kubernetes <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects" className="no-underline">
                <Button variant="outline" size="sm" className="gap-1.5 font-bold border-blue-200 text-blue-700 hover:bg-blue-100">
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
              <Link href="/kubernetes" className="hover:text-indigo-600 transition-colors">Kubernetes EKS</Link>
              <Link href="/terraform" className="hover:text-indigo-600 transition-colors">Terraform IaC</Link>
              <Link href="/cloud-security" className="hover:text-indigo-600 transition-colors">Cloud Security Portfolio</Link>
              <Link href="/devsecops" className="hover:text-indigo-600 transition-colors">DevSecOps Pipelines</Link>
              <Link href="/aws" className="hover:text-indigo-600 transition-colors">AWS Infrastructure</Link>
              <Link href="/linux" className="hover:text-indigo-600 transition-colors">Linux Hardening</Link>
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
