import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar, User, Shield } from "lucide-react";
import JSONLD from "@/app/components/JSONLD";
import { notFound } from "next/navigation";

// Define the static slugs for SSG
export async function generateStaticParams() {
  return [
    { slug: "how-docker-works" },
    { slug: "kubernetes-architecture" },
    { slug: "linux-internals" },
    { slug: "aws-iam-explained" },
    { slug: "zero-trust-security" },
    { slug: "authentication-vs-authorization" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = RESEARCH_DB[slug];
  if (!paper) return {};
  
  return {
    title: `${paper.title} | Ajit Dev Research`,
    description: paper.summary,
    alternates: {
      canonical: `https://ajitdev.com/research/${slug}`,
    },
  };
}

interface Section {
  heading: string;
  id: string;
  paragraphs: string[];
  codeBlock?: {
    lang: string;
    code: string;
  };
}

interface Paper {
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  sections: Section[];
}

const RESEARCH_DB: Record<string, Paper> = {
  "how-docker-works": {
    title: "How Docker Works: Under the Hood of Containerization",
    summary: "An in-depth look at Linux Namespaces, Control Groups (cgroups), and Union File Systems (OverlayFS) that make lightweight containerization possible without hypervisors.",
    category: "Virtualization",
    date: "June 2026",
    readTime: "8 min read",
    sections: [
      {
        heading: "1. Virtualization vs. Containerization",
        id: "virtualization-vs-containerization",
        paragraphs: [
          "Traditional Virtual Machines (VMs) run on a Hypervisor (like ESXi, Hyper-V, or KVM) and require a full Guest Operating System. This incurs massive overhead: slow startup times, large disk footprints, and significant memory consumption since each VM needs its own kernel, memory management, and system libraries.",
          "Docker containers, on the other hand, perform virtualization at the operating system level. They share the host kernel and isolate processes using built-in Linux kernel primitives. Because there is no guest kernel running, container processes start in milliseconds and run at near-native hardware speed."
        ]
      },
      {
        heading: "2. Isolation Primitives: Linux Namespaces",
        id: "linux-namespaces",
        paragraphs: [
          "Docker uses Namespaces to wrap resources into an isolated system view, preventing a container process from seeing or interacting with other host processes. The key namespaces are:",
          "- PID (Process ID): Isolates process tree. Inside the container, the primary process runs as PID 1, completely unaware of other processes on the host.",
          "- NET (Network): Provides isolated network interfaces, routing tables, and port spaces. Each container gets its own virtual ethernet interface (veth).",
          "- MNT (Mount): Isolates the filesystem mount points. The container processes only see the container filesystem, pivot_rooted to prevent path traversal.",
          "- IPC (Interprocess Communication): Restricts access to shared memory segments, semaphores, and message queues.",
          "- UTS (Unix Timesharing): Isolates hostname and domain name settings."
        ],
        codeBlock: {
          lang: "bash",
          code: "# Check namespaces associated with a process\nls -l /proc/$$/ns/\n# Spawn an isolated bash shell using namespaces directly\nunshare --fork --pid --mount-proc --net bash"
        }
      },
      {
        heading: "3. Resource Control: Linux Control Groups (Cgroups)",
        id: "linux-cgroups",
        paragraphs: [
          "While namespaces isolate what a process can *see*, Control Groups (cgroups) restrict what a process can *consume*. Cgroups prevent a single container from starving the host or other containers of resources.",
          "Cgroups control hardware resources like CPU shares and limits, physical memory boundaries (triggering OOM killer if exceeded), block I/O bandwidth, and process creation counts (preventing fork-bomb attacks)."
        ],
        codeBlock: {
          lang: "bash",
          code: "# Run docker with CPU and memory limits\ndocker run -d --name secure-app -m 512m --cpus 1.5 nginx"
        }
      },
      {
        heading: "4. The Storage Layer: Union File System (OverlayFS)",
        id: "union-file-system",
        paragraphs: [
          "Docker images are built as a stack of read-only layers. When a container runs, Docker attaches a thin, writable layer on top. This is achieved via Union File Systems, primarily OverlayFS (overlay2).",
          "OverlayFS overlays directories on a single host and presents them as a unified folder tree. The key layers are:",
          "- LowerDir: The read-only directories containing the base image libraries and binaries.",
          "- UpperDir: The writable directory capturing modifications (additions and updates) made inside the container.",
          "- MergedDir: The virtual directory visible inside the container representing the merged state of LowerDir and UpperDir.",
          "If a container process writes to a file from the LowerDir, OverlayFS copies the file to the UpperDir before executing edits. This is called Copy-on-Write (CoW), preserving the base image layer unchanged."
        ]
      }
    ]
  },
  "kubernetes-architecture": {
    title: "Kubernetes Architecture: Orchestrating Clusters at Scale",
    summary: "Analyzing the internal control loop mechanics of the Kubernetes control plane, worker node daemons, and CNI networking structures.",
    category: "Distributed Systems",
    date: "June 2026",
    readTime: "10 min read",
    sections: [
      {
        heading: "1. Control Plane vs. Worker Nodes",
        id: "control-plane-vs-worker-nodes",
        paragraphs: [
          "A Kubernetes cluster consists of two main layers: the Control Plane, which coordinates cluster state and schedules containers, and the Worker Nodes, which host the running containers.",
          "The Control Plane makes global decisions about the cluster (such as scheduling pods), detects cluster events, and responds to updates (like spinning up replicas when scale conditions are met)."
        ]
      },
      {
        heading: "2. Control Plane Components",
        id: "control-plane-components",
        paragraphs: [
          "The Control Plane runs several critical processes:",
          "- kube-apiserver: The entrypoint of the cluster, exposing a REST API. All internal components and clients communicate exclusively through it.",
          "- etcd: A highly available, distributed key-value database that stores the authoritative configuration and state of the cluster, utilizing the Raft consensus protocol.",
          "- kube-scheduler: Matches newly created pods to optimal worker nodes by applying filters (checking memory, CPU, port availability) and scores (ranking node fitness).",
          "- kube-controller-manager: Runs controller reconciliation loops (Node Controller, Replica Controller) that match current cluster states to desired states."
        ],
        codeBlock: {
          lang: "yaml",
          code: "# Pod definition manifest\napiVersion: v1\nkind: Pod\nmetadata:\n  name: secure-web\n  labels:\n    app: production\nspec:\n  containers:\n  - name: web\n    image: nginx:alpine\n    resources:\n      limits:\n        memory: \"256Mi\"\n        cpu: \"500m\""
        }
      },
      {
        heading: "3. Worker Node Daemons",
        id: "worker-node-daemons",
        paragraphs: [
          "Worker nodes run daemons that monitor the host and execute containers:",
          "- kubelet: An agent that listens for instructions from the api-server. It ensures the container runtime spawns containers exactly matching PodSpecs.",
          "- Container Runtime: The engine (like containerd or CRI-O) that manages the lifecycle of container sandboxes.",
          "- kube-proxy: Manages virtual IP routing on each node by setting up iptables or IPVS netfilter rules, routing client requests dynamically to pod targets."
        ]
      },
      {
        heading: "4. Network Interconnection & CNIs",
        id: "kubernetes-networking",
        paragraphs: [
          "Kubernetes requires that every pod gets a unique cluster-wide IP address, and pods must communicate with each other across nodes without NAT. This flat networking model is provisioned by Container Network Interface (CNI) plugins like Calico, Flannel, or Cilium.",
          "Advanced CNIs like Cilium leverage eBPF inside the Linux kernel to bypass traditional iptables checks, optimizing packet routing speed and enforcing security policies directly inside kernel network sockets."
        ]
      }
    ]
  },
  "linux-internals": {
    title: "Linux Internals: Kernel Primitives & Process Lifecycles",
    summary: "Understanding user space vs kernel space transitions, virtual memory mapping, schedulers, and process system calls.",
    category: "Operating Systems",
    date: "May 2026",
    readTime: "9 min read",
    sections: [
      {
        heading: "1. CPU Rings & Space Isolation",
        id: "space-isolation",
        paragraphs: [
          "Modern CPU architectures enforce privilege layers using execution modes called Rings. Ring 0 represents Kernel Space, where the OS kernel has absolute access to memory and raw hardware controllers.",
          "Ring 3 is User Space, where standard software applications run. This isolation prevents application crashes or malware from destroying system memory tables or hardware registers."
        ]
      },
      {
        heading: "2. System Calls (Syscalls)",
        id: "system-calls",
        paragraphs: [
          "When a User Space program needs to write to disk, send network data, or allocate memory, it cannot perform these operations directly. Instead, it must invoke a System Call (Syscall) to request the kernel to do the work on its behalf.",
          "Executing a syscall triggers a CPU software interrupt (e.g. `sysenter` or `syscall` assembly instructions), pausing the user thread, switching the CPU to Ring 0, executing kernel instructions, and returning control to user code."
        ],
        codeBlock: {
          lang: "c",
          code: "// Invoking system calls in C\n#include <unistd.h>\n#include <sys/syscall.h>\n\nint main() {\n    // Invoke direct write syscall (1 = stdout)\n    syscall(SYS_write, 1, \"Hello Linux!\\n\", 13);\n    return 0;\n}"
        }
      },
      {
        heading: "3. Process Management & Fork/Exec",
        id: "process-management",
        paragraphs: [
          "In Linux, all processes are arranged in a strict tree hierarchy root-pointed by the `systemd` daemon (PID 1).",
          "Creating a new process involves two syscall operations:",
          "- fork(): Clones the calling process, copying file descriptors and page mappings (using copy-on-write page sharing).",
          "- execve(): Replaces the cloned process's memory space and registers with a new executable binary, starting execution at its entry point.",
          "If a child process finishes executing but the parent fails to read its exit code via wait(), the child becomes a 'Zombie' process, holding a slot in the kernel PID table."
        ]
      },
      {
        heading: "4. Virtual Memory & Page Tables",
        id: "virtual-memory",
        paragraphs: [
          "Processes do not see physical RAM addresses. Instead, the OS maps each process into a virtual address space. The CPU's Memory Management Unit (MMU) uses Page Tables to translate virtual addresses to physical RAM slots.",
          "This isolation protects processes from reading or writing into other processes' memory. If a process attempts to query memory outside its mapped virtual pages, the MMU triggers a Page Fault, resulting in a Segmentation Fault (SIGSEGV) crash."
        ]
      }
    ]
  },
  "aws-iam-explained": {
    title: "AWS IAM Policy Evaluation Logic & Access Controls",
    summary: "Deep-diving into IAM policy structures, trust relationships, STS temporary security tokens, and the evaluation engine logic.",
    category: "Cloud Security",
    date: "May 2026",
    readTime: "7 min read",
    sections: [
      {
        heading: "1. IAM Principals & Authentications",
        id: "iam-principals",
        paragraphs: [
          "AWS IAM (Identity and Access Management) controls access to AWS resources. Principals are entities that can make requests: root users, IAM users, federated federations, or assumed IAM Roles.",
          "When a principal makes an API request (like listing S3 buckets), AWS authenticates the request using access keys or STS session tokens, checking signature credentials before starting policy evaluations."
        ]
      },
      {
        heading: "2. The Policy Evaluation Hierarchy",
        id: "policy-evaluation-logic",
        paragraphs: [
          "AWS IAM evaluates all policies associated with a request context. The evaluation engine applies a strict hierarchy:",
          "1. Explicit Deny: If any policy matches the request with an explicit `Deny` statement, the evaluation halts immediately, denying access. Deny always wins.",
          "2. Organizations SCPs: Service Control Policies enforce boundaries on member accounts.",
          "3. Permissions Boundaries: Restricts maximum access permissions.",
          "4. Explicit Allow: The request must match an explicit `Allow` statement in an identity-based or resource-based policy to proceed.",
          "5. Implicit Deny: If there is no explicit `Allow`, the request is denied by default."
        ],
        codeBlock: {
          lang: "json",
          code: "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\"s3:GetObject\", \"s3:ListBucket\"],\n      \"Resource\": [\n        \"arn:aws:s3:::production-vault\",\n        \"arn:aws:s3:::production-vault/*\"\n      ],\n      \"Condition\": {\n        \"Bool\": {\n          \"aws:SecureTransport\": \"true\"\n        }\n      }\n    }\n  ]\n}"
        }
      },
      {
        heading: "3. IAM Roles & Trust Relationships",
        id: "iam-roles-trust",
        paragraphs: [
          "An IAM Role is an identity with permission policies that can be assumed by anyone who needs it (users, EC2 instances, AWS Lambda functions). Unlike users, roles do not have credentials like passwords or keys.",
          "Instead, a role requires a Trust Relationship Policy, specifying which external principal is authorized to assume the role. When assumed, AWS Security Token Service (STS) returns temporary credentials valid for a specified window (typically 1 to 12 hours)."
        ]
      }
    ]
  },
  "zero-trust-security": {
    title: "Zero Trust Security Architectures in Modern Cloud",
    summary: "Blueprints for implementing Zero Trust security. Network micro-segmentation, identity verification, and shifting security left.",
    category: "Cybersecurity",
    date: "April 2026",
    readTime: "8 min read",
    sections: [
      {
        heading: "1. Core Principles of Zero Trust",
        id: "zero-trust-principles",
        paragraphs: [
          "Zero Trust is a security framework premised on the concept: 'Never trust, always verify.' Traditional security models protected networks with perimeter defenses (like firewalls) but trusted internal traffic. Zero Trust removes this perimeter trust.",
          "The three core guidelines are:",
          "- Verify explicitly: Authenticate and authorize every access query based on identity, device posture, location, and data classifications.",
          "- Use least privilege access: Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA) policies.",
          "- Assume breach: Segment networks to minimize damage, encrypt all communications, and monitor anomalies continuously."
        ]
      },
      {
        heading: "2. Micro-segmentation & Network Rules",
        id: "microsegmentation",
        paragraphs: [
          "Instead of a flat network, Zero Trust segments networks into micro-networks. In Kubernetes, this is achieved by deploying Network Policies that restrict Pod-to-Pod communication.",
          "By default, all pods in a cluster can talk to each other. Network Policies block this path, allowing pods to only talk to designated backend namespaces."
        ],
        codeBlock: {
          lang: "yaml",
          code: "# Kubernetes NetworkPolicy restricting ingress traffic\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: db-ingress-limit\nspec:\n  podSelector:\n    matchLabels:\n      role: database\n  policyTypes:\n  - Ingress\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          role: backend-api"
        }
      },
      {
        heading: "3. Shift-Left Security & Scan Pipelines",
        id: "shift-left-security",
        paragraphs: [
          "In DevSecOps, security is integrated early inside CI/CD pipelines (shifting left). The pipelines perform:",
          "- Static Application Security Testing (SAST): Scans source code syntaxes for credentials, SQL injection patterns, and hardcoded secrets.",
          "- Software Composition Analysis (SCA): Scans dependency packages (npm, pip) for vulnerable modules (CVE checks).",
          "- Container Auditing: Scans Docker base layers using tools like Trivy or Anchore to verify dependencies do not hold root exploits."
        ]
      }
    ]
  },
  "authentication-vs-authorization": {
    title: "Authentication vs. Authorization Protocols Deep Dive",
    summary: "Breaking down OAuth 2.0, OpenID Connect (OIDC), SAML, and JWT security architectures for application security engineering.",
    category: "App Security",
    date: "March 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "1. Authentication (AuthN) vs. Authorization (AuthZ)",
        id: "authn-vs-authz",
        paragraphs: [
          "While closely linked, authentication and authorization serve different purposes:",
          "- Authentication (AuthN): Verifies WHO a user is. (e.g., logging in with email/password, OTP, biometrics, or OpenID Connect).",
          "- Authorization (AuthZ): Verifies WHAT a verified user is allowed to do. (e.g., checking if a user has admin credentials to delete a record via OAuth 2.0 or RBAC database tables)."
        ]
      },
      {
        heading: "2. OAuth 2.0 and OpenID Connect (OIDC)",
        id: "oauth2-oidc",
        paragraphs: [
          "OAuth 2.0 is an delegation protocol designed strictly for authorization. It allows applications to query access keys (Access Tokens) without accessing user passwords.",
          "Because OAuth 2.0 does not address user identity, OpenID Connect (OIDC) was built on top of it. OIDC adds an ID Token (formatted as a JSON Web Token - JWT) containing user profile claims, turning a delegator framework into a complete identity authentication platform."
        ],
        codeBlock: {
          lang: "json",
          code: "// Decoded JWT ID Token payload structure\n{\n  \"iss\": \"https://auth.ajitdev.com\",\n  \"sub\": \"usr_9281309812\",\n  \"aud\": \"client_portfolio_app\",\n  \"exp\": 1782636000,\n  \"iat\": 1782632400,\n  \"name\": \"Ajit Kumar\",\n  \"email\": \"ajitk23192@gmail.com\",\n  \"roles\": [\"developer\", \"author\"]\n}"
        }
      },
      {
        heading: "3. JSON Web Tokens (JWT) Security Rules",
        id: "jwt-security",
        paragraphs: [
          "JWTs are stateless assertions passing security claims between systems. To prevent tampering, tokens are signed using cryptographic algorithms (like HS256 for symmetric keys, or RS256 for asymmetric public/private keys).",
          "JWT Hardening Rules:",
          "- Store access tokens in memory or secure context, never in LocalStorage (vulnerable to XSS attacks).",
          "- Store refresh tokens in HTTP-only, secure, SameSite=Strict cookies to prevent both XSS and Cross-Site Request Forgery (CSRF).",
          "- Set short expiration times (e.g., 15 minutes) on access tokens, relying on refresh tokens to issue new leases."
        ]
      }
    ]
  }
};

