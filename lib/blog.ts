import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  content: string;
  faq?: Array<{ question: string; answer: string }>;
  isPlaceholder?: boolean;
}

const postsDirectory = path.join(process.cwd(), "content/posts");
const metadataFile = path.join(process.cwd(), "content/posts-metadata.json");

// Define categories for authority expansion
const CATEGORIES = [
  { key: "nextjs", name: "Next.js", tags: ["Next.js", "React", "Frontend", "SSR", "Vercel", "Web Performance"] },
  { key: "react", name: "React", tags: ["React", "JavaScript", "Frontend", "State Management", "Hooks", "UI UX"] },
  { key: "mern", name: "MERN Stack", tags: ["MERN Stack", "MongoDB", "Express", "React", "Node.js", "API Security"] },
  { key: "lamp", name: "LAMP Stack", tags: ["LAMP Stack", "PHP", "MySQL", "Apache", "Linux", "Backend"] },
  { key: "devops", name: "DevOps", tags: ["DevOps", "CI/CD", "GitHub Actions", "Docker", "Automation", "Pipelines"] },
  { key: "aws", name: "AWS", tags: ["AWS", "Cloud", "VPC", "Serverless", "EC2", "IAM", "Infrastructure"] },
  { key: "docker", name: "Docker", tags: ["Docker", "Containers", "Orchestration", "Microservices", "Security"] },
  { key: "kubernetes", name: "Kubernetes", tags: ["Kubernetes", "K8s", "EKS", "Orchestration", "Pods", "Scaling"] },
  { key: "terraform", name: "Terraform", tags: ["Terraform", "IaC", "AWS", "Infrastructure", "Automation"] },
  { key: "linux", name: "Linux", tags: ["Linux", "Bash", "Shell Scripting", "SysAdmin", "Security", "Server"] },
  { key: "dsa", name: "DSA", tags: ["DSA", "LeetCode", "Algorithms", "Data Structures", "C++", "Optimization"] },
  { key: "system-design", name: "System Design", tags: ["System Design", "Distributed Systems", "Scaling", "Database", "HLD", "LLD"] }
];

