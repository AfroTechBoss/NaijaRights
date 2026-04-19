"use client";

import { useLanguage } from "@/context/LanguageContext";

const EMERGENCY = [
  { name: "Police Emergency",        num: "112",           tag: "Nationwide, 24/7",           tone: "bad"    },
  { name: "NAPTIP (Trafficking)",    num: "0703 000 0203", tag: "Human trafficking",           tone: "accent" },
  { name: "Gender Violence Hotline", num: "0800 033 3333", tag: "Free, confidential",          tone: "accent" },
  { name: "Legal Aid Council",       num: "0909 900 1111", tag: "Free legal representation",   tone: "accent" },
  { name: "Police Complaints (PCRU)",num: "0805 700 0001", tag: "Report officer misconduct",   tone: "accent" },
  { name: "FRSC",                    num: "122",           tag: "Road safety, accidents",       tone: "accent" },
  { name: "Fire Service",            num: "0803 123 3002", tag: "Fire emergencies",             tone: "accent" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EmergencySheet({ open, onClose }: Props) {
  const { t } = useLanguage();

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200,
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity 200ms ease",
      }} />

      {/* Sheet */}
      <div style={{
        position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 201,
        background: "var(--bg)", borderTopLeftRadius: 24, borderTopRightRadius: 24,
        maxHeight: "90dvh", overflow: "hidden",
        display: "flex", flexDirection: "column",
        transform: open ? "translateY(0)" : "translateY(100%)",
        transition: "transform 280ms cubic-bezier(0.2, 0.9, 0.2, 1)",
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
      }}>
        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 4px" }}>
          <div style={{ width: 44, height: 4, borderRadius: 2, background: "var(--line)" }} />
        </div>

        {/* Header */}
        <div style={{ padding: "6px 22px 14px", borderBottom: "1px solid var(--line)" }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--bad)", letterSpacing: 1.4, textTransform: "uppercase" }}>
            {t("emergency.title")}
          </div>
          <h2 style={{
            margin: "6px 0 4px", fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 400, fontSize: 24, color: "var(--ink)", letterSpacing: -0.4,
          }}>
            {t("emergency.subtitle")}
          </h2>
          <div style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>{t("emergency.tap")}</div>
        </div>

        {/* List */}
        <div style={{ overflowY: "auto", padding: "6px 14px 24px" }}>
          {EMERGENCY.map((e, i) => (
            <a
              key={i}
              href={`tel:${e.num.replace(/\s/g, "")}`}
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "14px 10px",
                borderBottom: i < EMERGENCY.length - 1 ? "1px solid var(--line)" : "none",
                textDecoration: "none",
              }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 21, flexShrink: 0,
                background: e.tone === "bad" ? "var(--bad)" : "var(--accent)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)", letterSpacing: -0.1 }}>{e.name}</div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 1 }}>{e.tag}</div>
              </div>
              <div style={{
                fontFamily: "'Fraunces', Georgia, serif", fontSize: 17,
                fontWeight: 500, color: e.tone === "bad" ? "var(--bad)" : "var(--ink)", letterSpacing: -0.3,
              }}>{e.num}</div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
