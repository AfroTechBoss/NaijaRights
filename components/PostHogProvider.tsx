"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Tracks client-side route changes as pageviews
function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      posthog.capture("$pageview", { $current_url: pathname });
    }
  }, [pathname]);

  return null;
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      capture_pageview: false,   // we fire pageviews manually via PageViewTracker
      capture_pageleave: true,
      autocapture: true,
      persistence: "localStorage",
      // Respect user privacy — don't capture IPs
      ip: false,
    });
  }, []);

  return (
    <PHProvider client={posthog}>
      <PageViewTracker />
      {children}
    </PHProvider>
  );
}
