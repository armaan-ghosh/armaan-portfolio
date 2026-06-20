import { site } from "./site";

export interface SocialLink {
  label: string;
  href: string;
  /** lucide-react icon name resolved in the SocialLinks component */
  icon: "github" | "linkedin" | "mail" | "youtube" | "instagram" | "fileText";
  handle?: string;
  external: boolean;
}

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/armaan-ghosh",
    icon: "github",
    handle: "armaan-ghosh",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/armaanghosh",
    icon: "linkedin",
    handle: "in/armaanghosh",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: "mail",
    handle: site.email,
    external: false,
  },
];

// Secondary links surfaced in the About / Beyond-code areas only.
// Only links with verified handles are included to avoid dead links.
export const contentLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thearmaanfiles",
    icon: "instagram",
    handle: "@thearmaanfiles",
    external: true,
  },
];
