"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/shared/ui";
import { ServiceCard, SERVICES } from "@/entities/service";

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {t("subtitle")}
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
