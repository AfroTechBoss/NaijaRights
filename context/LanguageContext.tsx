"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import en from "@/messages/en.json";
import pcm from "@/messages/pcm.json";
import yo from "@/messages/yo.json";
import ha from "@/messages/ha.json";
import ig from "@/messages/ig.json";

export type Language = "en" | "pcm" | "yo" | "ha" | "ig";

export const LANGUAGES: { code: Language; label: string; nativeLabel: string }[] = [
  { code: "en",  label: "English",       nativeLabel: "English"   },
  { code: "pcm", label: "Pidgin",        nativeLabel: "Naija"     },
  { code: "yo",  label: "Yoruba",        nativeLabel: "Yorùbá"    },
  { code: "ha",  label: "Hausa",         nativeLabel: "Hausa"     },
  { code: "ig",  label: "Igbo",          nativeLabel: "Igbo"      },
];

const messages: Record<Language, Record<string, string>> = { en, pcm, yo, ha, ig };

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("naija-rights-lang") as Language | null;
    if (stored && messages[stored]) setLanguageState(stored);
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("naija-rights-lang", lang);
  }

  function t(key: string): string {
    return messages[language][key] ?? messages["en"][key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
