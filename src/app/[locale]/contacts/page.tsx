"use client";

import { useTranslations, useLocale } from "next-intl";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/shared/ui";
import { ContactForm } from "@/features/contact-form";
import { THEME } from "@/shared/config/theme";

export default function ContactsPage() {
  const t = useTranslations("contacts");
  const locale = useLocale() as "uz" | "ru" | "en";

  const contactItems = [
    {
      icon: MapPin,
      label: t("info.address"),
      value: THEME.companyAddress[locale],
    },
    {
      icon: Phone,
      label: t("info.phone"),
      value: THEME.companyPhone,
      href: `tel:${THEME.companyPhone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: t("info.email"),
      value: THEME.companyEmail,
      href: `mailto:${THEME.companyEmail}`,
    },
    {
      icon: Clock,
      label: t("info.workingHours"),
      value: t("info.workingHoursValue"),
    },
  ];

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

      {/* Contact Content */}
      <section className="section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary">
                {t("info.address")}
              </h2>
              <div className="mt-8 space-y-6">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 font-medium text-text-primary hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 font-medium text-text-primary whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
