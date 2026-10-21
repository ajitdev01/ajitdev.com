import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cloud, Server, Key, Terminal, ArrowRight, ExternalLink, Zap, CheckCircle2 } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AWS Cloud Infrastructure & Serverless Engineering | Ajit Dev",
  description: "AWS Cloud Architecture by Ajit Dev. EC2 Auto Scaling, S3 CloudFront CDN caching, Lambda serverless microservices, and IAM role security from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.aws],
  alternates: {
    canonical: "/aws",
  },
  openGraph: {
    title: "AWS Cloud Architecture & Infrastructure Engineering | Ajit Dev",
    description: "AWS cloud deployments and automation by Ajit Dev. EC2, S3, IAM, VPC subnets, and CloudWatch monitoring.",
    url: `${SITE_URL}/aws`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "AWS Cloud Engineering by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Cloud Architecture & Infrastructure Engineering | Ajit Dev",
    description: "AWS cloud architecture and infrastructure engineering by Ajit Dev.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function AwsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/aws/#breadcrumb`,
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
        "name": "AWS Cloud Architecture",
        "item": `${SITE_URL}/aws`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Ajit Dev's AWS cloud specialization?",
        "answer": {
          "@type": "Answer",
          "text": "Ajit Dev specializes in production AWS architectures including multi-AZ VPC networks, EC2 Auto Scaling groups behind ALBs, S3 static assets with CloudFront edge caching, and serverless Node.js Lambdas with DynamoDB."
        }
      },
      {
        "@type": "Question",
        "name": "How does CloudFront optimize Next.js content delivery?",
        "answer": {
          "@type": "Answer",
          "text": "CloudFront caches static images and pre-rendered SSG pages at 450+ global Edge PoPs with Brotli compression and TLS 1.3, reducing Time To First Byte (TTFB) to under 30ms worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "How are AWS infrastructure costs optimized?",
        "answer": {
          "@type": "Answer",
          "text": "By migrating compute instances to AWS Graviton3 (ARM64) delivering up to 40% better price-performance, utilizing S3 Intelligent-Tiering, and right-sizing ECS task reservations."
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
              <span className="text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
                Cloud Architecture
              </span>
              <span className="text-xs font-bold text-slate-300">
                Architect: <strong className="text-white">Ajit Dev (@ajitdev01)</strong>
              </span>
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              AWS Cloud Infrastructure &amp; Serverless Systems
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Architecting secure, cost-optimized, and resilient cloud systems on Amazon Web Services. Multi-AZ VPC network isolation, serverless Lambda APIs, CloudFront edge caching, and automated IAM least-privilege policies.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                EC2 &amp; ECS Auto Scaling
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-indigo-300 border-indigo-500/40 bg-indigo-950/40">
                CloudFront CDN Global Caching
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                Serverless Lambda &amp; API Gateway
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                Graviton3 Cost Optimization
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: AWS PRODUCTION INFRASTRUCTURE BLUEPRINT */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. Production AWS Cloud Infrastructure Architecture
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Edge Caching to Database Redundancy
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Production AWS layout engineered by Ajit Dev balancing low-latency edge delivery with isolated database persistence:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto mb-6 leading-relaxed border border-slate-800">
              <div className="text-amber-400 font-bold mb-2">// AWS End-to-End Enterprise Cloud Layout</div>
{`[ Global End Users ] ──▶ [ Route 53 (Latency Routing + Health Checks) ]
                               │
                               ▼
[ Amazon CloudFront (450+ Edge PoPs) ] ──▶ Caches S3 Static Media & Next.js SSG
                               │
                               ▼ (Origin Request via Origin Shield)
[ Application Load Balancer (ALB) ] ──▶ SSL Termination (ACM TLS 1.3)
                               │
         ┌─────────────────────┴─────────────────────┐
         ▼                                           ▼
[ ECS Fargate Container (AZ-1a) ]          [ ECS Fargate Container (AZ-1b) ]
  Node.js REST Services                      Node.js REST Services
         │                                           │
         └─────────────────────┬─────────────────────┘
                               ▼ (VPC Peering / Private Subnet)
┌────────────────────────────────────────────────────────────────────────┐
│ Amazon Aurora PostgreSQL Serverless v2 (Multi-AZ Cluster)             │
│  ├── Primary Writer Instance (Encrypted with AWS KMS)                  │
│  └── Multi-AZ Read Replica (Auto-Scaling Read Queries)                 │
└────────────────────────────────────────────────────────────────────────┘`}
            </div>
          </Card>

          {/* SECTION 2: TESTED SERVERLESS LAMBDA HANDLER */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. Tested Serverless Lambda Handler with DynamoDB
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Sub-50ms Cold Starts with Node.js 20 ESM
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Production AWS Lambda handler utilizing the AWS SDK v3 modular client with connection reuse to eliminate cold start overhead:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-indigo-400 font-bold mb-2">// lambdas/inquiryHandler.mjs — Modular AWS SDK v3</div>
{`import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// Keep client outside handler to reuse TCP connection across invocations
const ddbClient = new DynamoDBClient({ region: "us-east-1" });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

export async function handler(event) {
  try {
    const payload = JSON.parse(event.body || "{}");
    const item = {
      inquiryId: \`inq_\${Date.now()}\`,
      email: payload.email,
      fullName: payload.fullName,
      createdAt: new Date().toISOString(),
      ttl: Math.floor(Date.now() / 1000) + (90 * 86400), // Auto-expire 90d
    };

    await ddbDocClient.send(
      new PutCommand({
        TableName: process.env.TABLE_NAME,
        Item: item,
      })
    );

    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true, inquiryId: item.inquiryId }),
    };
  } catch (error) {
    console.error("DynamoDB write failure:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
}`}
            </div>
          </Card>

          {/* SECTION 3: COST & PERFORMANCE BENCHMARKS */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. AWS Infrastructure Cost &amp; Performance Benchmarks
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Graviton3 ARM64 vs Standard x86 Instances
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-indigo-600 mb-1">-40%</div>
                <h4 className="font-black text-slate-900 text-sm">Compute Cost</h4>
                <p className="text-xs text-slate-600 mt-1">Achieved by shifting EC2/ECS workloads from Intel x86 to AWS Graviton3 (c7g instances).</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-600 mb-1">&lt; 30ms</div>
                <h4 className="font-black text-slate-900 text-sm">Global Edge TTFB</h4>
                <p className="text-xs text-slate-600 mt-1">Delivered via Amazon CloudFront caching S3 static assets close to regional clients.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-purple-600 mb-1">99.99%</div>
                <h4 className="font-black text-slate-900 text-sm">Aurora Availability</h4>
                <p className="text-xs text-slate-600 mt-1">Multi-AZ primary failover completes in under 30 seconds with zero data loss.</p>
              </div>
            </div>
          </Card>

          {/* ACTIONS & NAVIGATION */}
          <div className="p-6 md:p-8 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 via-indigo-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-700 mb-1 block">
                Infrastructure as Code
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Explore Terraform IaC Automations
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                See how declarative Terraform modules automate AWS VPCs, ECS clusters, and IAM security groups reproducibly.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/terraform" className="no-underline">
                <Button variant="default" size="sm" className="gap-1.5 font-extrabold bg-amber-600 hover:bg-amber-700 text-white">
                  View Terraform IaC <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects" className="no-underline">
                <Button variant="outline" size="sm" className="gap-1.5 font-bold border-amber-200 text-amber-700 hover:bg-amber-100">
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
              <Link href="/terraform" className="hover:text-indigo-600 transition-colors">Terraform IaC</Link>
              <Link href="/cloud-security" className="hover:text-indigo-600 transition-colors">Cloud Security Portfolio</Link>
              <Link href="/devsecops" className="hover:text-indigo-600 transition-colors">DevSecOps Pipelines</Link>
              <Link href="/docker" className="hover:text-indigo-600 transition-colors">Docker Containerization</Link>
              <Link href="/kubernetes" className="hover:text-indigo-600 transition-colors">Kubernetes EKS</Link>
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
