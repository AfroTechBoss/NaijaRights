"use client";

import { useLanguage } from "@/context/LanguageContext";
import AppBar from "@/components/AppBar";
import BottomNav from "@/components/BottomNav";

const CONTACTS = [
  {
    label: "Police / Emergency",
    items: [
      { name: "Nigeria Police Force", number: "112 / 199", href: "tel:112", phone: true },
      { name: "Fire & Rescue", number: "112", href: "tel:112", phone: true },
    ],
  },
  {
    label: "Legal Aid",
    items: [
      { name: "Legal Aid Council of Nigeria", number: "07031915990", href: "tel:+2347031915990", phone: true },
      { name: "Nigerian Bar Association", number: "nigerianbar.org.ng", href: "https://www.nigerianbar.org.ng/", phone: false },
    ],
  },
  {
    label: "Human Rights",
    items: [
      { name: "National Human Rights Commission", number: "08006472428", href: "tel:+2348006472428", phone: true },
      { name: "NAPTIP Helpline", number: "0800-NAPTIP", href: "tel:+2348002255627874", phone: true },
    ],
  },
  {
    label: "Gender-Based Violence",
    items: [
      { name: "Project Alert (DV Support)", number: "+234 818 009 1072", href: "tel:+2348180091072", phone: true },
    ],
  },
  {
    label: "Road Safety",
    items: [
      { name: "FRSC Emergency", number: "122", href: "tel:122", phone: true },
    ],
  },
  {
    label: "Anti-Corruption",
    items: [
      { name: "ICPC Hotline", number: "+234 707-535-5585", href: "tel:+2347075355585", phone: true },
    ],
  },
];

export default function EmergencyPage() {
  const { t } = useLanguage();

  return (
    <div style={{
      minHeight: "100dvh", background: "var(--bg)",
      display: "flex", flexDirection: "column",
      fontFamily: "'Instrument Sans', system-ui, sans-serif",
    }}>
      <AppBar />

      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 80 }}>
        {/* Hero */}
        <div style={{
          margin: "14px 18px 0",
          background: "var(--bad)", borderRadius: 20, padding: "20px 18px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -20, right: -20, width: 100, height: 100,
            borderRadius: 50, background: "rgba(255,255,255,0.06)",
          }} />
          <div style={{
            display: "inline-block", padding: "4px 10px", borderRadius: 6,
            background: "rgba(255,255,255,0.15)", color: "#fff",
            fontSize: 10.5, fontWeight: 700, letterSpacing: 1.2,
            textTransform: "uppercase", marginBottom: 10,
          }}>
            {t("sos")}
          </div>
          <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 26, fontWeight: 500, color: "#fff", letterSpacing: -0.4, lineHeight: 1.1 }}>
            {t("emergency.title")}
          </div>
          <div style={{ marginTop: 6, fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
            {t("emergency.subtitle")}
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: "rgba(255,255,255,0.55)" }}>
            {t("emergency.tap")}
          </div>
        </div>

        {/* Contact groups */}
        <div style={{ padding: "16px 18px 0", display: "flex", flexDirection: "column", gap: 20 }}>
          {CONTACTS.map((group) => (
            <div key={group.label}>
              <div style={{
                fontSize: 10.5, fontWeight: 700, letterSpacing: 1.2,
                textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 8,
              }}>
                {group.label}
              </div>
              <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden" }}>
                {group.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.phone ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "14px 16px", textDecoration: "none",
                      borderTop: i > 0 ? "1px solid var(--line)" : "none",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 2 }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: 12, color: item.phone ? "var(--good)" : "var(--accent)" }}>
                        {item.number}
                      </div>
                    </div>
                    <div style={{
                      width: 38, height: 38, borderRadius: 19, flexShrink: 0,
                      background: item.phone ? "var(--good-soft)" : "var(--accent-soft)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {item.phone ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--good)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 16 }} />
      </div>

      <BottomNav />
    </div>
  );
}
