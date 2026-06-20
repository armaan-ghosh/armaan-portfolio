import {
  Github,
  Linkedin,
  Mail,
  Youtube,
  Instagram,
  FileText,
  type LucideIcon,
} from "lucide-react";
import type { SocialLink } from "@/data/socials";
import { cn } from "@/lib/utils";

const icons: Record<SocialLink["icon"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  youtube: Youtube,
  instagram: Instagram,
  fileText: FileText,
};

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  /** "icon" = round icon buttons, "row" = icon + label rows. */
  variant?: "icon" | "row";
}

export function SocialLinks({
  links,
  className,
  variant = "icon",
}: SocialLinksProps) {
  if (variant === "row") {
    return (
      <ul className={cn("flex flex-col gap-2", className)}>
        {links.map((link) => {
          const Icon = icons[link.icon];
          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-accent hover:bg-surface-2"
              >
                <Icon
                  className="size-5 text-muted transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {link.label}
                  </span>
                  {link.handle ? (
                    <span className="font-mono text-xs text-muted">
                      {link.handle}
                    </span>
                  ) : null}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map((link) => {
        const Icon = icons[link.icon];
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="flex size-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
