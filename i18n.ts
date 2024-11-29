import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ja"];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    messages,
  };
});
