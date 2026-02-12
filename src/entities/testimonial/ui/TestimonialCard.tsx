"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Star, Quote } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import type { Testimonial } from "../model/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const locale = useLocale() as "uz" | "ru" | "en";

  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md md:p-8",
        className
      )}
    >
      {/* Quote icon */}
      <Quote className="h-8 w-8 text-primary/15" />

      {/* Review text */}
      <p className="mt-4 text-sm leading-relaxed text-text-secondary">
        {testimonial.text[locale]}
      </p>

      {/* Stars */}
      <div className="mt-5 flex gap-0.5">
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

      {/* Author */}
      <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-5">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text-primary">
            {testimonial.name}
          </h4>
          <p className="text-xs text-text-muted">{testimonial.tour}</p>
        </div>
      </div>
    </div>
  );
}
