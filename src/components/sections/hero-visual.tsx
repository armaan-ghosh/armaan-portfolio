"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { recentStack } from "@/data/skills";

const statusLines = [
  { key: "role", value: "SWE Intern @ Shopify" },
  { key: "team", value: "Selling Strategies" },
  { key: "location", value: "Toronto / Waterloo, ON" },
  { key: "focus", value: "Full-stack · Design systems" },
];

/**
 * A glass "system status" panel containing real portfolio metadata, with a
 * pointer-reactive accent glow. Decorative — hidden from assistive tech.
 */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--mx", `${x}%`);
    ref.current.style.setProperty("--my", `${y}%`);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      aria-hidden="true"
      className="group relative w-full select-none"
      style={
        { "--mx": "70%", "--my": "20%" } as React.CSSProperties
      }
    >
      {/* Pointer-reactive glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.4rem] opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), var(--accent-soft), transparent 60%)",
        }}
      />

      <div className="relative overflow-hidden rounded-[1.4rem] border border-border bg-surface/80 shadow-lift backdrop-blur">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="ml-2 font-mono text-xs text-muted">
            armaan@waterloo — status
          </span>
        </div>

        <div className="space-y-3 p-5 font-mono text-sm">
          {statusLines.map((line, i) => (
            <motion.div
              key={line.key}
              initial={reduce ? false : { opacity: 0, x: -8 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
              className="flex items-baseline gap-3"
            >
              <span className="w-20 shrink-0 text-muted">{line.key}</span>
              <span className="text-foreground">{line.value}</span>
            </motion.div>
          ))}

          <div className="!mt-5 border-t border-border pt-4">
            <p className="mb-2 text-xs text-muted">recently working with</p>
            <div className="flex flex-wrap gap-1.5">
              {recentStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-surface-2 px-2 py-1 text-[0.7rem] text-muted-strong"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="!mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-muted-strong">
              shipping to production · Summer 2026
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
