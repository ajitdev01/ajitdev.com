# Implementation Plan: Non-Destructive SEO & Authority Expansion

This plan outlines the design and steps to transform `ajitdev.com` into a high-authority technical hub. We will introduce new authority pages, nested DSA, DevOps, and System Design hubs, project case studies, and a scalable blog architecture.

All changes are non-destructive and will not affect existing UI styling, routes, or files.

---

## Proposed Changes

### 1. Route Generation Script
We will create a Node.js script `setup-all-routes.js` that programmatically constructs the following directories and page definitions:

*   **Case Studies**: `/case-studies` (hub) and its nested routes:
    *   `/case-studies/portfolio`
    *   `/case-studies/qr-menu-saas`
    *   `/case-studies/weather-app`
    *   `/case-studies/library-management-system`
*   **Authority Pages**:
    *   `/lamp-stack`, `/mern-stack`, `/react`, `/nextjs`, `/javascript`, `/typescript`, `/nodejs`, `/php`, `/mysql`, `/mongodb`, `/linux`, `/aws`, `/docker`, `/kubernetes`, `/terraform`, `/github-actions`, `/ci-cd`, `/devops`, `/devsecops`, `/cloud-security`, `/cyber-security`, `/system-design`, `/hld`, `/lld`, `/dsa`, `/leetcode`.
*   **DSA Hub Subpages**:
    *   `/dsa/arrays`, `/dsa/strings`, `/dsa/hashing`, `/dsa/linked-list`, `/dsa/stack`, `/dsa/queue`, `/dsa/binary-search`, `/dsa/trees`, `/dsa/bst`, `/dsa/heap`, `/dsa/graph`, `/dsa/backtracking`, `/dsa/greedy`, `/dsa/dynamic-programming`.
*   **System Design Hub Subpages**:
    *   `/system-design/load-balancer`, `/system-design/cache`, `/system-design/database-scaling`, `/system-design/microservices`, `/system-design/message-queues`, `/system-design/cdn`, `/system-design/design-whatsapp`, `/system-design/design-youtube`, `/system-design/design-netflix`, `/system-design/design-uber`.
*   **DevOps Hub Subpages**:
    *   `/devops/docker`, `/devops/kubernetes`, `/devops/terraform`, `/devops/github-actions`, `/devops/cicd`, `/devops/aws`, `/devops/linux`.

### 2. Layout Structure & Elements for Generated Pages
Each page generated will contain:
- **Interactive Breadcrumbs** showing current depth.
- **Section Elements**: Introduction, Roadmap, Learning Resources, Notes, Related Projects/Blogs/Case Studies, and FAQ.
- **Micro-Animations**: Clean transitions using `framer-motion`.
- **Entity Signals**: Rotating personal branding keywords in the text.
- **Contextual Linking**: Automatically injects a minimum of 10 contextual internal links to other hubs, case-studies, and home/about/contact pages.
- **JSON-LD Schema**:
  - `BreadcrumbList` schema.
  - `FAQPage` schema based on localized questions.
  - Page-specific schema (e.g. `TechArticle` or `Course`).

### 3. Blog Engine Updates
*   **[MODIFY] [blog.ts](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/lib/blog.ts)**: Expand loader to fetch both `.mdx` files and entries from `content/posts-metadata.json`.
*   **[NEW] [posts-metadata.json](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/content/posts-metadata.json)**: Seed file mapping metadata for the categories (1,200 total metadata nodes across 12 target technologies).
*   **[MODIFY] [page.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/blog/[slug]/page.tsx)**:
    *   Display Table of Contents (TOC) for blog posts.
    *   Incorporate Related Posts section at the bottom.
    *   Support rendering JSON-based dynamic articles.
*   **[MODIFY] [sitemap.ts](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/sitemap.ts)**: Dynamically include all generated authority pages, DSA subpages, DevOps subpages, System Design subpages, Case Studies, and blog posts.

---

## Verification Plan

### Automated Verification
- Run a verification build to check that there are zero typescript or build errors. (Please run `npm run build` manually in your terminal when prompted).

### Manual Verification
- Verify `http://localhost:3000/sitemap.xml` contains all generated URLs.
- Inspect the generated pages and check JSON-LD schemas in the browser DOM.
