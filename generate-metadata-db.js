const fs = require("fs");
const path = require("path");

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

const articles = [];

CATEGORIES.forEach((cat) => {
  for (let i = 1; i <= 100; i++) {
    const padded = String(i).padStart(3, "0");
    const slug = `${cat.key}-tutorial-${padded}`;
    const date = new Date(2026, 0, 1 + i % 30).toISOString().split("T")[0];
    
    // Vary titles and descriptions to make them highly SEO-friendly
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

const contentDir = path.join(__dirname, "content");
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

fs.writeFileSync(
  path.join(contentDir, "posts-metadata.json"),
  JSON.stringify(articles, null, 2)
);

console.log("Successfully generated content/posts-metadata.json with 1,200 posts!");
