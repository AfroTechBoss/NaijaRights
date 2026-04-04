"use client";

import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { Topic } from "@/content/types";
import type { Language } from "@/context/LanguageContext";

interface Props {
  topic: Topic;
  sectionSlug: string;
  language: Language;
  readMinutesLabel: string;
}

export default function TopicCard({ topic, sectionSlug, language, readMinutesLabel }: Props) {
  return (
    <Link
      href={`/${sectionSlug}/${topic.slug}`}
      className="group bg-white rounded-xl border border-[#e7e5e4] p-5 hover:border-[#166534]/30 hover:shadow-sm transition-all duration-200 flex flex-col gap-3"
    >
      <h3 className="font-semibold text-[#1c1917] text-sm leading-snug group-hover:text-[#166534] transition-colors">
        {topic.title[language]}
      </h3>

      <p className="text-sm text-[#57534e] leading-relaxed line-clamp-3">
        {topic.summary[language]}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1 text-xs text-[#a8a29e]">
          <Clock className="w-3.5 h-3.5" />
          <span>{topic.readMinutes} {readMinutesLabel}</span>
        </div>
        <ArrowRight className="w-4 h-4 text-[#166534] group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}
