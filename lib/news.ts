export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  source: string;
  date: string;
  link: string;
  tag: string;
}

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: 16,
    title: "Ajit Dev Portfolio Launches Site-Wide Technical SEO Engine & C++ OOPS Whitepaper",
    summary: "Ajit Dev has released a comprehensive technical SEO upgrade for ajitdev.com featuring native Next.js 16 metadata, strongly typed Schema.org JSON-LD graphs, and a masterclass on C++ Object-Oriented Programming (OOPS) & virtual function mechanics.",
    category: "Programming",
    source: "AJITDEV Engineering",
    date: "August 27, 2026",
    link: "https://ajitdev.com/blog/cpp-oops-complete-guide",
    tag: "C++"
  },
  {
    id: 17,
    title: "C++26 Standard Draft Finalized with Native Reflection & Modern OOPS Memory Safety Contracts",
    summary: "ISO C++ Committee finalized the feature set for C++26, introducing static reflection, inspect pattern matching, and enhanced RAII smart pointer bounds for high-performance systems engineering.",
    category: "Programming",
    source: "ISO C++ Committee",
    date: "August 25, 2026",
    link: "https://isocpp.org",
    tag: "C++"
  },
  {
    id: 13,
    title: "Buddy CI/CD Introduces Native AI-Powered Pipeline Generator & Instant Docker Layer Caching",
    summary: "Buddy has launched its AI Pipeline Generator feature, which analyzes your repository structure and auto-generates optimized CI/CD pipelines in seconds. Combined with a new distributed Docker layer cache system, build times are reduced by up to 80% for Node.js, Python, and Go microservices.",
    category: "DevOps",
    source: "Buddy Blog",
    date: "July 22, 2026",
    link: "https://buddy.works/blog",
    tag: "Buddy"
  },
  {
    id: 14,
    title: "Anthropic Releases Claude 3.7 Sonnet with Hybrid Reasoning & Extended Thinking Windows",
    summary: "Anthropic unveiled Claude 3.7 Sonnet, featuring a breakthrough hybrid reasoning architecture that seamlessly switches between fast responses and deep multi-step chain-of-thought reasoning. The model achieves state-of-the-art scores on SWE-bench coding benchmarks and supports a 200k context window.",
    category: "AI",
    source: "Anthropic Blog",
    date: "July 20, 2026",
    link: "https://anthropic.com",
    tag: "Anthropic"
  },
  {
    id: 15,
    title: "Vercel Unveils Native Micro-Frontend Engine for Next.js App Router with Module Federation",
    summary: "Vercel announced first-class Micro-Frontend support for Next.js App Router, built on top of Module Federation 2.0. Teams can now independently deploy and compose frontend modules across repositories, enabling enterprise-scale application architectures without runtime performance penalties.",
    category: "Programming",
    source: "Vercel Blog",
    date: "July 18, 2026",
    link: "https://vercel.com/blog",
    tag: "Next.js"
  },
  {
    id: 1,
    title: "OpenAI Announces GPT-5 with Advanced Reasoning and Multimodal Actions",
    summary: "OpenAI has officially launched its next-generation reasoning model, GPT-5. The model boasts a 10x improvement in complex programming tasks and multi-agent coordination capabilities.",
    category: "AI",
    source: "TechCrunch",
    date: "June 27, 2026",
    link: "https://openai.com",
    tag: "OpenAI"
  },
  {
    id: 2,
    title: "Google Cloud Spanner Introduces Real-Time Multi-Region Graph Database Queries",
    summary: "At Google Cloud Next, Google announced graph database capabilities for Cloud Spanner, allowing developers to query highly interconnected datasets at global scale with zero downtime.",
    category: "Cloud",
    source: "Google Blog",
    date: "June 25, 2026",
    link: "https://cloud.google.com",
    tag: "Google"
  },
  {
    id: 3,
    title: "Critical Linux Kernel Privilege Escalation Vulnerability Patched (CVE-2026-9912)",
    summary: "Security researchers have identified and patched a zero-day memory corruption vulnerability in the Linux network packet processing queue that allowed root privilege escalation.",
    category: "Cyber Security",
    source: "CVE Registry",
    date: "June 22, 2026",
    link: "https://kernel.org",
    tag: "Linux"
  },
  {
    id: 4,
    title: "Next.js 17 Beta Released with Dynamic Partial Hydration & Wasm Routing Engine",
    summary: "Vercel announced the beta of Next.js 17, featuring partial hydration that cuts Largest Contentful Paint (LCP) in half by streaming Wasm-compiled route descriptors.",
    category: "Programming",
    source: "Vercel Blog",
    date: "June 18, 2026",
    link: "https://nextjs.org",
    tag: "Next.js"
  },
  {
    id: 5,
    title: "Kubernetes 1.34 Core DNS Optimizations for 100k Node Scale",
    summary: "The CNCF has released Kubernetes 1.34. The key improvement is a total rewrite of CoreDNS connection cache pools, resolving lookup bottlenecks at massive scale.",
    category: "DevOps",
    source: "Kubernetes Blog",
    date: "June 15, 2026",
    link: "https://kubernetes.io",
    tag: "Kubernetes"
  },
  {
    id: 6,
    title: "Microsoft Open-Sources Copilot Agents SDK for Custom DevSecOps Pipelines",
    summary: "Microsoft has open-sourced its Copilot Agents SDK, allowing developers to construct AI-driven code auditing agents that hook directly into GitHub Actions pipelines.",
    category: "AI",
    source: "Microsoft Dev",
    date: "June 10, 2026",
    link: "https://microsoft.com",
    tag: "Microsoft"
  },
  {
    id: 7,
    title: "Docker Desktop Integrates Automatic WebAssembly WasmEdge Compilers",
    summary: "The latest Docker Desktop release includes native compilation runtimes for WasmEdge, enabling developers to package lightweight Wasm applications in standard containers.",
    category: "DevOps",
    source: "Docker Blog",
    date: "June 05, 2026",
    link: "https://docker.com",
    tag: "Docker"
  },
  {
    id: 8,
    title: "Terraform 2.0 Introduces Declarative Security Drift Management Engines",
    summary: "HashiCorp released Terraform 2.0. The release is headlined by automated drift-management systems that automatically roll back un-versioned cloud infrastructure alterations.",
    category: "DevOps",
    source: "HashiCorp Blog",
    date: "May 28, 2026",
    link: "https://hashicorp.com",
    tag: "Terraform"
  },
  {
    id: 9,
    title: "AWS Proton Simplifies Multi-Account ECS Deployments for Microservices",
    summary: "AWS released proton upgrades allowing operations teams to define environment templates and push updates across multiple target ECS clusters asynchronously.",
    category: "Cloud",
    source: "AWS Blog",
    date: "May 20, 2026",
    link: "https://aws.amazon.com",
    tag: "AWS"
  },
  {
    id: 10,
    title: "GitHub Copilot Workspace Reaches General Availability globally",
    summary: "GitHub's complete agentic development workspace has officially launched. It lets developers build entire code repositories from natural language specifications.",
    category: "Programming",
    source: "GitHub Changelog",
    date: "May 15, 2026",
    link: "https://github.com",
    tag: "GitHub"
  },
  {
    id: 11,
    title: "LeetCode Announces AI Debugging Copilot Inside Coding Environments",
    summary: "LeetCode has integrated real-time debugger helpers inside their practice workspace, offering algorithmic suggestions and execution tracing details.",
    category: "Programming",
    source: "LeetCode Press",
    date: "May 10, 2026",
    link: "https://leetcode.com",
    tag: "LeetCode"
  },
  {
    id: 12,
    title: "React 19 Reaches Stable Release with Core compiler & Server Actions",
    summary: "The React team has officially released v19 stable. Renders optimize compile loops, eliminate memo/useMemo manually, and support async data transactions natively.",
    category: "Programming",
    source: "React Blog",
    date: "May 01, 2026",
    link: "https://react.dev",
    tag: "React"
  }
];

export const CATEGORIES = ["All", "AI", "Cloud", "Cyber Security", "DevOps", "Programming"];
