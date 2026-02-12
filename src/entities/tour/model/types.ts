export interface Tour {
  id: string;
  slug: string;
  destination: string;
  country: string;
  image: string;
  priceFrom: number;
  currency: string;
  nights: number;
  isHot: boolean;
  isYearRound: boolean;
  includes: TourInclusion[];
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  description: {
    uz: string;
    ru: string;
    en: string;
  };
}

export type TourInclusion =
  | "flight"
  | "hotel"
  | "transfer"
  | "insurance"
  | "meals"
  | "guide";
