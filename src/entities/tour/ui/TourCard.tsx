"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Clock, Flame } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import { Link } from "@i18n/navigation";
import type { Tour } from "../model/types";

interface TourCardProps {
  tour: Tour;
  className?: string;
}

export function TourCard({ tour, className }: TourCardProps) {
  const t = useTranslations("popularTours");
  const locale = useLocale() as "uz" | "ru" | "en";

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <Image
          src={tour.image}
          alt={tour.title[locale]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {tour.isHot && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white shadow-md">
            <Flame className="h-3 w-3" />
            Hot
          </span>
        )}

        <div className="absolute bottom-4 right-4 rounded-xl bg-white/95 px-3.5 py-2 shadow-md backdrop-blur-sm">
          <span className="text-xs text-text-muted">{t("from")} </span>
          <span className="text-lg font-bold text-primary">
            ${tour.priceFrom}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold leading-snug text-text-primary group-hover:text-primary transition-colors">
          {tour.title[locale]}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-2">
          {tour.description[locale]}
        </p>

        <div className="mt-auto flex items-center gap-4 pt-4 text-sm text-text-muted">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {tour.nights} {t("nights")}
          </span>
          <span className="text-xs">
            {tour.isYearRound ? t("yearRound") : t("seasonal")}
          </span>
        </div>
      </div>
    </Link>
  );
}
