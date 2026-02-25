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
  companyName: "Terra Nova Travel",
  companyPhone: "+998 97 391 21 04",
  companyEmail: "Raufovichfirdavs@gmail.com",
  companyAddress: {
    uz: "Samarqand viloyati, Samarqand shahri, Mironshox ko'chasi 5-uy",
    ru: "Самаркандская область, г. Самарканд, ул. Мироншох, д. 5",
    en: "5 Mironshox Street, Samarkand, Samarkand Region",
  },
  socialLinks: {
    telegram: "https://t.me/Firdavs_ruzimurodov",
    instagram: "https://www.instagram.com/terra_nova.uz/",
    whatsapp: "https://wa.me/998770479966",
    facebook: "https://facebook.com",
  },
} as const;
