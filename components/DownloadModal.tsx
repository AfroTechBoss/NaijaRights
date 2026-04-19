"use client";

import { useEffect, useState } from "react";

const APK_URL =
  "https://github.com/AfroTechBoss/NaijaRights/releases/latest/download/NaijaRights-latest.apk";

const SEEN_KEY = "nr-download-seen";

function isNativeApp() {
  return typeof window !== "undefined" &&
    ((window as any).Capacitor?.isNativePlatform?.() ||
      (window as any).Capacitor?.isNative === true);
}

export default function DownloadModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Never show inside the native app
    if (isNativeApp()) return;
    // Only show if user hasn't seen it before
    if (localStorage.getItem(SEEN_KEY)) return;

    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    localStorage.setItem(SEEN_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed", inset: 0, zIndex: 8000,
          background: "rgba(0,0,0,0.5)", backdropFilter: "blur(6px)",
          animation: "nr-fadeIn 0.2s ease",
        }}
      />

      {/* Sheet */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 8001,
        background: "var(--surface)", borderRadius: "22px 22px 0 0",
        padding: "24px 20px 40px",
        boxShadow: "0 -6px 40px rgba(0,0,0,0.15)",
        animation: "nr-slideUp 0.4s cubic-bezier(0.22,1,0.36,1)",
        maxWidth: 480, margin: "0 auto",
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
      }}>
        {/* Drag handle */}
        <div style={{
          width: 36, height: 4, borderRadius: 2, background: "var(--line)",
          margin: "0 auto 20px",
        }} />

        {/* Close */}
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute", top: 16, right: 16,
            width: 32, height: 32, borderRadius: 16, border: "none",
            background: "var(--line)", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--ink-muted)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Logo + heading */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <img
            src="/logo.png"
            alt="NaijaRights"
            style={{ width: 52, height: 52, borderRadius: 14, flexShrink: 0, objectFit: "cover" }}
          />
          <div>
            <div style={{
              fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500,
              fontSize: 20, color: "var(--ink)", letterSpacing: -0.3, lineHeight: 1.1,
            }}>
              Get the app.
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 3 }}>
              Know your rights offline — anywhere.
            </div>
          </div>
        </div>

        <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 20 }}>
          Download NaijaRights on your Android phone and access all your legal rights even without internet.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Google Play — coming soon */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "13px 16px", borderRadius: 14,
            border: "1px solid var(--line)", background: "var(--bg)",
            opacity: 0.55, cursor: "not-allowed",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src="/google-play-png-logo-3800.png"
                alt="Google Play"
                style={{ width: 26, height: 26, objectFit: "contain", flexShrink: 0 }}
              />
              <div>
                <div style={{ fontSize: 10, color: "var(--ink-muted)", lineHeight: 1 }}>Coming soon on</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>Google Play</div>
              </div>
            </div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase",
              padding: "4px 8px", borderRadius: 6,
              background: "var(--accent-soft)", color: "var(--accent)",
            }}>
              Soon
            </div>
          </div>

          {/* Download APK */}
          <a
            href={APK_URL}
            onClick={dismiss}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "14px 20px", borderRadius: 14, border: "none",
              background: "var(--ink)", color: "var(--bg)",
              textDecoration: "none", fontWeight: 700, fontSize: 15,
              fontFamily: "'Instrument Sans', system-ui, sans-serif",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download APK (Android)
          </a>
        </div>

        <p style={{ fontSize: 11, color: "var(--ink-muted)", textAlign: "center", marginTop: 14, lineHeight: 1.5 }}>
          Free forever · No sign-up · Android 6.0+
        </p>
      </div>

      <style>{`
        @keyframes nr-fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes nr-slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `}</style>
    </>
  );
}
