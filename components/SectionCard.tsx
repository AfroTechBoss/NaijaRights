"use client";

import Link from "next/link";
import { Shield, Car, ShoppingBag, Heart, GraduationCap, Home, ArrowRight } from "lucide-react";
import type { Section } from "@/content/types";
import type { Language } from "@/context/LanguageContext";

const ICONS: Record<string, React.ElementType> = {
  Shield, Car, ShoppingBag, Heart, GraduationCap, Home,
};

const CARD_STYLES: Record<string, {
  iconBg: string; iconColor: string; rotate: string;
}> = {
  "general-public": { iconBg: "#8df8b7", iconColor: "#005e37", rotate: "-rotate-6"  },
  "drivers":        { iconBg: "#d9e2ff", iconColor: "#1f4ea0", rotate: "rotate-3"   },
  "traders":        { iconBg: "#ffd9d9", iconColor: "#65000b", rotate: "-rotate-3"  },
  "women":          { iconBg: "#c7aaff", iconColor: "#47009d", rotate: "rotate-6"   },
  "youth":          { iconBg: "#c7aaff", iconColor: "#47009d", rotate: "rotate-2"   },
  "tenants":        { iconBg: "#c4dcff", iconColor: "#1f4ea0", rotate: "-rotate-1"  },
};

interface Props {
  section: Section;
  language: Language;
}

export default function SectionCard({ section, language }: Props) {
  const Icon = ICONS[section.icon] ?? Shield;
  const style = CARD_STYLES[section.slug] ?? { iconBg: "#8df8b7", iconColor: "#005e37", rotate: "rotate-0" };

  return (
    <Link
      href={`/${section.slug}`}
      className="relative bg-white p-5 rounded-2xl transition-all duration-200 active:scale-95 group cursor-pointer"
      style={{
        border: "0.5px solid rgba(151,180,220,0.2)",
        boxShadow: "0 1px 4px rgba(20,52,85,0.06)",
      }}
    >
      {/* Arrow on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-4 h-4" style={{ color: "#006e41" }} />
      </div>

      {/* Rotating icon container */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 ${style.rotate} group-hover:rotate-0`}
        style={{ background: style.iconBg }}
      >
        <Icon className="w-5 h-5" style={{ color: style.iconColor }} />
      </div>

      <h3
        className="font-bold text-base mb-1 leading-tight"
        style={{ color: "#143455", fontFamily: "var(--font-manrope)" }}
      >
        {section.title[language]}
      </h3>
      <span
        className="text-[10px] font-bold uppercase tracking-widest"
        style={{ color: "#456185", opacity: 0.7 }}
      >
        {section.topics.length} Topic{section.topics.length !== 1 ? "s" : ""}
      </span>
    </Link>
  );
}
