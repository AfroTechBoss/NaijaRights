"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  title?: string;
  onBack?: () => void;
  right?: ReactNode;
  border?: boolean;
}

export default function AppBar({ title, onBack, right, border = true }: Props) {
  const router = useRouter();

  function handleBack() {
    if (onBack) { onBack(); return; }
    router.back();
  }

  return (
    <div style={{
      padding: "10px 14px 10px 10px", display: "flex", alignItems: "center", gap: 4,
      background: "var(--bg)", borderBottom: border ? "1px solid var(--line)" : "none",
      flexShrink: 0, fontFamily: "'Instrument Sans', system-ui, sans-serif",
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <button onClick={handleBack} aria-label="Back" style={{
        width: 40, height: 40, borderRadius: 20, border: "none",
        background: "transparent", display: "flex", alignItems: "center",
        justifyContent: "center", cursor: "pointer", color: "var(--ink)", flexShrink: 0,
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </button>
      {title && (
        <div style={{ flex: 1, fontSize: 16, fontWeight: 600, color: "var(--ink)", letterSpacing: -0.1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {title}
        </div>
      )}
      {!title && <div style={{ flex: 1 }} />}
      {right}
    </div>
  );
}
