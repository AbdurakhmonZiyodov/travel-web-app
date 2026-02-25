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
    whatsapp: "https://api.whatsapp.com/send?phone=998973912104&text=Hi%2C%20how%20can%20I%20place%20an%20order%3F%0ASalom%2Cqanday%20%20buyurtma%20%20qilsam%20%20bo%E2%80%98ladi%3F%0A%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%BA%D0%B0%D0%BA%20%D1%8F%20%D0%BC%D0%BE%D0%B3%D1%83%20%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%3F",
    facebook: "https://facebook.com/terranovatravel", // placeholder
  },
} as const;
