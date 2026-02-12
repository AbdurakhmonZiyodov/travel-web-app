"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/shared/lib/cn";
import type { ServiceItem } from "../model/types";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const t = useTranslations();
  const Icon = service.icon;

  return (
    <div
      className={cn(
        "card group p-6 text-center hover:border-primary/20",
        className
      )}
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-text-primary">
        {t(service.titleKey)}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {t(service.descriptionKey)}
      </p>
    </div>
  );
}
