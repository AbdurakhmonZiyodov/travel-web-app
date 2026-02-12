import type { Destination } from "./types";

export const DESTINATIONS: Destination[] = [
  {
    id: "1",
    slug: "turkey",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&h=400&fit=crop",
    name: { uz: "Turkiya", ru: "Турция", en: "Turkey" },
    toursCount: 12,
    priceFrom: 590,
    currency: "USD",
  },
  {
    id: "2",
    slug: "egypt",
    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop",
    name: { uz: "Misr", ru: "Египет", en: "Egypt" },
    toursCount: 8,
    priceFrom: 520,
    currency: "USD",
  },
  {
    id: "3",
    slug: "uae",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop",
    name: { uz: "BAA", ru: "ОАЭ", en: "UAE" },
    toursCount: 6,
    priceFrom: 690,
    currency: "USD",
  },
  {
    id: "4",
    slug: "thailand",
    image:
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop",
    name: { uz: "Tailand", ru: "Таиланд", en: "Thailand" },
    toursCount: 5,
    priceFrom: 850,
    currency: "USD",
  },
  {
    id: "5",
    slug: "georgia",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop",
    name: { uz: "Gruziya", ru: "Грузия", en: "Georgia" },
    toursCount: 4,
    priceFrom: 430,
    currency: "USD",
  },
  {
    id: "6",
    slug: "azerbaijan",
    image:
      "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=600&h=400&fit=crop",
    name: { uz: "Ozarbayjon", ru: "Азербайджан", en: "Azerbaijan" },
    toursCount: 3,
    priceFrom: 540,
    currency: "USD",
  },
];
