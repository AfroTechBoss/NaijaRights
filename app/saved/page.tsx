"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import AppBar from "@/components/AppBar";
import BottomNav from "@/components/BottomNav";
import EmergencyFAB from "@/components/EmergencyFAB";
import { useSaved } from "@/hooks/useSaved";

export default function SavedPage() {
  const { t } = useLanguage();
  const { saved, remove } = useSaved();

  return (
    <div style={{
      minHeight: "100dvh", background: "var(--bg)",
      display: "flex", flexDirection: "column",
      fontFamily: "'Instrument Sans', system-ui, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 18px 10px", display: "flex", alignItems: "baseline",
        justifyContent: "space-between", borderBottom: "1px solid var(--line)",
        background: "var(--bg)", position: "sticky", top: 0, zIndex: 10,
      }}>
        <div>
          <h1 style={{
            margin: 0, fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 26, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.5,
          }}>
            {t("saved.title")}
          </h1>
          <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 2 }}>
            {t("saved.subtitle")}
          </div>
        </div>
        {saved.length > 0 && (
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: 0.8,
            padding: "4px 10px", borderRadius: 10,
            background: "var(--accent-soft)", color: "var(--accent)",
          }}>
            {saved.length}
          </div>
        )}
      </div>

      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>
        {saved.length === 0 ? (
          /* Empty state */
          <div style={{ padding: "60px 28px", textAlign: "center" }}>
            <div style={{
              width: 60, height: 60, borderRadius: 30, background: "var(--surface)",
              border: "1.5px solid var(--line)", display: "flex", alignItems: "center",
              justifyContent: "center", margin: "0 auto 18px",
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ink-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.3 }}>
              {t("saved.empty.title")}
            </div>
            <div style={{ marginTop: 10, fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.55 }}>
              {t("saved.empty.sub")}
            </div>
            <Link href="/" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              marginTop: 22, padding: "10px 20px", borderRadius: 20,
              background: "var(--ink)", color: "var(--bg)",
              fontSize: 13, fontWeight: 600, textDecoration: "none",
            }}>
              Browse topics
            </Link>
          </div>
        ) : (
          <div style={{ padding: "12px 18px 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[...saved].reverse().map((item) => (
                <div
                  key={item.topicSlug}
                  style={{
                    background: "var(--surface)", border: "1px solid var(--line)",
                    borderRadius: 16, padding: "14px", position: "relative",
                  }}
                >
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: 0.8,
                    textTransform: "uppercase", color: "var(--accent)", marginBottom: 4,
                  }}>
                    {item.sectionSlug.replace(/-/g, " ")}
                  </div>
                  <Link
                    href={`/${item.sectionSlug}/${item.topicSlug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{
                      fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 500,
                      color: "var(--ink)", letterSpacing: -0.2, lineHeight: 1.2, marginBottom: 5,
                    }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.45 }}>
                      {item.summary.slice(0, 100)}{item.summary.length > 100 ? "…" : ""}
                    </div>
                  </Link>
                  <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--line)",
                  }}>
                    <div style={{ fontSize: 11, color: "var(--ink-muted)" }}>
                      Saved {new Date(item.savedAt).toLocaleDateString("en-NG", { day: "numeric", month: "short" })}
                    </div>
                    <button
                      onClick={() => remove(item.topicSlug)}
                      style={{
                        display: "flex", alignItems: "center", gap: 5,
                        padding: "5px 10px", borderRadius: 10, border: "1px solid var(--line)",
                        background: "transparent", cursor: "pointer",
                        fontSize: 11, fontWeight: 600, color: "var(--ink-muted)",
                        fontFamily: "'Instrument Sans', system-ui, sans-serif",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
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
