"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    root.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    const root = document.documentElement;

    root.classList.toggle("dark", nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  if (!mounted) {
    return (
      <>
        <button
          type="button"
          className="hidden rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 md:inline-flex"
          aria-label="Toggle theme"
        >
          Theme
        </button>
        <div className="inline-flex items-center rounded-lg border border-slate-200 px-2 py-1.5 dark:border-slate-700 md:hidden">
          <span className="h-6 w-11 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="hidden rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 md:inline-flex"
        aria-label="Toggle dark mode"
      >
        {isDark ? "Light mode" : "Dark mode"}
      </button>

      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        onClick={toggleTheme}
        className="inline-flex items-center rounded-lg border border-slate-200 px-2 py-1.5 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 md:hidden"
        aria-label="Toggle dark mode"
      >
        <span
          className={`relative h-6 w-11 rounded-full transition ${
            isDark ? "bg-sky-500" : "bg-slate-300"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition ${
              isDark ? "left-5" : "left-0.5"
            }`}
          />
        </span>
      </button>
    </>
  );
}

