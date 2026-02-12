"use client";

import { useTranslations } from "next-intl";
import { Phone, ArrowRight } from "lucide-react";
import { THEME } from "@/shared/config/theme";
import { Link } from "@i18n/navigation";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-secondary to-secondary-light">
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="container-main relative z-10 py-20 text-center md:py-28">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-semibold text-secondary shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl"
          >
            {t("button")}
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={`tel:${THEME.companyPhone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/80 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-white/15"
          >
            <Phone className="h-5 w-5" />
            {t("phone")}
          </a>
        </div>
      </div>
    </section>
  );
}