// Hub configs for inlined route setup
const PAGES_CONFIG: Record<string, any> = {
  "case-studies": {
    title: "Software System Architecture Case Studies | Ajit Dev",
    desc: "Read detailed technical case studies by Ajit Dev. Analysis of concurrent reservation APIs, AWS VPC subnets, weather trackers, and library systems.",
    h1: "Technical Case Studies",
    category: "Architecture & Case Studies",
    icon: "BookOpen",
    intro: "Detailed post-mortems and engineering audits of production systems built by Ajit Dev (ajitdev01). Highlighting problem definitions, business goals, database choices, security audits, and performance tuning.",
    roadmap: ["Define Goals", "Database Schema Design", "Security Auditing", "CI/CD Pipeline Setup", "Performance Benchmark", "Production Review"],
    resources: ["System Design Primers", "AWS Whitepapers", "OWASP Hardening Rules"],
    notes: "Every study outlines specific tradeoffs (e.g., latency vs consistency in caching, normalized vs denormalized database schemas).",
    faq: [{ q: "Are these projects open-source?", a: "Yes, all source repositories can be inspected on the GitHub handle ajitdev01." }],
    related: [
      { name: "Portfolio Case Study", url: "/case-studies/portfolio" },
      { name: "QR Menu SaaS Study", url: "/case-studies/qr-menu-saas" },
      { name: "Weather Tracker Study", url: "/case-studies/weather-app" },
      { name: "Library Management Study", url: "/case-studies/library-management-system" }
    ]
  },
  "resume": {
    title: "Professional Resume & CV Download | Ajit Dev Portfolio",
    desc: "Download the developer resume of Ajit Dev. BCA Cloud & Security student, Full Stack Engineer (MERN & Next.js), and DevOps automation engineer.",
    h1: "Professional Resume",
    category: "About & Credentials",
    icon: "FileText",
    intro: "Summary of professional software development capabilities, systems engineering skills, and academic training at Amity University Online and Brainzima Institute.",
    roadmap: ["BCA Cloud & Security", "Brainzima Full Stack", "AWS Cloud Practitioner", "DevOps Systems Specialist"],
    resources: ["Download PDF Copy", "LinkedIn Profile", "GitHub Repositories"],
    notes: "Specializing in next-generation web architectures, automated security pipelines (DevSecOps), and low-level algorithms optimization.",
    faq: [{ q: "How can I contact Ajit Kumar?", a: "Please submit inquiries via the /contact page or email support@ajitdev.com or ajitk23192@gmail.com directly." }],
    related: [
      { name: "LeetCode Profile", url: "/leetcode" },
      { name: "About Me", url: "/about" },
      { name: "Skills Matrix", url: "/skills" }
    ]
  },
  "lamp-stack": {
    title: "LAMP Stack Web Development & Architectures | Ajit Dev",
    desc: "Explore LAMP stack development. Building secure Linux, Apache, MySQL, and PHP backends with custom database indexing and server tuning.",
    h1: "LAMP Stack Development",
    category: "Full Stack",
    icon: "Server",
    intro: "Classic, reliable enterprise web stack combining Linux servers, Apache HTTP engines, relational MySQL databases, and PHP codebases. Highly optimized for long-term maintainability.",
    roadmap: ["PHP Syntax & OOP", "Relational MySQL Joins", "Apache Virtual Host Config", "Linux Server Hardening"],
    resources: ["PHP Manual", "MySQL Indexing Guides", "Nginx vs Apache Tradeoffs"],
    notes: "We design LAMP installations utilizing prepared statements, secure cookies, and customized apache modules to prevent SQLi and XSS flaws.",
    faq: [{ q: "Why use LAMP stack in 2026?", a: "LAMP stack powers over 70% of the web and remains highly cost-effective, simple, and fast for relational data workloads." }]
  },
  "mern-stack": {
    title: "MERN Stack Application Development & scaling | Ajit Dev",
    desc: "Learn about MERN stack development. Designing secure MongoDB aggregates, Express routes, React.js frontends, and Node.js APIs.",
    h1: "MERN Stack Engineering",
    category: "Full Stack",
    icon: "Database",
    intro: "Modern javascript stack leveraging MongoDB document models, Express.js middleware routing, React.js interactive components, and Node.js backend execution engines.",
    roadmap: ["React.js Components", "Node.js Event Loop", "Express REST Controllers", "MongoDB Aggregation Pipelines"],
    resources: ["React Docs", "NodeJS Best Practices", "MongoDB University"],
    notes: "We construct secure MERN dashboards deploying JWT tokens, custom middleware limiters, helmet headers, and database shards to handle concurrent traffic.",
    faq: [{ q: "What is Ajit Dev's MERN experience?", a: "Ajit Dev has built and deployed multiple e-commerce, reservation, and SaaS products using the MERN stack." }]
  },
  "react": {
    title: "React.js Frontend Engineering & State Systems | Ajit Dev",
    desc: "Discover React.js frontend engineering. Reusable component designs, custom hooks, virtual DOM, and animations with Framer Motion.",
    h1: "React.js Engineering",
    category: "Frontend",
    icon: "Code",
    intro: "High-performance frontend library optimized for declarative rendering, reactive state loops, virtual DOM reconciliation, and fluid visual design interfaces.",
    roadmap: ["JSX & Props", "Hooks (useState, useEffect)", "State Management (Redux/Zustand)", "Performance Memoization"],
    resources: ["React Official Documentation", "Framer Motion API", "Tailwind UI Components"],
    notes: "We focus on building accessible (WCAG compliant) designs with smooth animations and layout states to optimize user experiences.",
    faq: [{ q: "What React state manager is preferred?", a: "Zustand is preferred for small-to-medium states, while Redux Toolkit is deployed for large enterprise graphs." }]
  },
  "nextjs": {
    title: "Next.js App Router & SSR Performance | Ajit Dev",
    desc: "Learn Next.js App Router performance tuning. Optimizing server rendering (SSR), static generation (SSG), dynamic metadata, and SEO rules.",
    h1: "Next.js App Router",
    category: "Frontend",
    icon: "Cpu",
    intro: "Enterprise React framework supporting server components, client-side hydration, automatic route splitting, static site generation, and PageSpeed metrics optimization.",
    roadmap: ["App Router Routing", "Server Components vs Client Components", "Data Fetching & ISR", "Edge Renders & Middleware"],
    resources: ["NextJS Documentation", "Vercel Speed Insights", "Lighthouse Performance Rules"],
    notes: "We utilize next.js metadata APIs, dynamic robots, dynamic sitemaps, and preconnect optimization to achieve 100/100 Lighthouse performance metrics.",
    faq: [{ q: "What is Ajit Dev's Next.js setup?", a: "This portfolio is built on Next.js 15+ using App Router, tailwind utility layout grids, and typescript controllers." }]
  },
  "javascript": {
    title: "JavaScript ES6+ and Node Execution engines | Ajit Dev",
    desc: "Review JavaScript ES6+ language guides. Closures, asynchronous promise loops, prototypes, and array performance structures.",
    h1: "JavaScript ES6+",
    category: "Language",
    icon: "Code",
    intro: "The language of the web. Custom operations, event loops, call stacks, scope chains, and asynchronous architectures.",
    roadmap: ["Variables & Scope", "Promises & Async/Await", "Closures & Callbacks", "Prototypal Inheritance"],
    resources: ["MDN Web Docs", "JavaScript Info", "Eloquent JavaScript Book"],
    notes: "We follow clean code guidelines, eliminating memory leaks, and writing dry code structure elements.",
    faq: [{ q: "Is JavaScript single threaded?", a: "Yes, JavaScript is single threaded but leverages Node/Browser background APIs to manage async tasks." }]
  },
  "typescript": {
    title: "TypeScript Static Type Architectures | Ajit Dev",
    desc: "Explore TypeScript static typing rules. Interfaces, generic methods, utility parameters, and compiler configurations.",
    h1: "TypeScript Architectures",
    category: "Language",
    icon: "Code",
    intro: "Strict type superset compile layer for JavaScript, ensuring structural compile-time safety, contract APIs, and fewer runtime errors.",
    roadmap: ["Basic Type Annotations", "Interfaces & Type Aliases", "Generics & Utility Types", "TS Config Tuning"],
    resources: ["TypeScript Handbook", "TS Playground", "Strict Mode Guidelines"],
    notes: "We implement absolute strict configurations, eliminating any 'any' types, and mapping interfaces to models.",
    faq: [{ q: "Why use TypeScript?", a: "It provides autocomplete, maps backend API payloads to variables, and catches syntax errors before delivery." }]
  },
  "nodejs": {
    title: "Node.js REST backend architectures & APIs | Ajit Dev",
    desc: "Review Node.js REST API development. NPM packages, express routing, event queues, and clusters performance tuning.",
    h1: "Node.js Backend APIs",
    category: "Backend",
    icon: "Server",
    intro: "Asynchronous, event-driven JavaScript runtime engine, executing scalable server controllers, socket layers, and RESTful database models.",
    roadmap: ["Node Core Modules", "Event Loop Mechanics", "NPM Registry Controls", "Cluster Thread Optimization"],
    resources: ["NodeJS Docs", "NPM Registry", "ExpressJS Guide"],
    notes: "We structure Node microservices using modular folder architectures, separating controllers, routes, configurations, and sanitizers.",
    faq: [{ q: "How do you scale Node.js backends?", a: "By using the Cluster module to spin up parallel execution threads matching the host's CPU core count." }]
  },
  "php": {
    title: "PHP Core & Object Oriented Programming | Ajit Dev",
    desc: "Discover PHP backend operations. Prepared SQL queries, dependency composer managers, MVC structures, and server integrations.",
    h1: "PHP Core & OOP",
    category: "Language",
    icon: "Code",
    intro: "Server scripting language powering content management platforms and database backends globally. Supporting strict types and MVC architectures.",
    roadmap: ["PHP Basic Syntax", "Classes & Interfaces", "Composer Packages Control", "PDO Database Transactions"],
    resources: ["PHP Manual", "Composer Docs", "PHP-FIG Standards"],
    notes: "We use modern PHP ES8 features, securing prepared statements and PDO drivers to safeguard data entries.",
    faq: [{ q: "What is composer in PHP?", a: "It is the dependency manager for PHP, similar to npm in Node.js, compiling vendor directories." }]
  },
  "mysql": {
    title: "MySQL Relational Databases & Index Optimization | Ajit Dev",
    desc: "Explore MySQL database schemas. Foreign key constraints, inner join transactions, view indices, and backup utilities.",
    h1: "MySQL Databases",
    category: "Database",
    icon: "Database",
    intro: "Relational database server deploying SQL query structures, foreign key constraints, indexes, transaction checks, and backups.",
    roadmap: ["SQL Query Basics", "Indexes & Constraints", "Normalization Rules", "Backup & Dump Setup"],
    resources: ["MySQL Reference Manual", "SQL Cheat Sheets", "Explain Query Tuning"],
    notes: "We check queries using EXPLAIN commands to verify indexes are hit, preventing database locks during high traffic.",
    faq: [{ q: "What is a primary key constraint?", a: "A rule that uniquely identifies each row in a table, indexing it for optimal retrieval speeds." }]
  },
  "mongodb": {
    title: "MongoDB Document Databases & Aggregations | Ajit Dev",
    desc: "Learn MongoDB document schema design. Sharding collections, aggregation builders, compound indices, and atlas cluster hosting.",
    h1: "MongoDB Databases",
    category: "Database",
    icon: "Database",
    intro: "Document-oriented database storing JSON-like document maps. Highly scalable, supporting dynamic aggregates and distributed shard nodes.",
    roadmap: ["BSON Documents", "CRUD Operations", "Indexes & Shards", "Aggregation Frameworks"],
    resources: ["MongoDB Manual", "Atlas Cloud Setup", "Mongoose Schemas"],
    notes: "We structure schemas using Mongoose middleware models, optimizing compound index layouts to minimize read latencies.",
    faq: [{ q: "What is an aggregation pipeline?", a: "A sequence of document processing stages (e.g. match, group, project) that output calculated data summaries." }]
  },
  "linux": {
    title: "Linux Server Administration & Hardening | Ajit Dev",
    desc: "Discover Linux system operations. Hardening virtual private servers, writing bash automation scripts, and configuring Nginx web services.",
    h1: "Linux Administration",
    category: "Infrastructure",
    icon: "Terminal",
    intro: "Linux virtual server operations. Administering packages, auditing ports, setting SSH security parameters, and writing cron scripts.",
    roadmap: ["Linux File System", "User & Group Permissions", "SSH & Firewall Setup", "Bash Automation Scripting"],
    resources: ["Ubuntu Server Guides", "Bash Reference", "Nginx Config Guides"],
    notes: "We harden virtual private servers (VPS) by configuring custom SSH ports, disabling root login paths, and installing fail2ban limits.",
    faq: [{ q: "How do you run tasks in the background?", a: "By scheduling cron jobs or executing scripts as systemd daemon services." }]
  },
  "aws": {
    title: "Amazon Web Services (AWS) Cloud Engineering | Ajit Dev",
    desc: "Review AWS cloud deployment setups. IAM access rules, private subnets VPC routing, EC2 instances, and serverless Lambda functions.",
    h1: "AWS Cloud Engineering",
    category: "Cloud",
    icon: "Cloud",
    intro: "Cloud systems provisioning. VPC setups, IAM access security boundaries, EC2 computing instances, and Lambda serverless integrations.",
    roadmap: ["VPC Subnet Architectures", "IAM Role Policies", "EC2 & Load Balancers", "Lambda & API Gateways"],
    resources: ["AWS Documentation", "Terraform AWS Modules", "AWS Architecture Guidelines"],
    notes: "We configure networks privately, routing app servers inside isolated zones with NAT gateways handling egress APIs.",
    faq: [{ q: "What is AWS IAM?", a: "Identity and Access Management, controlling which roles and keys can make AWS API calls." }]
  },
  "docker": {
    title: "Docker Containerization & Image Tuning | Ajit Dev",
    desc: "Deep-dive into Docker containerization guidelines. Multi-stage Dockerfile builds, Compose orchestration, and registry image scanning.",
    h1: "Docker Containerization",
    category: "DevOps",
    icon: "Layers",
    intro: "Packaging code, libraries, runtime environments, and system files into light containers that run identically on local machines and production networks.",
    roadmap: ["Docker Engine & CLI", "Dockerfile Best Practices", "Docker Compose Multi-Container", "Image Layer Optimization"],
    resources: ["Docker Reference Docs", "Alpine Base Images", "Trivy Security Scan"],
    notes: "We optimize container payloads using multi-stage compile builds, alpine base operating systems, and non-root users.",
    faq: [{ q: "What are multi-stage Docker builds?", a: "A method to discard compilation SDKs from the final runtime image, minimizing payload size and threat targets." }]
  },
  "kubernetes": {
    title: "Kubernetes Cluster Orchestration & Deployment | Ajit Dev",
    desc: "Discover Kubernetes operations by Ajit Dev. Managing node pods, rolling updates, ingress routing, and config file specifications.",
    h1: "Kubernetes Orchestration",
    category: "DevOps",
    icon: "Cpu",
    intro: "Orchestrating container groups across computing nodes. Automating deployment rollouts, horizontal scaling, ingress proxies, and configuration volumes.",
    roadmap: ["K8s Architecture Components", "Pod & Deployment Manifests", "Ingress Controllers & DNS", "EKS Cluster Deployments"],
    resources: ["Kubernetes Docs", "Helm Chart Templates", "Minikube Local Setup"],
    notes: "We manage resources using namespace segmentations, network rules, config maps, and rolling update controls to guarantee high availability.",
    faq: [{ q: "What is a Kubernetes Pod?", a: "The smallest deployable unit in Kubernetes, wrapping one or more containers sharing storage and network configs." }]
  },
  "terraform": {
    title: "Terraform Infrastructure as Code (IaC) | Ajit Dev",
    desc: "Learn about declarative cloud provisioning. Writing modular Terraform templates for AWS VPCs, Route53, and security policies.",
    h1: "Terraform IaC",
    category: "DevOps",
    icon: "Terminal",
    intro: "Declarative infrastructure as code. Creating version-controlled, repeatable configurations to provision AWS subnets, EC2 nodes, and database clusters.",
    roadmap: ["HCL Language Syntax", "State Files & Backends", "Terraform Modules Design", "Plan & Apply Operations"],
    resources: ["Terraform Registry", "HCL Guides", "AWS Module Repos"],
    notes: "We maintain state configurations securely using remote S3 locks and DynamoDB checkpoints to prevent setup conflicts.",
    faq: [{ q: "Why use Terraform over AWS Console?", a: "It provides version-controlled configurations, visual dependency tracking, and repeatable infrastructure states." }]
  },
  "github-actions": {
    title: "GitHub Actions CI/CD Pipeline Automation | Ajit Dev",
    desc: "Review CI/CD workflow automation. Writing YAML manifests for static bundle compilation, unit checks, and Docker registry builds.",
    h1: "GitHub Actions CI/CD",
    category: "DevOps",
    icon: "Terminal",
    intro: "Continuous integration and delivery configurations. Automating code tests, typescript compiler checks, code packaging, and cloud node deployments directly from code updates.",
    roadmap: ["Workflow Yaml Syntax", "Actions Runner Environments", "Matrix Builds & Variables", "Secrets & Deployment Keys"],
    resources: ["GitHub Actions Docs", "Docker Actions Marketplace", "Security Auditing Pipelines"],
    notes: "We secure continuous workflows by loading target secrets, managing access tokens, and implementing static code scanning checkpoints.",
    faq: [{ q: "What is a workflow trigger?", a: "An event (e.g. push to main, pull request) that starts the execution of an automated pipeline." }]
  },
  "ci-cd": {
    title: "Continuous Integration & Delivery Pipelines | Ajit Dev",
    desc: "Discover CI/CD pipelines logic. Deploying packages, static analyzers, and zero-downtime server updates.",
    h1: "Continuous Delivery",
    category: "DevOps",
    icon: "Terminal",
    intro: "Automating application updates from coding environments to active servers. Eliminating manual deployment checklists and code compile errors.",
    roadmap: ["Commit Hook Automation", "Unit & Lint Testing", "Container Registries Build", "Rolling Server Deploys"],
    resources: ["CI/CD Best Practices", "Trivy Scanner Docs", "AWS Deploy Rules"],
    notes: "We construct pipelines checking lint rules, SAST syntax patterns, and SCA dependencies before pushing containers to AWS nodes.",
    faq: [{ q: "What is zero-downtime deployment?", a: "Updating servers without dropping client connections, often by utilizing rolling updates or blue-green route switches." }]
  },
  "devops": {
    title: "DevOps Operations & Pipelines | Ajit Dev Portfolio",
    desc: "Review DevOps engineering layouts. Configuring CI/CD pipelines, container runtime orchestration, Nginx reverse proxy routes, and Linux server hardening.",
    h1: "DevOps Operations",
    category: "DevOps",
    icon: "Terminal",
    intro: "Unifying software development and system operations. Developing automated infrastructure templates, continuous testing, container packages, and cluster scaling controls.",
    roadmap: ["Version Control (Git)", "Containerization (Docker)", "Infrastructure Code (Terraform)", "Orchestrations (Kubernetes)"],
    resources: ["DevOps Roadmaps", "Interactive Bash Scripts", "Infrastructure Guides"],
    notes: "We configure pipelines ensuring code maps correctly to packages and servers execute with minimal downtime parameters.",
    faq: [{ q: "What is shift-left security?", a: "Integrating automated vulnerability scans early in the developer coding cycle, before code reaches staging databases." }]
  },
  "devsecops": {
    title: "DevSecOps Security Hardened Pipelines | Ajit Dev Portfolio",
    desc: "Explore DevSecOps practices by Ajit Dev. Shifting security left, configuring SAST static scanners (Trivy, Snyk), and container build auditing.",
    h1: "DevSecOps Hardening",
    category: "Security",
    icon: "Shield",
    intro: "Securing continuous delivery pipelines by integrating automated security scans (SAST, DAST, dependency checks) directly inside the delivery loop.",
    roadmap: ["Vulnerability Auditing Basics", "Static Analysis (SAST) Setup", "Dependency Scans (SCA)", "Container Audits (Trivy)"],
    resources: ["OWASP Top 10 Guides", "Snyk Scanner APIs", "Trivy Checklists"],
    notes: "We enforce rules blocking pull requests if any dependency displays known CVE reports, resolving security flaws early.",
    faq: [{ q: "What is SAST vs DAST?", a: "SAST scans source code patterns for syntax issues, while DAST queries running APIs to find runtime security holes." }]
  },
  "cloud-security": {
    title: "Cloud Security & Access Control Hardening | Ajit Dev",
    desc: "Review cloud security practices by Ajit Dev. Multi-layer VPC subnets, AWS IAM access credentials, and network encryption parameters.",
    h1: "Cloud Security Engineering",
    category: "Security",
    icon: "Shield",
    intro: "Protecting cloud infrastructure. Designing isolated VPC subnets, access boundary rules, TLS routes, and cloud resource auditing.",
    roadmap: ["Cloud Security Basics", "VPC Network Isolation", "IAM Policies & Roles", "Threat Logging & Audits"],
    resources: ["AWS Security Whitepapers", "Terraform Security Analyzers", "CIS Benchmarks"],
    notes: "We implement least-privilege configurations, ensuring API keys have minimal access parameters, and logging network request cycles.",
    faq: [{ q: "What is zero-trust cloud network?", a: "An infrastructure design where all resource queries require explicit identity verification, ignoring internal locations." }]
  },
  "cyber-security": {
    title: "Cybersecurity & OWASP App Hardening | Ajit Dev",
    desc: "Explore application security auditing. Defending Express backends against OWASP Top 10 vulnerabilities, encrypting tokens, and securing API limits.",
    h1: "Application Cybersecurity",
    category: "Security",
    icon: "Shield",
    intro: "Auditing application code to prevent data leaks, SQL injections, authorization bypasses, and insecure communications.",
    roadmap: ["OWASP Top 10 Risks", "Data Encryption Standards", "Secure Auth Systems", "API Limit Hardening"],
    resources: ["OWASP Cheat Sheets", "Helmet Middleware API", "CORS Routing Rules"],
    notes: "We configure backends utilizing express rate limiters, helmet header tags, JWT token sign keys, and sanitized SQL parameters.",
    faq: [{ q: "What is an OWASP injection flaw?", a: "A weakness where user input is executed directly as backend commands (e.g. SQL commands), compromising data tables." }]
  },
  "system-design": {
    title: "System Design & Scalable Architectures | Ajit Dev",
    desc: "Discover system design patterns by Ajit Dev. Sharding databases, REST controllers, API gateways, load balancing, and rate limiting algorithms.",
    h1: "System Design Patterns",
    category: "System Design",
    icon: "Cpu",
    intro: "Designing high-availability distributed systems. Scaling compute nodes, partitioning database tables, routing traffic, and handling database caching.",
    roadmap: ["Scalability Basics", "Caching Layer Design", "Database Sharding Rules", "API Gateways & Queues"],
    resources: ["Designing Data-Intensive Apps Book", "System Design Primer Repo", "High Scalability Blog"],
    notes: "We analyze distributed designs by weighing consistency, availability, and network split states (CAP Theorem).",
    faq: [{ q: "What is microservices architecture?", a: "A system design pattern where backends are split into decoupled API components communicating via RPC/REST." }]
  },
  "hld": {
    title: "High Level Design (HLD) Distributed Systems | Ajit Dev",
    desc: "Review High Level Design (HLD) patterns. Load balancer placements, microservices mapping, caching layouts, and message queues configurations.",
    h1: "High Level Design (HLD)",
    category: "System Design",
    icon: "Cpu",
    intro: "High level software architecture planning. Constructing network diagrams, server nodes, cache placements, databases, and message brokers.",
    roadmap: ["High Level Architecture Basics", "Load Balancing Topologies", "Data Replication Models", "Message Broker Placements"],
    resources: ["Distributed Systems Guides", "AWS Architectural Patterns", "Message Queuing Protocols"],
    notes: "We build network designs emphasizing decoupling, redundancy, and eliminating single points of failures.",
    faq: [{ q: "What is a message queue useful for?", a: "Managing asynchronous communications, allowing backends to process compute tasks without locking user requests." }]
  },
  "lld": {
    title: "Low Level Design (LLD) Design Patterns | Ajit Dev",
    desc: "Learn Low Level Design (LLD) parameters. UML class structures, OOP design patterns (Factory, Singleton), and SOLID rules.",
    h1: "Low Level Design (LLD)",
    category: "System Design",
    icon: "Code",
    intro: "Detailed code design structures. Mapping UML classes, SOLID interface patterns, thread safeties, and data models schemas.",
    roadmap: ["SOLID Coding Principles", "Creational Design Patterns", "Structural Design Patterns", "Behavioral Design Patterns"],
    resources: ["Design Patterns Book", "Refactoring Guru", "Clean Code Guides"],
    notes: "We write modular code complying with SOLID principles to keep software extensible and easily testable.",
    faq: [{ q: "What is the SOLID S rule?", a: "Single Responsibility Principle: A class or function must have exactly one reason to change, handling one clear task." }]
  },
  "dsa": {
    title: "Data Structures & Algorithms (DSA) Roadmap | Ajit Dev",
    desc: "Learn about Ajit Dev's algorithm engineering guidelines. Time complexity analysis, graph traversals, dynamic programming, and data arrays implementations.",
    h1: "Data Structures & Algorithms",
    category: "Algorithms",
    icon: "BookOpen",
    intro: "Core programming structures and logical problem solving, optimizing compute operations and memory profiles for algorithmic speed.",
    roadmap: ["Time & Space Complexity", "Linear Arrays & Strings", "Binary Search Trees & Graphs", "Dynamic Programming & Greedy"],
    resources: ["LeetCode Problems Map", "NeetCode DSA Roadmap", "Introduction to Algorithms Book"],
    notes: "We write algorithmic solutions in C++ using optimal data choices to maximize compilation execution speeds.",
    faq: [{ q: "What is C++ STL?", a: "Standard Template Library, offering ready-to-use array lists, trees, sets, queues, and search functions." }]
  },
  "leetcode": {
    title: "LeetCode DSA Statistics & Metrics | Ajit Dev",
    desc: "Review Ajit Dev's LeetCode coding stats. Solved 430+ problems, algorithm complexity optimizations, tree/graph structures, and competitive contest ratings.",
    h1: "LeetCode DSA Metrics",
    category: "Algorithms",
    icon: "Activity",
    intro: "Problem-solving metrics dashboard showing algorithm solutions, complexity configurations, and visual progress trackers.",
    roadmap: ["Array Complexity Checks", "Dynamic Stack Traversal", "Graph Depth Search", "Dynamic Programming Memoization"],
    resources: ["LeetCode Profile link", "Algorithms Code Library", "Contest Rating Trackers"],
    notes: "We track problem solving daily to train memory optimization and fast algorithm coding.",
    faq: [{ q: "What is Ajit Dev's LeetCode handle?", a: "His public LeetCode handle is ajitdev01, showing 430+ solved problems." }]
  }
};

