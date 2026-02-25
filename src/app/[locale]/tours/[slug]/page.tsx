"use client";

import { use } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  Clock,
  Plane,
  Hotel,
  Car,
  Shield,
  UtensilsCrossed,
  UserCheck,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Container, Button } from "@/shared/ui";
import { TOURS } from "@/entities/tour";
import type { TourInclusion } from "@/entities/tour";
import { Link } from "@i18n/navigation";

const INCLUSION_ICONS: Record<TourInclusion, { icon: typeof Plane; label: string }> = {
  flight: { icon: Plane, label: "tours.flight" },
  hotel: { icon: Hotel, label: "tours.hotel" },
  transfer: { icon: Car, label: "tours.transfer" },
  insurance: { icon: Shield, label: "tours.insurance" },
  meals: { icon: UtensilsCrossed, label: "tours.meals" },
  guide: { icon: UserCheck, label: "tours.guide" },
};

/** Hero needs higher resolution than card; avoid stretching 800px to full width. */
function getHeroImageUrl(cardImageUrl: string): string {
  try {
    const u = new URL(cardImageUrl);
    if (u.hostname.includes("unsplash.com")) {
      u.searchParams.set("w", "1920");
      u.searchParams.set("h", "1080");
      u.searchParams.set("fit", "crop");
      u.searchParams.set("q", "85");
      return u.toString();
    }
  } catch {
    // ignore
  }
  return cardImageUrl;
}

export default function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const t = useTranslations();
  const locale = useLocale() as "uz" | "ru" | "en";

  const tour = TOURS.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <section className="section">
        <Container className="text-center">
          <p className="text-lg text-text-secondary">Tour not found</p>
          <Link href="/tours" className="btn-primary mt-4 inline-block">
            {t("tours.title")}
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero Image — use high-res URL so it stays sharp at full width */}
      <section className="relative h-[400px] md:h-[500px]">
        <Image
          src={getHeroImageUrl(tour.image)}
          alt={tour.title[locale]}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-12">
          <Link
            href="/tours"
            className="mb-6 flex w-fit items-center gap-2 rounded-lg bg-white/20 px-3 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/30"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("tours.title")}
          </Link>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {tour.title[locale]}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-white/80">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {tour.nights} {t("tours.nights")}
            </span>
          </div>
        </Container>
      </section>

      {/* Tour Details */}
      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary">
                {tour.title[locale]}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {tour.description[locale]}
              </p>

              {/* Inclusions */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-text-primary">
                  {t("tours.included")}
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {tour.includes.map((inc) => {
                    const { icon: Icon, label } = INCLUSION_ICONS[inc];
                    return (
                      <div
                        key={inc}
                        className="flex items-center gap-3 rounded-xl bg-surface p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-medium text-text-primary">
                          {t(label)}
                        </span>
                        <CheckCircle className="ml-auto h-5 w-5 text-accent" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div>
              <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <div className="text-center">
                  <span className="text-sm text-text-muted">
                    {t("tours.from")}
                  </span>
                  <div className="mt-1 text-4xl font-bold text-primary">
                    ${tour.priceFrom}
                  </div>
                  <span className="text-sm text-text-muted">
                    {t("tours.perPerson")}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <Button variant="primary" className="w-full">
                    {t("tours.book")}
                  </Button>
                  <Link
                    href="/contacts"
                    className="btn-outline block w-full text-center"
                  >
                    {t("cta.phone")}
                  </Link>
                </div>

                <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">{t("tours.nights")}</span>
                    <span className="font-medium text-text-primary">
                      {tour.nights}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-muted">
                      {t("common.yearRound")}
                    </span>
                    <span className="font-medium text-text-primary">
                      {tour.isYearRound ? "✓" : "—"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
