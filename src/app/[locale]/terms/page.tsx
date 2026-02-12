"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/shared/ui";

export default function TermsPage() {
  const t = useTranslations("terms");

  const sections = [
    { titleKey: "general.title", contentKey: "general.content" },
    { titleKey: "booking.title", contentKey: "booking.content" },
    { titleKey: "liability.title", contentKey: "liability.content" },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t("title")}
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-text-secondary">
              {t("intro")}
            </p>

            <div className="mt-10 space-y-8">
              {sections.map((section) => (
                <div key={section.titleKey}>
                  <h2 className="text-xl font-bold text-text-primary">
                    {t(section.titleKey)}
                  </h2>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {t(section.contentKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
