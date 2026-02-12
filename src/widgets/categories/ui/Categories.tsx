"use client";

import { useTranslations } from "next-intl";
import {
  Umbrella,
  Camera,
  Landmark,
  Ship,
  Mountain,
  Heart,
} from "lucide-react";
import { SectionTitle } from "@/shared/ui";
import { Link } from "@i18n/navigation";

const CATEGORIES = [
  { key: "beach", icon: Umbrella, color: "bg-blue-50 text-blue-600" },
  { key: "excursions", icon: Camera, color: "bg-amber-50 text-amber-600" },
  { key: "europe", icon: Landmark, color: "bg-purple-50 text-purple-600" },
  { key: "cruises", icon: Ship, color: "bg-cyan-50 text-cyan-600" },
  { key: "skiing", icon: Mountain, color: "bg-sky-50 text-sky-600" },
  { key: "health", icon: Heart, color: "bg-rose-50 text-rose-600" },
] as const;

export function Categories() {
  const t = useTranslations("categories");

  return (
    <section className="section bg-surface">
      <div className="container-main">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.key}
                href="/tours"
                className="group flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${cat.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-sm font-medium text-text-primary text-center leading-tight">
                  {t(cat.key)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