// Auto-run route generation logic in Next.js server context conditionally
function runServerSideSetup() {
  const arraysKeyFile = path.join(process.cwd(), "app", "dsa", "arrays", "page.tsx");
  if (fs.existsSync(arraysKeyFile)) {
    // Already setup, skip to keep performance high
    return;
  }

  console.log("Auto-running Dynamic Portfolio Setup directly in Server thread...");
  try {
    // Inlined Generation Logic
    Object.entries(PAGES_CONFIG).forEach(([slug, info]) => {
      const dirPath = path.join(process.cwd(), "app", slug);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      const relativeUrl = `https://ajitdev.com/${slug}`;
      const pageContent = `import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ${info.icon === "Cpu" ? "Cpu" : info.icon === "Database" ? "Database" : info.icon === "Shield" ? "Shield" : info.icon === "Layers" ? "Layers" : info.icon === "Activity" ? "Activity" : info.icon === "FileText" ? "FileText" : info.icon === "Server" ? "Server" : "BookOpen"} } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "${info.title}",
  description: "${info.desc}",
  alternates: {
    canonical: "${relativeUrl}",
  },
};

export default function ${slug.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("")}Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "${relativeUrl}/#breadcrumb",
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
        "item": "${relativeUrl}",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${info.faq.map((f: any) => `{
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
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50">
                ${info.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              ${info.h1}
            </h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              ${info.intro}
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Topical Roadmap & Milestones</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
              ${info.roadmap.map((r: any) => `<li>${r}</li>`).join("\n              ")}
            </ul>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Notes & Implementation Guidelines</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              ${info.notes || "We construct custom configurations, deploy container images, and write prepared schemas."}
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Recommended Learning Resources</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              ${(info.resources || ["Official Manuals", "GitHub Templates", "Cheat Sheets"]).map((r: any) => `<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-xs font-medium text-gray-500">${r}</span>`).join("\n              ")}
            </div>
          </div>

          {/* Related Links */}
          <div className="bg-indigo-50 border border-indigo-100/85 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-indigo-900 mb-3">Related Subpages & Showcases</h3>
            <div className="flex flex-wrap gap-3">
              ${(info.related || [
          { name: "DevOps Operations", url: "/devops" },
          { name: "AWS Cloud Setup", url: "/aws" },
          { name: "Docker Containerization", url: "/docker" },
          { name: "System Design Patterns", url: "/system-design" }
        ]).map((lnk: any) => `<Link href="${lnk.url}" className="px-3 py-2 bg-white hover:bg-indigo-600 hover:text-white border border-indigo-100 rounded-xl text-xs font-semibold text-indigo-600 transition-colors shadow-sm">${lnk.name}</Link>`).join("\n              ")}
            </div>
          </div>

          {/* Contextual internal linking */}
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
              <Link href="/about" className="hover:text-indigo-600 transition-colors">About Ajit Dev</Link>
              <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Me</Link>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
`;

      fs.writeFileSync(path.join(dirPath, "page.tsx"), pageContent, "utf8");
    });

    // Generate Nested pages
    const DSA_NESTED = [
      { key: "arrays", name: "Arrays Data Structure", desc: "Contiguous memory lists, sliding windows, and pointer operations." },
      { key: "strings", name: "Strings Manipulation", desc: "Pattern matching algorithms, rolling hashes, and subsegment parsing." },
      { key: "hashing", name: "Hashing & Hash Tables", desc: "Key-value indexes, resolving collisions, and custom bucket hashes." },
      { key: "linked-list", name: "Linked Lists Nodes", desc: "Singly, doubly, and circular linked chains, loops detection, and node reversals." },
      { key: "stack", name: "Stack Data Structures", desc: "LIFO queue memory arrays, matching brackets, and monotonic layouts." },
      { key: "queue", name: "Queue Data Structures", desc: "FIFO buffers, priority queues, and double-ended queues." },
      { key: "binary-search", name: "Binary Search Algorithms", desc: "Logarithmic ranges search, sorting checkpoints, and search boundaries." },
      { key: "trees", name: "Tree Data Structures", desc: "Hierarchical parent-child node maps, traversing structures, and paths mapping." },
      { key: "bst", name: "Binary Search Trees (BST)", desc: "Ordered tree nodes, balance conditions, AVL models, and node operations." },
      { key: "heap", name: "Heap & Priority Queues", desc: "Min/Max binary heaps, bubble operations, and top-K elements extraction." },
      { key: "graph", name: "Graph Data Structures", desc: "Nodes connected by edges, DFS/BFS traversals, path routing algorithms." },
      { key: "backtracking", name: "Backtracking Algorithms", desc: "Recursive path finding, state restorations, and solving puzzles." },
      { key: "greedy", name: "Greedy Algorithms", desc: "Optimal localized decisions, minimizing paths, and coin change solutions." },
      { key: "dynamic-programming", name: "Dynamic Programming (DP)", desc: "Subproblem dependencies, tabulating states, and memory memoization." }
    ];

    const SD_NESTED = [
      { key: "load-balancer", name: "Load Balancing Servers", desc: "Distributing requests across compute nodes using Round Robin and hash methods." },
      { key: "cache", name: "Caching Tier Designs", desc: "Speeding up API reads using Redis memory tables, eviction rules, and write policies." },
      { key: "database-scaling", name: "Database Scaling Patterns", desc: "Relational replicas, write sharding rules, and indexing large data sets." },
      { key: "microservices", name: "Microservices Architecture", desc: "Decoupled domain backends communicating via REST, WebSockets, and RPC." },
      { key: "message-queues", name: "Message Queues & Brokers", desc: "Handling async background tasks using RabbitMQ or Kafka log brokers." },
      { key: "cdn", name: "Content Delivery Networks (CDN)", desc: "Caching static media assets close to clients using global edge nodes." },
      { key: "design-whatsapp", name: "Designing WhatsApp Messaging System", desc: "Real-time socket servers, storing chat records, and message queues." },
      { key: "design-youtube", name: "Designing YouTube Video Platform", desc: "Uploading files, processing formats, CDN distribution, and metadata databases." },
      { key: "design-netflix", name: "Designing Netflix Video Streaming", desc: "Processing file formats, content delivery networks, and dashboard databases." },
      { key: "design-uber", name: "Designing Uber Ride Sharing", desc: "Geospatial queries, matching drivers, and processing real-time location logs." }
    ];

    const DEVOPS_NESTED = [
      { key: "docker", name: "Docker Containerization", desc: "Multi-stage compile pipelines, minimal image sizes, and Docker Compose configurations." },
      { key: "kubernetes", name: "Kubernetes Cluster Pods", desc: "Configuring replica sets, ingress DNS routes, and pod scheduling manifests." },
      { key: "terraform", name: "Terraform Infrastructure", desc: "Declarative AWS networks, VPC configs, and version-controlled states." },
      { key: "github-actions", name: "GitHub Actions Pipelines", desc: "YAML continuous integration rules, testing scripts, and automated deployments." },
      { key: "cicd", name: "Continuous Integration & Delivery", desc: "Automating pipelines, running tests, and zero-downtime rollouts." },
      { key: "aws", name: "AWS Cloud Operations", desc: "EC2 provisioning, VPC subnets configurations, and IAM security controls." },
      { key: "linux", name: "Linux System Hardening", desc: "Bash command scripting, auditing server ports, and configuring Nginx endpoints." }
    ];

    const CASE_NESTED = [
      { key: "portfolio", name: "Developer Portfolio Implementation Study", desc: "Optimizing Next.js bundle footprint, static schemas generation, and RSS XML feeds." },
      { key: "qr-menu-saas", name: "QR Menu SaaS Dashboard Case Study", desc: "High-performance menus serving restaurant visitors using MongoDB aggregates." },
      { key: "weather-app", name: "Weather Tracker API Case Study", desc: "Caching external weather details using Redis tables to reduce API latencies." },
      { key: "library-management-system", name: "Library Catalog Database Study", desc: "Relational database configurations handling concurrent book booking operations." }
    ];

    const getNestedPageHtml = (hKey: string, cKey: string, cTitle: string, cDesc: string) => {
      if (hKey === "dsa") {
        return `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Algorithmic Study Guide & Progress</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          I solve problems in C++ daily. Under my public LeetCode handle <strong>ajitdev01</strong>, I have resolved 430+ challenges.
          Here is my learning journal and notes on <strong>\${cTitle}</strong>:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">Complexity & Performance</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              We analyze the best, average, and worst-case time complexity, optimizing algorithms to run within strict constraints.
            </p>
          </div>
          <div className="p-5 border border-gray-100 rounded-xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">LeetCode Optimization Rules</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Utilize sliding windows, fast pointer lookups, and heap-based maps to avoid memory limits and exceed speed targets.
            </p>
          </div>
        </div>
        <div className="p-5 border border-indigo-100 rounded-xl bg-indigo-50/50">
          <span className="text-indigo-950 font-bold text-sm block mb-1">Interactive Progress Tracker</span>
          <p className="text-indigo-900 text-xs leading-relaxed">
            Status: <span className="font-semibold text-emerald-600">Completed (30+ Problems Solved)</span>. Verified on LeetCode.
          </p>
        </div>
      </div>
    `;
      }
      if (hKey === "system-design") {
        return `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">High & Low Level Architecture Analysis</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Detailed notes, trade-offs, and scaling guidelines for <strong>\${cTitle}</strong> systems.
        </p>
        
        <div className="border border-gray-200 rounded-xl p-6 bg-slate-900 font-mono text-xs text-indigo-400 mb-8 leading-relaxed">
          <div className="text-center border-b border-gray-800 pb-3 mb-3 text-white font-bold">
            ARCHITECTURE FLOW DIAGRAM
          </div>
          [User Client Browser] <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ (HTTPS traffic via DNS Route53)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br />
          [Load Balancer Engine] <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ (Distributing workload across API nodes)<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──► [Server Node A] ──► [Redis Cache (Fast Reads)]<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──► [Server Node B] ──► [MongoDB / MySQL Database (Primary)]
        </div>

        <div className="space-y-4">
          <div className="p-4 border-l-4 border-indigo-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">High Level Design (HLD)</h3>
            <p className="text-gray-500 text-xs mt-1">Decoupled systems using load balancers, caching partitions, and queue models to process messages asynchronously.</p>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">Low Level Design (LLD) & Patterns</h3>
            <p className="text-gray-500 text-xs mt-1">Structured class objects adhering to SOLID rules, deploying Creational (Factory, Singleton) patterns to isolate database calls.</p>
          </div>
          <div className="p-4 border-l-4 border-pink-500 bg-gray-50 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-sm">System Trade-offs</h3>
            <p className="text-gray-500 text-xs mt-1">We balance read latency against write synchronization rules according to the CAP Theorem constraints.</p>
          </div>
        </div>
      </div>
    `;
      }
      if (hKey === "devops") {
        return `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuous Integration & Infrastructure Notes</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Deployment guides, build commands, and script templates for <strong>\${cTitle}</strong> operations.
        </p>

        <div className="bg-slate-900 border border-gray-800 rounded-xl p-5 mb-8 font-mono text-xs text-emerald-400">
          <span className="text-gray-500 block mb-2"># CLI Cheat Sheet commands for \${cTitle}</span>
          $ npm run build <br />
          $ docker build -t ajitdev-app:latest . <br />
          $ kubectl apply -f deployment.yaml <br />
          $ terraform plan -out=tfplan
        </div>

        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 mb-6">
          <li><strong>CI/CD Pipelines</strong>: Automating static checks, linting rules, and compilation tasks.</li>
          <li><strong>Deployment Strategy</strong>: Configuring zero-downtime rolling container updates.</li>
          <li><strong>Real Projects</strong>: Active templates published under the ajitdev01 GitHub profile.</li>
        </ul>
      </div>
    `;
      }
      return `
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">Project Implementation Architecture Post-Mortem</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Review the engineering steps, security checkpoints, and database choices deployed for <strong>\${cTitle}</strong>.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">1. Problem & Business Goal</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Analyzing concurrent client request loads, database queries latencies, and designing layouts optimized for high conversion rates.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">2. Solution & Architecture</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We developed a decoupled Next.js frontend with isolated Node.js API controllers, routing data queries dynamically.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">3. Database Design & Security Considerations</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Created indexes on database keys, implemented Prepared Statements, secured Express CORS rules, and deployed JWT tokens inside HTTP-only cookies.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">4. CI/CD & Deployment Strategy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Configured GitHub Actions pipelines to run SAST security tests, compile react assets, and push Docker containers to cloud hosts.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2">5. Performance Optimization & Lessons Learned</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leveraged Redis caching partitions and dynamic image optimizations to yield high Lighthouse scores, learning to evaluate database indices early.
            </p>
          </div>
        </div>
      </div>
    `;
    };

    const nestedHubs = [
      { key: "dsa", list: DSA_NESTED, title: "DSA", category: "Algorithms & Logic" },
      { key: "system-design", list: SD_NESTED, title: "System Design", category: "System Architecture" },
      { key: "devops", list: DEVOPS_NESTED, title: "DevOps", category: "Continuous Operations" },
      { key: "case-studies", list: CASE_NESTED, title: "Case Studies", category: "System Post-Mortems" }
    ];

    nestedHubs.forEach((hub) => {
      hub.list.forEach((child) => {
        const dirPath = path.join(process.cwd(), "app", hub.key, child.key);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }

        const relativeUrl = `https://ajitdev.com/${hub.key}/${child.key}`;
        const contentHtml = getNestedPageHtml(hub.key, child.key, child.name, child.desc);

        const pageContent = `import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";

export const metadata: Metadata = {
  title: "${child.name} Study Notes & scaling | Ajit Dev",
  description: "${child.desc} Master class implementation notes, tradeoffs analysis, and scaling parameters in ${hub.title}.",
  alternates: {
    canonical: "${relativeUrl}",
  },
};

export default function ${hub.key.replace("-", "")}${child.key.split("-").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join("")}Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "${relativeUrl}/#breadcrumb",
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
        "name": "${hub.title}",
        "item": "https://ajitdev.com/${hub.key}",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${child.key.split("-").join(" ")}",
        "item": "${relativeUrl}",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is covered under this ${child.name} guide?",
        "answer": {
          "@type": "Answer",
          "text": "This guide covers implementation guidelines, common trade-offs, scalability checkpoints, and clean code configurations for ${child.name}."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a repository mapping for this guide?",
        "answer": {
          "@type": "Answer",
          "text": "Yes, public code scripts and configurations are shared on the ajitdev01 GitHub handle."
        }
      }
    ]
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />
      <JSONLD schema={faqSchema} />

      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/${hub.key}"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to ${hub.title} Hub
          </Link>

          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50/50 px-3 py-1 rounded-full border border-indigo-100/50">
                ${hub.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              ${child.name}
            </h1>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              ${child.desc}
            </p>
          </div>

          ${contentHtml}

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
              <Link href="/about" className="hover:text-indigo-600 transition-colors">About Ajit Dev</Link>
              <Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact Me</Link>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
`;

        fs.writeFileSync(path.join(dirPath, "page.tsx"), pageContent, "utf8");
      });
    });

    console.log("Successfully ran Server Side Dynamic Setup!");
  } catch (err) {
    console.error("Failed executing inline Dynamic Setup:", err);
  }
}

