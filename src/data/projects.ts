export interface CaseStudySection {
  heading: string;
  body: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** One-line product description for cards. */
  description: string;
  role: string;
  year: string;
  category: string;
  technologies: string[];
  /** Two meaningful, verified outcomes. */
  outcomes: { value: string; label: string }[];
  /** Visual variant rendered by ProjectVisual. */
  visual: "taxlens" | "predictor";
  accent: "indigo" | "emerald";
  links: {
    github?: string;
    demo?: { label: string; href: string };
  };
  featured: boolean;
  /** Optional long-form case study. Omit to render a compact page. */
  caseStudy?: {
    overview: string;
    sections: CaseStudySection[];
    learned: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "taxlens",
    name: "TaxLens",
    tagline: "After-tax pricing for Amazon.ca",
    description:
      "A published Chrome extension that surfaces real after-tax prices on Amazon.ca by applying the correct sales tax for every Canadian province and territory.",
    role: "Designed, built, and published end-to-end",
    year: "2025",
    category: "Chrome Extension",
    technologies: ["TypeScript", "Chrome APIs", "JavaScript"],
    outcomes: [
      { value: "70+", label: "organic installs" },
      { value: "~27KB", label: "shipped bundle" },
    ],
    visual: "taxlens",
    accent: "indigo",
    links: {
      demo: {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/",
      },
    },
    featured: true,
    caseStudy: {
      overview:
        "Sticker prices on Amazon.ca never include sales tax, and the rate changes depending on which province you're shopping from. TaxLens closes that gap: it reads the listing price in place and shows the real, after-tax total using the correct HST, GST, PST, or QST rules for the shopper's location.",
      sections: [
        {
          heading: "The problem",
          body: [
            "Canadian sales tax is fragmented — 13 provinces and territories each apply a different combination of GST, HST, PST, and QST. The price you see on a product page is almost never the price you pay at checkout, which makes comparison shopping and budgeting harder than it should be.",
          ],
        },
        {
          heading: "Approach",
          body: [
            "I built TaxLens as a lightweight content script that detects prices on Amazon.ca listing and product pages and overlays the after-tax total inline, without disrupting the native layout.",
            "Tax rules for all 13 provinces and territories are encoded as a small rate table, and the extension determines the applicable jurisdiction with an opt-in IP geolocation step rather than demanding location permissions up front.",
          ],
        },
        {
          heading: "Privacy-first architecture",
          body: [
            "The extension keeps everything local: preferences live in browser storage, there are no accounts, and geolocation is strictly opt-in. The entire experience ships in a ~27KB bundle, so it stays fast and unobtrusive.",
            "I published it to the Chrome Web Store, where it picked up 70+ organic installs.",
          ],
        },
      ],
      learned: [
        "Shipping a real extension through the Chrome Web Store review process — manifest permissions, privacy disclosures, and store listings.",
        "Designing for trust: defaulting to local storage and opt-in location made the value proposition easier to accept.",
        "Keeping a content script tiny and resilient against a third-party DOM you don't control.",
      ],
    },
  },
  {
    slug: "football-world-cup-predictor",
    name: "Football World Cup Predictor",
    tagline: "Machine learning for match outcomes",
    description:
      "A TensorFlow model that predicts football match results, trained on a decade of historical fixtures and live sports data with tournament-aware weighting.",
    role: "Built the model and data pipeline",
    year: "2024",
    category: "Machine Learning",
    technologies: ["Python", "TensorFlow", "Sports APIs"],
    outcomes: [
      { value: "~70%", label: "prediction accuracy" },
      { value: "10 yrs", label: "of training data" },
    ],
    visual: "predictor",
    accent: "emerald",
    links: {},
    featured: true,
    caseStudy: {
      overview:
        "A football match-prediction model that combines ten years of historical results with live data from sports APIs. It reaches roughly 70% accuracy across friendlies and tournament fixtures, with weighting schemes designed specifically for high-stakes knockout matches.",
      sections: [
        {
          heading: "Context",
          body: [
            "Football outcomes are noisy: form, fixtures, and the stakes of a given match all shift the probabilities. I wanted a model that respected those dynamics instead of treating every game the same.",
          ],
        },
        {
          heading: "Approach",
          body: [
            "I trained a TensorFlow model on ten years of historical match data, enriched with live feeds from sports APIs. The pipeline emphasizes feature engineering — turning raw results into signals the model can actually learn from.",
            "Two weighting schemes carried most of the gains: tournament-aware weighting that raises the importance of knockout-round dynamics, and recency weighting across each team's last 20 matches to capture current form.",
          ],
        },
        {
          heading: "Results",
          body: [
            "The model reaches ~70% prediction accuracy across friendlies and tournament fixtures. Tournament-aware weighting raised accuracy on high-stakes matches by 6%, and recency weighting improved short-term performance by 12%.",
          ],
        },
      ],
      learned: [
        "Feature engineering and weighting often matter more than model size for noisy, real-world prediction problems.",
        "Blending historical datasets with live API data introduces freshness — and a whole class of data-quality edge cases.",
        "Evaluating a model honestly across different match contexts, rather than a single aggregate accuracy number.",
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
