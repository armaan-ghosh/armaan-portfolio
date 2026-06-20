export interface NavItem {
  label: string;
  /** Section id within the single-page home experience. */
  id: string;
  /** Root-relative link so it works from sub-routes too. */
  href: string;
}

const ids = ["home", "experience", "projects", "about", "contact"] as const;

const labels: Record<(typeof ids)[number], string> = {
  home: "Home",
  experience: "Experience",
  projects: "Projects",
  about: "About",
  contact: "Contact",
};

export const navItems: NavItem[] = ids.map((id) => ({
  id,
  label: labels[id],
  href: `/#${id}`,
}));

// Section ids used by the scroll-spy active indicator, in document order.
export const sectionIds = [...ids];
