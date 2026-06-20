"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ExperienceItem as ExperienceData } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  item: ExperienceData;
  defaultOpen?: boolean;
}

export function ExperienceItem({ item, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const hasDetail = item.highlights.length > 0;

  return (
    <div className="relative">
      {/* Timeline node */}
      <span
        className={cn(
          "absolute -left-[calc(0.5rem+1px)] top-1.5 size-3.5 rounded-full border-2",
          item.featured
            ? "border-accent bg-accent"
            : "border-border-strong bg-background",
        )}
        aria-hidden="true"
      />

      <div className="rounded-2xl border border-transparent px-1 py-1 transition-colors">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {item.role}
              <span className="text-accent"> · {item.company}</span>
            </h3>
            <p className="mt-0.5 text-sm text-muted">
              {item.team ? `${item.team} · ` : ""}
              {item.location}
            </p>
          </div>
          <p className="shrink-0 font-mono text-xs text-muted">
            {item.start} — {item.end}
          </p>
        </div>

        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-strong">
          {item.summary}
        </p>

        {item.metrics ? (
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {item.metrics.map((m) => (
              <div key={m.label} className="flex items-baseline gap-1.5">
                <span className="text-base font-semibold text-foreground">
                  {m.value}
                </span>
                <span className="text-xs text-muted">{m.label}</span>
              </div>
            ))}
          </div>
        ) : null}

        {hasDetail ? (
          <>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              {open ? "Hide details" : "View details"}
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-200",
                  open && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-pretty text-sm leading-relaxed text-muted-strong"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </>
        ) : (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <Badge key={tech} variant="mono">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
