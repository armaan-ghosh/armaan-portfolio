import { site } from "@/data/site";
import { socials } from "@/data/socials";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-sm font-medium text-foreground">
            {site.name}
          </p>
          <p className="max-w-sm text-sm text-muted">
            Designed and built by Armaan Ghosh with Next.js, TypeScript, and
            Tailwind CSS.
          </p>
          <p className="font-mono text-xs text-muted">
            © {year} · {site.location}
          </p>
        </div>
        <SocialLinks links={socials} />
      </Container>
    </footer>
  );
}
