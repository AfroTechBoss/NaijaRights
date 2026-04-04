import { BookOpen } from "lucide-react";
import type { LawReference } from "@/content/types";
import type { Language } from "@/context/LanguageContext";

interface Props {
  laws: LawReference[];
  language: Language;
  title: string;
}

export default function LawBadge({ laws, language, title }: Props) {
  if (!laws.length) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-[#57534e]" />
        <h3 className="text-xs font-semibold text-[#1c1917] uppercase tracking-wide">
          {title}
        </h3>
      </div>

      <div className="space-y-2">
        {laws.map((law, i) => (
          <div
            key={i}
            className="bg-white border border-[#e7e5e4] rounded-lg p-4 space-y-1.5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-[#1c1917]">{law.name}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#f0fdf4] text-[#166534] text-xs font-medium border border-[#bbf7d0]">
                {law.section}
              </span>
            </div>
            <p className="text-sm text-[#57534e] leading-relaxed">
              {law.plainEnglish[language]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
