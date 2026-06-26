"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const scrollRef = useRef<Record<number, boolean>>({});
  const activePathname = useRef<string>("");

  // Reset scroll markers when route shifts
  useEffect(() => {
    scrollRef.current = { 25: false, 50: false, 75: false, 90: false };
    activePathname.current = pathname;
    trackEvent("page_view_custom", { path: pathname });
  }, [pathname]);

  // 1. Link Clicks Event Interception
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      const label = target.textContent?.trim() || "";

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { email: href.replace("mailto:", ""), label });
      } else if (href.includes("github.com")) {
        trackEvent("github_click", { url: href, label });
      } else if (href.includes("linkedin.com")) {
        trackEvent("linkedin_click", { url: href, label });
      } else if (href.endsWith("resume.pdf") || href.includes("resume")) {
        trackEvent("resume_download", { url: href, label });
      } else if (href.startsWith("/projects") || href.includes("/case-studies/")) {
        trackEvent("project_open", { url: href, label });
      } else if (href.startsWith("/blog/")) {
        trackEvent("blog_open", { slug: href.replace("/blog/", ""), label });
      } else if (target.classList.contains("cta-btn") || href.startsWith("/contact")) {
        trackEvent("cta_click", { destination: href, label });
      }
    };

    document.addEventListener("click", handleDocumentClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // 2. Scroll Depth Monitoring
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      const checkpoints = [25, 50, 75, 90];

      checkpoints.forEach((point) => {
        if (scrollPercent >= point && !scrollRef.current[point]) {
          scrollRef.current[point] = true;
          trackEvent("scroll_depth", {
            percent: point,
            path: activePathname.current,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 3. Session Duration Milestones
  useEffect(() => {
    const startTime = Date.now();
    const intervals = [30, 60, 120, 300]; // in seconds
    const activeTimers: NodeJS.Timeout[] = [];

    intervals.forEach((seconds) => {
      const timer = setTimeout(() => {
        const timeElapsed = Math.round((Date.now() - startTime) / 1000);
        trackEvent("session_duration", {
          duration_seconds: timeElapsed,
          milestone: `${seconds}s`,
        });
      }, seconds * 1000);

      activeTimers.push(timer);
    });

    return () => {
      activeTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return null;
}
