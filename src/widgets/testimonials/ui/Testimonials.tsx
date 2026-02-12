"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/shared/ui";
import { TestimonialCard, TESTIMONIALS } from "@/entities/testimonial";

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="section">
      <div className="container-main">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
