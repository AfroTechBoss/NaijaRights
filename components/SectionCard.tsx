"use client";

import Link from "next/link";
import type { Section } from "@/content/types";
import type { Language } from "@/context/LanguageContext";
import { useLanguage } from "@/context/LanguageContext";

// Section glyph letters
const GLYPHS: Record<string, string> = {
  "general-public": "P",
  "drivers":        "D",
  "traders":        "T",
  "women":          "W",
  "youth":          "Y",
  "tenants":        "H",
};

interface Props {
  section: Section;
  language: Language;
  variant?: "grid" | "list";
}

export default function SectionCard({ section, language, variant = "grid" }: Props) {
  const { t } = useLanguage();
  const glyph = GLYPHS[section.slug] ?? section.slug[0].toUpperCase();
  const titleKey = `sec.${section.slug}.title`;
  const subKey   = `sec.${section.slug}.sub`;
  const count    = section.topics.length;

  if (variant === "list") {
    return (
      <Link href={`/${section.slug}`} style={{
        display: "flex", alignItems: "center", gap: 14, padding: "14px 14px",
        border: "1px solid var(--line)", background: "var(--surface)", borderRadius: 16,
        textDecoration: "none",
      }}>
        <Glyph ch={glyph} size={44} />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.2 }}>
            {t(titleKey)}
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 1 }}>{t(subKey)}</div>
        </div>
        <div style={{ fontSize: 10.5, color: "var(--ink-muted)", fontWeight: 600 }}>{count}</div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </Link>
    );
  }

  return (
    <Link href={`/${section.slug}`} style={{
      display: "flex", flexDirection: "column", gap: 10, padding: "14px",
      border: "1px solid var(--line)", background: "var(--surface)", borderRadius: 18,
      textDecoration: "none", minHeight: 130, position: "relative", overflow: "hidden",
    }}>
      <Glyph ch={glyph} size={36} />
      <div>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.2 }}>
          {t(titleKey)}
        </div>
        <div style={{ fontSize: 11.5, color: "var(--ink-muted)", marginTop: 2, lineHeight: 1.3 }}>
          {t(subKey)}
        </div>
      </div>
      <div style={{ marginTop: "auto", fontSize: 10.5, fontWeight: 600, color: "var(--accent)", letterSpacing: 0.3 }}>
        {count} {t("section.topics").toUpperCase()} →
      </div>
    </Link>
  );
}

function Glyph({ ch, size }: { ch: string; size: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: "var(--accent-soft)", color: "var(--accent)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: size * 0.46,
      flexShrink: 0,
    }}>
      {ch}
    </div>
  );
}
