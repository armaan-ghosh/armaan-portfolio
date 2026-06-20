export interface ExperienceItem {
  company: string;
  role: string;
  team?: string;
  start: string;
  end: string;
  location?: string;
  /** Short, scannable overview shown by default. */
  summary: string;
  /** Outcome-oriented highlights, revealed when a role is expanded. */
  highlights: string[];
  /** Compact, verified metrics surfaced as stat chips. */
  metrics?: { value: string; label: string }[];
  technologies: string[];
  /** Controls timeline emphasis. */
  featured?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "Shopify",
    role: "Software Engineering Intern",
    team: "Selling Strategies",
    start: "May 2026",
    end: "Aug 2026",
    location: "Toronto, ON",
    featured: true,
    summary:
      "Shipping full-stack features to Shopify's flagship subscription-management app, with the autonomy to deploy directly to production.",
    highlights: [
      "Owned the design and shipping of roughly 12 production features on a subscription app serving 47k+ merchants and $170M+ in annualized GMV.",
      "Extended Shopify's public GraphQL APIs with new filter and sort capabilities in Ruby on Rails, exposing query primitives to every partner integration — including a memory-leak fix and edge-case test coverage.",
      "Built full-stack features across Rails, GraphQL, and React/Remix with comprehensive unit and integration tests, internationalized across 32 locales.",
    ],
    metrics: [
      { value: "47k+", label: "merchants served" },
      { value: "$170M+", label: "annualized GMV" },
      { value: "32", label: "locales supported" },
    ],
    technologies: ["Ruby on Rails", "GraphQL", "React", "Remix", "TypeScript"],
  },
  {
    company: "Shopify",
    role: "Software Engineering Intern",
    team: "App Platform",
    start: "Sep 2025",
    end: "Dec 2025",
    location: "Toronto, ON",
    featured: true,
    summary:
      "Built production UI primitives for Shopify's React Native design system, used across internal and partner-facing surfaces.",
    highlights: [
      "Owned end-to-end delivery of two production UI components in Shopify's React Native design system, accelerating feature delivery across the platform.",
      "Designed component APIs and variants and standardized interaction and loading patterns — replacing ad-hoc implementations with reusable primitives adopted by 100+ development teams.",
      "Triaged the engineering backlog and resolved 25+ bugs and workflow issues, improving median PR turnaround by 10% and driving critical bugs to zero.",
    ],
    metrics: [
      { value: "100+", label: "teams adopting" },
      { value: "25+", label: "issues resolved" },
      { value: "0", label: "critical bugs" },
    ],
    technologies: ["React Native", "TypeScript", "Design Systems"],
  },
  {
    company: "BOXX Insurance",
    role: "Software Engineering Intern",
    team: "Data Engineering & Product",
    start: "Jan 2025",
    end: "Apr 2025",
    location: "Toronto, ON",
    summary:
      "Automated claims workflows and tuned internal AI tooling, cutting manual effort for the operations team.",
    highlights: [
      "Built Python and Power Automate pipelines that automated claims-processing approvals end-to-end, cutting manual handling time by 60% for the operations team.",
      "Tuned Amazon Q context retrieval through iterative prompt engineering, reducing the team's debugging cycle time on data-pull queries by ~40%.",
      "Researched and evaluated SaaS security tools for dark-web threat monitoring, recommending a solution that saved 25% in licensing fees versus the incumbent.",
    ],
    metrics: [
      { value: "60%", label: "less manual handling" },
      { value: "~40%", label: "faster debugging" },
      { value: "25%", label: "licensing savings" },
    ],
    technologies: ["Python", "Power Automate", "Amazon Q", "AWS"],
  },
  {
    company: "HDFC ERGO General Insurance",
    role: "Frontend Engineer Intern",
    start: "May 2024",
    end: "Aug 2024",
    location: "Mumbai, India",
    summary:
      "Shipped frontend features for the 1UP insurance super-app used by 50,000+ customers.",
    highlights: [
      "Built and shipped frontend features for the 1UP insurance super-app (React + JavaScript) used by 50,000+ customers, contributing to the team's 35% engagement lift.",
      "Implemented Firebase-backed timesheet sync with optimistic UI updates, raising the on-time submission rate by 30% across 200+ field agents.",
      "Designed and integrated role-based access control and session management, hardening the app's authentication layer ahead of a security audit and cutting unauthorized access by 20%.",
    ],
    metrics: [
      { value: "50k+", label: "customers" },
      { value: "35%", label: "engagement lift" },
      { value: "200+", label: "field agents" },
    ],
    technologies: ["React", "JavaScript", "Firebase"],
  },
  {
    company: "NowFloats",
    role: "Product Management Intern",
    start: "May 2024",
    end: "Aug 2024",
    location: "Remote",
    summary:
      "Supported product management work alongside an engineering internship, bridging user needs and delivery.",
    highlights: [
      "Worked on product management across a fast-moving SaaS platform, translating user needs into actionable requirements for the engineering team.",
    ],
    technologies: ["Product Management"],
  },
];
