"use client";

import { Scale, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const EMERGENCY_CONTACTS = [
  { labelKey: "footer.nhrc",     number: "09-6708914",        href: "tel:+2349-6708914" },
  { labelKey: "footer.nba",      number: "nba.org.ng",        href: "https://nba.org.ng" },
  { labelKey: "footer.legalAid", number: "legalaidcouncil.gov.ng", href: "https://legalaidcouncil.gov.ng" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-[#e7e5e4] bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-[#166534] flex items-center justify-center">
                <Scale className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-semibold text-sm text-[#1c1917]">NaijaRights</span>
            </div>
            <p className="text-xs text-[#78716c] leading-relaxed max-w-xs">
              {t("footer.disclaimer")}
            </p>
            <p className="text-xs text-[#a8a29e] mt-2">{t("footer.rights")}</p>
            <div className="flex gap-3 mt-3">
              <a href="https://naijarights.vercel.app/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-[#a8a29e] hover:text-[#166534] transition-colors">
                Privacy Policy
              </a>
              <span className="text-xs text-[#d6d3d1]">·</span>
              <a href="https://naijarights.vercel.app/sources" target="_blank" rel="noopener noreferrer" className="text-xs text-[#a8a29e] hover:text-[#166534] transition-colors">
                Legal Sources
              </a>
            </div>
          </div>

          {/* Emergency contacts */}
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <Phone className="w-3.5 h-3.5 text-[#57534e]" />
              <span className="text-xs font-semibold text-[#1c1917] uppercase tracking-wide">
                {t("footer.emergency")}
              </span>
            </div>
            <ul className="space-y-2">
              {EMERGENCY_CONTACTS.map((c) => (
                <li key={c.labelKey}>
                  <a
                    href={c.href}
                    className="flex flex-col group"
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <span className="text-xs text-[#57534e] group-hover:text-[#166534] transition-colors">
                      {t(c.labelKey)}
                    </span>
                    <span className="text-xs text-[#a8a29e]">{c.number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
