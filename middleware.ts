// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   locales: ["en", "ja"],
//   defaultLocale: "en",
//   localePrefix: "never",
//   domains: [
//     {
//       domain: "arisaftech-local.com",
//       defaultLocale: "en",
//       locales: ["en"],
//     },
//     {
//       domain: "arisaftech-local.co.jp",
//       defaultLocale: "ja",
//       locales: ["ja"],
//     },
//   ],
// });

// export const config = {
//   matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
// };

import createMiddleware from "next-intl/middleware";

const isProduction = process.env.NODE_ENV === "production";

export default createMiddleware({
  locales: ["en", "ja"],
  defaultLocale: "en",
  localePrefix: isProduction ? "never" : "always", // Path-based in local, domain-based in production
  domains: isProduction
    ? [
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
      ]
    : undefined, // No domain logic in local
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"], // Match all routes except static assets
};
