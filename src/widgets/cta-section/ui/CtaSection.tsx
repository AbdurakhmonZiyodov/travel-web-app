"use client";

import { useTranslations } from "next-intl";
import { Phone, ArrowRight } from "lucide-react";
import { THEME } from "@/shared/config/theme";
import { Link } from "@i18n/navigation";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-secondary to-secondary-light py-20">
      {/* Decorative elements */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

      <div className="container-main relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer bg-white text-secondary px-8 py-4 text-lg hover:bg-white/90"
          >
            {t("button")}
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${THEME.companyPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer border-2 border-white text-white px-8 py-4 text-lg hover:bg-white/10"
          >
            <Phone className="h-5 w-5" />
            {t("phone")}
          </a>
        </div>
      </div>
    </section>
  );
}
