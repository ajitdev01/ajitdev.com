# Implementation Plan: Ultimate Portfolio Upgrades to Top 1%

This plan details non-destructive, production-grade optimizations and feature enhancements for `ajitdev.com`. It ensures that all existing visual design, UI layouts, branding, routes, and page logic remain completely intact, while boosting performance, SEO, accessibility, security, PWA readiness, and tracking event fidelity.

---

## User Review Required

> [!IMPORTANT]
> - **Static Security Headers & Content Security Policy**: Nonce-based CSP would disable static site optimization (SSG/ISR) and CDN caching, increasing server load and LCP/TTFB. For optimal performance (Lighthouse target 100), we will retain the strict static CSP and headers in `next.config.ts` without dynamic nonces.
> - **Command Palette Conflict**: Pressing `Ctrl+K` currently opens a search modal in the blog page via `BlogSearch.tsx`. We will implement a unified global Command Palette that integrates both site navigation and fuzzy blog/project search.

---

## Open Questions

> [!NOTE]
> None at present. The proposed features align fully with Vercel and Staff Engineer production guidelines.

---

## Proposed Changes

### 1. Performance & Bundle Optimization
#### [MODIFY] [next.config.ts](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/next.config.ts)
- Add conditional configuration to enable `@next/bundle-analyzer` when `process.env.ANALYZE === 'true'`.

#### [MODIFY] [package.json](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/package.json)
- Add `@next/bundle-analyzer` and `@types/web-push` (if needed) under devDependencies.

---

### 2. Error Boundaries & Custom Error Pages
#### [NEW] [global-error.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/global-error.tsx)
- Add a beautiful root-level error screen with a manual reset trigger for graceful application recoveries.

#### [NEW] [error.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/error.tsx)
- Add a client-side route error boundary with a "Try again" action.

#### [NEW] [not-found.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/not-found.tsx)
- Implement a custom, high-fidelity 404 page styled with an interactive home return flow.

---

### 3. Progressive Web App (PWA) & Service Worker
#### [NEW] [manifest.ts](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/manifest.ts)
- Implement a dynamic manifest handler using App Router metadata conventions, containing theme variables (`#080c14`), maskable icons, and standalone navigation properties.

#### [NEW] [offline/page.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/offline/page.tsx)
- Create a premium offline fallback page notifying users of missing network access.

#### [NEW] [sw.js](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/public/sw.js)
- Build a service worker caching offline assets (`/offline`, basic styles, logo.png) and capturing background push triggers.

#### [NEW] [PWARegister.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/components/PWARegister.tsx)
- Client-side registration handler to register `/sw.js` safely on mount.

---

### 4. Advanced Analytics Event Tracking
#### [NEW] [analytics.ts](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/lib/analytics.ts)
- Establish a global telemetry module forwarding custom events to GA4 (`window.gtag`), Clarity (`window.clarity`), and Vercel Analytics (`track`).

#### [NEW] [AnalyticsTracker.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/components/AnalyticsTracker.tsx)
- Implement a global event interceptor. It listens to clicks on links (GitHub, LinkedIn, resume downloads, email triggers), monitors user scroll depth (25%, 50%, 75%, 90%), and records session duration bounds.

#### [MODIFY] [ContactForm.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/components/contact/ContactForm.tsx)
- Inject analytics hooks to track successful contact form submissions.

---

### 5. UI/UX Nice Enhancements
#### [NEW] [CommandPalette.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/components/CommandPalette.tsx)
- Build a glassmorphic command palette (triggered by `⌘K` or `Ctrl+K`). Includes page navigation routes, project listings, copying coordinates, and instant contact shortcuts.

#### [NEW] [CopyButton.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/components/CopyButton.tsx)
- Build a micro-interactive copy button for MDX code blocks.

#### [MODIFY] [MDXComponents.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/components/MDXComponents.tsx)
- Wrap `<pre>` nodes inside a layout container rendering the `CopyButton`.

#### [MODIFY] [ProjectsSection.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/components/projects/ProjectsSection.tsx)
- Add a search input field matching name, description, and technologies.

---

### 6. Attributions & DevOps Configuration
#### [NEW] [humans.txt](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/public/humans.txt)
- Set up a standard developer attribution file in the public folder.

#### [NEW] [ci.yml](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/.github/workflows/ci.yml)
- Create a GitHub Actions workflow verification configuration performing build checks, type checks, lint checks, and dependency audits.

#### [MODIFY] [layout.tsx](file:///c:/Users/ajit%20kumar/Desktop/ajitdev.com/app/layout.tsx)
- Inject `<PWARegister />`, `<AnalyticsTracker />`, and `<CommandPalette />` globally.

---

## Verification Plan

### Automated Tests
- Run `npm run build` locally to verify there are no compile, compilation, type checking, or layout errors.
- Run lint validation (`npm run lint`).

### Manual Verification
- Press `Ctrl+K` / `Cmd+K` on pages to verify Command Palette behavior.
- Validate copy-to-clipboard buttons on code blocks.
- Check service worker registration inside browser DevTools -> Application.
- Validate that the `/offline` fallback serves correctly when network throttling is set to offline.

