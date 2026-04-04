"use client";

import { useEffect, useState } from "react";
import { Scale } from "lucide-react";

export default function SplashScreen() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "done">("in");

  useEffect(() => {
    // in → hold (logo animates in)
    const t1 = setTimeout(() => setPhase("hold"), 50);
    // hold → out (start fade-out)
    const t2 = setTimeout(() => setPhase("out"), 1800);
    // out → done (unmount)
    const t3 = setTimeout(() => setPhase("done"), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  const visible = phase === "hold";
  const fading  = phase === "out";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #006e41 0%, #004d2d 60%, #003320 100%)",
        opacity: fading ? 0 : 1,
        transition: fading ? "opacity 0.55s cubic-bezier(0.4,0,0.2,1)" : "none",
        pointerEvents: fading ? "none" : "all",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "-60px", right: "-60px",
        width: "220px", height: "220px", borderRadius: "50%",
        background: "rgba(255,255,255,0.06)", filter: "blur(40px)",
      }} />
      <div style={{
        position: "absolute", bottom: "-40px", left: "-40px",
        width: "180px", height: "180px", borderRadius: "50%",
        background: "rgba(141,248,183,0.08)", filter: "blur(40px)",
      }} />

      {/* Logo mark */}
      <div style={{
        width: "80px", height: "80px", borderRadius: "24px",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.18)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "20px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        transform: visible ? "scale(1) translateY(0)" : "scale(0.7) translateY(16px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.55s cubic-bezier(0.34,1.56,0.64,1), opacity 0.45s ease",
      }}>
        <Scale style={{ width: "36px", height: "36px", color: "#e7ffeb" }} />
      </div>

      {/* Brand name */}
      <div style={{
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
        fontWeight: 800,
        fontSize: "26px",
        letterSpacing: "0.12em",
        color: "#e7ffeb",
        transform: visible ? "translateY(0)" : "translateY(12px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.55s 0.1s cubic-bezier(0.34,1.3,0.64,1), opacity 0.45s 0.1s ease",
      }}>
        NAIJARIGHTS
      </div>

      {/* Tagline */}
      <div style={{
        marginTop: "8px",
        fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        fontSize: "13px",
        letterSpacing: "0.04em",
        color: "rgba(231,255,235,0.65)",
        transform: visible ? "translateY(0)" : "translateY(8px)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.5s 0.2s ease, opacity 0.45s 0.2s ease",
      }}>
        Know Your Rights in Nigeria
      </div>

      {/* Progress bar */}
      <div style={{
        position: "absolute",
        bottom: "52px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "120px",
        height: "3px",
        borderRadius: "999px",
        background: "rgba(255,255,255,0.12)",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          borderRadius: "999px",
          background: "linear-gradient(90deg, #8df8b7, #e7ffeb)",
          width: visible ? "100%" : "0%",
          transition: visible ? "width 1.6s cubic-bezier(0.4,0,0.2,1)" : "none",
        }} />
      </div>

      {/* Nigerian flag colours — subtle accent dots */}
      <div style={{
        position: "absolute", bottom: "32px", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", gap: "6px", alignItems: "center",
        opacity: visible ? 0.5 : 0,
        transition: "opacity 0.4s 0.3s ease",
      }}>
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#008751" }} />
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#008751" }} />
      </div>
    </div>
  );
}
