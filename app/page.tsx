"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { sections } from "@/content/sections";
import BottomNav from "@/components/BottomNav";
import SectionCard from "@/components/SectionCard";
import EmergencyFAB from "@/components/EmergencyFAB";
import LanguageSheet from "@/components/LanguageSheet";
import Onboarding, { useOnboarding } from "@/components/Onboarding";

export default function HomePage() {
  const { t, language, greeting } = useLanguage();
  const { show: showOnboarding, complete: completeOnboarding } = useOnboarding();
  const [langOpen, setLangOpen] = useState(false);

  // Featured topic: first topic of general-public
  const featured = sections[0]?.topics[0];

  return (
    <>
      {showOnboarding && <Onboarding onDone={completeOnboarding} />}

      <div style={{
        minHeight: "100dvh", background: "var(--bg)",
        display: "flex", flexDirection: "column",
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        overflowX: "hidden",
      }}>
        {/* Header */}
        <div style={{ padding: "14px 18px 8px", display: "flex", alignItems: "center", gap: 10, position: "sticky", top: 0, background: "var(--bg)", zIndex: 50, borderBottom: "1px solid var(--line)" }}>
          <div style={{
            width: 34, height: 34, borderRadius: 17, background: "var(--ink)", color: "var(--bg)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: 16, flexShrink: 0,
          }}>N</div>
          <div style={{ flex: 1, fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 18, color: "var(--ink)", letterSpacing: -0.3 }}>
            Naija<span style={{ color: "var(--accent)", fontStyle: "italic" }}>Rights</span>
          </div>
          {/* Language button */}
          <button onClick={() => setLangOpen(true)} style={{
            display: "flex", alignItems: "center", gap: 6, padding: "7px 11px", borderRadius: 18,
            background: "var(--surface)", border: "1px solid var(--line)", color: "var(--ink)",
            fontSize: 12, fontWeight: 600, cursor: "pointer",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/></svg>
            {language.toUpperCase()}
          </button>
        </div>

        <main style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>
          {/* Greeting */}
          <div style={{ padding: "14px 18px 6px" }}>
            <div style={{ fontSize: 12, color: "var(--ink-muted)", fontWeight: 500, letterSpacing: 0.3, textTransform: "uppercase" }}>
              {greeting}
            </div>
            <h1 style={{
              margin: "4px 0 0", fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400, fontSize: 28,
              lineHeight: 1.1, color: "var(--ink)", letterSpacing: -0.6,
            }}>
              {t("hero.a")}{" "}<span style={{ fontStyle: "italic", color: "var(--accent)" }}>{t("hero.b")}</span>
            </h1>
          </div>

          {/* Search bar */}
          <div style={{ padding: "14px 18px 4px" }}>
            <Link href="/search" style={{
              width: "100%", height: 46, borderRadius: 23, border: "1px solid var(--line)",
              background: "var(--surface)", display: "flex", alignItems: "center", gap: 10,
              padding: "0 16px", textDecoration: "none", color: "var(--ink-muted)",
              fontSize: 14, fontWeight: 500,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>{t("home.search.placeholder")}</span>
            </Link>
          </div>

          {/* Featured card */}
          {featured && (
            <div style={{ padding: "14px 18px 6px" }}>
              <Link href={`/general-public/${featured.slug}`} style={{
                display: "block", textDecoration: "none",
                background: "var(--ink)", color: "var(--bg)", borderRadius: 20,
                padding: "18px 18px 16px", position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: 10.5, letterSpacing: 1.2, fontWeight: 700, color: "var(--tint)", textTransform: "uppercase" }}>
                    {t("hero.featured.kicker")}
                  </div>
                  <div style={{ marginTop: 6, fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, lineHeight: 1.15, fontWeight: 500, letterSpacing: -0.4 }}>
                    {t("hero.featured.title")}
                  </div>
                  <div style={{ marginTop: 10, fontSize: 12.5, opacity: 0.7 }}>{t("hero.featured.tags")}</div>
                </div>
                <div style={{
                  position: "absolute", right: 16, top: 16, width: 36, height: 36, borderRadius: 18,
                  background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            </div>
          )}

          {/* Sections */}
          <div style={{ padding: "18px 18px 8px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.2 }}>
              {t("home.who")}
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-muted)" }}>{t("home.sections")}</div>
          </div>

          <div style={{ padding: "4px 18px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {sections.map((section) => (
              <SectionCard key={section.slug} section={section} language={language} variant="grid" />
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{ margin: "24px 18px 0", padding: 16, borderRadius: 14, background: "var(--surface)", border: "1px solid var(--line)" }}>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 13, fontWeight: 500, color: "var(--ink)", marginBottom: 4 }}>Made for Nigeria.</div>
            <div style={{ fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.5 }}>
              All content is drawn from official Nigerian legislation. Free forever. No personal data collected.
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <Link href="/privacy" style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/sources" style={{ fontSize: 12, color: "var(--accent)", textDecoration: "none" }}>Legal Sources</Link>
            </div>
          </div>
        </main>

        <BottomNav />
        <EmergencyFAB />
        <LanguageSheet open={langOpen} onClose={() => setLangOpen(false)} />
      </div>
    </>
  );
}
