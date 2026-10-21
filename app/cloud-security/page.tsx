import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Server, Key, Terminal, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL, BRAINZIMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cloud Security & DevSecOps Portfolio | Ajit Dev (CTO @ Brainzima)",
  description: "Cloud security practices and production architecture by Ajit Dev. Multi-tier AWS VPC isolation, IAM least-privilege policies, Kubernetes network policies, and zero-trust engineering from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.cloudSecurity],
  alternates: {
    canonical: "/cloud-security",
  },
  openGraph: {
    title: "Cloud Security & Zero Trust Architecture | Ajit Dev",
    description: "Cloud security engineering by Ajit Dev. Multi-tier VPC subnets, AWS IAM least privilege, container isolation, and encryption.",
    url: `${SITE_URL}/cloud-security`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Cloud Security Engineering by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Security & Zero Trust Architecture | Ajit Dev",
    description: "Cloud security engineering by Ajit Dev. Zero-trust architecture, container security, and AWS IAM policies.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function CloudSecurityPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/cloud-security/#breadcrumb`,
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
        "name": "Cloud Security Portfolio",
        "item": `${SITE_URL}/cloud-security`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Zero Trust Cloud Architecture in Ajit Dev's portfolio?",
        "answer": {
          "@type": "Answer",
          "text": "Zero Trust assumes no implicit trust based on network perimeter location. Every microservice, user request, and database query must explicitly authenticate via short-lived TLS tokens, IAM role session boundaries, and mutual TLS (mTLS)."
        }
      },
      {
        "@type": "Question",
        "name": "How does Ajit Dev architect secure AWS VPC subnets?",
        "answer": {
          "@type": "Answer",
          "text": "Using a strict 3-tier layout across multiple Availability Zones: Public Subnets (only for ALBs and NAT Gateways), Private Compute Subnets (Next.js and Node.js containers without public IPs), and Isolated Data Subnets (PostgreSQL/DynamoDB) completely isolated from direct internet access."
        }
      },
      {
        "@type": "Question",
        "name": "What DevSecOps scanning tools are integrated into CI/CD pipelines?",
        "answer": {
          "@type": "Answer",
          "text": "Pipelines integrate GitLeaks for automated pre-commit secret detection, Semgrep for SAST source-code audits, Trivy for container CVE scanning, and OWASP ZAP for automated dynamic application security testing."
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
          <Card className="p-8 md:p-12 mb-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-400/30">
                Production Portfolio
              </span>
              <span className="text-xs font-bold text-slate-300">
                Architect: <strong className="text-white">Ajit Dev (@ajitdev01)</strong> · CTO @ Brainzima
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              Cloud Security &amp; DevSecOps Portfolio
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Zero Trust cloud architectures, multi-tier AWS network isolation, IAM least-privilege automation, container runtime security, and CIS Benchmark compliance implemented by Ajit Dev.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-indigo-300 border-indigo-500/40 bg-indigo-950/40">
                AWS Multi-AZ VPC Isolation
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                IAM Least-Privilege Hardening
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                Shift-Left SAST/DAST Automation
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                Zero Trust Network Architecture
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: ARCHITECTURAL BLUEPRINT */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. Multi-Tier AWS VPC Zero-Trust Network Topology
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Network Segmentation &amp; Egress Control
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              In production environments designed by Ajit Dev, workloads are strictly partitioned across multiple Availability Zones to eliminate single points of failure (SPOF) and enforce zero-trust lateral isolation:
            </p>

            {/* Topology Diagram Box */}
            <div className="p-5 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto mb-6 leading-relaxed border border-slate-800">
              <div className="text-emerald-400 font-bold mb-2">// AWS Multi-AZ VPC Network Layout (Production Hardened)</div>
{`Internet Traffic (HTTPS 443)
       │
       ▼
[ AWS WAF ] ──▶ Rate Limiting, OWASP Top 10 Rules, Geo-blocking
       │
       ▼
┌─────────────────────────────────────────────────────────────────┐
│ Public Subnet (us-east-1a / us-east-1b)                         │
│  ├── Application Load Balancer (ALB) [TLS 1.3 Termination]      │
│  └── Managed NAT Gateways (Outbound Internet Egress Only)       │
└────────────────┬────────────────────────────────────────────────┘
                 │ (Internal HTTPS only — Security Group restricted)
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│ Private Compute Subnet (No Public IP Assignment)                │
│  ├── ECS Fargate / Kubernetes Worker Nodes                      │
│  │    └── Next.js 16 Web Apps & Node.js REST Controllers        │
│  └── IAM Role Sessions (Short-lived AWS STS Tokens)             │
└────────────────┬────────────────────────────────────────────────┘
                 │ (Port 5432 / 27017 only from Compute SG)
                 ▼
┌─────────────────────────────────────────────────────────────────┐
│ Isolated Database Subnet (Zero Internet Ingress / Egress)       │
│  ├── Amazon Aurora PostgreSQL (Multi-AZ Cluster Encrypted)      │
│  └── AWS Secrets Manager / KMS Key Rotation                     │
└─────────────────────────────────────────────────────────────────┘`}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-black text-slate-900 text-sm mb-1">Public Layer</h4>
                <p className="text-xs text-slate-600">
                  Only the Application Load Balancer (ALB) and NAT Gateways reside here. Direct SSH/RDP ports are forbidden.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-black text-slate-900 text-sm mb-1">Compute Layer</h4>
                <p className="text-xs text-slate-600">
                  Node.js and Next.js microservices run inside private subnets without public IPv4 addresses, routing through NAT.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-black text-slate-900 text-sm mb-1">Data Layer</h4>
                <p className="text-xs text-slate-600">
                  Database instances have zero internet route tables, accepting traffic exclusively from compute security groups.
                </p>
              </div>
            </div>
          </Card>

          {/* SECTION 2: PRODUCTION INFRASTRUCTURE CODE */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. Tested Terraform IaC: Subnet &amp; Security Group Isolation
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Automated Security Guardrails via Terraform
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Below is an extract of the declarative Terraform module implemented by Ajit Dev, provisioning an isolated security group that prevents lateral privilege escalation:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-indigo-400 font-bold mb-2">// main.tf — Hardened Security Group with Least Privilege Ingress</div>
{`resource "aws_security_group" "app_compute" {
  name        = "ajitdev-prod-compute-sg"
  description = "Enforce ingress only from Application Load Balancer"
  vpc_id      = aws_vpc.production.id

  # Ingress: Only HTTP from ALB Security Group
  ingress {
    description     = "Allow HTTP traffic from ALB security group"
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb.id]
  }

  # Egress: Restricted to HTTPS outbound via NAT Gateway
  egress {
    description = "Allow HTTPS outbound for package updates and AWS APIs"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Environment = "Production"
    ManagedBy   = "Terraform"
    Security    = "ZeroTrust-Layer4"
    Owner       = "Ajit Dev (@ajitdev01)"
  }
}`}
            </div>
          </Card>

          {/* SECTION 3: IAM LEAST PRIVILEGE */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. AWS IAM Least-Privilege Policies with Enforced TLS
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Cryptographic Verification &amp; In-Transit Protection
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Every IAM policy engineered by Ajit Dev mandates encrypted transit (`aws:SecureTransport: true`) and restricts actions strictly to explicit bucket ARNs:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-amber-400 font-bold mb-2">// iam-s3-vault-policy.json — Mandating TLS 1.3 Transport</div>
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAppAccessToVaultObjects",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::ajitdev-secure-vault/*"
    },
    {
      "Sid": "DenyInsecureTransportRequests",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::ajitdev-secure-vault",
        "arn:aws:s3:::ajitdev-secure-vault/*"
      ],
      "Condition": {
        "Bool": {
          "aws:SecureTransport": "false"
        }
      }
    }
  ]
}`}
            </div>
          </Card>

          {/* SECTION 4: REAL CASE STUDY & MEASURABLE OUTCOMES */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  4. Production Case Study: Brainzima Cloud Security Hardening
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Real Projects, Tested Tools, and Verified Results
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
              <p>
                As <strong className="text-slate-900 font-extrabold">CTO at Brainzima Innovation Institute</strong> in Katihar, Bihar, Ajit Dev led the comprehensive security hardening of the institutional cloud infrastructure and student platforms:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-black text-slate-900 text-sm mb-1 text-indigo-600">Challenge</h4>
                  <p className="text-xs text-slate-600">
                    Mitigating automated credential stuffing, securing JWT token lifetimes, and preventing container vulnerability propagation in production Next.js apps.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="font-black text-slate-900 text-sm mb-1 text-emerald-600">Architecture Solution</h4>
                  <p className="text-xs text-slate-600">
                    Integrated GitHub Actions CI/CD with Trivy container audits, enforced AWS WAF rate-limiting rules, and implemented automated secret rotation via AWS Secrets Manager.
                  </p>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-slate-900">0</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Critical CVEs</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-slate-900">99.9%</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Uptime SLA</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-slate-900">A+</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">SSL Labs Rating</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 text-center">
                <div className="text-2xl font-black text-slate-900">100%</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">TLS 1.3 Coverage</div>
              </div>
            </div>
          </Card>

          {/* SECTION 5: DEVSECOPS PIPELINE LINK & ACTIONS */}
          <div className="p-6 md:p-8 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-purple-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600 mb-1 block">
                Next In DevSecOps
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Explore Automated DevSecOps CI/CD Pipelines
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                Inspect how Trivy, GitLeaks, Semgrep, and OWASP ZAP are integrated into GitHub Actions pipelines to block vulnerable pull requests before deployment.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/devsecops" className="no-underline">
                <Button variant="default" size="sm" className="gap-1.5 font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white">
                  View DevSecOps Showcase <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects" className="no-underline">
                <Button variant="outline" size="sm" className="gap-1.5 font-bold border-indigo-200 text-indigo-700 hover:bg-indigo-100">
                  All Projects <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* INTERNAL TECHNICAL NAVIGATION */}
          <footer className="pt-8 border-t border-slate-200">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Explore Related Architecture Playbooks
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-slate-600">
              <Link href="/devops" className="hover:text-indigo-600 transition-colors">DevOps Engineering</Link>
              <Link href="/devsecops" className="hover:text-indigo-600 transition-colors">DevSecOps Pipelines</Link>
              <Link href="/aws" className="hover:text-indigo-600 transition-colors">AWS Cloud Architecture</Link>
              <Link href="/docker" className="hover:text-indigo-600 transition-colors">Docker Containerization</Link>
              <Link href="/kubernetes" className="hover:text-indigo-600 transition-colors">Kubernetes EKS</Link>
              <Link href="/terraform" className="hover:text-indigo-600 transition-colors">Terraform IaC</Link>
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
