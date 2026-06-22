# Implementation Plan: SEO-First Portfolio Master Build

Transform the portfolio into a production-ready, SEO-first Next.js 15+ portfolio according to the master prompt, covering all 25 subpage paths, MDX blogging system, schema automation, and performance optimizations.

---

## User Action Required

> [!IMPORTANT]
> **Manual Command Execution**: Because of security policy restrictions on writing to the IDE environment's internal directories, I cannot execute terminal commands (like package installation or builds) on your behalf.
> **You will need to execute the package installation commands and verification builds manually in your terminal when prompted.**

---

## Open Questions

> [!WARNING]
> 1. **MDX Blog Content**: Do you have pre-written blog posts you'd like to use? If not, we will create 3 high-quality initial placeholder MDX posts under `content/posts/` to verify sitemap registration, syntax highlighting, reading time, and categories.
> 2. **GitHub and LeetCode usernames**: We will default to using `ajitdev01` (your GitHub) and `ajitdev01` (LeetCode) for statistics cards. Please let us know if they differ.

---

## Proposed Changes

We will build the portfolio codebase step-by-step.

### 1. Project Dependencies
You will need to run the following installation command in your terminal:
```bash
npm install next-mdx-remote reading-time gray-matter remark-gfm rehype-slug rehype-autolink-headings rehype-pretty-code lucide-react clsx tailwind-merge @vercel/analytics @vercel/speed-insights
```

### 2. File and Directory Structure
We will create and update the following pages and directories:

*   **Shared Components**:
    *   [NEW] `app/components/MDXComponents.tsx`: Styled MDX custom elements with syntax highlighting.
    *   [NEW] `app/components/JSONLD.tsx`: Helper component to inject dynamic schema graphs.
    *   [NEW] `app/components/BlogSearch.tsx`: Search and category filter component.
*   **Routing Architecture**:
    *   `app/blog/page.tsx` & `app/blog/[slug]/page.tsx`: Dynamic MDX blog archive and reader.
    *   `app/resume/page.tsx`: Interactive resume view and download page.
    *   `app/leetcode/page.tsx`: Badges, stats, and achievements integration.
    *   **Topic Subpages** (`/dsa`, `/system-design`, `/devops`, `/cloud`, `/cloud-security`, `/cyber-security`, `/docker`, `/kubernetes`, `/terraform`, `/aws`, `/open-source`): Clean, animated cards and guides.
    *   **Resource & General Pages** (`/certificates`, `/achievements`, `/uses`, `/now`, `/resources`, `/roadmaps`, `/case-studies`): Portfolio details.
*   **Global Enhancements**:
    *   `app/layout.tsx`: Inject Google Knowledge Graph JSON-LD schema (Person, WebSite, Breadcrumbs), Vercel Analytics, and Speed Insights.
    *   `app/page.tsx`: Homepage optimization with dynamic cards, regional keywords, and recent blogs.

### 3. Blog System Configuration
We will set up `content/posts/` and parse files using `gray-matter` and `next-mdx-remote` synchronously on the server for maximum Lighthouse speed.

---

## Verification Plan

### Automated Verification
1. Run local build to verify zero compile/type check errors:
   ```bash
   npm run build
   ```

### Manual Verification
1. Visit `http://localhost:3000/sitemap.xml` and verify all new 25 routes are correctly generated and listed.
2. Validate JSON-LD schemas using Google Rich Results / Schema Markup Validator.
