"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/shared/ui";
import { TourCard, TOURS } from "@/entities/tour";

export default function ToursPage() {
  const t = useTranslations("tours");

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {t("subtitle")}
          </p>
        </Container>
      </section>

      {/* Tours Grid */}
      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TOURS.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
