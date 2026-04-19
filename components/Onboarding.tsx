"use client";

import { useState, useEffect } from "react";
import { useLanguage, LANGUAGES } from "@/context/LanguageContext";

const ONBOARDING_KEY = "nr-onboarded";

export function useOnboarding() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem(ONBOARDING_KEY)) setShow(true);
  }, []);
  function complete() {
    localStorage.setItem(ONBOARDING_KEY, "1");
    setShow(false);
  }
  return { show, complete };
}

export default function Onboarding({ onDone }: { onDone: () => void }) {
  const { t, language, setLanguage } = useLanguage();
  const [step, setStep] = useState(0);
  const [pickedLang, setPickedLang] = useState(language);

  const slides = [
    {
      title: t("onb.1.title"),
      sub: t("onb.1.sub"),
      art: <ArtBook />,
      pickLang: false,
    },
    {
      title: t("onb.2.title"),
      sub: t("onb.2.sub"),
      art: <ArtLanguages />,
      pickLang: true,
    },
    {
      title: t("onb.3.title"),
      sub: t("onb.3.sub"),
      art: <ArtHelp />,
      pickLang: false,
    },
  ];

  function handleDone() {
    setLanguage(pickedLang);
    onDone();
  }

  const s = slides[step];

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "var(--bg)", display: "flex", flexDirection: "column",
      fontFamily: "'Instrument Sans', system-ui, sans-serif", overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{ padding: "20px 22px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 18, color: "var(--ink)", letterSpacing: -0.3 }}>
          Naija<span style={{ color: "var(--accent)", fontStyle: "italic" }}>Rights</span>
        </div>
        <button onClick={handleDone} style={{ background: "transparent", border: "none", color: "var(--ink-muted)", fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
          {t("onb.skip")}
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "12px 28px 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <div style={{ marginBottom: 32 }}>{s.art}</div>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 34, lineHeight: 1.05, color: "var(--ink)", margin: 0, letterSpacing: -0.8 }}>
          {s.title}
        </h1>
        <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.5, color: "var(--ink-soft)", maxWidth: 300 }}>{s.sub}</p>

        {s.pickLang && (
          <div style={{ marginTop: 22, width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
            {LANGUAGES.map((l) => (
              <button key={l.code} onClick={() => setPickedLang(l.code)} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 14px", borderRadius: 12, cursor: "pointer",
                border: `1.5px solid ${pickedLang === l.code ? "var(--accent)" : "var(--line)"}`,
                background: pickedLang === l.code ? "var(--accent-soft)" : "var(--surface)",
                textAlign: "left",
              }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "var(--ink)" }}>{l.nativeLabel}</div>
                  <div style={{ fontSize: 11, color: "var(--ink-muted)", fontStyle: "italic" }}>{l.sample}</div>
                </div>
                <div style={{
                  width: 18, height: 18, borderRadius: 9,
                  border: `2px solid ${pickedLang === l.code ? "var(--accent)" : "var(--line)"}`,
                  background: pickedLang === l.code ? "var(--accent)" : "transparent",
                }} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ padding: "18px 22px 36px", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Dots */}
        <div style={{ display: "flex", gap: 6, justifyContent: "center" }}>
          {slides.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 22 : 6, height: 6, borderRadius: 3,
              background: i === step ? "var(--accent)" : "var(--line)",
              transition: "width 220ms ease",
            }} />
          ))}
        </div>
        <button
          onClick={() => step < slides.length - 1 ? setStep(step + 1) : handleDone()}
          style={{
            height: 52, borderRadius: 26, border: "none",
            background: "var(--ink)", color: "var(--bg)",
            fontSize: 15, fontWeight: 600, letterSpacing: 0.2, cursor: "pointer",
          }}
        >
          {step < slides.length - 1 ? t("onb.continue") : t("onb.start")}
        </button>
      </div>
    </div>
  );
}

function ArtBook() {
  return (
    <svg width="180" height="130" viewBox="0 0 180 130">
      <rect x="28" y="20" width="124" height="90" rx="6" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2"/>
      <line x1="90" y1="20" x2="90" y2="110" stroke="var(--ink)" strokeWidth="1.5"/>
      {[40,50,60,70,80].map((y,i) => <line key={i} x1="36" y1={y} x2="82" y2={y} stroke="var(--ink-muted)" strokeWidth="1.2"/>)}
      {[40,50,60,70,80].map((y,i) => <line key={i} x1="98" y1={y} x2="144" y2={y} stroke="var(--ink-muted)" strokeWidth="1.2" opacity={i < 3 ? 1 : 0.4}/>)}
      <circle cx="145" cy="30" r="16" fill="var(--accent)"/>
      <path d="M139 30 l4 4 l8 -8" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="36" y="94" width="38" height="10" rx="2" fill="var(--accent-soft)"/>
    </svg>
  );
}

function ArtLanguages() {
  const items = [
    { t: "A" }, { t: "Ẹ" }, { t: "ك" }, { t: "ẹ" }, { t: "I" },
  ];
  return (
    <svg width="200" height="130" viewBox="0 0 200 130">
      {items.map((g, i) => {
        const x = 30 + i * 34, y = 55 + Math.sin(i * 1.3) * 12;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="20" fill="var(--accent)" opacity="0.15"/>
            <text x={x} y={y + 6} fontFamily="Fraunces, Georgia, serif" fontSize="20" fontWeight="600" textAnchor="middle" fill="var(--ink)">{g.t}</text>
          </g>
        );
      })}
      <path d="M20 95 Q100 115 180 95" stroke="var(--ink)" strokeWidth="1.5" fill="none" opacity="0.3"/>
    </svg>
  );
}

function ArtHelp() {
  return (
    <svg width="180" height="130" viewBox="0 0 180 130">
      <circle cx="90" cy="65" r="50" fill="var(--bad)" opacity="0.08"/>
      <circle cx="90" cy="65" r="36" fill="var(--bad)" opacity="0.16"/>
      <circle cx="90" cy="65" r="24" fill="var(--bad)"/>
      <text x="90" y="72" fontFamily="Fraunces, Georgia, serif" fontSize="22" fontWeight="600" textAnchor="middle" fill="#fff">SOS</text>
      <text x="90" y="110" fontFamily="Instrument Sans, system-ui" fontSize="9" fontWeight="700" letterSpacing="1.5" textAnchor="middle" fill="var(--bad)">SOS · 112 · NAPTIP</text>
    </svg>
  );
}
