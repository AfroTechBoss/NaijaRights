"use client";

import Link from "next/link";
import { Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#e7e5e4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-[#166534] flex items-center justify-center">
            <Scale className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#1c1917] text-sm tracking-tight">
            NaijaRights
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden sm:flex items-center gap-1">
          <Link
            href="/"
            className="text-sm text-[#57534e] hover:text-[#1c1917] px-3 py-1.5 rounded-md hover:bg-[#f5f5f4] transition-colors"
          >
            {t("nav.home")}
          </Link>
          <Link
            href="/#sections"
            className="text-sm text-[#57534e] hover:text-[#1c1917] px-3 py-1.5 rounded-md hover:bg-[#f5f5f4] transition-colors"
          >
            {t("nav.sections")}
          </Link>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
