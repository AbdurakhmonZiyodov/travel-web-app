"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@i18n/navigation";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { THEME } from "@/shared/config/theme";
import { FOOTER_NAV } from "@/shared/config/navigation";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale() as "uz" | "ru" | "en";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-main py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Company Info */}
          <div className="lg:pr-4">
            <div className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white">
                <Image
                  src="/terra-nova-logo.png"
                  alt={THEME.companyName}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-bold">{THEME.companyName}</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {t("footer.companyDesc")}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={THEME.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href={THEME.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={THEME.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/90">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3.5">
              {FOOTER_NAV.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/90">
              {t("footer.ourServices")}
            </h3>
            <ul className="space-y-3.5">
              <li>
                <span className="text-sm text-white/60">
                  {t("services.tourPackages.title")}
                </span>
              </li>
              <li>
                <span className="text-sm text-white/60">
                  {t("services.visaSupport.title")}
                </span>
              </li>
              <li>
                <span className="text-sm text-white/60">
                  {t("services.flightTickets.title")}
                </span>
              </li>
              <li>
                <span className="text-sm text-white/60">
                  {t("services.insurance.title")}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white/90">
              {t("footer.contactInfo")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary-light" />
                <span className="text-sm leading-relaxed text-white/60">
                  {THEME.companyAddress[locale]}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-secondary-light" />
                <a
                  href={`tel:${THEME.companyPhone.replace(/\s/g, "")}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {THEME.companyPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-secondary-light" />
                <a
                  href={`mailto:${THEME.companyEmail}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {THEME.companyEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary-light" />
                <span className="text-sm leading-relaxed text-white/60">
                  {t("footer.workingHoursValue")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-main flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-white/40">
            {t("footer.copyright", { year })}
          </p>
          <div className="flex gap-6">
            {FOOTER_NAV.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 transition-colors hover:text-white"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
