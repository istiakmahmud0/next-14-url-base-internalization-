// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";

// const locales = ["en", "ja"];

// export default getRequestConfig(async ({ locale }: any) => {
//   if (!locales.includes(locale as any)) notFound();

//   return {
//     messages: (await import(`./messages/${locale}.json`)).default,
//   };
// });

// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";

// const locales = ["en", "ja"]; // Supported locales

// export default getRequestConfig(async ({ locale }: { locale: string }) => {
//   if (!locales.includes(locale)) notFound(); // Return 404 for unsupported locales

//   return {
//     messages: (await import(`./messages/${locale}.json`)).default,
//   };
// });

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ja"];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // console.log(locale);

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    messages,
  };
});
