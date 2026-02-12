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
      className={cn("card group block", className)}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title[locale]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {tour.isHot && (
          <span className="absolute top-3 left-3 badge-secondary flex items-center gap-1">
            <Flame className="h-3 w-3" />
            Hot
          </span>
        )}

        <div className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-xs text-text-secondary">{t("from")}</span>
          <span className="ml-1 text-lg font-bold text-primary">
            ${tour.priceFrom}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
          {tour.title[locale]}
        </h3>
        <p className="mt-2 text-sm text-text-secondary line-clamp-2">
          {tour.description[locale]}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {tour.nights} {t("nights")}
          </span>
          <span>
            {tour.isYearRound ? t("yearRound") : t("seasonal")}
          </span>
        </div>
      </div>
    </Link>
  );
}
