"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export interface AppNotification {
  title: string;
  body: string;
}

interface Props {
  notification: AppNotification | null;
  onDismiss: () => void;
}

export default function NotificationToast({ notification, onDismiss }: Props) {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!notification) { setVisible(false); return; }
    setVisible(true);
    const timer = setTimeout(() => { setVisible(false); setTimeout(onDismiss, 360); }, 6000);
    return () => clearTimeout(timer);
  }, [notification]);

  if (!notification) return null;

  return (
    <div style={{
      position: "fixed", left: 8, right: 8, top: 8, zIndex: 9500,
      background: "var(--ink)", color: "var(--bg)", borderRadius: 18,
      padding: "10px 12px", display: "flex", alignItems: "flex-start", gap: 10,
      transform: visible ? "translateY(0)" : "translateY(-120%)",
      opacity: visible ? 1 : 0,
      transition: "transform 360ms cubic-bezier(0.2,0.9,0.2,1), opacity 200ms ease",
      boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
      fontFamily: "'Instrument Sans', system-ui, sans-serif",
      maxWidth: 480, margin: "0 auto",
    }}>
      {/* App icon */}
      <div style={{
        width: 34, height: 34, borderRadius: 9, background: "var(--accent)", flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: 16,
        color: "#fff",
      }}>N</div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontSize: 11.5, fontWeight: 700 }}>NaijaRights</span>
          <span style={{ fontSize: 10.5, opacity: 0.6 }}>· now</span>
        </div>
        <div style={{ fontSize: 12.5, fontWeight: 600, marginTop: 2, letterSpacing: -0.1 }}>
          {notification.title}
        </div>
        <div style={{ fontSize: 12, opacity: 0.75, marginTop: 1, lineHeight: 1.3 }}>
          {notification.body}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          <button onClick={() => { setVisible(false); setTimeout(onDismiss, 360); }} style={{
            flex: 1, height: 32, borderRadius: 8, border: "none",
            background: "var(--bg)", color: "var(--ink)",
            fontSize: 12, fontWeight: 600, cursor: "pointer",
            fontFamily: "'Instrument Sans', system-ui, sans-serif",
          }}>{t("notif.read")}</button>
          <button onClick={() => { setVisible(false); setTimeout(onDismiss, 360); }} style={{
            flex: 1, height: 32, borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.3)", background: "transparent",
            color: "var(--bg)", fontSize: 12, fontWeight: 600, cursor: "pointer",
            fontFamily: "'Instrument Sans', system-ui, sans-serif", opacity: 0.8,
          }}>{t("notif.later")}</button>
        </div>
      </div>
    </div>
  );
}
