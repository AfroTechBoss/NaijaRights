"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { sections } from "@/content/sections";
import AppBar from "@/components/AppBar";
import BottomNav from "@/components/BottomNav";
import EmergencyFAB from "@/components/EmergencyFAB";
import type { Language } from "@/context/LanguageContext";

type Result = {
  sectionSlug: string;
  topicSlug: string;
  title: string;
  summary: string;
  sectionTitle: string;
};

function searchAll(query: string, language: Language): Result[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: Result[] = [];

  for (const section of sections) {
    const sectionTitle = section.title[language] ?? section.title.en;
    for (const topic of section.topics) {
      const title = topic.title[language] ?? topic.title.en ?? "";
      const summary = topic.summary[language] ?? topic.summary.en ?? "";
      const canDo = (topic.canDo[language] ?? topic.canDo.en ?? []).join(" ");
      const cannotDo = (topic.cannotDo[language] ?? topic.cannotDo.en ?? []).join(" ");
      const laws = topic.laws.map((l) => l.name + " " + (l.plainEnglish[language] ?? l.plainEnglish.en ?? "")).join(" ");

      const haystack = [title, summary, canDo, cannotDo, laws, sectionTitle].join(" ").toLowerCase();
      if (haystack.includes(q)) {
        results.push({ sectionSlug: section.slug, topicSlug: topic.slug, title, summary, sectionTitle });
      }
    }
  }
  return results;
}

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 2 }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

export default function SearchPage() {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchAll(query, language), [query, language]);

  return (
    <div style={{
      minHeight: "100dvh", background: "var(--bg)",
      display: "flex", flexDirection: "column",
      fontFamily: "'Instrument Sans', system-ui, sans-serif",
    }}>
      <AppBar border={false} />

      <div style={{ padding: "0 18px 10px", background: "var(--bg)", borderBottom: "1px solid var(--line)" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          height: 46, borderRadius: 23, border: "1.5px solid var(--line)",
          background: "var(--surface)", padding: "0 16px",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-muted)" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("home.search.placeholder")}
            style={{
              flex: 1, border: "none", background: "transparent", outline: "none",
              fontSize: 14, fontWeight: 500, color: "var(--ink)",
              fontFamily: "'Instrument Sans', system-ui, sans-serif",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--ink-muted)", padding: 0, lineHeight: 1 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>
        {!query.trim() ? (
          /* Empty state */
          <div style={{ padding: "48px 28px", textAlign: "center" }}>
            <div style={{
              width: 56, height: 56, borderRadius: 28, background: "var(--surface)",
              border: "1.5px solid var(--line)", display: "flex", alignItems: "center",
              justifyContent: "center", margin: "0 auto 16px",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink-muted)" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.3 }}>
              Search your rights
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.5 }}>
              Try words like "police", "arrest", "eviction",<br />or search in any of the 5 languages.
            </div>
          </div>
        ) : results.length === 0 ? (
          /* No results */
          <div style={{ padding: "48px 28px", textAlign: "center" }}>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.3 }}>
              No matches
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: "var(--ink-muted)" }}>
              {t("home.search.noresults")}
            </div>
          </div>
        ) : (
          /* Results */
          <div style={{ padding: "12px 18px 0" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2, color: "var(--ink-muted)", textTransform: "uppercase", marginBottom: 10 }}>
              {results.length} result{results.length !== 1 ? "s" : ""}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {results.map((r) => (
                <Link
                  key={`${r.sectionSlug}/${r.topicSlug}`}
                  href={`/${r.sectionSlug}/${r.topicSlug}`}
                  style={{
                    display: "block", textDecoration: "none",
                    background: "var(--surface)", border: "1px solid var(--line)",
                    borderRadius: 14, padding: "14px",
                  }}
                >
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>
                    {r.sectionTitle}
                  </div>
                  <div style={{
                    fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 500,
                    color: "var(--ink)", letterSpacing: -0.2, lineHeight: 1.2, marginBottom: 5,
                  }}>
                    {highlight(r.title, query)}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.45 }}>
                    {highlight(r.summary.slice(0, 120) + (r.summary.length > 120 ? "…" : ""), query)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav />
      <EmergencyFAB />
    </div>
  );
}
