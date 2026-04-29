"use client";

import { useMemo, useState } from "react";
import type { ExperienceItem } from "@/lib/cv";

export default function ExperienceExplorer({
  items,
}: {
  items: ExperienceItem[];
}) {
  const [active, setActive] = useState(0);
  const current = useMemo(() => items[active], [items, active]);

  if (!items.length) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-[260px,1fr]">
      <div className="space-y-2">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={`${item.company}-${item.range}`}
              type="button"
              onClick={() => setActive(i)}
              className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                isActive
                  ? "border-sky-300 bg-sky-50 dark:border-sky-600 dark:bg-sky-950/40"
                  : "border-slate-200 bg-white hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-500"
              }`}
            >
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.company}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.range}</p>
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <p className="text-sm text-slate-500 dark:text-slate-400">{current.range}</p>
        <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-slate-100">
          {current.title}
        </h3>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{current.company}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{current.location}</p>
        <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">{current.description}</p>
      </div>
    </div>
  );
}

