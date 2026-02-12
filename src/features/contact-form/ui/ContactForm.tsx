"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contacts.form");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-accent/10 p-12 text-center">
        <CheckCircle className="h-12 w-12 text-accent" />
        <p className="text-lg font-medium text-text-primary">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder={t("name")}
          className="input"
        />
        <input
          type="email"
          required
          placeholder={t("email")}
          className="input"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <input
          type="tel"
          placeholder={t("phone")}
          className="input"
        />
        <input
          type="text"
          placeholder={t("subject")}
          className="input"
        />
      </div>

      <textarea
        required
        placeholder={t("message")}
        className="textarea"
        rows={5}
      />

      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Send className="h-4 w-4" />
        {t("send")}
      </button>
    </form>
  );
}
