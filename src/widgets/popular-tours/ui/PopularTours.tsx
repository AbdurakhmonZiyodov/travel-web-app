"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/shared/ui";
import { TourCard, TOURS } from "@/entities/tour";
import { Link } from "@i18n/navigation";

export function PopularTours() {
  const t = useTranslations("popularTours");

  return (
    <section className="section">
      <div className="container-main">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOURS.slice(0, 6).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/tours"
            className="btn-primary inline-flex items-center gap-2"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
