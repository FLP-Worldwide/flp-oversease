"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="bg-primary text-white py-24 px-8 text-center">
      <h1 className="text-5xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-lg">{t("subtitle")}</p>

      <button className="mt-8 bg-white text-primary px-6 py-3 rounded-lg font-semibold">
        {t("cta")}
      </button>
    </section>
  );
}
