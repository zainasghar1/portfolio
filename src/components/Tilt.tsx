"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

export default function Tilt({
  children,
  className,
  maxRotationDeg = 10,
  liftPx = 14,
}: {
  children: ReactNode;
  className?: string;
  maxRotationDeg?: number;
  liftPx?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  function setVars(rx: number, ry: number, tz: number) {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--tz", `${tz}px`);
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className ?? ""}`}
      style={
        {
          ["--rx" as any]: "0deg",
          ["--ry" as any]: "0deg",
          ["--tz" as any]: "0px",
        } as React.CSSProperties
      }
      onPointerMove={(e) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const px = (e.clientX - rect.left) / rect.width; // 0..1
        const py = (e.clientY - rect.top) / rect.height; // 0..1

        // -0.5..0.5 around the center
        const dx = px - 0.5;
        const dy = py - 0.5;

        const rx = -dy * maxRotationDeg;
        const ry = dx * maxRotationDeg;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          setVars(rx, ry, liftPx);
        });
      }}
      onPointerLeave={() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        setVars(0, 0, 0);
      }}
    >
      {children}
    </div>
  );
}

