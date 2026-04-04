"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getSectionBySlug, getTopicBySlug } from "@/content/sections";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import TopicTabs from "@/components/TopicTabs";

interface Props {
  params: Promise<{ section: string; topic: string }>;
}

export default function TopicPage({ params }: Props) {
  const { section: sectionSlug, topic: topicSlug } = use(params);
  const { t, language } = useLanguage();

  const section = getSectionBySlug(sectionSlug);
  const topic = getTopicBySlug(sectionSlug, topicSlug);
  if (!section || !topic) notFound();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <TopBar backHref={`/${sectionSlug}`} />

      <main className="flex-1 overflow-y-auto" style={{ paddingTop: "64px", paddingBottom: "96px" }}>

        {/* Topic header */}
        <div
          className="px-5 pt-6 pb-6"
          style={{ borderBottom: "0.5px solid rgba(151,180,220,0.2)" }}
        >
          <div className="max-w-2xl mx-auto">
            <h1
              className="text-2xl font-extrabold tracking-tight mb-2"
              style={{ color: "#143455", fontFamily: "var(--font-manrope)" }}
            >
              {topic.title[language]}
            </h1>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" style={{ color: "#97b4dc" }} />
              <span className="text-xs" style={{ color: "#97b4dc" }}>
                {topic.readMinutes} {t("section.readTime")}
              </span>
            </div>
          </div>
        </div>

        {/* Tabbed content */}
        <div className="max-w-2xl mx-auto">
          <TopicTabs
            topic={topic}
            language={language}
            labels={{
              canDo:        t("topic.canDo"),
              cannotDo:     t("topic.cannotDo"),
              whatToDo:     t("topic.whatToDo"),
              whatNotToDo:  t("topic.whatNotToDo"),
              laws:         t("topic.laws"),
              scenario:     t("topic.scenario"),
              scenarioStep: t("topic.scenarioStep"),
            }}
          />

          {/* Disclaimer */}
          <div className="px-5 pb-4">
            <div
              className="rounded-2xl p-4 flex gap-3 items-start"
              style={{ background: "#eff4ff", border: "0.5px solid rgba(151,180,220,0.2)" }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
                style={{ background: "#315cae" }}
              >
                i
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#456185" }}>
                {t("home.disclaimer")}
              </p>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
