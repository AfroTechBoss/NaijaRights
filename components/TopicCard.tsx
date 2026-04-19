"use client";

import Link from "next/link";
import type { Topic } from "@/content/types";
import type { Language } from "@/context/LanguageContext";

interface Props {
  topic: Topic;
  sectionSlug: string;
  language: Language;
  index: number;
  saved?: boolean;
  onToggleSave?: (slug: string) => void;
}

export default function TopicCard({ topic, sectionSlug, language, index, saved, onToggleSave }: Props) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 2px",
      borderTop: index === 0 ? "none" : "1px solid var(--line)",
    }}>
      {/* Number */}
      <div style={{
        fontFamily: "'Fraunces', Georgia, serif", fontSize: 18,
        color: "var(--ink-muted)", width: 24, fontWeight: 400, paddingTop: 1, flexShrink: 0,
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Content */}
      <Link href={`/${sectionSlug}/${topic.slug}`} style={{ flex: 1, textDecoration: "none" }}>
        <div style={{ fontSize: 15.5, fontWeight: 600, color: "var(--ink)", letterSpacing: -0.1 }}>
          {topic.title[language]}
        </div>
        <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2, lineHeight: 1.4 }}>
          {topic.summary[language]}
        </div>
        <div style={{ marginTop: 6, display: "flex", gap: 8, alignItems: "center" }}>
          {topic.laws[0] && (
            <span style={{ fontSize: 10.5, color: "var(--accent)", fontWeight: 700, letterSpacing: 0.4 }}>
              {topic.laws[0].name.toUpperCase()}
            </span>
          )}
          {topic.laws[0] && (
            <span style={{ width: 3, height: 3, borderRadius: 2, background: "var(--ink-muted)", flexShrink: 0, display: "inline-block" }} />
          )}
          <span style={{ fontSize: 10.5, color: "var(--ink-muted)", fontWeight: 500 }}>
            {topic.readMinutes} min read
          </span>
        </div>
      </Link>

      {/* Bookmark */}
      {onToggleSave && (
        <button onClick={() => onToggleSave(topic.slug)} style={{
          background: "transparent", border: "none", cursor: "pointer",
          color: saved ? "var(--accent)" : "var(--ink-muted)", padding: "2px", flexShrink: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"}
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

      {/* Arrow */}
      <Link href={`/${sectionSlug}/${topic.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", paddingTop: 6, flexShrink: 0 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </Link>
    </div>
  );
}
