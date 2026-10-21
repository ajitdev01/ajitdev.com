import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, GitBranch, Terminal, CheckCircle2, ArrowRight, ExternalLink, Cpu, Lock } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL, BRAINZIMA } from "@/lib/seo";

export const metadata: Metadata = {
  title: "DevSecOps Security Hardened Pipelines | Ajit Dev (CTO @ Brainzima)",
  description: "DevSecOps engineering by Ajit Dev. Shift-left security automation, SAST/DAST CI/CD scanners (Trivy, Semgrep, GitLeaks), container signing, and secret management from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.devsecops],
  alternates: {
    canonical: "/devsecops",
  },
  openGraph: {
    title: "DevSecOps Security Hardened Pipelines | Ajit Dev",
    description: "DevSecOps engineering by Ajit Dev. Shift-left security, secret detection, and CI/CD security gate enforcement.",
    url: `${SITE_URL}/devsecops`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "DevSecOps Engineering by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSecOps Security Hardened Pipelines | Ajit Dev",
    description: "DevSecOps engineering by Ajit Dev. Shifting security left into automated CI/CD pipelines.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function DevsecopsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/devsecops/#breadcrumb`,
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
        "name": "DevSecOps Hardening",
        "item": `${SITE_URL}/devsecops`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Shift-Left Security in DevSecOps?",
        "answer": {
          "@type": "Answer",
          "text": "Shift-left integrates security checks at the earliest stage of the Software Development Life Cycle (SDLC)—during code commit and pull request stages—preventing security flaws from reaching production environments."
        }
      },
      {
        "@type": "Question",
        "name": "How does Trivy prevent vulnerable container deployments?",
        "answer": {
          "@type": "Answer",
          "text": "Trivy inspects Docker container base layers and OS packages for known CVEs. In Ajit Dev's pipelines, the build automatically fails if any HIGH or CRITICAL severity vulnerabilities lack an approved exemption."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between SAST and DAST in the pipeline?",
        "answer": {
          "@type": "Answer",
          "text": "SAST (Static Application Security Testing) analyzes raw source code without executing it (e.g. Semgrep), whereas DAST (Dynamic Application Security Testing) queries active runtime endpoints to detect real HTTP misconfigurations (e.g. OWASP ZAP)."
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-400/30">
                Pipeline Engineering
              </span>
              <span className="text-xs font-bold text-slate-300">
                Lead: <strong className="text-white">Ajit Dev (@ajitdev01)</strong> · CTO @ Brainzima
              </span>
              <span className="text-xs font-bold text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              DevSecOps Automated Security Pipelines
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Shift-left security automation, pre-commit secret scanning with GitLeaks, automated SAST with Semgrep, Docker container CVE audits with Trivy, and dynamic API vulnerability analysis with OWASP ZAP.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                GitLeaks Secret Guard
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-indigo-300 border-indigo-500/40 bg-indigo-950/40">
                Semgrep Static Analysis (SAST)
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                Trivy Container CVE Fail Gates
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                OWASP ZAP Dynamic Scanning (DAST)
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: SHIFT-LEFT PIPELINE STAGES */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <GitBranch className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. Shift-Left Continuous Security Delivery Cycle
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Automated Security Gating at Every Git Push
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Instead of delegating security to quarterly audits, Ajit Dev embeds security gates directly into the Git workflow, terminating build pipelines upon detected vulnerability spikes:
            </p>

            {/* Pipeline ASCII Flow */}
            <div className="p-5 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto mb-6 leading-relaxed border border-slate-800">
              <div className="text-purple-400 font-bold mb-2">// Automated GitHub Actions DevSecOps Pipeline Flow</div>
{`[ Developer Commit ]
       │
       ▼ (Stage 1: Secret Auditing)
[ GitLeaks Scan ] ──▶ Pass: No API keys / AWS secrets committed?
       │
       ▼ (Stage 2: Static Analysis)
[ Semgrep SAST ] ──▶ Pass: No SQL injection / XSS / Insecure Deserialization?
       │
       ▼ (Stage 3: Container Vulnerability Analysis)
[ Docker Build ] ──▶ [ Trivy CVE Scan ] (Fails on severity: HIGH, CRITICAL)
       │
       ▼ (Stage 4: Automated Deployment)
[ AWS ECS / Kubernetes Deploy ] ──▶ (Stage 5: DAST Dynamic Analysis)
                                     [ OWASP ZAP Baseline Scan ]`}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-black text-purple-600 uppercase mb-1">Gate 1: Secrets</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">GitLeaks</h4>
                <p className="text-xs text-slate-600">Scans every commit hash for private keys, AWS tokens, and JWT secrets before merging.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-black text-indigo-600 uppercase mb-1">Gate 2: SAST</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Semgrep</h4>
                <p className="text-xs text-slate-600">Fast AST pattern matching catching insecure regexes, raw SQL queries, and eval calls.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-black text-emerald-600 uppercase mb-1">Gate 3: Images</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Trivy</h4>
                <p className="text-xs text-slate-600">Inspects Debian/Alpine Linux base layers and npm dependencies for CVE records.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-black text-amber-600 uppercase mb-1">Gate 4: DAST</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">OWASP ZAP</h4>
                <p className="text-xs text-slate-600">Attacks active staging endpoints to verify CSP, CORS, and HSTS headers are active.</p>
              </div>
            </div>
          </Card>

          {/* SECTION 2: PRODUCTION GITHUB ACTIONS WORKFLOW */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. Tested Production GitHub Actions Workflow
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Automated Pull Request Security Hardening
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Tested workflow implemented in production repositories by Ajit Dev. If a container exhibits unresolved high CVEs, the job terminates immediately with exit code 1:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-emerald-400 font-bold mb-2"># .github/workflows/devsecops-pipeline.yml</div>
{`name: DevSecOps Security Gate

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  security-audit:
    name: Shift-Left Security Scanners
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Codebase
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      # 1. Secret Leak Detection
      - name: Run GitLeaks Scanner
        uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}

      # 2. Static Application Security Testing (SAST)
      - name: Run Semgrep Rulesets
        uses: returntocorp/semgrep-action@v1
        with:
          config: >-
            p/security-audit
            p/secrets
            p/owasp-top-ten

      # 3. Docker Container Build & CVE Scan
      - name: Build Local Container Image
        run: docker build -t ajitdev/web-app:\${{ github.sha }} .

      - name: Run Trivy Vulnerability Scanner
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'ajitdev/web-app:\${{ github.sha }}'
          format: 'table'
          exit-code: '1' # Fails the pipeline on critical vulnerabilities
          ignore-unfixed: true
          severity: 'HIGH,CRITICAL'`}
            </div>
          </Card>

          {/* SECTION 3: CASE STUDY & BRAINZIMA INTEGRATION */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. Case Study: 100% Automated Security Coverage at Brainzima
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Real Implementation Results
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Under Ajit Dev&apos;s technical stewardship as <strong className="text-slate-900 font-extrabold">CTO at Brainzima Innovation Institute</strong> in Katihar, Bihar, student repositories and production deployments adhere to strict DevSecOps benchmarks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-indigo-600 mb-1">100%</div>
                <h4 className="font-black text-slate-900 text-sm">Automated PR Gating</h4>
                <p className="text-xs text-slate-600 mt-1">Zero manual bypasses for container deployments.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-600 mb-1">&lt; 3 mins</div>
                <h4 className="font-black text-slate-900 text-sm">Pipeline Execution</h4>
                <p className="text-xs text-slate-600 mt-1">Parallelized scans keeping developer velocity high.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-purple-600 mb-1">0 Leaks</div>
                <h4 className="font-black text-slate-900 text-sm">Credentials in Git</h4>
                <p className="text-xs text-slate-600 mt-1">Pre-commit hooks rejecting secrets locally.</p>
              </div>
            </div>
          </Card>

          {/* ACTIONS & NAVIGATION */}
          <div className="p-6 md:p-8 rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-50 via-indigo-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-purple-600 mb-1 block">
                Related Architecture
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Inspect Cloud Security &amp; VPC Hardening
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                Explore how multi-tier AWS VPC subnets and IAM least-privilege policies protect deployed containers.
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
              <Link href="/devops" className="hover:text-indigo-600 transition-colors">DevOps Operations</Link>
              <Link href="/aws" className="hover:text-indigo-600 transition-colors">AWS Infrastructure</Link>
              <Link href="/docker" className="hover:text-indigo-600 transition-colors">Docker Builds</Link>
              <Link href="/kubernetes" className="hover:text-indigo-600 transition-colors">Kubernetes Pods</Link>
              <Link href="/terraform" className="hover:text-indigo-600 transition-colors">Terraform IaC</Link>
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
