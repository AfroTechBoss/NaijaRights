import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // Static HTML/JS export — required for Capacitor Android
  trailingSlash: true,    // out/path/index.html — works better with Capacitor file:// protocol
  images: {
    unoptimized: true,    // next/image optimisation needs a server; static export has none
  },
};

export default nextConfig;
