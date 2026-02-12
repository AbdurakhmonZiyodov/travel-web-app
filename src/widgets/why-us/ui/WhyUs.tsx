"use client";

import { useTranslations } from "next-intl";
import { Globe, Shield, Plane, FileCheck } from "lucide-react";
import { SectionTitle } from "@/shared/ui";

const REASONS = [
  {
    key: "worldwide",
    icon: Globe,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    key: "insurance",
    icon: Shield,
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    key: "tickets",
    icon: Plane,
    gradient: "from-amber-500 to-amber-600",
  },
  {
    key: "visa",
    icon: FileCheck,
    gradient: "from-purple-500 to-purple-600",
  },
] as const;

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <section className="section bg-surface">
      <div className="container-main">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.key}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${reason.gradient} text-white shadow-md`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-text-primary">
                  {t(`${reason.key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {t(`${reason.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
