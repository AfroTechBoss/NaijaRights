"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import en from "@/messages/en.json";
import pcm from "@/messages/pcm.json";
import yo from "@/messages/yo.json";
import ha from "@/messages/ha.json";
import ig from "@/messages/ig.json";

export type Language = "en" | "pcm" | "yo" | "ha" | "ig";

export const LANGUAGES: { code: Language; label: string; nativeLabel: string; sample: string }[] = [
  { code: "en",  label: "English",        nativeLabel: "English",      sample: "Know your rights"          },
  { code: "pcm", label: "Nigerian Pidgin", nativeLabel: "Naija Pidgin", sample: "Know wetin be your right"  },
  { code: "yo",  label: "Yoruba",          nativeLabel: "Yorùbá",       sample: "Mọ ẹ̀tọ́ rẹ"               },
  { code: "ha",  label: "Hausa",           nativeLabel: "Hausa",        sample: "Ka san hakkinka"            },
  { code: "ig",  label: "Igbo",            nativeLabel: "Igbo",         sample: "Mara ikike gị"             },
];

type TimeOfDay = "morning" | "afternoon" | "evening";

function getTimeOfDay(): TimeOfDay {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "morning";
  if (h >= 12 && h < 17) return "afternoon";
  return "evening";
}

const messages: Record<Language, Record<string, string>> = { en, pcm, yo, ha, ig };

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  greeting: string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("naija-rights-lang") as Language | null;
    if (stored && messages[stored]) setLanguageState(stored);
  }, []);

  useEffect(() => {
    // Pidgin is always "How body" — no time variation
    if (language === "pcm") {
      setGreeting(messages.pcm["greeting.default"] ?? "How body");
      return;
    }
    const tod = getTimeOfDay();
    const key = `greeting.${tod}`;
    setGreeting(messages[language][key] ?? messages.en[key] ?? "");
  }, [language]);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("naija-rights-lang", lang);
  }

  function t(key: string): string {
    return messages[language][key] ?? messages["en"][key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, greeting }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
