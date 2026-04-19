"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const NAV_ITEMS = [
  {
    id: "home",
    href: "/",
    icon: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7h-6v7H5a2 2 0 0 1-2-2V9z" />,
    labelKey: "nav.home",
  },
  {
    id: "search",
    href: "/search",
    icon: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
    labelKey: "nav.search",
  },
  {
    id: "saved",
    href: "/saved",
    icon: <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />,
    labelKey: "nav.saved",
  },
  {
    id: "settings",
    href: "/settings",
    icon: <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>,
    labelKey: "nav.settings",
  },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  // Hide on topic detail pages (2-segment paths like /general-public/right-to-silence)
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length >= 2) return null;

  return (
    <nav style={{
      position: "fixed", left: 0, right: 0, bottom: 0, height: 72,
      background: "var(--surface)", borderTop: "1px solid var(--line)",
      display: "flex", alignItems: "stretch", zIndex: 100,
      paddingBottom: 4, fontFamily: "'Instrument Sans', system-ui, sans-serif",
    }}>
      {NAV_ITEMS.map((item) => {
        const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link key={item.id} href={item.href} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", gap: 3, textDecoration: "none",
            color: isActive ? "var(--accent)" : "var(--ink-muted)",
            padding: "6px 0", transition: "color 150ms ease",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth={isActive ? 2.2 : 1.8}
              strokeLinecap="round" strokeLinejoin="round">
              {item.icon}
            </svg>
            <span style={{ fontSize: 10.5, fontWeight: isActive ? 700 : 500, letterSpacing: 0.2 }}>
              {t(item.labelKey)}
            </span>
            {isActive && (
              <div style={{ width: 16, height: 2, borderRadius: 1, background: "var(--accent)", marginTop: 1 }} />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