export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = RESEARCH_DB[slug];

  if (!paper) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://ajitdev.com/research/${slug}/#breadcrumb`,
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
        "name": "Research",
        "item": "https://ajitdev.com/research",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": paper.title,
        "item": `https://ajitdev.com/research/${slug}`,
      },
    ],
  };

  return (
    <>
      <JSONLD schema={breadcrumbSchema} />

      <section className="py-16 md:py-24 bg-[#030712] min-h-screen text-slate-100 relative overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
          <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Nav */}
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Research List
          </Link>

          {/* Header Metadata */}
          <div className="max-w-4xl mb-12 border-b border-white/5 pb-8">
            <div className="flex flex-wrap gap-4 items-center text-xs text-slate-500 mb-4">
              <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 font-bold rounded-lg border border-indigo-500/20 uppercase">
                {paper.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {paper.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {paper.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              {paper.title}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4">
              {paper.summary}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-3 hidden lg:block sticky top-28 bg-slate-900/40 border border-white/5 p-5 rounded-2xl">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                Table of Contents
              </h3>
              <nav aria-label="Table of contents navigation">
                <ul className="space-y-3">
                  {paper.sections.map((sect) => (
                    <li key={sect.id}>
                      <a
                        href={`#${sect.id}`}
                        className="text-xs text-slate-400 hover:text-indigo-450 transition-colors block leading-tight font-medium"
                      >
                        {sect.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main Content Area */}
            <article className="lg:col-span-9 space-y-10 prose prose-invert max-w-none">
              {paper.sections.map((sect) => (
                <section key={sect.id} id={sect.id} className="scroll-mt-28 space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-white border-b border-white/5 pb-2">
                    {sect.heading}
                  </h2>
                  <div className="space-y-4 text-slate-350 text-sm sm:text-base leading-relaxed">
                    {sect.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                  {sect.codeBlock && (
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 p-4 font-mono text-xs text-slate-300">
                      <div className="flex justify-between items-center text-[10px] text-slate-500 border-b border-white/5 pb-2 mb-3">
                        <span>LANGUAGE: {sect.codeBlock.lang.toUpperCase()}</span>
                        <span>READ-ONLY</span>
                      </div>
                      <pre className="overflow-x-auto whitespace-pre">
                        <code>{sect.codeBlock.code}</code>
                      </pre>
                    </div>
                  )}
                </section>
              ))}

              {/* Author Info footer */}
              <div className="mt-12 p-6 rounded-2xl glass-panel flex flex-col sm:flex-row items-center gap-4 bg-slate-900/50">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-indigo-400 text-sm">
                  AK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Written by Ajit Kumar
                    <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[9px] font-bold rounded-full border border-indigo-500/20">Cloud & Security Specialist</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    BCA cloud computing and security student, studying kernel namespaces, networking protocols, security pipelines, and competitive programming solutions.
                  </p>
                </div>
              </div>
            </article>

          </div>

        </div>
      </section>
    </>
  );
}
