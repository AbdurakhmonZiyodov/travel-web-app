import { Hero } from "@/widgets/hero";
import { Destinations } from "@/widgets/destinations";
import { Categories } from "@/widgets/categories";
import { PopularTours } from "@/widgets/popular-tours";
import { WhyUs } from "@/widgets/why-us";
import { Testimonials } from "@/widgets/testimonials";
import { CtaSection } from "@/widgets/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Destinations />
      <Categories />
      <PopularTours />
      <WhyUs />
      <Testimonials />
      <CtaSection />
    </>
  );
}
