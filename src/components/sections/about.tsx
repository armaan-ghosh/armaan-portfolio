import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { education, beyondCode, involvement } from "@/data/education";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="04 — About"
          title="Engineering with a product mindset"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* Narrative */}
          <Reveal className="space-y-5 text-pretty text-base leading-relaxed text-muted-strong">
            <p>
              I&apos;m a Computer Engineering student at the University of
              Waterloo who likes being close to both the product and the system
              underneath it. The work I enjoy most sits where thoughtful
              interface decisions meet solid engineering — design systems, APIs,
              and the details that make software feel considered.
            </p>
            <p>
              Across two terms at Shopify I&apos;ve shipped full-stack features
              and React Native design-system components used by 100+ teams,
              extended public GraphQL APIs, and learned what it takes to deploy
              directly to production with confidence. Before that I built data
              pipelines and internal AI tooling at BOXX Insurance and shipped
              frontend for a 50,000-customer super-app at HDFC ERGO.
            </p>
            <p>
              I care about ownership — taking something from a vague problem to
              a shipped, tested, internationalized feature — and about the
              user-facing quality that survives that whole process. Outside of
              internships, that instinct shows up in side projects: a published
              Chrome extension and a football prediction model among them.
            </p>
            <p>
              Away from the editor, I referee intramural soccer, make content
              that&apos;s reached a couple million views, and teach the
              fundamentals of Java to thousands of students online. Football and
              content creation are where I get a lot of the discipline and
              storytelling instincts I bring back to engineering.
            </p>

            {/* Education */}
            <div className="!mt-8 rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-start gap-3">
                <GraduationCap
                  className="mt-0.5 size-5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {education.school}
                  </h3>
                  <p className="text-sm text-muted">
                    {education.degree} · {education.detail}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {education.start} — expected {education.graduation}
                  </p>
                  <details className="group mt-3">
                    <summary className="cursor-pointer list-none text-sm font-medium text-accent transition-colors hover:text-accent-strong">
                      Relevant coursework
                    </summary>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {education.coursework.map((course) => (
                        <Badge key={course} variant="mono">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Beyond code panel */}
          <Reveal delay={0.1} className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="relative aspect-[5/4] w-full bg-surface-2">
                <Image
                  src="/images/armaan-ghosh.png"
                  alt="Armaan Ghosh"
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-2 px-5 py-4 text-sm text-muted">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                {site.location}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                Beyond code
              </h3>
              <ul className="mt-4 space-y-4">
                {beyondCode.map((b) => (
                  <li key={b.label}>
                    <p className="text-sm font-medium text-foreground">
                      {b.label}
                    </p>
                    <p className="text-sm text-muted">{b.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                Leadership & campus
              </h3>
              <ul className="mt-4 space-y-3">
                {involvement.map((inv) => (
                  <li key={`${inv.role}-${inv.org}`} className="text-sm">
                    <span className="text-foreground">{inv.role}</span>
                    <span className="text-muted"> · {inv.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
