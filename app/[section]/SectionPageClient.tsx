"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getSectionBySlug } from "@/content/sections";
import AppBar from "@/components/AppBar";
import BottomNav from "@/components/BottomNav";
import TopicCard from "@/components/TopicCard";
import EmergencyFAB from "@/components/EmergencyFAB";
import { useSaved } from "@/hooks/useSaved";

const GLYPHS: Record<string, string> = {
  "general-public": "P", "drivers": "D", "traders": "T",
  "women": "W", "youth": "Y", "tenants": "H",
};

export default function SectionPageClient({ params }: { params: Promise<{ section: string }> }) {
  const { section: sectionSlug } = use(params);
  const { t, language } = useLanguage();
  const section = getSectionBySlug(sectionSlug);
  if (!section) notFound();

  const { isSaved, toggle } = useSaved();
  const glyph = GLYPHS[section.slug] ?? section.slug[0].toUpperCase();
  const titleKey = `sec.${section.slug}.title`;
  const subKey   = `sec.${section.slug}.sub`;

  return (
    <div style={{ minHeight: "100dvh", background: "var(--bg)", display: "flex", flexDirection: "column", fontFamily: "'Instrument Sans', system-ui, sans-serif" }}>
      <AppBar />

      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 72 }}>
        {/* Section header */}
        <div style={{ padding: "6px 22px 18px", borderBottom: "1px solid var(--line)", position: "relative", overflow: "hidden" }}>
          <div style={{
            width: 54, height: 54, borderRadius: 27, background: "var(--accent-soft)", color: "var(--accent)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: 25,
          }}>{glyph}</div>
          <h1 style={{ margin: "14px 0 2px", fontFamily: "'Fraunces', Georgia, serif", fontSize: 32, fontWeight: 400, color: "var(--ink)", letterSpacing: -0.6 }}>
            {t(titleKey)}
          </h1>
          <div style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.4 }}>{t(subKey)}</div>
        </div>

        {/* Topics label */}
        <div style={{ padding: "10px 18px 6px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.3, color: "var(--ink-muted)", textTransform: "uppercase" }}>
            {t("section.topics")}
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-muted)" }}>{section.topics.length} to read</div>
        </div>

        {/* Topic list */}
        <div style={{ padding: "0 18px" }}>
          {section.topics.map((topic, i) => (
            <TopicCard
              key={topic.slug}
              topic={topic}
              sectionSlug={sectionSlug}
              language={language}
              index={i}
              saved={isSaved(topic.slug)}
              onToggleSave={(slug) => toggle({
                sectionSlug,
                topicSlug: slug,
                title: topic.title[language],
                summary: topic.summary[language],
                savedAt: Date.now(),
              })}
            />
          ))}
        </div>
        <div style={{ height: 80 }} />
      </div>

      <BottomNav />
      <EmergencyFAB />
    </div>
  );
}
