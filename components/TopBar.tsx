"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

interface Props {
  title?: string;
  backHref?: string;
  showLogo?: boolean;
}

export default function TopBar({ title, backHref, showLogo = false }: Props) {
  return (
    <header
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6"
      style={{
        background: "#f8f9ff",
        height: "64px",
        borderBottom: "0.5px solid rgba(69,97,133,0.15)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-3 min-w-0">
        {backHref ? (
          <Link
            href={backHref}
            className="flex items-center justify-center w-9 h-9 rounded-xl -ml-1 transition-all active:scale-90"
            style={{ color: "#456185" }}
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
        ) : showLogo ? (
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm shrink-0">
              <Image src="/logo.png" alt="NaijaRights" width={36} height={36} priority unoptimized />
            </div>
            <span
              className="text-xl font-black uppercase tracking-wider"
              style={{ fontFamily: "var(--font-manrope)", color: "#006e41" }}
            >
              NaijaRights
            </span>
          </Link>
        ) : null}

        {title && (
          <span
            className="font-bold text-base truncate"
            style={{ fontFamily: "var(--font-manrope)", color: "#143455" }}
          >
            {title}
          </span>
        )}
      </div>

      {/* Right */}
      <LanguageSwitcher />
    </header>
  );
}
