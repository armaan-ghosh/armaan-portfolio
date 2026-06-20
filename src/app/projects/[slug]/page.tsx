import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/projects/project-visual";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name} — ${project.tagline}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description: project.description,
      url: `${site.url}/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <>
      <Navbar />
      <main id="main" className="pt-28 pb-20 sm:pt-32">
        <Container className="max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to projects
          </Link>

          <header className="mt-8">
            <div className="flex items-center gap-2">
              <Badge variant="accent">{project.category}</Badge>
              <span className="font-mono text-xs text-muted">
                {project.year}
              </span>
            </div>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-accent-strong">{project.tagline}</p>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
                >
                  <Github className="size-4" />
                  View code
                </a>
              ) : null}
              {project.links.demo ? (
                <a
                  href={project.links.demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
                >
                  {project.links.demo.label}
                  <ArrowUpRight className="size-4" />
                </a>
              ) : null}
            </div>
          </header>

          {/* Hero visual */}
          <div className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-soft">
            <ProjectVisual project={project} className="h-full rounded-none border-0" />
          </div>

          {/* Quick facts */}
          <dl className="mt-10 grid gap-6 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                Role
              </dt>
              <dd className="mt-1 text-sm text-foreground">{project.role}</dd>
            </div>
            {project.outcomes.map((o) => (
              <div key={o.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {o.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  {o.value}
                </dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                Stack
              </dt>
              <dd className="mt-1.5 flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <Badge key={t} variant="mono">
                    {t}
                  </Badge>
                ))}
              </dd>
            </div>
          </dl>

          {/* Case study body */}
          {cs ? (
            <article className="mt-12 space-y-10">
              <p className="text-pretty text-lg leading-relaxed text-muted-strong">
                {cs.overview}
              </p>

              {cs.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl font-semibold tracking-tight">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((p, i) => (
                      <p
                        key={i}
                        className="text-pretty text-base leading-relaxed text-muted"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="text-xl font-semibold tracking-tight">
                  What I learned
                </h2>
                <ul className="mt-3 space-y-2.5 border-l border-border pl-4">
                  {cs.learned.map((l, i) => (
                    <li
                      key={i}
                      className="text-pretty text-base leading-relaxed text-muted"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          ) : (
            <p className="mt-12 text-base leading-relaxed text-muted">
              A more detailed write-up is on the way.
            </p>
          )}

          <div className="mt-14 border-t border-border pt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All projects
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
