export interface Testimonial {
  id: string;
  avatar: string;
  name: string;
  rating: number;
  tour: string;
  text: {
    uz: string;
    ru: string;
    en: string;
  };
}
