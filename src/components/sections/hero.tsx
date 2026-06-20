"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { HeroVisual } from "./hero-visual";

const credibility = [
  { value: "2×", label: "Shopify SWE intern" },
  { value: "47k+", label: "merchants served" },
  { value: "100+", label: "teams adopted my UI" },
  { value: "32", label: "locales shipped" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Backdrop: grid texture + soft accent gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent-soft), transparent)",
        }}
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item}>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-strong transition-colors hover:border-accent"
              >
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                {site.availability.label}
              </Link>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-accent-strong"
            >
              {site.eyebrow}
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              I build software where{" "}
              <span className="text-gradient">product detail</span> and
              engineering quality both matter.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
            >
              I&apos;m Armaan — a Computer Engineering student at Waterloo and a
              software engineer. Most recently I&apos;ve shipped full-stack
              features and React Native design-system components in production at
              Shopify, used across thousands of merchants and 100+ teams.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="#projects" variant="primary">
                View my work
                <ArrowDown className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={site.resumePath}
                external
                variant="secondary"
                aria-label="Download résumé (PDF, opens in a new tab)"
              >
                Download résumé
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                <Mail className="size-4" aria-hidden="true" />
                Get in touch
              </ButtonLink>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4"
            >
              {credibility.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-xs leading-snug text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <div className="lg:pl-4">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
