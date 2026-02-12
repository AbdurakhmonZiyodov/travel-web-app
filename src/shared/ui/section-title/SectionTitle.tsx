import { type ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  children,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "section-subtitle",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
