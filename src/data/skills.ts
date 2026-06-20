export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Ruby", "TypeScript", "Python", "SQL", "C++", "Kotlin"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "Remix", "TypeScript", "Design Systems"],
  },
  {
    title: "Backend & APIs",
    items: ["Ruby on Rails", "GraphQL", "Firebase", "REST"],
  },
  {
    title: "Data & ML",
    items: ["TensorFlow", "BigQuery", "Python", "Feature Engineering"],
  },
  {
    title: "Cloud & Tooling",
    items: ["AWS", "GitHub", "Graphite", "Figma", "Power Automate"],
  },
  {
    title: "Hardware & Systems",
    items: ["C++", "Verilog", "VHDL", "MATLAB", "Embedded Systems"],
  },
];

// Verified, current technologies for the "recently working with" row.
export const recentStack: string[] = [
  "Ruby on Rails",
  "GraphQL",
  "React",
  "Remix",
  "TypeScript",
];
