import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "mono" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs leading-none",
        variant === "default" &&
          "border-border bg-surface-2 text-muted-strong",
        variant === "mono" &&
          "border-border bg-surface-2 font-mono text-[0.7rem] uppercase tracking-wider text-muted",
        variant === "accent" &&
          "border-transparent bg-accent-soft text-accent-strong",
        className,
      )}
    >
      {children}
    </span>
  );
}
