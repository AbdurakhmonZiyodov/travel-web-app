export interface Destination {
  id: string;
  slug: string;
  image: string;
  name: {
    uz: string;
    ru: string;
    en: string;
  };
  toursCount: number;
  priceFrom: number;
  currency: string;
}
