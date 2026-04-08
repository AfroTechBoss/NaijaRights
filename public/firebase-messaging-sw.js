// Firebase Cloud Messaging Service Worker
// Handles background push notifications on the web

importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:            "AIzaSyAQKlPotf1QfOtFa46iD5H9pkHOk-wWDu4",
  authDomain:        "naijarights-001.firebaseapp.com",
  projectId:         "naijarights-001",
  storageBucket:     "naijarights-001.firebasestorage.app",
  messagingSenderId: "403289087014",
  appId:             "",   // add your web appId here from Firebase console
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification ?? {};
  self.registration.showNotification(title ?? "NaijaRights", {
    body:  body  ?? "",
    icon:  icon  ?? "/logo.png",
    badge: "/logo.png",
    data:  payload.data,
  });
});
