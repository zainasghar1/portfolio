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
      <button
        type="button"
        className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
        aria-label="Toggle theme"
      >
        Theme
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
      aria-label="Toggle dark mode"
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}

