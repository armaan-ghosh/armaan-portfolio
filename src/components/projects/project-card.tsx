"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "./project-visual";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduce = useReducedMotion();
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group grid items-center gap-6 rounded-[1.4rem] border border-border bg-surface p-5 shadow-soft transition-colors hover:border-border-strong sm:p-6 lg:grid-cols-2 lg:gap-10"
    >
      {/* Visual */}
      <div className={cn("order-1", reversed && "lg:order-2")}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <motion.div
            className="h-full w-full"
            whileHover={reduce ? undefined : { scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <ProjectVisual project={project} className="h-full" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className={cn("order-2", reversed && "lg:order-1")}>
        <div className="flex items-center gap-2">
          <Badge variant="accent">{project.category}</Badge>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          {project.caseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-1 text-sm text-accent-strong">{project.tagline}</p>

        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <dl className="mt-5 flex gap-8">
          {project.outcomes.map((o) => (
            <div key={o.label}>
              <dt className="sr-only">{o.label}</dt>
              <dd className="text-xl font-semibold text-foreground">
                {o.value}
              </dd>
              <p className="mt-0.5 text-xs text-muted">{o.label}</p>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="mono">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium">
          {project.caseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              className="group/link inline-flex items-center gap-1 text-foreground transition-colors hover:text-accent"
            >
              Read case study
              <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
              Code
            </a>
          ) : null}
          {project.links.demo ? (
            <a
              href={project.links.demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
            >
              {project.links.demo.label}
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
