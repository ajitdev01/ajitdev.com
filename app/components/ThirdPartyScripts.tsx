"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ThirdPartyScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoad(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("mousemove", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("keydown", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });

    // Fallback load after 4 seconds of idle time
    const idleTimeout = setTimeout(() => {
      setShouldLoad(true);
      cleanup();
    }, 4000);

    return () => {
      cleanup();
      clearTimeout(idleTimeout);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Microsoft Clarity Script */}
      <Script id="clarity-script" strategy="lazyOnload">
        {`
          (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "vncrgbmome");
        `}
      </Script>

      {/* Google Analytics (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-648KHZ7K6T"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-648KHZ7K6T');
        `}
      </Script>

      {/* Cloudflare Web Analytics */}
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "3011d7a1a53748ac8d82869375ddcf22"}'
        strategy="lazyOnload"
      />
    </>
  );
}
