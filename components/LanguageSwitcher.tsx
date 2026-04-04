"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage, LANGUAGES } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === language)!;

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
        style={{ color: "var(--text-2)", background: open ? "var(--background)" : "transparent" }}
        aria-label={t("lang.change")}
      >
        <Globe className="w-3.5 h-3.5" />
        <span>{current.nativeLabel}</span>
        <ChevronDown
          className="w-3 h-3 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-1 w-36 rounded-xl py-1 z-50"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              className="w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between"
              style={{
                color: language === lang.code ? "var(--green-8)" : "var(--text-1)",
                background: language === lang.code ? "var(--green-1)" : "transparent",
                fontWeight: language === lang.code ? 600 : 400,
              }}
            >
              <span>{lang.nativeLabel}</span>
              {language === lang.code && (
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green-6)" }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
