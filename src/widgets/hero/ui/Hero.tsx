"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { TourSearch } from "@/features/tour-search";

const REGISTAN_IMAGE = "/registan.jpg";

export function Hero() {
  const t = useTranslations();

  const stats = [
    { value: "5+", labelKey: "about.experience" },
    { value: "5 000+", labelKey: "about.clients" },
    { value: "50+", labelKey: "about.destinations" },
  ];

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Registan background image */}
      <div className="absolute inset-0">
        <Image
          src={REGISTAN_IMAGE}
          alt="Registon, Samarqand"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-primary-dark/75" />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary/40" />
      </div>

      {/* Decorative blur */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-main relative z-10 flex flex-col items-center px-4 py-28 text-center md:py-40 lg:py-48">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
          {t("hero.subtitle")}
        </p>
        <div className="mt-10 w-full max-w-xl">
          <TourSearch />
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 md:gap-16 lg:gap-20">
          {stats.map((stat) => (
            <div key={stat.labelKey} className="flex min-w-0 flex-col items-center text-center">
              <div className="whitespace-nowrap text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs leading-tight text-white/60 uppercase tracking-wider sm:text-sm">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

