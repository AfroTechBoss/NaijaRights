import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.naijarights.app",
  appName: "NaijaRights",
  webDir: "out",                // Next.js static export directory
  server: {
    androidScheme: "https",     // Use https scheme in Android WebView (avoids mixed-content issues)
  },
  android: {
    backgroundColor: "#006e41",
  },
};

export default config;
