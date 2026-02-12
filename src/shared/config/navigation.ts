export interface NavItem {
  labelKey: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.tours", href: "/tours" },
  { labelKey: "nav.services", href: "/services" },
  { labelKey: "nav.contacts", href: "/contacts" },
];

export const FOOTER_NAV = {
  quickLinks: [
    { labelKey: "nav.about", href: "/about" },
    { labelKey: "nav.tours", href: "/tours" },
    { labelKey: "nav.services", href: "/services" },
    { labelKey: "nav.contacts", href: "/contacts" },
  ],
  legal: [
    { labelKey: "footer.privacy", href: "/privacy" },
    { labelKey: "footer.terms", href: "/terms" },
  ],
} as const;
