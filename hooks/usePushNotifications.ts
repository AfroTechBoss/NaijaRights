"use client";

import { useEffect, useState } from "react";
import type { AppNotification } from "@/components/NotificationToast";

const VAPID_KEY = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY ?? "";

export function usePushNotifications() {
  const [notification, setNotification] = useState<AppNotification | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isNative = !!(window as any).Capacitor?.isNative;

    if (isNative) {
      initNative(setNotification);
    } else {
      initWeb(setNotification);
    }
  }, []);

  return { notification, dismiss: () => setNotification(null) };
}

// ─── Android (Capacitor) ─────────────────────────────────────────────────────
async function initNative(
  setNotification: (n: AppNotification) => void
) {
  try {
    const { PushNotifications } = await import("@capacitor/push-notifications");

    const status = await PushNotifications.checkPermissions();
    const permission =
      status.receive === "granted"
        ? status
        : await PushNotifications.requestPermissions();

    if (permission.receive !== "granted") return;

    await PushNotifications.register();

    // Subscribe to "all" topic so you can broadcast from Firebase Console
    PushNotifications.addListener("registration", (token) => {
      console.log("[FCM] Android token:", token.value);
      // Optionally store token: fetch('/api/register-token', { method:'POST', body: JSON.stringify({ token: token.value }) })
    });

    PushNotifications.addListener("registrationError", (err) => {
      console.error("[FCM] Registration error:", err);
    });

    // Foreground notification → show in-app toast
    PushNotifications.addListener("pushNotificationReceived", (n) => {
      setNotification({ title: n.title ?? "NaijaRights", body: n.body ?? "" });
    });

    // Tap on background notification
    PushNotifications.addListener("pushNotificationActionPerformed", (action) => {
      const n = action.notification;
      console.log("[FCM] Notification tapped:", n.title);
    });
  } catch (err) {
    console.error("[FCM] Native init error:", err);
  }
}

// ─── Web (Firebase Messaging) ─────────────────────────────────────────────────
async function initWeb(setNotification: (n: AppNotification) => void) {
  try {
    if (!("Notification" in window)) return;

    const permission =
      Notification.permission === "granted"
        ? "granted"
        : await Notification.requestPermission();

    if (permission !== "granted") return;

    // Register service worker
    if ("serviceWorker" in navigator) {
      await navigator.serviceWorker.register("/firebase-messaging-sw.js");
    }

    const { getFirebaseMessaging } = await import("@/lib/firebase");
    const { getToken, onMessage } = await import("firebase/messaging");

    const messaging = await getFirebaseMessaging();
    if (!messaging) return;

    const token = await getToken(messaging, { vapidKey: VAPID_KEY });
    if (token) {
      console.log("[FCM] Web token:", token);
    }

    // Foreground notification → show in-app toast
    onMessage(messaging, (payload) => {
      setNotification({
        title: payload.notification?.title ?? "NaijaRights",
        body:  payload.notification?.body  ?? "",
      });
    });
  } catch (err) {
    console.error("[FCM] Web init error:", err);
  }
}
