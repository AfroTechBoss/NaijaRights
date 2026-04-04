"use client";

import { Phone, ExternalLink, Scale } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";

const CONTACTS = [
  {
    categoryKey: "emergency.legal_aid",
    items: [
      { name: "Legal Aid Council of Nigeria",    number: "09-2910483",           href: "tel:+2349-2910483",           type: "phone" },
      { name: "Nigerian Bar Association",         number: "nba.org.ng",           href: "https://nba.org.ng",          type: "web"   },
    ],
  },
  {
    categoryKey: "emergency.human_rights",
    items: [
      { name: "National Human Rights Commission", number: "09-6708914",           href: "tel:+2349-6708914",           type: "phone" },
      { name: "Amnesty International Nigeria",    number: "amnestynigeria.org",   href: "https://amnestynigeria.org",  type: "web"   },
    ],
  },
  {
    categoryKey: "emergency.police_complaints",
    items: [
      { name: "Police Service Commission",        number: "psc.gov.ng",           href: "https://psc.gov.ng",          type: "web"   },
      { name: "ICPC — Corruption / Extortion",    number: "0800-101-0101",        href: "tel:08001010101",             type: "phone" },
    ],
  },
  {
    categoryKey: "emergency.road_safety",
    items: [
      { name: "FRSC Emergency / Complaints",      number: "122",                  href: "tel:122",                     type: "phone" },
      { name: "FRSC Official Portal",             number: "frsc.gov.ng",          href: "https://frsc.gov.ng",         type: "web"   },
    ],
  },
  {
    categoryKey: "emergency.gender_violence",
    items: [
      { name: "NAPTIP Helpline",                  number: "0800-628-7480",        href: "tel:08006287480",             type: "phone" },
      { name: "Project Alert (DV Support)",       number: "01-8931212",           href: "tel:+23418931212",            type: "phone" },
    ],
  },
  {
    categoryKey: "emergency.general",
    items: [
      { name: "Nigeria Police Force",             number: "112 / 199",            href: "tel:112",                     type: "phone" },
      { name: "Fire & Rescue Service",            number: "01-7944929",           href: "tel:+23417944929",            type: "phone" },
    ],
  },
];

export default function EmergencyPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <TopBar showLogo />

      <main className="flex-1 overflow-y-auto" style={{ paddingTop: "64px", paddingBottom: "96px" }}>
        <div className="max-w-2xl mx-auto px-5 pt-6 space-y-5">

          {/* Header card */}
          <div
            className="rounded-3xl p-6"
            style={{ background: "linear-gradient(135deg, #006e41, #006038)" }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h1
              className="text-2xl font-extrabold tracking-tight mb-1"
              style={{ color: "#e7ffeb", fontFamily: "var(--font-manrope)" }}
            >
              {t("footer.emergency")}
            </h1>
            <p className="text-sm" style={{ color: "rgba(231,255,235,0.8)" }}>
              {t("emergency.subtitle")}
            </p>
          </div>

          {/* Contact groups */}
          {CONTACTS.map((group) => (
            <div key={group.categoryKey}>
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-2 px-1"
                style={{ color: "#456185" }}
              >
                {t(group.categoryKey)}
              </p>
              <div
                className="rounded-2xl overflow-hidden bg-white"
                style={{ border: "0.5px solid rgba(151,180,220,0.2)", boxShadow: "0 1px 4px rgba(20,52,85,0.05)" }}
              >
                {group.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.type === "web" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 transition-all duration-150 active:scale-[0.98]"
                    style={{
                      borderTop: i > 0 ? "0.5px solid rgba(151,180,220,0.15)" : "none",
                      WebkitTapHighlightColor: "transparent",
                    }}
                    onPointerDown={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = item.type === "phone"
                        ? "rgba(141,248,183,0.18)"
                        : "rgba(217,226,255,0.25)";
                    }}
                    onPointerUp={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "";
                    }}
                    onPointerLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "";
                    }}
                  >
                    <div>
                      <p className="text-sm font-bold" style={{ color: "#143455", fontFamily: "var(--font-manrope)" }}>
                        {item.name}
                      </p>
                      <p className="text-xs mt-0.5 font-medium" style={{ color: item.type === "phone" ? "#006e41" : "#315cae" }}>
                        {item.number}
                      </p>
                    </div>
                    {item.type === "phone" ? (
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "#8df8b7" }}
                      >
                        <Phone className="w-4 h-4" style={{ color: "#005e37" }} />
                      </div>
                    ) : (
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "#d9e2ff" }}
                      >
                        <ExternalLink className="w-4 h-4" style={{ color: "#1f4ea0" }} />
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
