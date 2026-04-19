"use client";

import { useLanguage, LANGUAGES } from "@/context/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function LanguageSheet({ open, onClose }: Props) {
  const { language, setLanguage, t } = useLanguage();

  function handleSelect(code: typeof language) {
    setLanguage(code);
    onClose();
  }

  return (
    <>
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200,
        opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity 200ms ease",
      }} />
      <div style={{
        position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 201,
        background: "var(--bg)", borderTopLeftRadius: 24, borderTopRightRadius: 24,
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        transform: open ? "translateY(0)" : "translateY(100%)",
        transition: "transform 280ms cubic-bezier(0.2, 0.9, 0.2, 1)",
      }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 4px" }}>
          <div style={{ width: 44, height: 4, borderRadius: 2, background: "var(--line)" }} />
        </div>
        <div style={{ padding: "6px 22px 16px" }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--accent)", letterSpacing: 1.4, textTransform: "uppercase" }}>
            {t("lang.title")}
          </div>
          <h2 style={{
            margin: "4px 0 4px", fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 400, fontSize: 22, color: "var(--ink)", letterSpacing: -0.4,
          }}>
            {t("lang.choose")}
          </h2>
        </div>
        <div style={{ padding: "0 14px 28px" }}>
          {LANGUAGES.map((lang) => {
            const active = language === lang.code;
            return (
              <button key={lang.code} onClick={() => handleSelect(lang.code)} style={{
                width: "100%", textAlign: "left", border: "none", cursor: "pointer",
                background: active ? "var(--accent-soft)" : "transparent",
                borderRadius: 12, padding: "12px 12px", marginBottom: 4,
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 18,
                  background: "var(--surface)", border: "1px solid var(--line)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, fontSize: 13,
                  color: "var(--ink)", flexShrink: 0,
                }}>
                  {lang.code.toUpperCase()}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)" }}>{lang.nativeLabel}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-muted)", fontStyle: "italic" }}>{lang.sample}</div>
                </div>
                {active && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--accent)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
