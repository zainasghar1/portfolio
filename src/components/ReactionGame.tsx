"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "waiting" | "ready" | "result" | "tooSoon";

export default function ReactionGame() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [resultMs, setResultMs] = useState<number | null>(null);
  const [bestMs, setBestMs] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const startedAtRef = useRef<number>(0);

  useEffect(() => {
    const saved = window.localStorage.getItem("reaction_best_ms");
    if (saved) {
      const value = Number(saved);
      if (!Number.isNaN(value)) setBestMs(value);
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function start() {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setResultMs(null);
    setPhase("waiting");

    const delay = Math.floor(1300 + Math.random() * 2500);
    timeoutRef.current = window.setTimeout(() => {
      startedAtRef.current = performance.now();
      setPhase("ready");
    }, delay);
  }

  function clickArea() {
    if (phase === "waiting") {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      setPhase("tooSoon");
      return;
    }

    if (phase === "ready") {
      const reaction = Math.round(performance.now() - startedAtRef.current);
      setResultMs(reaction);
      setPhase("result");

      if (bestMs === null || reaction < bestMs) {
        setBestMs(reaction);
        window.localStorage.setItem("reaction_best_ms", String(reaction));
      }
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Reaction Challenge</h3>
        <button
          type="button"
          onClick={start}
          className="rounded-lg bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-200 dark:bg-sky-950/40 dark:text-sky-200 dark:hover:bg-sky-900/50"
        >
          {phase === "idle" ? "Start Game" : "Restart"}
        </button>
      </div>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Click start, wait for the panel to turn green, then click as fast as you
        can.
      </p>

      <button
        type="button"
        onClick={clickArea}
        className={`mt-4 h-44 w-full rounded-xl border text-base font-medium transition ${
          phase === "ready"
            ? "border-emerald-300 bg-emerald-50 text-emerald-700"
            : phase === "waiting"
              ? "border-amber-300 bg-amber-50 text-amber-700"
              : phase === "tooSoon"
                ? "border-rose-300 bg-rose-50 text-rose-700"
                : "border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        }`}
      >
        {phase === "idle" && "Press Start"}
        {phase === "waiting" && "Wait for green..."}
        {phase === "ready" && "CLICK NOW!"}
        {phase === "tooSoon" && "Too soon! Click Restart"}
        {phase === "result" && resultMs !== null && `${resultMs} ms`}
      </button>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-slate-500 dark:text-slate-400">Last score</p>
          <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
            {resultMs !== null ? `${resultMs} ms` : "—"}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-slate-500 dark:text-slate-400">Best score</p>
          <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
            {bestMs !== null ? `${bestMs} ms` : "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

