import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400;1,9..144,500&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, minHeight: "100dvh" }}>
        <PostHogProvider>
          <ThemeProvider>
            <LanguageProvider>
              <PushNotificationProvider />
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
