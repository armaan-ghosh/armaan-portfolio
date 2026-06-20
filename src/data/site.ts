export const site = {
  name: "Armaan Ghosh",
  shortName: "Armaan",
  initials: "AG",
  role: "Software Engineer",
  // Used for metadata, sitemap and structured data. Override via NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://armaanghosh.com",
  location: "Waterloo, Ontario, Canada",
  email: "a65ghosh@uwaterloo.ca",
  resumePath: "/resume/Armaan-Ghosh-Resume.pdf",
  eyebrow: "Computer Engineering @ Waterloo",
  // Verified from LinkedIn: currently interning at Shopify (Summer 2026).
  availability: {
    label: "Interning at Shopify · Summer 2026",
    open: true,
  },
  tagline:
    "I build software where product detail and engineering quality both matter.",
  description:
    "Armaan Ghosh is a Computer Engineering student at the University of Waterloo and a software engineer with production experience across Shopify, BOXX Insurance, and HDFC ERGO — spanning frontend, full-stack, design systems, data, and developer tooling.",
} as const;

export type Site = typeof site;
