const fs = require("fs");
const path = require("path");

// Clean up dynamic router conflict directory
const conflictDir = path.join(process.cwd(), "app", "blog", "[category]");
if (fs.existsSync(conflictDir)) {
  fs.rmSync(conflictDir, { recursive: true, force: true });
  console.log("Cleaned up dynamic router conflict directory: app/blog/[category]");
}

const PAGES = {
  leetcode: {
    title: "LeetCode DSA Statistics & Metrics | Ajit Dev",
    desc: "Review Ajit Dev's LeetCode coding stats. Solved 450+ problems, algorithm complexity optimizations, tree/graph structures, and competitive contest ratings.",
    h1: "LeetCode DSA Metrics",
    icon: "Activity",
    content: `
      <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-white mb-4">Daily Problem Solving Progress</h2>
        <p className="text-slate-400 mb-6 leading-relaxed">
          I practice competitive programming and data structures daily to sharpen logic and speed. Tracking arrays, sliding windows, backtracking, tree traversals, and dynamic programming patterns.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block">Solved</span>
            <span className="text-3xl font-black text-indigo-400">457+</span>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block">Streak</span>
            <span className="text-3xl font-black text-indigo-400">180 Days</span>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block">Hard Solved</span>
            <span className="text-3xl font-black text-indigo-400">50</span>
          </div>
          <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
            <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider block">Contest Rating</span>
            <span className="text-3xl font-black text-indigo-400">1580</span>
          </div>
        </div>
      </div>
      <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-white mb-2">LeetCode Profile Information</h3>
        <p className="text-slate-400 text-sm mb-4">
          Access my public LeetCode dashboard to review code submissions and verify optimization statistics.
        </p>
        <a href="https://leetcode.com/ajitdev01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 px-5 bg-indigo-600 hover:bg-indigo-750 text-white font-semibold rounded-xl text-xs transition-colors">
          View Public Profile →
        </a>
      </div>
    `,
    faq: [
      { q: "What is Ajit Dev's LeetCode username?", a: "His public LeetCode username is ajitdev01." },
      { q: "What is Ajit Dev's DSA preference?", a: "He mainly codes in C++ using the Standard Template Library (STL) for optimal memory control." }
    ]
  },
  dsa: {
    title: "Data Structures & Algorithms (DSA) Roadmap | Ajit Dev",
    desc: "Learn about Ajit Dev's algorithm engineering guidelines. Time complexity analysis, graph traversals, dynamic programming, and data arrays implementations.",
    h1: "Data Structures & Algorithms",
    icon: "BookOpen",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Algorithmic Problem Solving Mastery</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I build scalable application logic based on strong DSA fundamentals. Here is how I organize my problem solving structures:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">Linear Structures</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Optimizing array structures, custom sliding windows, two pointers operations, stacks, queues, and linked lists indexes.
            </p>
          </div>
          <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">Hierarchical Structures</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Implementing binary search trees (BST), heap priority queues, graph node searches (DFS, BFS), and union-find disjoint sets.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <Link href="/leetcode" className="text-indigo-600 hover:underline font-semibold text-sm">
          Check out my LeetCode progress dashboard →
        </Link>
      </div>
    `,
    faq: [
      { q: "Which programming language does Ajit Dev use for DSA?", a: "He primarily uses C++ for algorithms because of its execution speed and rich memory operations." }
    ]
  },
  "system-design": {
    title: "System Design & Scalable Architectures | Ajit Dev",
    desc: "Discover system design patterns by Ajit Dev. Sharding databases, REST controllers, API gateways, load balancing, and rate limiting algorithms.",
    h1: "System Design",
    icon: "Cpu",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Designing High-Availability Distributed Systems</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Creating robust network architectures that support high traffic loads, enforce security parameters, and eliminate single points of failure.
        </p>
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-indigo-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">Microservices vs Monoliths</h3>
            <p className="text-gray-500 text-xs mt-1">Dividing backends into small, isolated API services that communicate via REST or WebSockets.</p>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">Caching Tier Strategy</h3>
            <p className="text-gray-500 text-xs mt-1">Integrating Redis caching tables to speed up database reads and restrict CPU cycles.</p>
          </div>
          <div className="p-4 border-l-4 border-pink-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">Database Sharding & Indexing</h3>
            <p className="text-gray-500 text-xs mt-1">Distributing database tables based on key attributes to scale write throughput.</p>
          </div>
        </div>
      </div>
    `,
    faq: [
      { q: "How does Ajit Dev structure microservices?", a: "By isolating application domains, using Docker containers, and managing communications via REST and API Gateways." }
    ]
  },
  devops: {
    title: "DevOps Operations & Pipelines | Ajit Dev Portfolio",
    desc: "Review DevOps engineering layouts. Configuring CI/CD pipelines, container runtime orchestration, Nginx reverse proxy routes, and Linux server hardening.",
    h1: "DevOps Operations",
    icon: "Terminal",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure & Build Automations</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I design continuous delivery configurations that allow product teams to push code safely and frequently. Here is my operational focus:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
          <li><strong>Build Automation</strong>: GitHub Actions pipelines compiling typescript artifacts.</li>
          <li><strong>Containerization</strong>: Multi-stage Docker configurations limiting image payload sizes.</li>
          <li><strong>Orchestration</strong>: Managing Kubernetes clusters pods scaling rules.</li>
          <li><strong>Server Management</strong>: Linux shell script utilities auditing CPU/Memory nodes.</li>
        </ul>
        <div className="flex gap-4">
          <Link href="/projects/devops" className="inline-flex items-center justify-center h-10 px-5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl text-xs transition-colors">
            View DevOps Projects
          </Link>
          <Link href="/blog/devops" className="inline-flex items-center justify-center h-10 px-5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl text-xs transition-colors">
            Read DevOps Articles
          </Link>
        </div>
      </div>
    `,
    faq: [
      { q: "What CI/CD tools does Ajit Dev use?", a: "He primarily uses GitHub Actions for continuous integration and automated deployments." }
    ]
  },
  devsecops: {
    title: "DevSecOps Security Hardened Pipelines | Ajit Dev Portfolio",
    desc: "Explore DevSecOps practices by Ajit Dev. Shifting security left, configuring SAST static scanners (Trivy, Snyk), and container build auditing.",
    h1: "DevSecOps Hardening",
    icon: "Shield",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Shifting Security Left in Continuous Delivery</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          DevSecOps integrates automated security verification checkpoints directly inside delivery workflows, preventing vulnerabilities from ever making it to server runtimes.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
            <span className="font-bold text-gray-900 text-xs block mb-1">SAST Scans</span>
            <p className="text-gray-500 text-[10px] leading-relaxed">Static application security testing checks syntax for exposed secrets or CORS configs.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
            <span className="font-bold text-gray-900 text-xs block mb-1">SCA Scans</span>
            <p className="text-gray-500 text-[10px] leading-relaxed">Software composition analysis checks third-party library dependencies for known CVE alerts.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
            <span className="font-bold text-gray-900 text-xs block mb-1">Container Scans</span>
            <p className="text-gray-500 text-[10px] leading-relaxed">Scanning built Docker image layers using Trivy before pushing to repositories.</p>
          </div>
        </div>
      </div>
    `,
    faq: [
      { q: "Why is DevSecOps important?", a: "Because it identifies software vulnerabilities early in the build pipeline, reducing security breach risks." }
    ]
  },
  cloud: {
    title: "AWS Cloud Operations & Architectures | Ajit Dev",
    desc: "Discover AWS cloud systems by Ajit Dev. Zero-downtime hosting, virtual private network subnets, load balancers, and EC2 scaling.",
    h1: "AWS Cloud Operations",
    icon: "Cloud",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Building High-Availability Cloud Networks</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I host enterprise portfolios and database backends on Amazon Web Services (AWS) using secure, automated topologies.
        </p>
        <div className="flex gap-4">
          <Link href="/aws" className="text-indigo-600 hover:underline font-semibold text-sm">
            View AWS Detailed Profile →
          </Link>
        </div>
      </div>
    `,
    faq: [
      { q: "What cloud credentials does Ajit Dev hold?", a: "He is a Cloud and Security BCA graduate, specializing in Amazon Web Services operations." }
    ]
  },
  aws: {
    title: "Amazon Web Services (AWS) Cloud Engineering | Ajit Dev",
    desc: "Review AWS cloud deployment setups. IAM access rules, private subnets VPC routing, EC2 instances, and serverless Lambda functions.",
    h1: "AWS Cloud Engineering",
    icon: "Cloud",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">AWS Network Design & Operations</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          My primary cloud focus is Amazon Web Services (AWS). I automate cloud resource setups using Terraform templates.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
          <li><strong>VPC Subnet Topologies</strong>: Splitting resources into public, private app, and isolated database subnets.</li>
          <li><strong>Identity & Access (IAM)</strong>: Restricting API calls using least-privilege credentials.</li>
          <li><strong>Serverless APIs</strong>: API Gateways routing backend traffic to NodeJS Lambda scripts.</li>
        </ul>
        <Link href="/projects/cloud" className="inline-flex items-center justify-center h-10 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs transition-colors">
          View Cloud Projects Portfolio
        </Link>
      </div>
    `,
    faq: [
      { q: "How does Ajit Dev manage cloud network security?", a: "By configuring custom VPC networks, stateful security groups, stateless NACLs, and routing traffic privately." }
    ]
  },
  docker: {
    title: "Docker Containerization & Image Tuning | Ajit Dev",
    desc: "Deep-dive into Docker containerization guidelines. Multi-stage Dockerfile builds, Compose orchestration, and registry image scanning.",
    h1: "Docker Containerization",
    icon: "Terminal",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Containerizing Web Application Nodes</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Using Docker container files allows us to pack database systems and React frontends into consistent execution layers that run identically on developer machines and cloud servers.
        </p>
        <div className="p-5 border border-indigo-100 rounded-xl bg-indigo-50/50">
          <h3 className="font-bold text-indigo-950 text-sm mb-2">Optimization Playbook</h3>
          <p className="text-indigo-900 text-xs leading-relaxed">
            I leverage alpine OS images, run multi-stage compilation steps to discard build-time compilers, and scan container layers for vulnerabilities before pipeline delivery.
          </p>
        </div>
      </div>
    `,
    faq: [
      { q: "Why use multi-stage Docker builds?", a: "To minimize production image payload size by excluding build-time tools, enhancing speed and container security." }
    ]
  },
  kubernetes: {
    title: "Kubernetes Cluster Orchestration & Deployment | Ajit Dev",
    desc: "Discover Kubernetes operations by Ajit Dev. Managing node pods, rolling updates, ingress routing, and config file specifications.",
    h1: "Kubernetes Orchestration",
    icon: "Cpu",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Orchestrating Container Workloads at Scale</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          For large-scale applications, Kubernetes coordinates groups of containerized application pods, managing automated rollouts and scaling parameters.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
          <li><strong>Deployment Manifests</strong>: Declaring target replica sets and pod specs.</li>
          <li><strong>Cluster Security</strong>: Segmenting network namespaces and applying access limits.</li>
          <li><strong>Rollout Operations</strong>: Zero-downtime updates with automated build checks.</li>
        </ul>
      </div>
    `,
    faq: [
      { q: "What is an EKS cluster in AWS?", a: "Elastic Kubernetes Service, which manages Kubernetes control planes natively in AWS." }
    ]
  },
  terraform: {
    title: "Terraform Infrastructure as Code (IaC) | Ajit Dev",
    desc: "Learn about declarative cloud provisioning. Writing modular Terraform templates for AWS VPCs, Route53, and security policies.",
    h1: "Terraform Infrastructure Code",
    icon: "Terminal",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Declarative Infrastructure Provisioning</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Rather than configuring cloud assets manually in the browser dashboard, I write declarative, version-controlled configuration manifests in Terraform.
        </p>
        <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl font-mono text-xs text-gray-600 leading-relaxed mb-6">
          # Provison AWS VPC using Terraform<br/>
          resource "aws_vpc" "main" &#123;<br/>
          &nbsp;&nbsp;cidr_block = "10.0.0.0/16"<br/>
          &nbsp;&nbsp;tags = &#123; Name = "ajitdev-vpc" &#125;<br/>
          &#125;
        </div>
      </div>
    `,
    faq: [
      { q: "Why use Terraform for AWS cloud setups?", a: "It provides version control, modular configurations, and consistent deployment states for cloud resources." }
    ]
  },
  linux: {
    title: "Linux Server Administration & Hardening | Ajit Dev",
    desc: "Discover Linux system operations. Hardening virtual private servers, writing bash automation scripts, and configuring Nginx web services.",
    h1: "Linux Server Operations",
    icon: "Terminal",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Linux System Administration & Scripting</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Linux servers host the internet. I administer VPS deployments, configure firewalls, harden file access rules, and write shell scripts to automate backups.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm">
            <span className="font-bold text-gray-900 block mb-1">Server Hardening</span>
            <span className="text-gray-500 text-xs">Excluding root login paths, configuring SSH authentication keys, and setting firewall policies.</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm">
            <span className="font-bold text-gray-900 block mb-1">Web Servers</span>
            <span className="text-gray-500 text-xs">Configuring Nginx and Apache to handle incoming routes and secure SSL parameters.</span>
          </div>
        </div>
      </div>
    `,
    faq: [
      { q: "Which Linux distribution is preferred for cloud hosts?", a: "Ubuntu Server or Alpine Linux are common choices for production container hosts." }
    ]
  },
  "cloud-security": {
    title: "Cloud Security & Access Control Hardening | Ajit Dev",
    desc: "Review cloud security practices by Ajit Dev. Multi-layer VPC subnets, AWS IAM access credentials, and network encryption parameters.",
    h1: "Cloud Security Engineering",
    icon: "Shield",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Engineering Zero-Trust Cloud Infrastructure</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Cloud security focuses on protecting databases and API calls using structured identity parameters and network boundaries.
        </p>
        <Link href="/projects/security" className="inline-flex items-center justify-center h-10 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs transition-colors">
          View Security Audits Portfolio
        </Link>
      </div>
    `,
    faq: [
      { q: "What is an IAM Policy?", a: "A document detailing specific permissions (allow/deny) for a user or system interacting with AWS resources." }
    ]
  },
  "cyber-security": {
    title: "Cybersecurity & OWASP App Hardening | Ajit Dev",
    desc: "Explore application security auditing. Defending Express backends against OWASP Top 10 vulnerabilities, encrypting tokens, and securing API limits.",
    h1: "Application Cybersecurity",
    icon: "Shield",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Hardening Web API Systems Against Vulnerabilities</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Application cybersecurity requires auditing software controllers to prevent injection flaws, authentication bypasses, and insecure CORS routing configurations.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm">
            <span className="font-bold text-gray-900 block mb-1">JWT Security</span>
            <span className="text-gray-500 text-xs">Signing authentication tokens with secure keys, using HTTP-only cookies, and configuring expirations.</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-sm">
            <span className="font-bold text-gray-900 block mb-1">Vulnerability Mitigation</span>
            <span className="text-gray-500 text-xs">Implementing helmet headers, securing express rate limits, and sanitizing SQL/MongoDB queries.</span>
          </div>
        </div>
      </div>
    `,
    faq: [
      { q: "What is an OWASP vulnerability?", a: "One of the top-ranked security weaknesses documented globally in web software systems." }
    ]
  },
  resources: {
    title: "Software Engineering & Developer Resources | Ajit Dev",
    desc: "Explore developer resources, templates, and configurations by Ajit Dev. Modular configurations for Docker Compose, Next.js setups, and Terraform modules.",
    h1: "Developer Resources",
    icon: "BookOpen",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Configurations & Boilerplates Library</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I publish configuration scripts and development templates to accelerate workflow speeds.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
            <span className="font-bold text-gray-900 block mb-1">Docker Compose Dev Patterns</span>
            <p className="text-gray-500 text-xs">Ready-to-use Compose files configured for local MERN stack debugging.</p>
          </div>
          <div className="p-4 border border-gray-100 rounded-xl bg-gray-50">
            <span className="font-bold text-gray-900 block mb-1">Next.js Tailwind Templates</span>
            <p className="text-gray-500 text-xs">Type-safe configuration skeletons with responsive layouts and metadata helpers.</p>
          </div>
        </div>
      </div>
    `,
    faq: [
      { q: "Are these configurations open source?", a: "Yes, you can access and fork them from my public GitHub repositories." }
    ]
  },
  roadmaps: {
    title: "Full Stack & DevOps Study Roadmaps | Ajit Dev",
    desc: "Discover technical learning roadmaps. Chronological study guides on MERN development, AWS architecture configurations, and algorithm problem-solving.",
    h1: "Learning Roadmaps",
    icon: "BookOpen",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Guided Learning Paths to Mastery</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I follow structured curricula to organize study cycles. Here are the roadmaps guiding my engineering milestones:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
            <span className="font-bold text-gray-900 text-sm block mb-1">MERN Stack Roadmap</span>
            <p className="text-gray-500 text-xs">HTML/CSS &rarr; Javascript &rarr; React &rarr; Express &rarr; MongoDB API schemas &rarr; Deployments.</p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
            <span className="font-bold text-gray-900 text-sm block mb-1">DevOps Roadmap</span>
            <p className="text-gray-500 text-xs">Linux fundamentals &rarr; Docker files &rarr; CI/CD pipelines &rarr; AWS cloud networks &rarr; Kubernetes orchestration.</p>
          </div>
        </div>
      </div>
    `,
    faq: [
      { q: "Which roadmap did you follow for DSA?", a: "I follow the structured NeetCode problem-solving map to master tree and graph algorithms." }
    ]
  },
  tools: {
    title: "Technical Utilities & Developer Tools | Ajit Dev",
    desc: "Discover software utilities and local tools used by Ajit Dev. Review code editors, shells, and hosting platforms in my tech stacks.",
    h1: "Technical Tools",
    icon: "Cpu",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">My Development Tools</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I leverage highly efficient environments to speed up compilation times and maintain server uptimes.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
          <li><strong>Local Editor</strong>: VS Code configured with Tailwind extensions and TypeScript checks.</li>
          <li><strong>Development Shell</strong>: Git Bash and Linux terminal nodes.</li>
          <li><strong>Server Hosts</strong>: AWS EC2 instances and Vercel edge deployment grids.</li>
        </ul>
        <Link href="/uses" className="text-indigo-600 hover:underline font-semibold text-sm">
          Explore my complete /uses setups page →
        </Link>
      </div>
    `,
    faq: [
      { q: "Which compiler does Ajit Dev use for C++?", a: "He uses the GCC compiler via the MinGW package on Windows environments." }
    ]
  },
  "open-source": {
    title: "Open Source Code Contributions | Ajit Dev Portfolio",
    desc: "Review open-source code and public contributions by Ajit Dev. Access GitHub templates, Node libraries, and deployment compose files.",
    h1: "Open Source Contributions",
    icon: "BookOpen",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contributing to the Developer Community</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I publish code templates and starter boilerplates to make development workflows accessible to local developers.
        </p>
        <Link href="/leetcode" className="text-indigo-600 hover:underline font-semibold text-sm">
          Check out my DSA Journey algorithms library →
        </Link>
      </div>
    `,
    faq: [
      { q: "Where can I view Ajit Dev's open source code?", a: "His repositories are published publicly under the username ajitdev01 on GitHub." }
    ]
  },
  "case-studies": {
    title: "Software System Architecture Case Studies | Ajit Dev",
    desc: "Read detailed technical case studies by Ajit Dev. Analysis of concurrent booking booking APIs, AWS VPC subnets, and automated security pipelines.",
    h1: "Technical Case Studies",
    icon: "BookOpen",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Deep-Dives into System Implementations</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          These case studies summarize the challenges, engineering strategies, and final performance metrics of key projects built for web and cloud environments.
        </p>
        <div className="space-y-4">
          <Link href="/projects/full-stack" className="block p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-indigo-300 transition-colors">
            <span className="font-bold text-gray-900 text-sm block">MERN E-Commerce Booking Case Study</span>
            <span className="text-gray-500 text-xs mt-1 block">Solving high concurrency availability checks for seat reservations and checkout routes.</span>
          </Link>
          <Link href="/projects/cloud" className="block p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-indigo-300 transition-colors">
            <span className="font-bold text-gray-900 text-sm block">Multi-Region AWS VPC Implementation Study</span>
            <span className="text-gray-500 text-xs mt-1 block">Designing isolated private tiers with secure routing access parameters.</span>
          </Link>
        </div>
      </div>
    `,
    faq: [
      { q: "Are these systems live?", a: "Yes, you can read the build specifications and review the source codes in my repository links." }
    ]
  },
  achievements: {
    title: "Achievements & Milestones | Ajit Dev Portfolio",
    desc: "Discover achievements and milestones earned by Ajit Dev. DSA problem-solving streaks, web development delivery milestones, and study checkpoints.",
    h1: "Achievements & Milestones",
    icon: "Activity",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-black">Engineering Milestones</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          My primary coding milestones achieved through consistent practice and training routines:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-3 mb-6">
          <li><strong>LeetCode Consistency</strong>: Completed 450+ algorithmic problems, maintaining a 180+ day active streak.</li>
          <li><strong>Full Stack Master Course</strong>: Graduated 45+ lectures, building e-commerce and booking platforms.</li>
          <li><strong>Cloud Studies</strong>: Commenced BCA Cloud & Security studies at Amity University Online.</li>
          <li><strong>DevOps Integrations</strong>: Created automated CI/CD pipeline scans for NextJS apps.</li>
        </ul>
      </div>
    `,
    faq: [
      { q: "What is Ajit Dev's longest coding streak?", a: "He has maintained a daily coding streak exceeding 180 consecutive days on LeetCode." }
    ]
  },
  certificates: {
    title: "Certifications & Credentials | Ajit Dev Portfolio",
    desc: "View professional certifications and training credentials of Ajit Dev. BCA coursework at Amity University Online and DevOps/Full Stack certification.",
    h1: "Technical Certifications",
    icon: "BookOpen",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Credentials & Certifications</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Verifiable credentials representing coursework completion and hands-on developer training.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
            <div>
              <span className="font-bold text-gray-900 text-sm block">Full Stack Developer Training</span>
              <span className="text-gray-500 text-xs">Brainzima Innovation Institute — Practical Coursework</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between">
            <div>
              <span className="font-bold text-gray-900 text-sm block">BCA Cloud & Security Studies</span>
              <span className="text-gray-500 text-xs">Amity University Online — Technical Syllabus</span>
            </div>
          </div>
        </div>
      </div>
    `,
    faq: [
      { q: "How can I verify your training?", a: "By reviewing the certification records from Brainzima Innovation Institute." }
    ]
  },
  resume: {
    title: "Professional Resume & CV Download | Ajit Dev Portfolio",
    desc: "Download the developer resume of Ajit Dev. BCA Cloud & Security student, Full Stack Engineer (MERN & Next.js), and DevOps automation coder.",
    h1: "Professional Resume",
    icon: "BookOpen",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Developer CV</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I build scalable frontend layouts and automate server deployments using container tools and Cloud network setups.
        </p>
        <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-bold text-indigo-950 text-sm">Download PDF Copy</h3>
            <p className="text-indigo-900 text-xs">Get the latest offline copy of my engineering credentials.</p>
          </div>
          <a href="/resume.pdf" download className="inline-flex items-center justify-center h-10 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs transition-colors shrink-0">
            Download Resume (PDF)
          </a>
        </div>
      </div>
    `,
    faq: [
      { q: "How can I hire Ajit Dev?", a: "Submit an inquiry on `/contact` or email support@ajitdev.com or ajitk23192@gmail.com to request his services." }
    ]
  },
  uses: {
    title: "My Gear, Apps & System Workstation | Ajit Dev",
    desc: "Explore Ajit Dev's developer setup. VS Code themes, browser extensions, terminal configurations, and hardware workstation gear.",
    h1: "Workstation Setup",
    icon: "Cpu",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-black">Workspace, Gear & Tools</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Here is a detailed breakdown of the local hardware gear and software tools I use to write, test, and host systems daily:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
          <li><strong>Development Machine</strong>: Windows environment with Git Bash integration.</li>
          <li><strong>Main Editor</strong>: Visual Studio Code using Geist Mono font and dark themes.</li>
          <li><strong>API Debugger</strong>: Postman and Chrome Developer Tools.</li>
          <li><strong>Browser Setup</strong>: Chrome utilizing privacy and JSON parsing extensions.</li>
        </ul>
      </div>
    `,
    faq: [
      { q: "What is your main text editor?", a: "VS Code with specialized extension packs for React and Tailwind CSS." }
    ]
  },
  now: {
    title: "What I&apos;m Doing Currently (Now Page) | Ajit Dev",
    desc: "Discover Ajit Dev's current engineering focus. Practices with Next.js App Router optimization, LeetCode daily DSA contets, and AWS VPC configurations.",
    h1: "What I'm Doing Now",
    icon: "Activity",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-black">Current Focus & Projects</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          This page outlines my primary learning paths and operational tasks currently:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-3 mb-6">
          <li><strong>BCA Coursework</strong>: Studying cloud networking models and operational security patterns.</li>
          <li><strong>Next.js Overhaul</strong>: Rebuilding my portfolio using NextJS 16, adding static generation structures and dynamic metadata.</li>
          <li><strong>Algorithmic Contests</strong>: Completing daily challenges on LeetCode to improve graph node search speeds.</li>
          <li><strong>Infrastructure Modules</strong>: Designing reusable Terraform configurations for AWS container deployments.</li>
        </ul>
      </div>
    `,
    faq: [
      { q: "When was this now page updated?", a: "It is updated monthly to reflect active projects and learning routes." }
    ]
  },
  changelog: {
    title: "Site Updates & Release Changelog | Ajit Dev",
    desc: "Review design changes and development updates of ajitdev.com. Next.js 16 migrations, SEO schema setups, and MDX integrations.",
    h1: "Site Changelog",
    icon: "Activity",
    content: `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 font-black">Website Release Log</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Documenting features, design edits, and search ranking configurations added to this domain:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
            <span className="font-bold text-gray-900 text-sm block">Version 2.0.0 — Next.js 16 Migration</span>
            <span className="text-gray-400 text-xs">June 2026</span>
            <p className="text-gray-500 text-xs mt-2">
              Converted portfolio to Next.js App Router structure, integrated MDX blog rendering, added unified Person schemas, and optimized PageSpeed to 100/100.
            </p>
          </div>
        </div>
      </div>
    `,
    faq: [
      { q: "Why was Next.js selected?", a: "To enable fast server rendering, static pre-generation, and simplified SEO metadata control." }
    ]
  }
};

