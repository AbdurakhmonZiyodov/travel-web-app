/**
 * Design tokens and theme configuration.
 * All color values must match the CSS custom properties in globals.css.
 *
 * Primary:   Deep Ocean Blue  – trust, reliability, travel
 * Secondary: Warm Coral       – energy, adventure, CTA
 * Accent:    Teal             – freshness, ocean highlights
 */

export const THEME = {
  colors: {
    primary: "#0F4C81",
    primaryLight: "#2E7CB8",
    primaryDark: "#0A3457",
    secondary: "#E76F51",
    secondaryLight: "#F4A261",
    accent: "#2EC4B6",
    accentLight: "#5EDDD1",
  },
  companyName: "Sayohat Tour",
  companyPhone: "+998 71 123 45 67",
  companyEmail: "info@sayohat-tour.uz",
  companyAddress: {
    uz: "Toshkent sh., Amir Temur ko'chasi, 15-uy",
    ru: "г. Ташкент, ул. Амира Темура, д. 15",
    en: "15 Amir Temur Street, Tashkent",
  },
  socialLinks: {
    telegram: "https://t.me/sayohattour",
    instagram: "https://instagram.com/sayohattour",
    facebook: "https://facebook.com/sayohattour",
  },
} as const;
