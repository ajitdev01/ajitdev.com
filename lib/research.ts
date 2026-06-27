import { Layers, Cpu, Terminal, Key, Shield, BookOpen } from "lucide-react";

export interface Section {
  heading: string;
  id: string;
  paragraphs: string[];
  codeBlock?: {
    lang: string;
    code: string;
  };
}

export interface Paper {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  icon: any;
  sections: Section[];
}

export const RESEARCH_DB: Record<string, Paper> = {
  "how-docker-works": {
    slug: "how-docker-works",
    title: "How Docker Works: Under the Hood of Containerization",
    summary: "An in-depth look at Linux Namespaces, Control Groups (cgroups), and Union File Systems (OverlayFS) that make lightweight containerization possible without hypervisors.",
    category: "Virtualization",
    date: "June 2026",
    readTime: "8 min read",
    icon: Layers,
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
    slug: "kubernetes-architecture",
    title: "Kubernetes Architecture: Orchestrating Clusters at Scale",
    summary: "Analyzing the internal control loop mechanics of the Kubernetes control plane, worker node daemons, and CNI networking structures.",
    category: "Distributed Systems",
    date: "June 2026",
    readTime: "10 min read",
    icon: Cpu,
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
    slug: "linux-internals",
    title: "Linux Internals: Kernel Primitives & Process Lifecycles",
    summary: "Understanding user space vs kernel space transitions, virtual memory mapping, schedulers, and process system calls.",
    category: "Operating Systems",
    date: "May 2026",
    readTime: "9 min read",
    icon: Terminal,
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
    slug: "aws-iam-explained",
    title: "AWS IAM Policy Evaluation Logic & Access Controls",
    summary: "Deep-diving into IAM policy structures, trust relationships, STS temporary security tokens, and the evaluation engine logic.",
    category: "Cloud Security",
    date: "May 2026",
    readTime: "7 min read",
    icon: Key,
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
    slug: "zero-trust-security",
    title: "Zero Trust Security Architectures in Modern Cloud",
    summary: "Blueprints for implementing Zero Trust security. Network micro-segmentation, identity verification, and shifting security left.",
    category: "Cybersecurity",
    date: "April 2026",
    readTime: "8 min read",
    icon: Shield,
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
    slug: "authentication-vs-authorization",
    title: "Authentication vs. Authorization Protocols Deep Dive",
    summary: "Breaking down OAuth 2.0, OpenID Connect (OIDC), SAML, and JWT security architectures for application security engineering.",
    category: "App Security",
    date: "March 2026",
    readTime: "6 min read",
    icon: Key,
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
  },
  "terraform-infrastructure-as-code": {
    slug: "terraform-infrastructure-as-code",
    title: "Infrastructure as Code (IaC) Architecture with Terraform",
    summary: "A comprehensive analysis of declarative infrastructure engineering, state file lifecycle operations, locking mechanisms, and secure multi-account setups.",
    category: "DevOps",
    date: "June 2026",
    readTime: "9 min read",
    icon: Terminal,
    sections: [
      {
        heading: "Introduction",
        id: "introduction",
        paragraphs: [
          "Infrastructure as Code (IaC) revolutionized how systems operations are run by replacing manual cloud console clicks with version-controlled code configurations. Terraform, an open-source tool created by HashiCorp, uses HashiCorp Configuration Language (HCL) to declare target infrastructure states.",
          "Unlike imperative systems (which require step-by-step shell execution commands), Terraform is declarative. Developers specify the desired final state of the cloud resources (such as VMs, VPC subnets, and routes), and Terraform's graph execution engine automatically calculates the dependencies and provisions them in the optimal order."
        ]
      },
      {
        heading: "System Diagram",
        id: "diagram",
        paragraphs: [
          "This architecture diagram illustrates how Terraform compiles HCL code, resolves provider APIs, and synchronizes the desired state with remote state tables:",
          "  [ HCL Configuration ] --> ( Terraform Core ) --> [ Resource Dependency Graph ]\n                                |\n                                v\n                 [ State Lock: DynamoDB Check ]\n                                |\n                                v\n             [ Sync Lock: State Backend S3 storage ] <---> [ Cloud Provider API ]"
        ]
      },
      {
        heading: "Architecture & Mechanics",
        id: "architecture",
        paragraphs: [
          "The core architecture of Terraform revolves around two key subsystems: the Core engine and Providers plugins. The Core compiles configuration files, constructs resource graphs mapping resource-to-resource dependencies, and evaluates differences between local manifests and active resources.",
          "The state file (`terraform.tfstate`) is the single source of truth mapping declared resources to actual cloud IDs. For production environments, team coordination requires a Remote Backend (such as Amazon S3) with State Locking (via Amazon DynamoDB) to prevent concurrent deployments from causing state corruption or resource duplication."
        ]
      },
      {
        heading: "Concrete Examples",
        id: "examples",
        paragraphs: [
          "A classic enterprise architecture involves setting up dynamic subnets within an AWS Virtual Private Cloud (VPC). We provision an isolated network with a private subnet (for database layers) and a public subnet (routing external load balancers)."
        ],
        codeBlock: {
          lang: "hcl",
          code: "# Provider configuration\nprovider \"aws\" {\n  region = \"us-east-1\"\n}\n\n# VPC Resource declaration\nresource \"aws_vpc\" \"production_vpc\" {\n  cidr_block           = \"10.0.0.0/16\"\n  enable_dns_hostnames = true\n  tags = {\n    Name = \"prod-vpc\"\n  }\n}\n\n# Public Subnet for Ingress Proxies\nresource \"aws_subnet\" \"public_subnet_a\" {\n  vpc_id            = aws_vpc.production_vpc.id\n  cidr_block        = \"10.0.1.0/24\"\n  availability_zone = \"us-east-1a\"\n  tags = {\n    Name = \"prod-public-a\"\n  }\n}"
        }
      },
      {
        heading: "Production Best Practices",
        id: "best-practices",
        paragraphs: [
          "- **Enforce Remote State Storage**: Never commit `terraform.tfstate` files to git. Store state inside S3 with strict IAM access control and server-side encryption.",
          "- **Use Modular Configurations**: Write reusable modules to wrap standard components (like scaling groups, secure databases, firewall patterns).",
          "- **Implement Sentinel or OPA**: Configure Policy-as-Code checks (like Open Policy Agent) inside CI pipelines to block resource creation if they violate compliance rules (e.g. unencrypted S3 buckets)."
        ]
      },
      {
        heading: "References",
        id: "references",
        paragraphs: [
          "- HashiCorp Terraform Architecture Guides: https://developer.hashicorp.com/terraform/intro",
          "- AWS Security Best Practices for Cloud Terraform: https://aws.amazon.com/blogs/developer/terraform-best-practices/"
        ]
      },
      {
        heading: "Conclusion",
        id: "conclusion",
        paragraphs: [
          "Terraform establishes a reliable foundation for automated infrastructure pipelines. By defining cloud resources declaratively, teams can track audit history, run automated testing environments, and execute consistent deployments across multi-cloud topologies with minimal human error."
        ]
      }
    ]
  },
  "devsecops-pipeline": {
    slug: "devsecops-pipeline",
    title: "DevSecOps: Hardening CI/CD Automation Pipelines",
    summary: "Integrating automated vulnerability scanning, SAST, DAST, secrets scanning, and compliance auditing into continuous delivery pipelines.",
    category: "Security",
    date: "June 2026",
    readTime: "9 min read",
    icon: Shield,
    sections: [
      {
        heading: "Introduction",
        id: "introduction",
        paragraphs: [
          "DevSecOps represents the integration of security audits, scanners, and policies directly inside the continuous integration and continuous delivery (CI/CD) software lifecycle. Traditionally, security audits were performed as a final checkout phase, resulting in late bug discoveries and launch delays.",
          "By 'shifting security left', developers receive instant feedback inside their pull requests. Pipelines analyze static code syntax, inspect compiled binaries, scan third-party dependencies for known vulnerabilities, and check container filesystems before images run in staging or production environments."
        ]
      },
      {
        heading: "System Diagram",
        id: "diagram",
        paragraphs: [
          "This pipeline diagram outlines the automated security scanning gates running inside a continuous delivery workflow:",
          "  [ Developer Push ] ---> ( Git Hook: Secrets Scan ) ---> [ SAST Static Code Audit ]\n                                                                   |\n                                                                   v\n  [ Prod Deploy ] <--- ( Gate: Approval ) <--- [ Container Scan ] <--- [ Dependency SCA Audit ]"
        ]
      },
      {
        heading: "Architecture & Mechanics",
        id: "architecture",
        paragraphs: [
          "Hardening CI/CD networks involves setting up sandboxed runners, injecting minimum scope credentials, and configuring automated scanning blocks. The scanning suite is split into multiple layers:",
          "- **Static Application Security Testing (SAST)**: Inspects source syntax for security patterns (SQL injections, hardcoded credentials, buffer overflows) without executing the code.",
          "- **Software Composition Analysis (SCA)**: Maps project dependencies (from package.json or requirement files) against vulnerability indexes like the CVE database.",
          "- **Container Scanning**: Evaluates OS packages inside Docker layers using scanning systems like Trivy or Clair."
        ]
      },
      {
        heading: "Concrete Examples",
        id: "examples",
        paragraphs: [
          "Here is a configuration sample for a GitHub Actions pipeline. It executes static check tests, triggers a Trivy scan on a Node.js repository, and blocks deployment if high-level vulnerabilities (CVEs) are detected."
        ],
        codeBlock: {
          lang: "yaml",
          code: "name: Security Pipeline Scan\n\non:\n  pull_request:\n    branches: [ main ]\n\njobs:\n  security-audit:\n    runs-on: ubuntu-latest\n    steps:\n    - name: Checkout Codebase\n      uses: actions/checkout@v4\n\n    - name: Run Trivy Vulnerability Scanner\n      uses: aquasecurity/trivy-action@master\n      with:\n        image-ref: 'ajitdev/production-node-api:latest'\n        format: 'table'\n        exit-code: '1' # Fail pipeline if CVE found\n        severity: 'CRITICAL,HIGH'"
        }
      },
      {
        heading: "Production Best Practices",
        id: "best-practices",
        paragraphs: [
          "- **Never Store Pipeline Secrets in Repos**: Load API credentials via dynamic Cloud OIDC integrations or encrypted secrets stores (AWS Secrets Manager).",
          "- **Enforce Static Secret Scanners**: Use git-secrets or Trufflehog hooks to fail local commits if developers inadvertently hardcode keys.",
          "- **Implement Ephemeral Runners**: Run build executors inside short-lived container environments that clean up immediately after build completion to prevent state reuse hacks."
        ]
      },
      {
        heading: "References",
        id: "references",
        paragraphs: [
          "- OWASP Shift Left Guides: https://owasp.org/www-community/DevSecOps",
          "- GitHub Actions Hardening Guide: https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions"
        ]
      },
      {
        heading: "Conclusion",
        id: "conclusion",
        paragraphs: [
          "DevSecOps ensures that speed does not compromise system security. Automated checking gates validate code and dependencies at every step, creating a self-defending software pipeline that reduces threat vulnerability before deployments go live."
        ]
      }
    ]
  },
  "api-gateway-reverse-proxy": {
    slug: "api-gateway-reverse-proxy",
    title: "Edge Architectures: API Gateways, Reverse Proxies & Nginx",
    summary: "Designing edge networks using Nginx reverse proxy routes, routing traffic across upstream microservices, and securing application limits.",
    category: "System Design",
    date: "June 2026",
    readTime: "9 min read",
    icon: Shield,
    sections: [
      {
        heading: "Introduction",
        id: "introduction",
        paragraphs: [
          "In modern distributed architectures, client applications must not communicate directly with backend database nodes or microservices. Instead, an edge layer (composed of Reverse Proxies and API Gateways) coordinates incoming network requests.",
          "A Reverse Proxy sits in front of backend servers, receiving requests from client browsers and forwarding them to target application servers. An API Gateway extends this concept by performing protocol translation, rate limiting, request validation, authentication, and routing checks."
        ]
      },
      {
        heading: "System Diagram",
        id: "diagram",
        paragraphs: [
          "This architecture layout illustrates how Nginx handles SSL termination and routes requests across private API clusters:",
          "  [ Client Requests (HTTPS) ]\n              |\n              v\n      ( Nginx Proxy: SSL termination / Rate Limits )\n              |\n              +--------------> [ Private API Node 1 (port 8080) ]\n              |\n              +--------------> [ Private API Node 2 (port 8081) ]"
        ]
      },
      {
        heading: "Architecture & Mechanics",
        id: "architecture",
        paragraphs: [
          "The core architecture of an Nginx proxy relies on an asynchronous, event-driven, non-blocking single-threaded master-worker loop. This structure enables Nginx to handle tens of thousands of concurrent client connections with very low memory utilization.",
          "When Nginx acts as a reverse proxy, it manages the connection pools, terminates TLS/SSL certificates at the edge, compresses gzip/brotli responses, caches static assets, and translates host names (e.g. routing `api.domain.com` and `domain.com` to different local sockets)."
        ]
      },
      {
        heading: "Concrete Examples",
        id: "examples",
        paragraphs: [
          "Below is an production-ready configuration for Nginx. It defines an upstream block of Node.js app servers, routes requests using reverse proxy headers, and enforces basic security restrictions."
        ],
        codeBlock: {
          lang: "nginx",
          code: "# Upstream Cluster Definition\nupstream backend_api_cluster {\n    server 127.0.0.1:8080 weight=3;\n    server 127.0.0.1:8081 weight=2;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name api.ajitdev.com;\n\n    # Security Headers\n    add_header X-Frame-Options \"DENY\";\n    add_header X-Content-Type-Options \"nosniff\";\n\n    location / {\n        proxy_pass http://backend_api_cluster;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    }\n}"
        }
      },
      {
        heading: "Production Best Practices",
        id: "best-practices",
        paragraphs: [
          "- **Enable Rate Limiting**: Configure `limit_req_zone` inside Nginx to prevent bots from executing Denial of Service (DoS) attacks on login endpoints.",
          "- **Harden SSL Protocols**: Only permit TLS 1.2 and TLS 1.3. Disable legacy SSLv3 and TLS 1.0 protocols to prevent connection tampering.",
          "- **Tune Upstream Timeouts**: Keep client read/write timeouts short (e.g., 15 to 30 seconds) to prevent slow-connection attacks from exhausting server socket structures."
        ]
      },
      {
        heading: "References",
        id: "references",
        paragraphs: [
          "- Nginx Official Reverse Proxy Docs: https://nginx.org/en/docs/http/ngx_http_proxy_module.html",
          "- OWASP Reverse Proxy Hardening: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Bindings_Security_Cheat_Sheet.html"
        ]
      },
      {
        heading: "Conclusion",
        id: "conclusion",
        paragraphs: [
          "Deploying a hardened edge reverse proxy with Nginx isolates backend infrastructure from external networks. This setup facilitates centralized log analysis, SSL handshake optimizations, and traffic load distribution, ensuring robust and scalable web operations."
        ]
      }
    ]
  },
  "caching-redis-cdn": {
    slug: "caching-redis-cdn",
    title: "Distributed Caching: Redis Clusters & CDN Mechanics",
    summary: "Improving web application performance using Redis database caches, Cache-Aside strategies, and global Content Delivery Networks.",
    category: "System Design",
    date: "May 2026",
    readTime: "8 min read",
    icon: Shield,
    sections: [
      {
        heading: "Introduction",
        id: "introduction",
        paragraphs: [
          "In web architectures, query latency and database locks are the primary bottlenecks. Distributed caching mitigates these issues by maintaining high-speed memory caches closer to the user.",
          "We partition our caching strategy into two tiers: Edge caching (using a Content Delivery Network - CDN) for static media, code files, and page responses; and Database caching (using Redis memory tables) for dynamic REST API queries and user session records."
        ]
      },
      {
        heading: "System Diagram",
        id: "diagram",
        paragraphs: [
          "This caching architecture illustrates the Cache-Aside validation check pattern used for database lookups:",
          "  [ Client ] ---> [ CDN Edge ] ---> [ App Server ]\n                                        |\n                       +----------------+----------------+\n                       |                                 |\n             [ Cache Hit: read Redis ]         [ Cache Miss: Query DB ]\n                                                         |\n                                                         v\n                                               [ Write query to Redis ]"
        ]
      },
      {
        heading: "Architecture & Mechanics",
        id: "architecture",
        paragraphs: [
          "The core architecture of Redis depends on a single-threaded execution loop managing in-memory key-value data structures (strings, hashes, lists, sets, sorted sets). Redis keeps entire datasets in memory, delivering sub-millisecond response latencies.",
          "CDNs operate by caching static resources at Edge Nodes geographically distributed near end-users. Dynamic requests bypass CDN locations and route to Application servers, which implement a Cache-Aside database pattern: query Redis first; if data is missing (cache miss), fetch from the database and write the results to Redis for future queries."
        ]
      },
      {
        heading: "Concrete Examples",
        id: "examples",
        paragraphs: [
          "Here is a complete TypeScript snippet for an Express application implementing a Cache-Aside database query using Redis."
        ],
        codeBlock: {
          lang: "typescript",
          code: "import { createClient } from 'redis';\n\nconst redisClient = createClient({ url: 'redis://localhost:6379' });\nredisClient.connect();\n\nasync function getOrSetCache(key: string, dbQuery: () => Promise<any>, ttl = 300) {\n  const cachedData = await redisClient.get(key);\n  if (cachedData) {\n    return JSON.parse(cachedData); # Cache Hit\n  }\n\n  const freshData = await dbQuery(); # Cache Miss\n  await redisClient.setEx(key, ttl, JSON.stringify(freshData));\n  return freshData;\n}"
        }
      },
      {
        heading: "Production Best Practices",
        id: "best-practices",
        paragraphs: [
          "- **Use Cache Eviction Policies**: Set Redis maxmemory-policy to volatile-lru or allkeys-lru to clean out oldest unused cache keys when storage limits are hit.",
          "- **Apply Cache Expiration (TTL)**: Always define a time-to-live (TTL) on cache keys. Avoid leaving keys open indefinitely, which can result in data inconsistency.",
          "- **Mitigate Cache Stampede**: Use locks or random jitter in TTL durations to prevent multiple application servers from querying the database simultaneously when a popular key expires."
        ]
      },
      {
        heading: "References",
        id: "references",
        paragraphs: [
          "- Redis Architecture Documentation: https://redis.io/docs/manual/architecture/",
          "- AWS CDN Edge Caching Guidelines: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"
        ]
      },
      {
        heading: "Conclusion",
        id: "conclusion",
        paragraphs: [
          "Combining Redis database caching with CDN file hosting reduces origin server load and cuts request latency. By moving content closer to consumers, applications can support high concurrent user traffic while keeping databases responsive."
        ]
      }
    ]
  },
  "secure-web-protocols": {
    slug: "secure-web-protocols",
    title: "Secure Web Protocols: DNS, HTTPS & SSL/TLS Handshakes",
    summary: "Analyzing web security layers. Decoupling DNS configurations, configuring SSL certificates, and understanding the TLS 1.3 cryptographic handshake.",
    category: "App Security",
    date: "June 2026",
    readTime: "8 min read",
    icon: Shield,
    sections: [
      {
        heading: "Introduction",
        id: "introduction",
        paragraphs: [
          "Web security is built on secure transport protocols. The three key pillars that guarantee web authenticity, privacy, and integrity are: Domain Name System (DNS), Secure Sockets Layer / Transport Layer Security (SSL/TLS), and Hypertext Transfer Protocol Secure (HTTPS).",
          "Without these protocols, web traffic is transmitted in clear text, exposing usernames, auth tokens, and session cookies to packet-sniffing routers. Deploying HTTPS guarantees both encryption of data in transit and cryptographic validation of server hostnames."
        ]
      },
      {
        heading: "System Diagram",
        id: "diagram",
        paragraphs: [
          "This sequence flow outlines the cryptographic steps of a TLS 1.3 handshake, which establishes secure channels in a single round-trip (1-RTT):",
          "  [ Client ]                                             [ Server ]\n      |                                                      |\n      | ---- ClientHello (Cipher suites, Key Share) --------> |\n      |                                                      |\n      | <--- ServerHello (Cert, Selected Cipher, Key Share) - |\n      |                                                      |\n      | ================ Channels Encrypted ================ |"
        ]
      },
      {
        heading: "Architecture & Mechanics",
        id: "architecture",
        paragraphs: [
          "The secure path starts with DNS resolution, which maps a domain name to an IP address. When a client establishes an HTTPS connection, the browser and server initiate a TLS Handshake. TLS 1.3 optimizes this process by executing in just one round-trip (1-RTT) instead of two.",
          "During the handshake, the client and server exchange Diffie-Hellman key shares, authenticate the server's certificate chain via Public Key Infrastructure (PKI), and generate temporary symmetric session keys. These session keys encrypt all subsequent HTTP headers and payloads, protecting traffic from eavesdropping and tampering."
        ]
      },
      {
        heading: "Concrete Examples",
        id: "examples",
        paragraphs: [
          "Here is an Express application configuration using the `helmet` security middleware to enforce secure HTTP headers, HSTS, and block iframe rendering."
        ],
        codeBlock: {
          lang: "javascript",
          code: "const express = require('express');\nconst helmet = require('helmet');\nconst app = express();\n\n# Enable strict security headers\napp.use(helmet());\n\n# Configure Strict-Transport-Security manually\napp.use(\n  helmet.hsts({\n    maxAge: 31536000,\n    includeSubDomains: true,\n    preload: true,\n  })\n);\n\napp.get('/', (req, res) => res.send('Secure Headers Active!'));"
        }
      },
      {
        heading: "Production Best Practices",
        id: "best-practices",
        paragraphs: [
          "- **Enforce HSTS**: HTTP Strict Transport Security (HSTS) instructs browsers to only interact with the domain via HTTPS, preventing protocol downgrade attacks.",
          "- **Automate Cert Renewals**: Use tools like Let's Encrypt with automated cron scripts to renew certificates monthly, avoiding service interruptions from expired credentials.",
          "- **Harden DNS Records**: Deploy DNSSEC (Domain Name System Security Extensions) to prevent cache poisoning, and configure CAA (Certification Authority Authorization) records to specify which CAs are permitted to issue certificates for your domain."
        ]
      },
      {
        heading: "References",
        id: "references",
        paragraphs: [
          "- RFC 8446 - The TLS 1.3 Protocol: https://datatracker.ietf.org/doc/html/rfc8446",
          "- Mozilla Server Side TLS Configuration Guide: https://wiki.mozilla.org/Security/Server_Side_TLS"
        ]
      },
      {
        heading: "Conclusion",
        id: "conclusion",
        paragraphs: [
          "Securing communication channels with DNSSEC, TLS 1.3, and security headers blocks intermediate man-in-the-middle attacks. These protocols form the security standard for modern web operations, protecting user privacy and service integrity."
        ]
      }
    ]
  },
  "message-brokers-eda": {
    slug: "message-brokers-eda",
    title: "Event-Driven Architectures: RabbitMQ vs. Kafka",
    summary: "Designing asynchronous, scalable microservices using message queues (RabbitMQ AMQP) and distributed log brokers (Apache Kafka).",
    category: "System Design",
    date: "June 2026",
    readTime: "9 min read",
    icon: Shield,
    sections: [
      {
        heading: "Introduction",
        id: "introduction",
        paragraphs: [
          "In monolithic architectures, system tasks are executed synchronously inside a single memory stack. When scaling to distributed systems, synchronous HTTP calls (REST) introduce tight coupling and cascade failure risks.",
          "Event-Driven Architecture (EDA) resolves this by using a Message Broker or Event Log. Services communicate asynchronously by publishing events to topics or queues, allowing subscriber nodes to process tasks independently without blocking client responses."
        ]
      },
      {
        heading: "System Diagram",
        id: "diagram",
        paragraphs: [
          "This architecture diagram contrasts AMQP queues against partition-based log brokers:",
          "  RabbitMQ model (AMQP Queue-based push):\n  [ Producer ] ---> [ Exchange ] ---> [ Queue ] ---> [ Consumer (Pushed) ]\n\n  Kafka model (Distributed Log pull):\n  [ Producer ] ---> [ Topic Partition Log (Offsets) ] <--- [ Consumer Group (Pulls) ]"
        ]
      },
      {
        heading: "Architecture & Mechanics",
        id: "architecture",
        paragraphs: [
          "The choice of message broker depends on the system requirements:",
          "- **RabbitMQ**: A message queue utilizing the AMQP protocol. It uses a smart broker pattern where the broker manages queue state, tracks delivery status, and pushes messages to consumers. Messages are deleted from the queue immediately after consumer acknowledgment.",
          "- **Apache Kafka**: A distributed append-only log commit broker. It uses a dumb broker / smart consumer pattern where messages are retained on disk for a defined window (e.g. 7 days). Consumers manage their own read pointers (offsets) by pulling messages from partitions, enabling event replay."
        ]
      },
      {
        heading: "Concrete Examples",
        id: "examples",
        paragraphs: [
          "Here is a Node.js consumer script using the `amqplib` package to process background compute tasks from a RabbitMQ queue."
        ],
        codeBlock: {
          lang: "javascript",
          code: "const amqp = require('amqplib');\n\nasync function startWorker() {\n    const conn = await amqp.connect('amqp://localhost');\n    const channel = await conn.createChannel();\n    const queue = 'email_queue';\n\n    await channel.assertQueue(queue, { durable: true });\n    channel.prefetch(1); # Limit task distribution\n\n    console.log('Waiting for tasks in email queue...');\n    channel.consume(queue, (msg) => {\n        const task = JSON.parse(msg.content.toString());\n        console.log('Processing email task:', task.id);\n        # Acknowledge task completion\n        channel.ack(msg);\n    });\n}\nstartWorker();"
        }
      },
      {
        heading: "Production Best Practices",
        id: "best-practices",
        paragraphs: [
          "- **Enforce Idempotency**: Ensure that event consumers can process the same message multiple times without side effects (e.g., check database transaction IDs before executing updates).",
          "- **Configure Dead Letter Queues (DLQ)**: When a consumer fails to process a message due to a bad payload, route the message to a DLQ for offline analysis, preventing queue blockage.",
          "- **Manage Partition Sizing in Kafka**: Carefully size the partition counts when creating Kafka topics, as partition count determines the parallel consumption limit for consumer groups."
        ]
      },
      {
        heading: "References",
        id: "references",
        paragraphs: [
          "- RabbitMQ Developer Tutorials: https://www.rabbitmq.com/getstarted.html",
          "- Apache Kafka Core Concepts: https://kafka.apache.org/documentation/#intro_concepts"
        ]
      },
      {
        heading: "Conclusion",
        id: "conclusion",
        paragraphs: [
          "Decoupling microservices using asynchronous message brokers isolates faults and handles traffic spikes cleanly. RabbitMQ is optimal for complex routing and task queues, while Apache Kafka excels at high-throughput event streaming and analytics replay."
        ]
      }
    ]
  },
  "microservices-load-balancing": {
    slug: "microservices-load-balancing",
    title: "Microservices & Load Balancing: Central Routing at Scale",
    summary: "Designing scalable microservice architectures using Layer 4 and Layer 7 load balancers, health checks, and service discoveries.",
    category: "Distributed Systems",
    date: "June 2026",
    readTime: "9 min read",
    icon: Cpu,
    sections: [
      {
        heading: "Introduction",
        id: "introduction",
        paragraphs: [
          "Microservices architecture decouples complex applications into domain-specific, independent APIs that are managed by separate database modules and deployed across clusters of physical nodes.",
          "To distribute user traffic across these microservice nodes, load balancers act as traffic directors. They monitor target node health and route requests dynamically to prevent overload and resolve node failures."
        ]
      },
      {
        heading: "System Diagram",
        id: "diagram",
        paragraphs: [
          "This architecture layout illustrates a Layer 7 Load Balancer routing path-based requests to microservice target clusters:",
          "                      [ Internet Ingress (HTTPS) ]\n                                   |\n                                   v\n                    [ Layer 7 Load Balancer: Nginx ]\n                                   |\n        +--------------------------+--------------------------+\n        | (path: /api/v1/auth)                                | (path: /api/v1/orders)\n        v                                                     v\n  [ Auth Service Cluster ]                              [ Order Service Cluster ]"
        ]
      },
      {
        heading: "Architecture & Mechanics",
        id: "architecture",
        paragraphs: [
          "Load balancing operates at different network layers:",
          "- **Layer 4 (L4) Balancers**: Route traffic at the transport layer (TCP/UDP) based on IP address and port fields. L4 balancers are extremely fast because they route raw network packets without inspecting application data (HTTP headers, cookies).",
          "- **Layer 7 (L7) Balancers**: Route traffic at the application layer (HTTP/HTTPS) based on HTTP paths, headers, or session cookies. This enables path-based routing, SSL termination, and header manipulation rules."
        ]
      },
      {
        heading: "Concrete Examples",
        id: "examples",
        paragraphs: [
          "Here is an Nginx configuration file setting up an HTTP Layer 7 load balancer. It distributes incoming traffic to a cluster of backend payment nodes using a Round-Robin algorithm with passive health checks."
        ],
        codeBlock: {
          lang: "nginx",
          code: "upstream payment_service_nodes {\n    server payment-node-01.local:3000 max_fails=3 fail_timeout=10s;\n    server payment-node-02.local:3000 max_fails=3 fail_timeout=10s;\n    server payment-node-03.local:3000 backup; # Fallback server\n}\n\nserver {\n    listen 80;\n    server_name payments.ajitdev.com;\n\n    location / {\n        proxy_pass http://payment_service_nodes;\n        proxy_next_upstream error timeout http_502 http_503;\n    }\n}"
        }
      },
      {
        heading: "Production Best Practices",
        id: "best-practices",
        paragraphs: [
          "- **Implement Active Health Checks**: Configure the load balancer to query health endpoints (e.g. `/healthz`) every 5-10 seconds to quickly detect and isolate failing application nodes.",
          "- **Avoid Sticky Sessions**: Design services to be stateless. Store session records inside external Redis databases, allowing the balancer to distribute traffic using optimal algorithms (least_conn) without pinning users to specific nodes.",
          "- **Deploy Circuit Breakers**: Use software circuit breakers (like Hystrix or Envoy rules) to prevent cascading failures if a microservice dependency encounters a massive slowdown."
        ]
      },
      {
        heading: "References",
        id: "references",
        paragraphs: [
          "- Nginx Load Balancing Reference Guide: https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/",
          "- Microservice Patterns - Service Discovery and Routing: https://microservices.io/patterns/index.html"
        ]
      },
      {
        heading: "Conclusion",
        id: "conclusion",
        paragraphs: [
          "Load balancing enables elastic horizontal scaling in microservices. By distributing requests across pools of stateless application servers, systems can achieve high availability, run zero-downtime rolling updates, and isolate node failures."
        ]
      }
    ]
  },
  "distributed-system-design": {
    slug: "distributed-system-design",
    title: "System Design: Scaling Distributed Databases & Trades",
    summary: "Analyzing core system design guidelines. The CAP Theorem, consistent hashing ring implementations, database sharding, and latency benchmarks.",
    category: "System Design",
    date: "June 2026",
    readTime: "10 min read",
    icon: Cpu,
    sections: [
      {
        heading: "Introduction",
        id: "introduction",
        paragraphs: [
          "System design involves planning the architecture of highly available, scale-tolerant, and performant systems. As databases expand past single-node capabilities, developers partition data tables across multiple master nodes.",
          "Designing distributed architectures requires making trade-offs between data consistency, query latency, availability, and hardware cost. System design frameworks help engineers systematically evaluate these trade-offs to choose the optimal architecture."
        ]
      },
      {
        heading: "System Diagram",
        id: "diagram",
        paragraphs: [
          "This architecture layout illustrates the CAP Theorem constraints, showing that a distributed system can guarantee at most two of the three properties during a network partition (P):",
          "                       /\\ \n                      /  \\ \n                     /    \\ \n      Consistency   /------\\  Availability\n                   /   P    \\ \n                  /__________\\ \n               Partition Tolerance"
        ]
      },
      {
        heading: "Architecture & Mechanics",
        id: "architecture",
        paragraphs: [
          "Distributed systems decisions are governed by fundamental theorems:",
          "- **CAP Theorem**: States that in the presence of a network partition (P), a distributed system must choose between Consistency (C - all nodes see the same data at the same time) or Availability (A - every request receives a non-error response).",
          "- **PACELC Theorem**: Extends CAP. If there is a partition (PA), how does the system choose between Consistency (C) and Availability (A)? Else (EL), when the system runs normally, how does it balance Latency (L) against Consistency (C)?",
          "- **Consistent Hashing**: A key-mapping algorithm that allows adding or removing storage nodes with minimal key redistribution, using a virtual ring structure."
        ]
      },
      {
        heading: "Concrete Examples",
        id: "examples",
        paragraphs: [
          "Below is a JavaScript class demonstrating a consistent hashing ring. It handles node registration and hashes keys to target node slots."
        ],
        codeBlock: {
          lang: "javascript",
          code: "const crypto = require('crypto');\n\nclass ConsistentHashRing {\n    constructor(replicas = 3) {\n        this.replicas = replicas;\n        this.ring = {};\n        this.sortedKeys = [];\n    }\n\n    hash(str) {\n        return crypto.createHash('md5').update(str).digest().readUInt32BE(0);\n    }\n\n    addNode(node) {\n        for (let i = 0; i < this.replicas; i++) {\n            const val = this.hash(`${node}-replica-${i}`);\n            this.ring[val] = node;\n            this.sortedKeys.push(val);\n        }\n        this.sortedKeys.sort((a, b) => a - b);\n    }\n\n    getNode(key) {\n        if (this.sortedKeys.length === 0) return null;\n        const hashVal = this.hash(key);\n        for (let i = 0; i < this.sortedKeys.length; i++) {\n            if (hashVal <= this.sortedKeys[i]) {\n                return this.ring[this.sortedKeys[i]];\n            }\n        }\n        return this.ring[this.sortedKeys[0]]; # Ring wrap-around\n    }\n}"
        }
      },
      {
        heading: "Production Best Practices",
        id: "best-practices",
        paragraphs: [
          "- **Choose Sharding Keys Wisely**: Select high-cardinality shard keys (like user_id) to distribute database writes evenly, avoiding 'hot shards' that overload specific nodes.",
          "- **Establish Database Replicas**: Configure read replicas to offload search traffic from the master write databases, optimizing system throughput.",
          "- **Implement Circuit Breakers**: Wrap service integrations in fallback mechanisms to prevent a slow service from locking server worker threads and exhausting system connections."
        ]
      },
      {
        heading: "References",
        id: "references",
        paragraphs: [
          "- Designing Data-Intensive Applications by Martin Kleppmann",
          "- CAP Theorem Revisited: https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/"
        ]
      },
      {
        heading: "Conclusion",
        id: "conclusion",
        paragraphs: [
          "Building scalable systems requires understanding distributed trade-offs. By deploying consistent hashing, horizontal sharding, and robust replica routing, applications can support millions of concurrent users while maintaining high availability."
        ]
      }
    ]
  }
};
