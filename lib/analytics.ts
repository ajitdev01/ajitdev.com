declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Dispatches custom analytics tracking events to GA4, Microsoft Clarity, and Vercel Analytics.
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window === "undefined") return;

  // 1. Google Analytics Event Tracking
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }

  // 2. Microsoft Clarity Custom Event Tracking
  if (typeof window.clarity === "function") {
    window.clarity("event", eventName, eventParams);
  }

  // 3. Vercel Analytics Event Tracking
  // Dynamically load package to keep page weight and bundle overhead minimal
  import("@vercel/analytics").then(({ track }) => {
    track(eventName, eventParams);
  }).catch((err) => {
    console.error("Vercel Analytics dispatch failed:", err);
  });
}
