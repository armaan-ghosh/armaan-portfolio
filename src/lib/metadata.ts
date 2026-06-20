import type { Metadata } from "next";
import { site } from "@/data/site";

const title = `${site.name} — ${site.role}`;

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Armaan Ghosh",
    "software engineer",
    "Shopify",
    "University of Waterloo",
    "Computer Engineering",
    "frontend engineer",
    "full-stack developer",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Waterloo",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Waterloo",
    },
    worksFor: {
      "@type": "Organization",
      name: "Shopify",
    },
    sameAs: [
      "https://github.com/armaan-ghosh",
      "https://www.linkedin.com/in/armaanghosh",
    ],
  };
}
