"use client";

import { useState } from "react";
import { Search, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { sections } from "@/content/sections";
import type { Language } from "@/context/LanguageContext";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import SectionCard from "@/components/SectionCard";

const ALL_LANGUAGES: Language[] = ["en", "pcm", "yo", "ha", "ig"];

// Keyword aliases per section slug — searching these terms surfaces the section
const SECTION_KEYWORDS: Record<string, string[]> = {
  "general-public": [
    "arrest", "bail", "police", "detention", "detained", "rights", "constitution",
    "search", "officer", "force", "custody", "charge", "court", "warrant",
    "interrogation", "handcuff", "extort", "bribe",
  ],
  "drivers": [
    "car", "vehicle", "driving", "driver", "frsc", "road", "license", "licence",
    "checkpoint", "plate", "tyre", "auto", "bike", "motorcycle", "transport",
    "traffic", "speed", "insurance",
  ],
  "traders": [
    "market", "goods", "nafdac", "consumer", "business", "trade", "shop",
    "seller", "buy", "product", "price", "fake", "counterfeit", "receipt",
    "tax", "levy", "taskforce", "task force", "seize", "confiscate",
  ],
  "women": [
    "women", "woman", "girl", "gender", "domestic", "violence", "wife",
    "female", "vapp", "rape", "sexual", "abuse", "harassment", "assault",
    "divorce", "custody", "marriage", "trafficking", "naptip",
  ],
  "youth": [
    "youth", "student", "young", "dreadlock", "dreadlocks", "locs", "hair",
    "fraud", "school", "graduate", "university", "campus", "age", "teen",
    "teenager", "minor", "social media", "cybercrime",
  ],
  "tenants": [
    "tenant", "rent", "evict", "eviction", "landlord", "house", "apartment",
    "property", "lease", "accommodation", "notice", "agrement", "agreement",
    "deposit", "housing", "flat", "room",
  ],
};

function sectionMatchesQuery(section: (typeof sections)[number], q: string): boolean {
  // Check keyword aliases first (fast path)
  const aliases = SECTION_KEYWORDS[section.slug] ?? [];
  if (aliases.some((kw) => kw.includes(q) || q.includes(kw))) return true;

  // Search title + description + topic titles + topic summaries across all languages
  for (const lang of ALL_LANGUAGES) {
    if (
      section.title[lang].toLowerCase().includes(q) ||
      section.description[lang].toLowerCase().includes(q)
    ) return true;

    for (const topic of section.topics) {
      if (
        topic.title[lang].toLowerCase().includes(q) ||
        topic.summary[lang].toLowerCase().includes(q)
      ) return true;
    }
  }
  return false;
}

export default function HomePage() {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState("");

  const filtered = sections.filter((s) => {
    if (!query.trim()) return true;
    return sectionMatchesQuery(s, query.toLowerCase());
  });

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <TopBar showLogo />

      <main className="flex-1 overflow-y-auto" style={{ paddingTop: "64px", paddingBottom: "96px" }}>
        <div className="max-w-2xl mx-auto px-5 pt-6 space-y-6">

          {/* Hero card */}
          <section
            className="relative overflow-hidden rounded-3xl p-6 shadow-lg"
            style={{ background: "linear-gradient(135deg, #006e41, #006038)" }}
          >
            {/* Decorative blur */}
            <div
              className="absolute -right-10 -top-10 w-44 h-44 rounded-full blur-3xl"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <h2
              className="text-2xl font-extrabold tracking-tight mb-2 leading-tight"
              style={{ color: "#e7ffeb", fontFamily: "var(--font-manrope)" }}
            >
              {t("home.hero.tagline").split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="text-sm font-medium mb-5" style={{ color: "rgba(231,255,235,0.85)" }}>
              {t("home.sections.subtitle")}
            </p>

            {/* Search bar */}
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: "#006e41" }}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("home.search.placeholder")}
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-white text-sm outline-none transition-all"
                style={{
                  color: "#143455",
                  fontFamily: "var(--font-geist-sans)",
                  boxShadow: query ? "0 0 0 2px #8df8b7" : "none",
                }}
              />
            </div>
          </section>

          {/* Section grid */}
          <section>
            <div className="flex justify-between items-end mb-3">
              <h2
                className="text-lg font-bold tracking-tight"
                style={{ color: "#143455", fontFamily: "var(--font-manrope)" }}
              >
                {query ? `${t("home.search.results")} "${query}"` : t("home.sections.title")}
              </h2>
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#006e41" }}
                >
                  {t("home.search.clear")}
                </button>
              )}
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {filtered.map((section) => (
                  <SectionCard key={section.slug} section={section} language={language} />
                ))}
              </div>
            ) : (
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: "#ffffff", border: "0.5px solid rgba(151,180,220,0.2)" }}
              >
                <p className="text-sm font-medium" style={{ color: "#456185" }}>
                  {t("home.search.empty")} &ldquo;{query}&rdquo;
                </p>
              </div>
            )}
          </section>

          {/* Disclaimer */}
          <section
            className="rounded-2xl p-5 flex gap-4 items-start"
            style={{
              background: "#eff4ff",
              border: "0.5px solid rgba(151,180,220,0.2)",
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#315cae" }}
            >
              <Info className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4
                className="font-bold text-sm mb-1 uppercase tracking-tight"
                style={{ color: "#143455", fontFamily: "var(--font-manrope)" }}
              >
                {t("home.disclaimer.title")}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "#456185" }}>
                {t("home.disclaimer")}
              </p>
              <div className="flex gap-3 mt-2">
                <a href="https://naijarights.vercel.app/privacy" target="_blank" rel="noopener noreferrer" className="text-xs" style={{ color: "#315cae" }}>
                  Privacy Policy
                </a>
                <span className="text-xs" style={{ color: "#a8a29e" }}>·</span>
                <a href="https://naijarights.vercel.app/sources" target="_blank" rel="noopener noreferrer" className="text-xs" style={{ color: "#315cae" }}>
                  Legal Sources
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <BottomNav />
    </div>
  );
}
