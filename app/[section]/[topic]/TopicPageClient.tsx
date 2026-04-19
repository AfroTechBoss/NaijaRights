"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getSectionBySlug, getTopicBySlug } from "@/content/sections";
import AppBar from "@/components/AppBar";
import BottomNav from "@/components/BottomNav";
import TopicTabs from "@/components/TopicTabs";
import EmergencyFAB from "@/components/EmergencyFAB";
import { useSaved } from "@/hooks/useSaved";

export default function TopicPageClient({ params }: { params: Promise<{ section: string; topic: string }> }) {
  const { section: sectionSlug, topic: topicSlug } = use(params);
  const { t, language } = useLanguage();

  const section = getSectionBySlug(sectionSlug);
  const topic = getTopicBySlug(sectionSlug, topicSlug);
  if (!section || !topic) notFound();

  const { isSaved, toggle } = useSaved();
  const saved = isSaved(topic.slug);

  return (
    <div style={{
      minHeight: "100dvh", background: "var(--bg)",
      display: "flex", flexDirection: "column",
      fontFamily: "'Instrument Sans', system-ui, sans-serif",
    }}>
      <AppBar
        right={
          <button
            aria-label={saved ? "Unsave" : "Save"}
            onClick={() => toggle({
              sectionSlug,
              topicSlug: topic.slug,
              title: topic.title[language],
              summary: topic.summary[language],
              savedAt: Date.now(),
            })}
            style={{
              width: 40, height: 40, borderRadius: 20, border: "none",
              background: "transparent", display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer",
              color: saved ? "var(--accent)" : "var(--ink-muted)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"}
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        }
      />

      {/* Hero */}
      <div style={{ padding: "14px 20px 18px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: 0.9, textTransform: "uppercase",
            padding: "3px 8px", borderRadius: 5,
            background: "var(--accent-soft)", color: "var(--accent)",
          }}>
            {t(`sec.${sectionSlug}.title`)}
          </div>
          <div style={{ fontSize: 11, color: "var(--ink-muted)" }}>
            {topic.readMinutes} min read
          </div>
        </div>
        <h1 style={{
          margin: 0, fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 28, fontWeight: 500, lineHeight: 1.1,
          color: "var(--ink)", letterSpacing: -0.6,
        }}>
          {topic.title[language]}
        </h1>
        <p style={{
          margin: "10px 0 0", fontSize: 14, lineHeight: 1.5,
          color: "var(--ink-soft)",
        }}>
          {topic.summary[language]}
        </p>
      </div>

      {/* Tabbed content — fills remaining height */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", paddingBottom: 72 }}>
        <TopicTabs topic={topic} />
      </div>

      <BottomNav />
      <EmergencyFAB />
    </div>
  );
}
