"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Smartphone, Download } from "lucide-react";

const APK_URL =
  "https://github.com/AfroTechBoss/NaijaRights/releases/latest/download/NaijaRights.apk";

export default function DownloadModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show inside the Android app (Capacitor sets window.Capacitor)
    if (typeof window !== "undefined" && (window as any).Capacitor?.isNative) return;

    // Show after a short delay so the splash screen has cleared
    const t = setTimeout(() => setVisible(true), 3200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setVisible(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 8000,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          animation: "fadeIn 0.25s ease",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 8001,
          background: "#ffffff",
          borderRadius: "24px 24px 0 0",
          padding: "28px 24px 40px",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.18)",
          animation: "slideUp 0.35s cubic-bezier(0.34,1.2,0.64,1)",
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "none",
            background: "#f5f5f4",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#78716c",
          }}
        >
          <X size={16} />
        </button>

        {/* Logo + heading */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", overflow: "hidden", flexShrink: 0 }}>
            <Image src="/logo.png" alt="NaijaRights" width={52} height={52} unoptimized />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "18px", color: "#006e41", fontFamily: "var(--font-manrope)", lineHeight: 1.2 }}>
              Get the Mobile App
            </div>
            <div style={{ fontSize: "13px", color: "#78716c", marginTop: "2px" }}>
              Access your rights offline — anywhere, anytime.
            </div>
          </div>
        </div>

        <p style={{ fontSize: "14px", color: "#57534e", lineHeight: 1.6, marginBottom: "24px" }}>
          Download NaijaRights on your Android phone and know your legal rights even without internet access.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Play Store — coming soon */}
          <button
            disabled
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "14px 20px",
              borderRadius: "14px",
              border: "1.5px solid #e7e5e4",
              background: "#fafaf9",
              cursor: "not-allowed",
              opacity: 0.7,
            }}
          >
            {/* Google Play logo SVG */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3.18 23.5c.3.17.64.2.96.1L15.5 12 12 8.5 3.18 23.5Z" fill="#EA4335"/>
              <path d="M20.5 10.5 17 8.6l-3.5 3.4 3.5 3.4 3.52-1.9c1-.56 1-.94 0-1.5Z" fill="#FBBC04"/>
              <path d="M3.18.5C2.7.68 2.38 1.14 2.38 1.8V22.2c0 .66.33 1.12.8 1.3L15.5 12 3.18.5Z" fill="#4285F4"/>
              <path d="M15.5 12 4.14.5C3.82.35 3.48.38 3.18.5L15.5 12Z" fill="#34A853"/>
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "10px", color: "#78716c", lineHeight: 1 }}>Coming soon on</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#1c1917", lineHeight: 1.3 }}>Google Play</div>
            </div>
          </button>

          {/* Download APK */}
          <a
            href={APK_URL}
            download
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "14px 20px",
              borderRadius: "14px",
              border: "none",
              background: "linear-gradient(135deg, #006e41, #008751)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "0 4px 14px rgba(0,110,65,0.35)",
            }}
          >
            <Download size={18} />
            Download APK (Android)
          </a>
        </div>

        <p style={{ fontSize: "11px", color: "#a8a29e", textAlign: "center", marginTop: "16px", lineHeight: 1.5 }}>
          Free forever · No sign-up required · Android 7.0+
        </p>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `}</style>
    </>
  );
}
