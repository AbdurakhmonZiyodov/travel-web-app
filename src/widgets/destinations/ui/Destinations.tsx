"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/shared/ui";
import { DestinationCard, DESTINATIONS } from "@/entities/destination";
import { Link } from "@i18n/navigation";
import { ArrowRight } from "lucide-react";

export function Destinations() {
  const t = useTranslations("destinations");

  return (
    <section className="section">
      <div className="container-main">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/tours"
            className="btn-outline"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
