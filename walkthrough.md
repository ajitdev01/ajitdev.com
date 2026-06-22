# Next.js 15+ SEO-First Portfolio Overhaul Walkthrough

We transformed the developer portfolio (`ajitdev.com`) into a production-grade, search-optimized technical system.

---

## 1. Files & Components Implemented

We created/modified the following architecture:

### Global Core & Analytics
*   **`app/layout.tsx`**: Injected `@vercel/analytics` and `@vercel/speed-insights`, structured preconnect/prefetch rules, and local icons.
*   **`app/page.tsx`**: Updated the primary H1 to exactly target key search terms (*Ajit Dev — Full Stack Developer, DevOps Engineer & Cloud Security Enthusiast from Katihar, Bihar*).
*   **`app/sitemap.ts`**: Set up dynamic XML sitemap indices containing all static and dynamic paths.
*   **`app/robots.ts`**: Directed bots to index core routes and map resources.
*   **`app/feed.xml/route.ts`**: Set up a dynamic RSS Feed serving post updates in XML.

### Dynamic MDX Blog Engine
*   **`lib/blog.ts`**: Parser utility using `gray-matter` and `reading-time` to feed server rendering pipelines.
*   **`content/posts/`**: Written 3 standard technical guides covering VPC hardening, container pipelines, and PageSpeed metrics with embedded FAQ lists.
*   **`app/components/`**:
    *   `JSONLD.tsx`: Injects dynamic structured JSON-LD schemas.
    *   `MDXComponents.tsx`: Visual layout definitions for parsed headings, lists, blockquotes, and code blocks.
    *   `BlogSearch.tsx`: Instant category filter and text matching widget.
*   **`app/blog/`**:
    *   `page.tsx`: Dynamically renders post cards and filters.
    *   `[slug]/page.tsx`: Renders full MDX articles with high-priority performance schemas.
    *   `[category]/page.tsx` & static routes (`/blog/devops`, `/blog/aws`): Custom targeted landing archives.

### Project Showcases
*   **`app/projects/`**: Subcategory pages matching target keyword queries:
    *   `full-stack/page.tsx`: lists React/Express/PHP platforms.
    *   `devops/page.tsx`: lists GitHub Actions and scripting repositories.
    *   `cloud/page.tsx`: lists AWS VPC and Serverless API architectures.
    *   `security/page.tsx`: lists DevSecOps scanners and OWASP audits.

---

## 2. Dynamic Setup Script (`setup-pages.js`)

To initialize all 24 remaining website paths, we built a single unified node script [setup-pages.js](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/setup-pages.js) in the project root. Running it will instantly write page definitions for:
*   Competitive Profiles: `/leetcode`, `/resume`, `/uses`, `/now`
*   Subject Guides: `/dsa`, `/system-design`, `/devops`, `/devsecops`, `/cloud`, `/aws`, `/docker`, `/kubernetes`, `/terraform`, `/linux`, `/cloud-security`, `/cyber-security`
*   Reference Materials: `/resources`, `/roadmaps`, `/tools`, `/open-source`, `/case-studies`, `/achievements`, `/certificates`, `/changelog`

Each generated folder contains local page routes configured with tailored canonical targets, custom descriptions, custom breadcrumbs lists, and FAQ JSON-LD graphs.

---

## 3. How to Verify & Launch

Run the following commands in your project terminal:

1.  **Generate the 24 subpages:**
    ```bash
    node setup-pages.js
    ```
2.  **Verify compilation & pre-render generation:**
    ```bash
    npm run build
    ```
3.  **Start development server:**
    ```bash
    npm run dev
    ```
