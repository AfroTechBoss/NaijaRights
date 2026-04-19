"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import EmergencySheet from "./EmergencySheet";

export default function EmergencyFAB() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Emergency contacts"
        style={{
          position: "fixed",
          right: 18,
          bottom: 88,
          zIndex: 90,
          width: 58,
          height: 58,
          borderRadius: 29,
          background: "var(--bad)",
          color: "#fff",
          border: "none",
          boxShadow: "0 10px 28px rgba(184,50,31,0.4), 0 4px 10px rgba(184,50,31,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontFamily: "'Instrument Sans', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 9,
          letterSpacing: 0.5,
          gap: 1,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>{t("sos")}</span>
      </button>

      <EmergencySheet open={open} onClose={() => setOpen(false)} />
    </>
  );
}
