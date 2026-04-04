"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { Clock, ChevronRight, Shield, Car, ShoppingBag, Heart, GraduationCap, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getSectionBySlug } from "@/content/sections";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";

const ICONS: Record<string, React.ElementType> = {
  Shield, Car, ShoppingBag, Heart, GraduationCap, Home,
};

const CARD_STYLES: Record<string, { iconBg: string; iconColor: string }> = {
  "general-public": { iconBg: "#8df8b7", iconColor: "#005e37" },
  "drivers":        { iconBg: "#d9e2ff", iconColor: "#1f4ea0" },
  "traders":        { iconBg: "#ffd9d9", iconColor: "#65000b" },
  "women":          { iconBg: "#c7aaff", iconColor: "#47009d" },
  "youth":          { iconBg: "#c7aaff", iconColor: "#47009d" },
  "tenants":        { iconBg: "#c4dcff", iconColor: "#1f4ea0" },
};

interface Props {
  params: Promise<{ section: string }>;
}

export default function SectionPage({ params }: Props) {
  const { section: sectionSlug } = use(params);
  const { t, language } = useLanguage();
  const section = getSectionBySlug(sectionSlug);
  if (!section) notFound();

  const Icon = ICONS[section.icon] ?? Shield;
  const cardStyle = CARD_STYLES[section.slug] ?? { iconBg: "#8df8b7", iconColor: "#005e37" };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <TopBar backHref="/" />

      <main className="flex-1 overflow-y-auto" style={{ paddingTop: "64px", paddingBottom: "96px" }}>
        <div className="max-w-2xl mx-auto px-5 pt-6 space-y-5">

          {/* Section header */}
          <div
            className="rounded-3xl p-6"
            style={{ background: "linear-gradient(135deg, #006e41, #006038)" }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h1
              className="text-2xl font-extrabold tracking-tight mb-2"
              style={{ color: "#e7ffeb", fontFamily: "var(--font-manrope)" }}
            >
              {section.title[language]}
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(231,255,235,0.85)" }}>
              {section.description[language]}
            </p>
          </div>

          {/* Topics */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-3"
              style={{ color: "#456185" }}
            >
              {section.topics.length} {t("section.topics")}
            </p>

            <div className="space-y-2.5">
              {section.topics.map((topic, i) => (
                <Link
                  key={topic.slug}
                  href={`/${sectionSlug}/${topic.slug}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white transition-all duration-200 active:scale-[0.98] group"
                  style={{
                    border: "0.5px solid rgba(151,180,220,0.2)",
                    boxShadow: "0 1px 4px rgba(20,52,85,0.05)",
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: cardStyle.iconBg, color: cardStyle.iconColor }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-bold truncate"
                      style={{ color: "#143455", fontFamily: "var(--font-manrope)" }}
                    >
                      {topic.title[language]}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" style={{ color: "#97b4dc" }} />
                      <span className="text-xs" style={{ color: "#97b4dc" }}>
                        {topic.readMinutes} {t("section.readTime")}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    style={{ color: "#97b4dc" }}
                  />
                </Link>
              ))}

              {section.topics.length === 0 && (
                <p className="text-sm text-center py-12" style={{ color: "#97b4dc" }}>
                  Topics coming soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
