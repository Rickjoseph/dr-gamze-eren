"use client";

import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  tint?: "clear" | "rose" | "dark";
  refract?: boolean;
};

// Wrapper that tracks the cursor and updates --mx/--my CSS variables
// so the glass surface shows a moving specular highlight on hover.
//
// The handler is rAF-throttled so we paint at most once per frame even
// if the browser fires mousemove faster, and only attaches a native
// listener while the cursor is over the element.
export function GlassCard({ children, className = "", tint = "clear", refract = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const ptr = useRef({ x: 0, y: 0 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    ptr.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      el.style.setProperty("--mx", `${ptr.current.x}px`);
      el.style.setProperty("--my", `${ptr.current.y}px`);
    });
  }

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

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
