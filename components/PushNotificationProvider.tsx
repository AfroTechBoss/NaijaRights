"use client";

import { usePushNotifications } from "@/hooks/usePushNotifications";
import NotificationToast from "@/components/NotificationToast";

export default function PushNotificationProvider() {
  const { notification, dismiss } = usePushNotifications();
  return <NotificationToast notification={notification} onDismiss={dismiss} />;
}
