"use client";

import { useEffect, useState } from "react";
import { X, Bell } from "lucide-react";

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

  useEffect(() => {
    if (!notification) { setVisible(false); return; }
    setVisible(true);
    const t = setTimeout(() => { setVisible(false); setTimeout(onDismiss, 350); }, 6000);
    return () => clearTimeout(t);
  }, [notification]);

  if (!notification) return null;

  return (
    <div
      onClick={() => { setVisible(false); setTimeout(onDismiss, 350); }}
      style={{
        position: "fixed",
        top: "72px",
        left: "12px",
        right: "12px",
        zIndex: 9500,
        background: "#1c1917",
        borderRadius: "16px",
        padding: "14px 16px",
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        cursor: "pointer",
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.34,1.2,0.64,1), opacity 0.3s ease",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      {/* Icon */}
      <div style={{
        width: "36px", height: "36px", borderRadius: "10px",
        background: "#006e41", display: "flex", alignItems: "center",
        justifyContent: "center", flexShrink: 0,
      }}>
        <Bell size={16} color="#e7ffeb" />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontWeight: 700, fontSize: "14px", color: "#ffffff", margin: 0, lineHeight: 1.3 }}>
          {notification.title}
        </p>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.72)", margin: "3px 0 0", lineHeight: 1.4 }}>
          {notification.body}
        </p>
      </div>

      {/* Dismiss */}
      <button
        onClick={(e) => { e.stopPropagation(); setVisible(false); setTimeout(onDismiss, 350); }}
        style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", padding: 0, flexShrink: 0 }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
