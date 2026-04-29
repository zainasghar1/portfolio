"use client";

import { useMemo, useState } from "react";
import type { CvData } from "@/lib/cv";
import Tilt from "@/components/Tilt";

type Category = CvData["projects"][number]["category"] | "all";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "mobile", label: "Mobile" },
  { id: "automation", label: "Automation" },
];

export default function ProjectsShowcase({
  projects,
}: {
  projects: CvData["projects"];
}) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const active = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active
                  ? "border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-600 dark:bg-sky-950/40 dark:text-sky-200"
                  : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-500"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((project) => (
          <Tilt key={project.title} className="rounded-2xl">
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs text-slate-500 dark:text-slate-400">{project.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-xs text-sky-700 dark:border-sky-700 dark:bg-sky-950/40 dark:text-sky-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-medium text-slate-900 dark:text-slate-100">Problem: </span>
                  {project.problem}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-medium text-slate-900 dark:text-slate-100">Solution: </span>
                  {project.solution}
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-medium text-slate-900 dark:text-slate-100">Impact: </span>
                  {project.impact}
                </p>
              </div>
            </article>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

