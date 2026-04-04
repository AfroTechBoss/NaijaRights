"use client";

import { useState } from "react";
import type { Topic } from "@/content/types";
import { useLanguage, type Language } from "@/context/LanguageContext";
import RightsCard from "./RightsCard";
import LawBadge from "./LawBadge";
import ScenarioCard from "./ScenarioCard";
import { ChevronRight } from "lucide-react";

interface Props {
  topic: Topic;
  language: Language;
  labels: {
    canDo: string; cannotDo: string; whatToDo: string;
    whatNotToDo: string; laws: string; scenario: string; scenarioStep: string;
  };
}

const TABS = ["overview", "rights", "actions", "laws", "scenario"] as const;
type Tab = (typeof TABS)[number];

export default function TopicTabs({ topic, language, labels }: Props) {
  const [active, setActive] = useState<Tab>("overview");
  const { t } = useLanguage();

  const TAB_LABELS: Record<Tab, string> = {
    overview: t("tab.overview"),
    rights:   t("tab.rights"),
    actions:  t("tab.actions"),
    laws:     t("tab.laws"),
    scenario: t("tab.scenario"),
  };

  const visibleTabs: Tab[] = [
    "overview", "rights", "actions", "laws",
    ...(topic.scenarios.length > 0 ? (["scenario"] as Tab[]) : []),
  ];

  return (
    <div>
      {/* Tab pills */}
      <div
        className="sticky top-0 z-30 flex overflow-x-auto gap-2 px-5 py-3"
        style={{
          background: "rgba(248,249,255,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "0.5px solid rgba(151,180,220,0.2)",
        }}
      >
        {visibleTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="shrink-0 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200"
            style={
              active === tab
                ? { background: "#006e41", color: "#ffffff", border: "1px solid #006e41" }
                : { background: "#ffffff", color: "#456185", border: "1px solid rgba(151,180,220,0.4)" }
            }
          >
            {TAB_LABELS[tab]}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-5 py-5 space-y-4">
        {active === "overview" && (
          <div>
            {/* Summary */}
            <p
              className="text-sm leading-relaxed pl-4 mb-5"
              style={{
                color: "#456185",
                borderLeft: "3px solid #8df8b7",
              }}
            >
              {topic.summary[language]}
            </p>

            {/* Quick nav */}
            <div className="space-y-2">
              {(["rights", "actions", "laws",
                ...(topic.scenarios.length > 0 ? ["scenario"] : []),
              ] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-left bg-white transition-all duration-200 active:scale-[0.98] group"
                  style={{ border: "0.5px solid rgba(151,180,220,0.2)", boxShadow: "0 1px 3px rgba(20,52,85,0.05)" }}
                >
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#143455", fontFamily: "var(--font-manrope)" }}
                  >
                    {TAB_LABELS[tab]}
                  </span>
                  <ChevronRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    style={{ color: "#97b4dc" }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {active === "rights" && (
          <RightsCard
            canTitle={labels.canDo} cannotTitle={labels.cannotDo}
            canItems={topic.canDo[language]} cannotItems={topic.cannotDo[language]}
            whatToDoTitle={labels.whatToDo} whatNotToDoTitle={labels.whatNotToDo}
            whatToDoItems={topic.whatToDo[language]} whatNotToDoItems={topic.whatNotToDo[language]}
          />
        )}

        {active === "actions" && (
          <RightsCard
            canTitle={labels.canDo} cannotTitle={labels.cannotDo}
            canItems={topic.canDo[language]} cannotItems={topic.cannotDo[language]}
            whatToDoTitle={labels.whatToDo} whatNotToDoTitle={labels.whatNotToDo}
            whatToDoItems={topic.whatToDo[language]} whatNotToDoItems={topic.whatNotToDo[language]}
            onlyActions
          />
        )}

        {active === "laws" && (
          <LawBadge laws={topic.laws} language={language} title={labels.laws} />
        )}

        {active === "scenario" && (
          <ScenarioCard
            scenarios={topic.scenarios} language={language}
            title={labels.scenario} stepLabel={labels.scenarioStep}
          />
        )}
      </div>
    </div>
  );
}
