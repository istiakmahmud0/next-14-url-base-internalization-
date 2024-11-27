// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "ja"],
//   defaultLocale: "en",
// });

// export const config = {
//   matcher: ["/", "/(ja|en)/:path*"],
// };
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ja"],
  defaultLocale: "en",
  localePrefix: "never",
  domains: [
    {
      domain: "arisaftech.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: "arisaftech.co.jp",
      defaultLocale: "ja",
      locales: ["ja"],
    },
  ],
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
