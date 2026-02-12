"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Star } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import type { Testimonial } from "../model/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const locale = useLocale() as "uz" | "ru" | "en";

  return (
    <div className={cn("card p-6 md:p-8", className)}>
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <h4 className="font-semibold text-text-primary">
            {testimonial.name}
          </h4>
          <p className="text-sm text-text-muted">{testimonial.tour}</p>
        </div>
      </div>

      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < testimonial.rating
                ? "fill-secondary text-secondary"
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        &ldquo;{testimonial.text[locale]}&rdquo;
      </p>
    </div>
  );
}