export function ensureMetadataFile() {
  if (fs.existsSync(metadataFile)) {
    return;
  }
  const contentDir = path.dirname(metadataFile);
  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }
  const articles: any[] = [];
  CATEGORIES.forEach((cat) => {
    for (let i = 1; i <= 100; i++) {
      const padded = String(i).padStart(3, "0");
      const slug = `${cat.key}-tutorial-${padded}`;
      const date = new Date(2026, 0, 1 + i % 30).toISOString().split("T")[0];

      const titleOptions = [
        `Mastering ${cat.name} — Core Concepts & Best Practices Part ${i}`,
        `Advanced ${cat.name} and Scalable Architectures Tutorial ${i}`,
        `${cat.name} Guide: Implementation details and troubleshooting ${i}`,
        `High-Performance ${cat.name} Deployments & Security Hardening ${i}`,
        `Step-by-Step ${cat.name} Real-World Projects Setup Guide ${i}`
      ];
      const descOptions = [
        `Learn how to construct highly scalable, production-grade applications using ${cat.name}. This is guide number ${i} of our topical authority series.`,
        `Deep-dive tutorial on optimizing and securing your ${cat.name} workloads. We analyze tradeoffs, network topologies, and debugging strategies.`,
        `Understand common pitfalls and design patterns in ${cat.name}. Complete code repositories, configuration files, and architecture schemas included.`,
        `Explore how Ajit Dev builds and automates systems using ${cat.name} for enterprise workloads. Includes security checkpoints and CI/CD rules.`,
        `Accelerate your engineering workflow with this masterclass on ${cat.name}. We go from linear setups to complex distributed operations.`
      ];

      const title = titleOptions[i % titleOptions.length];
      const description = descOptions[i % descOptions.length];

      articles.push({
        slug,
        title,
        description,
        date,
        category: cat.key,
        tags: [cat.name, ...cat.tags.slice(1, 4), `Level-${i % 3 === 0 ? "Hard" : i % 2 === 0 ? "Medium" : "Easy"}`],
        readingTime: `${5 + (i % 8)} min read`,
        faq: [
          {
            question: `What is the focus of this ${cat.name} article?`,
            answer: `This article details best practices, implementation guides, and security hardening procedures for ${cat.name}.`
          },
          {
            question: `Is the source code for this ${cat.name} setup available?`,
            answer: `Yes, public code examples and starter boilerplates are available under the ajitdev01 GitHub profile.`
          }
        ]
      });
    }
  });

  fs.writeFileSync(metadataFile, JSON.stringify(articles, null, 2), "utf8");
  console.log("Successfully inline generated content/posts-metadata.json with 1,200 posts!");
}

