"use client";

import { useTranslations } from "next-intl";
import { TourSearch } from "@/features/tour-search";

export function Hero() {
  const t = useTranslations();

  const stats = [
    { value: "7+", labelKey: "about.experience" },
    { value: "5 000+", labelKey: "about.clients" },
    { value: "50+", labelKey: "about.destinations" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='5' cy='5' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

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
        <div className="mt-20 grid grid-cols-3 gap-12 md:gap-20">
          {stats.map((stat) => (
            <div key={stat.labelKey} className="text-center">
              <div className="text-3xl font-bold text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white/60 uppercase tracking-wider">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
