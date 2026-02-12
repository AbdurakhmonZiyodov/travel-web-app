"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Search, MapPin } from "lucide-react";
import { useRouter } from "@i18n/navigation";

export function TourSearch() {
  const t = useTranslations("hero");
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/tours?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl items-center gap-2 rounded-full bg-white p-2 shadow-xl shadow-black/10"
    >
      <div className="flex flex-1 items-center gap-2 pl-4">
        <MapPin className="h-5 w-5 shrink-0 text-text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="w-full border-none bg-transparent py-2 text-text-primary placeholder:text-text-muted focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="btn-primary rounded-full px-6 py-3"
      >
        <Search className="h-5 w-5 md:hidden" />
        <span className="hidden md:inline">{t("cta")}</span>
      </button>
    </form>
  );
}
