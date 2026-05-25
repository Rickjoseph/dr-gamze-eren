"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  tint?: "clear" | "rose" | "dark";
  refract?: boolean;
};

// Wrapper that tracks the cursor and updates --mx/--my CSS variables
// so the glass surface shows a moving specular highlight on hover.
export function GlassCard({ children, className = "", tint = "clear", refract = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  const tintClass =
    tint === "rose" ? "glass-tint-rose" : tint === "dark" ? "glass-dark" : "";

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`glass ${refract ? "glass-refract" : ""} ${tintClass} ${className}`}
    >
      {children}
    </div>
  );
}
