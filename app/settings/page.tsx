"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage, LANGUAGES } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import BottomNav from "@/components/BottomNav";
import EmergencyFAB from "@/components/EmergencyFAB";
import LanguageSheet from "@/components/LanguageSheet";

function Row({
  label, value, onClick, href, chevron = true,
}: {
  label: string;
  value?: string;
  onClick?: () => void;
  href?: string;
  chevron?: boolean;
}) {
  const inner = (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px 18px", cursor: onClick || href ? "pointer" : "default",
    }}>
      <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {value && <div style={{ fontSize: 13, color: "var(--ink-muted)" }}>{value}</div>}
        {chevron && (onClick || href) && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </Link>
    );
  }
  return <div onClick={onClick}>{inner}</div>;
}

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      style={{
        width: 46, height: 26, borderRadius: 13, border: "none",
        background: on ? "var(--accent)" : "var(--line)",
        cursor: "pointer", position: "relative", transition: "background 200ms",
        flexShrink: 0,
      }}
    >
      <div style={{
        position: "absolute", top: 3, left: on ? 23 : 3,
        width: 20, height: 20, borderRadius: 10, background: "#fff",
        transition: "left 200ms", boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
      }} />
    </button>
  );
}

function ToggleRow({ label, on, onToggle }: { label: string; on: boolean; onToggle: () => void }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 18px" }}>
      <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{label}</div>
      <Toggle on={on} onToggle={onToggle} />
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ padding: "18px 18px 6px", fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "var(--ink-muted)" }}>
      {label}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      margin: "0 18px", background: "var(--surface)",
      border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden",
    }}>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "var(--line)", margin: "0 18px" }} />;
}

export default function SettingsPage() {
  const { t, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const [analyticsOn, setAnalyticsOn] = useState(true);

  const currentLang = LANGUAGES.find((l) => l.code === language);

  return (
    <div style={{
      minHeight: "100dvh", background: "var(--bg)",
      display: "flex", flexDirection: "column",
      fontFamily: "'Instrument Sans', system-ui, sans-serif",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 18px 10px", borderBottom: "1px solid var(--line)",
        background: "var(--bg)", position: "sticky", top: 0, zIndex: 10,
      }}>
        <h1 style={{
          margin: 0, fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 26, fontWeight: 500, color: "var(--ink)", letterSpacing: -0.5,
        }}>
          {t("settings.title")}
        </h1>
        <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 2 }}>
          {t("settings.subtitle")}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>
        {/* Preferences */}
        <SectionLabel label="Preferences" />
        <Card>
          <Row label={t("settings.language")} value={currentLang?.nativeLabel} onClick={() => setLangOpen(true)} />
          <Divider />
          <ToggleRow label={t("settings.darkmode")} on={theme === "dark"} onToggle={toggleTheme} />
          <Divider />
          <ToggleRow label={t("settings.analytics")} on={analyticsOn} onToggle={() => setAnalyticsOn(!analyticsOn)} />
        </Card>

        {/* Legal */}
        <SectionLabel label="Legal" />
        <Card>
          <Row label={t("settings.privacy")} href="/privacy" />
          <Divider />
          <Row label={t("settings.sources")} href="/sources" />
        </Card>

        {/* About */}
        <SectionLabel label="About" />
        <Card>
          <div style={{ padding: "14px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 18, background: "var(--ink)", color: "var(--bg)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: 17,
              }}>N</div>
              <div>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 16, color: "var(--ink)", letterSpacing: -0.2 }}>
                  Naija<span style={{ color: "var(--accent)", fontStyle: "italic" }}>Rights</span>
                </div>
                <div style={{ fontSize: 11, color: "var(--ink-muted)" }}>Free forever · No data collected</div>
              </div>
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>
              {t("settings.made.body")}
            </div>
          </div>
        </Card>

        <div style={{ height: 24 }} />
      </div>

      <BottomNav />
      <EmergencyFAB />
      <LanguageSheet open={langOpen} onClose={() => setLangOpen(false)} />
    </div>
  );
}
