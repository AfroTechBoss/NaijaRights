"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TABS = [
  { href: "/",          icon: BookOpen, labelKey: "nav.sections"  },
  { href: "/emergency", icon: Phone,    labelKey: "nav.emergency" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 rounded-t-3xl"
      style={{
        background: "rgba(248,249,255,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: "0.5px solid rgba(69,97,133,0.15)",
        boxShadow: "0 -8px 30px rgba(20,52,85,0.07)",
        paddingTop: "10px",
        paddingBottom: "calc(env(safe-area-inset-bottom) + 14px)",
        minHeight: "80px",
      }}
    >
      {TABS.map(({ href, icon: Icon, labelKey }) => {
        const active = pathname === href;
        return active ? (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center rounded-2xl px-7 py-2.5 -translate-y-1 scale-110 shadow-lg transition-all duration-200"
            style={{ background: "linear-gradient(135deg, #006e41, #008751)", color: "#ffffff" }}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-semibold uppercase tracking-widest mt-0.5">
              {t(labelKey)}
            </span>
          </Link>
        ) : (
          <Link
            key={href}
            href={href}
            className="flex flex-col items-center justify-center px-6 py-2 opacity-60 hover:opacity-100 transition-all duration-200 active:scale-90"
            style={{ color: "#456185" }}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-semibold uppercase tracking-widest mt-0.5">
              {t(labelKey)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
