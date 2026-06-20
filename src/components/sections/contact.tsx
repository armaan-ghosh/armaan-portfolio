import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { site } from "@/data/site";
import { socials } from "@/data/socials";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[1.6rem] border border-border bg-surface px-6 py-14 text-center shadow-soft sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60" />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, var(--accent-soft), transparent)",
            }}
          />

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-strong">
            05 — Contact
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something thoughtful.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted">
            I&apos;m always happy to talk about software, product, internships,
            or new-grad roles — or football and content ideas. The fastest way
            to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`mailto:${site.email}`} external variant="primary">
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </ButtonLink>
            <ButtonLink href={site.resumePath} external variant="secondary">
              View résumé
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <div className="mt-10 flex justify-center">
            <SocialLinks links={socials} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
