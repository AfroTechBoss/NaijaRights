import { initializeApp, getApps } from "firebase/app";
import { getMessaging, isSupported } from "firebase/messaging";

export const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY            ?? "AIzaSyAQKlPotf1QfOtFa46iD5H9pkHOk-wWDu4",
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN        ?? "naijarights-001.firebaseapp.com",
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID         ?? "naijarights-001",
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET     ?? "naijarights-001.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "403289087014",
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID             ?? "",
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export async function getFirebaseMessaging() {
  if (typeof window === "undefined") return null;
  const supported = await isSupported();
  if (!supported) return null;
  return getMessaging(firebaseApp);
}
