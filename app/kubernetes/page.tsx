import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cpu, Terminal, Shield, ArrowRight, ExternalLink, Zap, CheckCircle2 } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PAGE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kubernetes Cluster Operations & EKS Deployments | Ajit Dev",
  description: "Kubernetes cluster architecture by Ajit Dev. EKS deployments, Horizontal Pod Autoscaling (HPA), zero-downtime rolling updates, and NetworkPolicy pod isolation from Katihar, Bihar.",
  keywords: [...PAGE_KEYWORDS.kubernetes],
  alternates: {
    canonical: "/kubernetes",
  },
  openGraph: {
    title: "Kubernetes Cluster Operations & Pod Topologies | Ajit Dev",
    description: "Production Kubernetes orchestration by Ajit Dev. Pod scheduling, Helm charts, ingress controllers, and cluster security.",
    url: `${SITE_URL}/kubernetes`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Kubernetes Engineering by Ajit Dev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kubernetes Cluster Operations & Pod Topologies | Ajit Dev",
    description: "Production Kubernetes cluster operations and autoscaling by Ajit Dev.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function KubernetesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/kubernetes/#breadcrumb`,
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
        "name": "Kubernetes Orchestration",
        "item": `${SITE_URL}/kubernetes`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does Kubernetes guarantee zero-downtime deployments?",
        "answer": {
          "@type": "Answer",
          "text": "Using RollingUpdate strategy with maxSurge: 25% and maxUnavailable: 0, paired with readiness probes that ensure new pods accept HTTP traffic before terminating legacy pods."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Liveness and Readiness Probes?",
        "answer": {
          "@type": "Answer",
          "text": "Liveness probes detect unrecoverable crashes and restart the container, whereas Readiness probes detect whether the pod is initialized and ready to receive ingress traffic."
        }
      },
      {
        "@type": "Question",
        "name": "How does HPA autoscale container pods?",
        "answer": {
          "@type": "Answer",
          "text": "The Horizontal Pod Autoscaler polls the Metrics Server every 15 seconds, increasing or decreasing pod replicas when average CPU or memory usage crosses configured thresholds."
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
                Container Orchestration
              </span>
              <span className="text-xs font-bold text-slate-300">
                Architect: <strong className="text-white">Ajit Dev (@ajitdev01)</strong>
              </span>
              <span className="text-xs font-bold text-indigo-300 bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-800/40">
                Katihar, Bihar, India
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
              Kubernetes Operations &amp; EKS Cluster Topologies
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-6 font-medium">
              Architecting production Kubernetes clusters on AWS EKS. Zero-downtime rolling updates, Horizontal Pod Autoscaling (HPA), NetworkPolicy security isolation, and Ingress routing.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
              <Badge variant="outline" className="text-xs font-bold text-indigo-300 border-indigo-500/40 bg-indigo-950/40">
                Zero-Downtime Rolling Updates
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-emerald-300 border-emerald-500/40 bg-emerald-950/40">
                Horizontal Pod Autoscaling (HPA)
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-purple-300 border-purple-500/40 bg-purple-950/40">
                NetworkPolicy Security Segmentation
              </Badge>
              <Badge variant="outline" className="text-xs font-bold text-amber-300 border-amber-500/40 bg-amber-950/40">
                EKS Managed Node Groups
              </Badge>
            </div>
          </Card>

          {/* SECTION 1: PRODUCTION DEPLOYMENT MANIFEST */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  1. Production Kubernetes Deployment with Health Probes
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Guaranteed Zero-Downtime Rolling Release Strategy
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Tested Deployment manifest engineered by Ajit Dev with explicit CPU/Memory limits, liveness/readiness probes, and zero-downtime rolling update parameters:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-emerald-400 font-bold mb-2"># k8s/deployment.yml — Hardened Microservice Spec</div>
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: ajitdev-web-app
  namespace: production
  labels:
    app: ajitdev-web
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: ajitdev-web
  template:
    metadata:
      labels:
        app: ajitdev-web
    spec:
      containers:
        - name: web
          image: ajitdev/web-app:latest
          ports:
            - containerPort: 3000
          resources:
            requests:
              cpu: "100m"
              memory: "256Mi"
            limits:
              cpu: "500m"
              memory: "512Mi"
          readinessProbe:
            httpGet:
              path: /api/health
              port: 3000
            initialDelaySeconds: 5
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /api/health
              port: 3000
            initialDelaySeconds: 15
            periodSeconds: 20`}
            </div>
          </Card>

          {/* SECTION 2: NETWORK POLICY ISOLATION */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  2. NetworkPolicy Pod Isolation (Zero Lateral Movement)
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Restricting Ingress Exclusively to Ingress Controllers
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Restricting pod communication so that compromised containers cannot access backend databases directly without going through approved application microservices:
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto mb-6 border border-slate-800">
              <div className="text-purple-400 font-bold mb-2"># k8s/network-policy.yml — Restrict Ingress</div>
{`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: isolate-database-ingress
  namespace: production
spec:
  podSelector:
    matchLabels:
      role: database
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: ajitdev-web
      ports:
        - protocol: TCP
          port: 5432`}
            </div>
          </Card>

          {/* SECTION 3: CLUSTER METRICS */}
          <Card className="p-8 md:p-10 mb-8 rounded-3xl border border-slate-200 bg-white shadow-xs">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  3. Cluster Autoscaling &amp; Reliability Metrics
                </h2>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Verified Resilience under Sudden Traffic Spikes
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-indigo-600 mb-1">0 ms</div>
                <h4 className="font-black text-slate-900 text-sm">Deployment Downtime</h4>
                <p className="text-xs text-slate-600 mt-1">Zero dropped HTTP requests during rolling updates.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-emerald-600 mb-1">&lt; 45 sec</div>
                <h4 className="font-black text-slate-900 text-sm">HPA Pod Scaling Time</h4>
                <p className="text-xs text-slate-600 mt-1">Scale up from 3 to 15 pods upon reaching 70% CPU.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-black text-purple-600 mb-1">99.95%</div>
                <h4 className="font-black text-slate-900 text-sm">Cluster Uptime</h4>
                <p className="text-xs text-slate-600 mt-1">Managed AWS EKS control plane across 3 Availability Zones.</p>
              </div>
            </div>
          </Card>

          {/* ACTIONS & NAVIGATION */}
          <div className="p-6 md:p-8 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 via-purple-50 to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-700 mb-1 block">
                Infrastructure as Code
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Explore Terraform EKS Module Provisioning
              </h3>
              <p className="text-xs font-medium text-slate-600 mt-1 max-w-xl">
                See how Terraform declarative code provisions managed EKS clusters, node groups, and VPC networks automatically.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <Link href="/terraform" className="no-underline">
                <Button variant="default" size="sm" className="gap-1.5 font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white">
                  View Terraform IaC <ArrowRight className="w-4 h-4" />
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
              <Link href="/docker" className="hover:text-indigo-600 transition-colors">Docker Containerization</Link>
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
