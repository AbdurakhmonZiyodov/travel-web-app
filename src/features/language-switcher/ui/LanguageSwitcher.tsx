"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@i18n/navigation";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/shared/lib/cn";

const LOCALES = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  const current = LOCALES.find((l) => l.code === locale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-text-primary transition-colors hover:border-primary hover:text-primary"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span>{current?.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[100px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => handleChange(l.code)}
              className={cn(
                "flex w-full items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-surface",
                locale === l.code
                  ? "font-semibold text-primary bg-primary/5"
                  : "text-text-secondary"
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
