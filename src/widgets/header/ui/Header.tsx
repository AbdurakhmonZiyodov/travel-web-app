"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "@i18n/navigation";
import { cn } from "@/shared/lib/cn";
import { MAIN_NAV } from "@/shared/config/navigation";
import { THEME } from "@/shared/config/theme";
import { LanguageSwitcher } from "@/features/language-switcher";

export function Header() {
  const t = useTranslations();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container-main">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold text-lg">
              S
            </div>
            <span className="text-xl font-bold text-text-primary">
              {THEME.companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-primary"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${THEME.companyPhone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <Phone className="h-4 w-4" />
              {THEME.companyPhone}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-surface"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            mobileOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-primary"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
          <a
            href={`tel:${THEME.companyPhone.replace(/\s/g, "")}`}
            className="mt-4 flex items-center gap-2 px-3 text-sm font-medium text-primary"
          >
            <Phone className="h-4 w-4" />
            {THEME.companyPhone}
          </a>
        </div>
      </div>
    </header>
  );
}
