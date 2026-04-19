import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SplashScreen from "@/components/SplashScreen";
import PostHogProvider from "@/components/PostHogProvider";
import PushNotificationProvider from "@/components/PushNotificationProvider";

export const metadata: Metadata = {
  title: "NaijaRights",
  description: "Know your rights under Nigerian law.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = { themeColor: "#B85C2E" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, minHeight: "100dvh" }}>
        <PostHogProvider>
          <ThemeProvider>
            <LanguageProvider>
              <SplashScreen />
              <PushNotificationProvider />
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
