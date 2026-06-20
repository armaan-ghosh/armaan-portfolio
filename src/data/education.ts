export const education = {
  school: "University of Waterloo",
  degree: "BASc in Computer Engineering",
  detail: "Honours, Co-op",
  start: "2023",
  graduation: "Apr 2028",
  coursework: [
    "Algorithm Design and Analysis",
    "Real-Time Operating Systems",
    "Digital Hardware Systems",
    "ASIC Design",
    "Embedded Systems",
  ],
} as const;

export interface Involvement {
  role: string;
  org: string;
  note?: string;
}

// Campus & community involvement, verified from resume + LinkedIn.
export const involvement: Involvement[] = [
  { role: "Orientation Week Director", org: "University of Waterloo" },
  { role: "First Year Conference Director", org: "Engineering Society" },
  { role: "SOC Sports Director", org: "Waterloo Engineering Society" },
  { role: "Soccer Intramural Referee", org: "University of Waterloo" },
  { role: "Marketing", org: "CUTC Foundation" },
  { role: "Content Creator", org: "Indian Cultural Association" },
];

// "Beyond code" facts — verified, used in the About panel.
export interface BeyondCodeItem {
  label: string;
  detail: string;
}

export const beyondCode: BeyondCodeItem[] = [
  {
    label: "Football",
    detail: "Intramural referee at Waterloo across multiple terms.",
  },
  {
    label: "Content creation",
    detail: "2.5M+ views across YouTube, Instagram, and club content.",
  },
  {
    label: "Teaching",
    detail: "Udemy Java instructor — 3,200+ students across 110+ countries.",
  },
  {
    label: "Leadership",
    detail: "Orientation Director and Engineering Society roles at Waterloo.",
  },
];
