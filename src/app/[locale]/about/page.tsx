"use client";

import { useTranslations } from "next-intl";
import { Container, SectionTitle } from "@/shared/ui";
import { Target, Eye, Award, Users, MapPin, Briefcase } from "lucide-react";

const STATS = [
  { key: "experience", value: "7+", icon: Award },
  { key: "clients", value: "5,000+", icon: Users },
  { key: "destinations", value: "50+", icon: MapPin },
  { key: "tours", value: "2,000+", icon: Briefcase },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");

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

      {/* About Content */}
      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-text-secondary">
              {t("description")}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.key}
                  className="card flex flex-col items-center gap-3 p-8 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {t(stat.key)}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="section bg-surface">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-text-primary">
                {t("mission.title")}
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {t("mission.description")}
              </p>
            </div>

            <div className="card p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-text-primary">
                {t("vision.title")}
              </h3>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {t("vision.description")}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