Object.entries(PAGES).forEach(([slug, info]) => {
  const dirPath = path.join(process.cwd(), "app", slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const pageContent = `import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ${info.icon} } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "${info.title}",
  description: "${info.desc}",
  alternates: {
    canonical: "https://ajitdev.com/${slug}",
  },
};

export default function ${slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("")}Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://ajitdev.com/${slug}/#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ajitdev.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "${slug.split("-").join(" ")}",
        "item": "https://ajitdev.com/${slug}",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${info.faq.map(f => `{
        "@type": "Question",
        "name": "${f.q}",
        "answer": {
          "@type": "Answer",
          "text": "${f.a}"
        }
      }`).join(",\n      ")}
    ]
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                <${info.icon} className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50">
                Resource Category
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              ${info.h1}
            </h1>
          </div>

          ${info.content}

          {/* Contextual internal linking (10+ links across layout) */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Explore More Technical Guides</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-gray-500">
              <Link href="/devops" className="hover:text-indigo-600 transition-colors">DevOps Engineering</Link>
              <Link href="/aws" className="hover:text-indigo-600 transition-colors">AWS Operations</Link>
              <Link href="/cloud-security" className="hover:text-indigo-600 transition-colors">Cloud Security</Link>
              <Link href="/cyber-security" className="hover:text-indigo-600 transition-colors">Cybersecurity</Link>
              <Link href="/docker" className="hover:text-indigo-600 transition-colors">Docker Containers</Link>
              <Link href="/kubernetes" className="hover:text-indigo-600 transition-colors">Kubernetes Pods</Link>
              <Link href="/terraform" className="hover:text-indigo-600 transition-colors">Terraform IaC</Link>
              <Link href="/leetcode" className="hover:text-indigo-600 transition-colors">LeetCode Stats</Link>
              <Link href="/dsa" className="hover:text-indigo-600 transition-colors">DSA Roadmap</Link>
              <Link href="/system-design" className="hover:text-indigo-600 transition-colors">System Design</Link>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, "page.tsx"), pageContent);
  console.log(`Generated page: /${slug}`);
});

console.log("Successfully setup all portfolio subpages!");
