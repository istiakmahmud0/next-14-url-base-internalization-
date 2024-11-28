import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ja"],
  defaultLocale: "en",
  localePrefix: "never",
  domains: [
    {
      domain: "arisaftech-local.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: "arisaftech-local.co.jp",
      defaultLocale: "ja",
      locales: ["ja"],
    },
  ],
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
