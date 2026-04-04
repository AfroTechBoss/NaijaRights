"use client";

import { CheckCircle2, XCircle, CheckSquare, XSquare } from "lucide-react";

interface RightsCardProps {
  canTitle: string; cannotTitle: string;
  canItems: string[]; cannotItems: string[];
  whatToDoTitle: string; whatNotToDoTitle: string;
  whatToDoItems: string[]; whatNotToDoItems: string[];
  onlyActions?: boolean;
}

const STYLES = {
  can:       { bg: "#8df8b7", border: "rgba(0,110,65,0.2)",  titleColor: "#005e37", textColor: "#005e37", iconColor: "#006e41" },
  cannot:    { bg: "#ffd9d9", border: "rgba(172,52,52,0.2)", titleColor: "#ac3434", textColor: "#ac3434", iconColor: "#ac3434" },
  todo:      { bg: "#8df8b7", border: "rgba(0,110,65,0.2)",  titleColor: "#005e37", textColor: "#005e37", iconColor: "#006e41" },
  notTodo:   { bg: "#d9e2ff", border: "rgba(49,92,174,0.2)", titleColor: "#1f4ea0", textColor: "#1f4ea0", iconColor: "#315cae" },
};

function ItemList({ items, icon: Icon, s }: {
  items: string[];
  icon: React.ElementType;
  s: typeof STYLES.can;
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: s.iconColor }} />
          <span className="text-sm leading-relaxed" style={{ color: s.textColor }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({ title, items, icon, s }: {
  title: string; items: string[];
  icon: React.ElementType; s: typeof STYLES.can;
}) {
  return (
    <div
      className="rounded-2xl p-4"
      style={{ background: s.bg, border: `1px solid ${s.border}` }}
    >
      <h3
        className="text-[10px] font-black uppercase tracking-widest mb-3"
        style={{ color: s.titleColor, fontFamily: "var(--font-manrope)" }}
      >
        {title}
      </h3>
      <ItemList items={items} icon={icon} s={s} />
    </div>
  );
}

export default function RightsCard({
  canTitle, cannotTitle, canItems, cannotItems,
  whatToDoTitle, whatNotToDoTitle, whatToDoItems, whatNotToDoItems,
  onlyActions = false,
}: RightsCardProps) {
  return (
    <div className="space-y-3">
      {!onlyActions && (
        <>
          <Card title={canTitle}    items={canItems}    icon={CheckCircle2} s={STYLES.can}    />
          <Card title={cannotTitle} items={cannotItems} icon={XCircle}      s={STYLES.cannot} />
        </>
      )}
      <Card title={whatToDoTitle}    items={whatToDoItems}    icon={CheckSquare} s={STYLES.todo}    />
      <Card title={whatNotToDoTitle} items={whatNotToDoItems} icon={XSquare}     s={STYLES.notTodo} />
    </div>
  );
}
