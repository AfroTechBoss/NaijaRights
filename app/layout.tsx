import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import SplashScreen from "@/components/SplashScreen";
import PostHogProvider from "@/components/PostHogProvider";
import DownloadModal from "@/components/DownloadModal";
import PushNotificationProvider from "@/components/PushNotificationProvider";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "NaijaRights",
  description: "Know your rights under Nigerian law.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = { themeColor: "#006e41" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable}`}>
      <body className="min-h-[100dvh] flex flex-col">
        <PostHogProvider>
          <LanguageProvider>
            <SplashScreen />
            <DownloadModal />
            <PushNotificationProvider />
            {children}
          </LanguageProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
