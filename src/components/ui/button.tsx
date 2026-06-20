import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-strong shadow-soft",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:border-accent hover:text-accent",
  ghost: "text-muted-strong hover:text-foreground hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonProps = StyleProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

type LinkButtonProps = StyleProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: ReactNode;
    /** Set true for off-site / file links to render a plain anchor with rel/target. */
    external?: boolean;
  };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  ...rest
}: LinkButtonProps) {
  const merged = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={merged}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={merged} {...rest}>
      {children}
    </Link>
  );
}
