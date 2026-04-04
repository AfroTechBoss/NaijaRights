import { MessageSquare } from "lucide-react";
import type { Scenario } from "@/content/types";
import type { Language } from "@/context/LanguageContext";

interface Props {
  scenarios: Scenario[];
  language: Language;
  title: string;
  stepLabel: string;
}

export default function ScenarioCard({ scenarios, language, title, stepLabel }: Props) {
  if (!scenarios.length) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <MessageSquare className="w-4 h-4 text-[#57534e]" />
        <h3 className="text-xs font-semibold text-[#1c1917] uppercase tracking-wide">
          {title}
        </h3>
      </div>

      {scenarios.map((scenario, si) => (
        <div
          key={si}
          className="bg-white border border-[#e7e5e4] rounded-xl overflow-hidden"
        >
          {/* Situation */}
          <div className="bg-[#fafaf9] border-b border-[#e7e5e4] px-4 py-3">
            <p className="text-sm text-[#57534e] leading-relaxed italic">
              &ldquo;{scenario.situation[language]}&rdquo;
            </p>
          </div>

          {/* Steps */}
          <ol className="p-4 space-y-3">
            {scenario.steps[language].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-[#166534] text-white text-xs font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-[#1c1917] leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
