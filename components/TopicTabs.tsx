"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Topic } from "@/content/types";

interface Props {
  topic: Topic;
}

export default function TopicTabs({ topic }: Props) {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabs = [
    t("tab.rights"), t("tab.actions"), t("tab.overview"), t("tab.laws"), t("tab.scenario"),
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [active]);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
      {/* Tab bar */}
      <div style={{ background: "var(--bg)", borderBottom: "1px solid var(--line)", padding: "8px 0 6px", flexShrink: 0 }}>
        <div style={{ display: "flex", gap: 6, padding: "0 14px", overflowX: "auto" }}>
          {tabs.map((label, i) => {
            const on = active === i;
            return (
              <button key={i} onClick={() => setActive(i)} style={{
                flexShrink: 0, padding: "7px 14px", borderRadius: 16, cursor: "pointer",
                border: `1.5px solid ${on ? "var(--ink)" : "var(--line)"}`,
                background: on ? "var(--ink)" : "var(--surface)",
                color: on ? "var(--bg)" : "var(--ink)",
                fontSize: 12.5, fontWeight: 600, letterSpacing: 0.1,
                fontFamily: "'Instrument Sans', system-ui, sans-serif",
                transition: "all 150ms ease",
              }}>
                {label}
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 4, padding: "6px 18px 0", justifyContent: "center" }}>
          {tabs.map((_, i) => (
            <div key={i} style={{
              width: i <= active ? 16 : 4, height: 3, borderRadius: 2,
              background: i <= active ? "var(--accent)" : "var(--line)",
              transition: "width 180ms ease, background 180ms ease",
            }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", paddingBottom: 100 }}>
        {active === 0 && (
          /* RIGHTS TAB */
          <div style={{ padding: "18px 18px 0" }}>
            <SectionHead kicker={t("rights.kicker")} title={t("rights.title")} />
            <div style={{ marginTop: 16, border: "1.5px solid var(--good)", borderRadius: 16, background: "var(--good-soft)", overflow: "hidden" }}>
              <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1.5px solid var(--good)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--good)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 500, color: "var(--good)", letterSpacing: -0.2 }}>{t("rights.can")}</div>
              </div>
              {(topic.canDo[language] ?? []).map((x, i) => (
                <div key={i} style={{ padding: "12px 14px", borderTop: i === 0 ? "none" : "1px solid var(--good)33", display: "flex", gap: 10, background: "var(--surface)" }}>
                  <div style={{ color: "var(--good)", fontWeight: 700, fontSize: 13, width: 18 }}>{String(i+1).padStart(2,"0")}</div>
                  <div style={{ flex: 1, color: "var(--ink)", fontSize: 14, lineHeight: 1.45 }}>{x}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, border: "1.5px solid var(--bad)", borderRadius: 16, background: "var(--bad-soft)", overflow: "hidden" }}>
              <div style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1.5px solid var(--bad)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 500, color: "var(--bad)", letterSpacing: -0.2 }}>{t("rights.cannot")}</div>
              </div>
              {(topic.cannotDo[language] ?? []).map((x, i) => (
                <div key={i} style={{ padding: "12px 14px", borderTop: i === 0 ? "none" : "1px solid var(--bad)33", display: "flex", gap: 10, background: "var(--surface)" }}>
                  <div style={{ color: "var(--bad)", fontWeight: 700, fontSize: 13, width: 18 }}>{String(i+1).padStart(2,"0")}</div>
                  <div style={{ flex: 1, color: "var(--ink)", fontSize: 14, lineHeight: 1.45 }}>{x}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === 1 && (
          /* ACTIONS TAB */
          <div style={{ padding: "18px 18px 0" }}>
            <SectionHead kicker={t("actions.kicker")} title={t("actions.title")} />
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ...(topic.whatToDo[language] ?? []).map(t => ({ k: "do" as const, t, s: "" })),
                ...(topic.whatNotToDo[language] ?? []).map(t => ({ k: "dont" as const, t, s: "" })),
              ].map((a, i) => {
                const good = a.k === "do";
                return (
                  <div key={i} style={{
                    display: "flex", gap: 12, padding: "14px", background: "var(--surface)",
                    border: "1px solid var(--line)", borderLeft: `4px solid ${good ? "var(--good)" : "var(--bad)"}`, borderRadius: 12,
                  }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: 15,
                      background: good ? "var(--good-soft)" : "var(--bad-soft)",
                      color: good ? "var(--good)" : "var(--bad)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      fontFamily: "'Fraunces', Georgia, serif", fontWeight: 600, fontSize: 13,
                    }}>{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <span style={{
                        fontSize: 9.5, fontWeight: 700, letterSpacing: 1, padding: "2px 7px",
                        borderRadius: 4, background: good ? "var(--good)" : "var(--bad)",
                        color: "#fff", textTransform: "uppercase" as const,
                      }}>{good ? t("actions.do") : t("actions.dont")}</span>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", lineHeight: 1.35, letterSpacing: -0.1, marginTop: 4 }}>{a.t}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {active === 2 && (
          /* OVERVIEW TAB */
          <div style={{ padding: "18px 22px 0" }}>
            <SectionHead kicker={t("overview.kicker")} title={t("overview.title")} />
            <div style={{ marginTop: 14 }}>
              {[topic.summary[language]].map((p, i) => (
                <p key={i} style={{
                  fontFamily: i === 0 ? "'Fraunces', Georgia, serif" : "inherit",
                  fontSize: i === 0 ? 17 : 15,
                  lineHeight: i === 0 ? 1.4 : 1.55,
                  color: i === 0 ? "var(--ink)" : "var(--ink-soft)",
                  margin: "0 0 14px", textWrap: "pretty" as any,
                }}>
                  {i === 0 && (
                    <span style={{ float: "left", fontFamily: "'Fraunces', Georgia, serif", fontSize: 48, lineHeight: 0.9, marginRight: 6, marginTop: 4, color: "var(--accent)", fontWeight: 500 }}>
                      {p.charAt(0)}
                    </span>
                  )}
                  {i === 0 ? p.slice(1) : p}
                </p>
              ))}
            </div>
          </div>
        )}

        {active === 3 && (
          /* LAWS TAB */
          <div style={{ padding: "18px 18px 0" }}>
            <SectionHead kicker={t("laws.kicker")} title={t("laws.title")} />
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              {topic.laws.map((l, i) => (
                <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: "14px" }}>
                  <div style={{
                    display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: 0.8,
                    padding: "3px 8px", borderRadius: 4, background: "var(--ink)", color: "var(--bg)",
                    fontFamily: "'Instrument Sans', system-ui", textTransform: "uppercase" as const,
                  }}>{l.name} {l.section}</div>
                  <div style={{
                    marginTop: 9, fontFamily: "'Fraunces', Georgia, serif", fontSize: 15.5,
                    lineHeight: 1.4, color: "var(--ink)", letterSpacing: -0.1,
                  }}>
                    &ldquo;{l.plainEnglish[language] ?? l.plainEnglish.en}&rdquo;
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === 4 && (
          /* SCENARIO TAB */
          <div style={{ padding: "18px 18px 0" }}>
            <SectionHead kicker={t("scenario.kicker")} title={t("scenario.title")} />
            {topic.scenarios.length === 0 ? (
              <div style={{ marginTop: 24, textAlign: "center", color: "var(--ink-muted)", fontSize: 14 }}>
                No scenario available for this topic.
              </div>
            ) : (
              topic.scenarios.map((sc, si) => (
                <div key={si} style={{ marginTop: 14 }}>
                  <div style={{ padding: "14px", borderRadius: 14, background: "var(--ink)", color: "var(--bg)", position: "relative", overflow: "hidden" }}>
                    <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontSize: 16 }}>
                      {sc.situation[language] ?? sc.situation.en}
                    </div>
                  </div>
                  <div style={{ marginTop: 16, paddingLeft: 10, position: "relative" }}>
                    <div style={{ position: "absolute", left: 19, top: 6, bottom: 6, width: 2, background: "var(--line)" }} />
                    {(sc.steps[language] ?? sc.steps.en ?? []).map((step, i) => (
                      <div key={i} style={{ display: "flex", gap: 14, paddingBottom: 16, position: "relative" }}>
                        <div style={{
                          width: 20, height: 20, borderRadius: 10, background: "var(--accent)", color: "#fff",
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                          fontSize: 10.5, fontWeight: 700, zIndex: 1, marginTop: 2,
                          boxShadow: "0 0 0 4px var(--bg)",
                        }}>{i + 1}</div>
                        <div style={{ flex: 1, fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.5 }}>{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <div style={{ fontSize: 10.5, fontWeight: 700, color: "var(--ink-muted)", letterSpacing: 1.4, textTransform: "uppercase" as const }}>{kicker}</div>
      <div style={{ marginTop: 3, fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 400, color: "var(--ink)", letterSpacing: -0.3 }}>{title}</div>
    </div>
  );
}
