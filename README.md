# Armaan Ghosh — Personal Website

A polished, production-ready personal portfolio for **Armaan Ghosh** — Computer
Engineering student at the University of Waterloo and software engineer (2× SWE
intern at Shopify).

Built as a fast, accessible, dark-first product site rather than a template:
single-page primary experience with dedicated project case-study routes,
generated Open Graph imagery, structured data, and restrained motion.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first config with design tokens)
- **Framer Motion** for restrained, reduced-motion-aware animation
- **next-themes** for the dark/light toggle
- **lucide-react** for icons
- **next/font** with **Geist** (sans) and **Geist Mono**

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

### Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the dev server                     |
| `npm run build`     | Production build                         |
| `npm run start`     | Serve the production build               |
| `npm run lint`      | ESLint (next/core-web-vitals + TS rules) |
| `npm run typecheck` | TypeScript type checking (`tsc --noEmit`)|

## Project structure

```
src/
  app/
    layout.tsx              # Root layout, fonts, theme provider, Person JSON-LD
    page.tsx                # Single-page home (assembles all sections)
    globals.css             # Tailwind v4 + design tokens (light/dark)
    not-found.tsx           # Custom 404
    icon.tsx                # Generated AG monogram favicon
    opengraph-image.tsx     # Generated social-share image (1200×630)
    sitemap.ts / robots.ts  # SEO routes
    projects/[slug]/page.tsx# Project case-study routes (SSG)
  components/
    layout/                 # Navbar, mobile nav, theme toggle, footer
    sections/               # Hero, Experience, Projects, Skills, About, Contact
    projects/               # Project card + bespoke CSS visuals
    experience/             # Expandable experience timeline item
    providers/              # Theme provider
    ui/                     # Container, Button, Badge, Reveal, SectionHeading, links
  data/                     # Single source of truth (content)
    site.ts  socials.ts  experience.ts  projects.ts  skills.ts  education.ts  nav.ts
  lib/
    utils.ts  metadata.ts
public/
  resume/Armaan-Ghosh-Resume.pdf
  images/armaan-ghosh.png
```

## Content management

All content lives in `src/data/*` as typed TypeScript — no content is hardcoded
in components. Update those files to change copy, experience, projects, skills,
and links. Long-form case studies live alongside each project in
`src/data/projects.ts`.

## Environment variables

None are required to run the site. One optional variable:

| Variable               | Purpose                                              | Default                  |
| ---------------------- | ---------------------------------------------------- | ------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, OG, JSON-LD| `https://armaanghosh.com`|

Set it in Vercel (or `.env.local`) to your production domain before deploying.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repo. The framework is
   auto-detected as Next.js — no build configuration is required.
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable (your production domain).
4. Deploy. Subsequent pushes deploy automatically.

## Accessibility & performance

- Semantic HTML, skip-to-content link, keyboard-accessible nav and controls.
- Respects `prefers-reduced-motion`; animations never block content access.
- WCAG-conscious contrast in both themes; visible focus states throughout.
- Server components by default; client components only where interaction needs them.
- No private contact details (phone/address) are displayed anywhere.
```
