"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { cn } from "@/shared/lib/cn";
import { Link } from "@i18n/navigation";
import type { Destination } from "../model/types";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export function DestinationCard({ destination, className }: DestinationCardProps) {
  const locale = useLocale() as "uz" | "ru" | "en";

  return (
    <Link
      href={`/tours?country=${destination.slug}`}
      className={cn(
        "group relative block h-64 overflow-hidden rounded-2xl",
        className
      )}
    >
      <Image
        src={destination.image}
        alt={destination.name[locale]}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-xl font-bold text-white">
          {destination.name[locale]}
        </h3>
        <p className="mt-1 text-sm text-white/80">
          from ${destination.priceFrom}
        </p>
      </div>
    </Link>
  );
}
