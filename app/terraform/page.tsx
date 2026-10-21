import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Layers, Terminal, Database, ArrowRight, ExternalLink, Zap, CheckCircle2 } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terraform Infrastructure as Code (IaC) & S3 State Locking | Ajit Dev",
  description: "Terraform Infrastructure as Code (IaC) engineering by Ajit Dev. Declarative AWS provisioning, remote S3 state management with DynamoDB locking, and automated Checkov security scanning from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.terraform],
  alternates: {
    canonical: "/terraform",
  },
  openGraph: {
    title: "Terraform Infrastructure as Code (IaC) | Ajit Dev",
    description: "Infrastructure as Code engineering by Ajit Dev. Modular Terraform architecture and cloud security automation.",
    url: `${SITE_URL}/terraform`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Terraform IaC Engineering by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terraform Infrastructure as Code (IaC) | Ajit Dev",
    description: "Declarative infrastructure automation and security by Ajit Dev.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function TerraformPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/terraform/#breadcrumb`,
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
        "name": "Terraform Infrastructure as Code",
        "item": `${SITE_URL}/terraform`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why use DynamoDB state locking with Terraform S3 backend?",
        "answer": {
          "@type": "Answer",
          "text": "DynamoDB provides distributed mutex locking (LockID), preventing concurrent pipeline runs or multiple developers from applying conflicting Terraform changes simultaneously, avoiding state file corruption."
        }
      },
      {
        "@type": "Question",
        "name": "How does Ajit Dev audit Terraform code for security vulnerabilities?",
        "answer": {
          "@type": "Answer",
          "text": "By integrating Checkov and tfsec into pre-commit and GitHub Actions workflows, flagging unencrypted S3 buckets, wide-open security group CIDRs (0.0.0.0/0 on SSH/RDP), and missing IAM least-privilege boundaries before terraform apply."
        }
      },
      {
        "@type": "Question",
        "name": "What is the benefit of Terraform modular architecture?",
        "answer": {
          "@type": "Answer",
          "text": "Modules encapsulate repeatable cloud patterns (VPC, ECS, RDS), providing consistent security baselines across development, staging, and production environments."
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
              <span className="text-xs font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-400/30">
                Infrastructure as Code
              </span>
              <span className="text-xs font-bold text-slate-300">
                Architect: <strong className="text-white">Ajit Dev (@ajitdev01)</strong>
              </span>
              <span className="text-xs font-bold text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              Terraform IaC &amp; Cloud State Automation
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Declarative, reproducible cloud infrastructure engineering. Remote S3 backend state management with DynamoDB distributed locking, modular AWS blueprints, and automated Checkov security compliance.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                Remote S3 State + DynamoDB Locks
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-indigo-300 border-indigo-500/40 bg-indigo-950/40">
                Checkov &amp; tfsec Security Scans
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                Modular Multi-AZ VPC Blueprints
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                Automated State Drift Detection
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: REMOTE BACKEND CODE */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. Production Remote State Backend with Mutex Locking
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Preventing Concurrent Apply Conflicts &amp; State Corruption
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Tested backend configuration engineered by Ajit Dev with server-side KMS encryption and DynamoDB distributed state locking:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-purple-400 font-bold mb-2"># backend.tf — Production Hardened State Storage</div>
{`terraform {
  required_version = ">= 1.6.0"

  backend "s3" {
    bucket         = "ajitdev-prod-terraform-state-vault"
    key            = "production/infrastructure.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "ajitdev-prod-terraform-locks"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}`}
            </div>
          </Card>

          {/* SECTION 2: MODULAR VPC & SECURITY GROUP */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. Reusable Infrastructure Modules
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Parameterized Declarative Cloud Resources
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Extract of a production Terraform module provisioning an isolated 3-tier VPC with managed NAT Gateways:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-indigo-400 font-bold mb-2"># modules/vpc/main.tf — Declarative Subnets</div>
{`module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.5.0"

  name = "ajitdev-production-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b"]
  public_subnets  = ["10.0.1.0/24", "10.0.2.0/24"]
  private_subnets = ["10.0.10.0/24", "10.0.11.0/24"]
  database_subnets = ["10.0.20.0/24", "10.0.21.0/24"]

  enable_nat_gateway     = true
  single_nat_gateway     = false # Multi-AZ High Availability
  enable_dns_hostnames   = true
  enable_dns_support     = true

  tags = {
    Environment = "Production"
    Owner       = "Ajit Dev (@ajitdev01)"
    ManagedBy   = "Terraform"
  }
}`}
            </div>
          </Card>

          {/* SECTION 3: BENCHMARKS */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. Infrastructure Reliability &amp; Compliance Metrics
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Automated Security Scanning Results
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-indigo-600 mb-1">100%</div>
                <h4 className="font-black text-slate-900 text-sm">Checkov Compliance</h4>
                <p className="text-xs text-slate-600 mt-1">Passing all CIS AWS Foundations Benchmark checks.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-600 mb-1">0 Flaws</div>
                <h4 className="font-black text-slate-900 text-sm">State File Conflicts</h4>
                <p className="text-xs text-slate-600 mt-1">Zero concurrent execution race conditions via DynamoDB locks.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-purple-600 mb-1">&lt; 4 mins</div>
                <h4 className="font-black text-slate-900 text-sm">Full Environment Rebuild</h4>
                <p className="text-xs text-slate-600 mt-1">Automated complete staging recreation from blank AWS account.</p>
              </div>
            </div>
          </Card>

          {/* ACTIONS & NAVIGATION */}
          <div className="p-6 md:p-8 rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-purple-700 mb-1 block">
                Cloud Security
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Explore Cloud Security &amp; DevSecOps Portfolio
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                See how multi-tier AWS VPC subnets and automated CI/CD pipelines protect deployed cloud infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/cloud-security" className="no-underline">
                <Button variant="default" size="sm" className="gap-1.5 font-extrabold bg-purple-600 hover:bg-purple-700 text-white">
                  View Cloud Security <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/projects" className="no-underline">
                <Button variant="outline" size="sm" className="gap-1.5 font-bold border-purple-200 text-purple-700 hover:bg-purple-100">
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
              <Link href="/cloud-security" className="hover:text-indigo-600 transition-colors">Cloud Security Portfolio</Link>
              <Link href="/devsecops" className="hover:text-indigo-600 transition-colors">DevSecOps Pipelines</Link>
              <Link href="/aws" className="hover:text-indigo-600 transition-colors">AWS Infrastructure</Link>
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