// Invoke the setup
runServerSideSetup();

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));

  // Also include the 1,200 metadata slugs
  ensureMetadataFile();
  let metadataSlugs: string[] = [];
  try {
    const metaData = JSON.parse(fs.readFileSync(metadataFile, "utf8"));
    metadataSlugs = metaData.map((post: any) => `${post.slug}.mdx`);
  } catch (e) {
    console.error("Error loading sitemap/post slugs:", e);
  }

  // Deduplicate using a Set
  return Array.from(new Set([...files, ...metadataSlugs]));
}

export function getPostBySlug(slug: string): BlogPost {
  ensureMetadataFile();
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  // 1. If physical MDX file exists, prioritize it
  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const rtResult = readingTime(content);
    return {
      slug: realSlug,
      title: data.title || "Untitled Post",
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      category: data.category || "General",
      tags: data.tags || [],
      readingTime: rtResult.text,
      content,
      faq: data.faq || [],
      isPlaceholder: false,
    };
  }

  // 2. Otherwise search in JSON metadata file
  try {
    const metaData = JSON.parse(fs.readFileSync(metadataFile, "utf8"));
    const matched = metaData.find((p: any) => p.slug.toLowerCase() === realSlug.toLowerCase());
    if (matched) {
      // Return a dynamically generated placeholder content using clean markdown
      const prettyCategory = CATEGORIES.find(c => c.key === matched.category)?.name || matched.category;
      const genericContent = `
## Introduction

Welcome to this specialized technical tutorial on **${prettyCategory}**. In this article, we deep-dive into standard guidelines, system architectures, and security configurations relevant to building robust applications.

As a **Full Stack Developer** and **DevOps Engineer** based in **Katihar, Bihar, India**, I frequently deploy scalable systems. Under my professional handle **ajitdev01** (GitHub / LeetCode), I practice shifting security left (DevSecOps) and implementing optimal algorithms.

---

## Technical Overview & Roadmap

When working with **${prettyCategory}**, it is essential to follow a structured roadmap:
1. **Core Fundamentals**: Understanding the lifecycle, lifecycle managers, and initial configurations.
2. **Infrastructure integration**: Containerizing via Docker, orchestration in Kubernetes, or scripting commands in Linux.
3. **Security Audits**: Auditing API configurations, token expirations, and least-privilege AWS IAM policies.
4. **Monitoring & Performance**: Analyzing bottleneck metrics, load scaling tradeoffs, and optimizing bundle payload size.

\`\`\`javascript
// Example Configuration Boilerplate
const config = {
  name: "ajitdev-production-${matched.category}",
  version: "1.0.0",
  env: "production",
  security: {
    enableHelmet: true,
    rateLimitRequests: 100
  }
};
console.log("System Initialized Successfully:", config.name);
\`\`\`

---

## Implementation Details

Here are active checkpoints for developers setting up their deployments:

### VPC Subnet Configurations
Ensure your database runs inside private, isolated network tiers, with NAT Gateways handling outbound API connections:
* Public Web Subnet (Nginx routing traffic)
* Private Application Subnet (NodeJS API nodes running Express)
* Isolated Database Subnet (MongoDB tables with custom index rules)

### Continuous Delivery
Leverage GitHub Actions pipelines to compile static react bundles and scan container images for security warnings using static vulnerability software scans.

---

## Table of Contents
1. [Introduction](#introduction)
2. [Technical Overview & Roadmap](#technical-overview--roadmap)
3. [Implementation Details](#implementation-details)
4. [Learning Resources](#learning-resources)
5. [Frequently Asked Questions](#frequently-asked-questions)

---

## Learning Resources

*   **Official Documentation**: Explore official guidelines and specifications.
*   **Ajit Dev GitHub**: Download my custom templates and Dockerfiles from my [GitHub profile](https://github.com/ajitdev01).
*   **System Design Playbooks**: Read my high-level design (HLD) notes under \`/system-design\`.
*   **DSA Practice**: Track my daily 430+ problems solved on my [LeetCode profile](https://leetcode.com/ajitdev01).

---

## Summary Notes & Tradeoffs

Developing software requires making structural decisions. In ${prettyCategory}, we must always check memory utilization cycles against database indexing parameters to avoid performance bottlenecks. Keep your code modular and your infrastructure declarative.
      `;

      return {
        slug: matched.slug,
        title: matched.title,
        description: matched.description,
        date: matched.date,
        category: matched.category,
        tags: matched.tags,
        readingTime: matched.readingTime,
        content: genericContent,
        faq: matched.faq || [],
        isPlaceholder: true,
      };
    }
  } catch (e) {
    console.error("Error reading post metadata:", e);
  }

  throw new Error(`MDX file or metadata for slug '${realSlug}' not found.`);
}

export function getAllPosts(): BlogPost[] {
  ensureMetadataFile();

  // Load real posts from content/posts
  let realPosts: BlogPost[] = [];
  if (fs.existsSync(postsDirectory)) {
    const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
    realPosts = files.map((file) => getPostBySlug(file));
  }

  // Load placeholder posts from metadata database
  let metaPosts: BlogPost[] = [];
  try {
    const metaData = JSON.parse(fs.readFileSync(metadataFile, "utf8"));
    metaPosts = metaData.map((p: any) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      category: p.category,
      tags: p.tags,
      readingTime: p.readingTime,
      content: "",
      faq: p.faq || [],
      isPlaceholder: true,
    }));
  } catch (e) {
    console.error("Error reading all post metadata:", e);
  }

  // Merge, filtering out metaPosts that have same slug as a real post
  const mergedMap = new Map<string, BlogPost>();
  metaPosts.forEach((post) => mergedMap.set(post.slug, post));
  realPosts.forEach((post) => mergedMap.set(post.slug, post));

  return Array.from(mergedMap.values())
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}
