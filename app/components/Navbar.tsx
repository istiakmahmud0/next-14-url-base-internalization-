// "use client";

// import Link from "next/link";
// import React, { ChangeEvent, useEffect, useState } from "react";
// import { useTranslations } from "next-intl";

// const Navbar = ({ locale }: { locale: string }) => {
//   const [currentLocale, setCurrentLocale] = useState(locale); // Track the current locale state
//   console.log("about", locale);
//   const t = useTranslations("NavbarLinks");

//   useEffect(() => {
//     // This ensures that when the page loads, it correctly displays the current locale in the dropdown.
//     setCurrentLocale(locale);
//   }, [locale]);

//   const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const newLocale = e.target.value;

//     const domainMap = {
//       en: "arisaftech-local.com",
//       ja: "arisaftech-local.co.jp",
//     };

//     // Get the new domain based on the selected locale
//     const newDomain = domainMap[newLocale as keyof typeof domainMap];

//     // Get the current path and query string from the current URL
//     const currentPath = window.location.pathname;
//     const currentQuery = window.location.search; // This includes the query string, if any

//     // Construct the new URL with the new domain, locale, path, and query string
//     const protocol = window.location.protocol;
//     const port = window.location.port ? `:${window.location.port}` : "";
//     const newUrl = `${protocol}//${newDomain}${port}/${newLocale}${currentPath}${currentQuery}`;

//     // Redirect to the new URL
//     window.location.href = newUrl;
//   };

//   return (
//     <div className="w-full flex justify-between border-b py-4">
//       <div className="flex gap-4 items-center text-lg">
//         <Link href={`/${locale}/`}>{t("home")}</Link>
//         <Link href={`/${locale}/about`}>{t("about")}</Link>
//         <Link href={`/${locale}/about/profile`}>{t("profile")}</Link>
//       </div>
//       <div className="flex gap-4 items-center text-lg">
//         <select
//           value={currentLocale}
//           onChange={handleLanguageChange}
//           className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
//         >
//           <option value="en">English</option>
//           <option value="ja">日本語</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const Navbar = ({ locale }: { locale: string }) => {
  const [currentLocale, setCurrentLocale] = useState(locale);
  const t = useTranslations("NavbarLinks");

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const isProduction = process.env.NODE_ENV === "production";

    if (isProduction) {
      // Domain-based redirection
      const domainMap = {
        en: process.env.NEXT_PUBLIC_DOMAIN_EN || "arisaftech-local.com",
        ja: process.env.NEXT_PUBLIC_DOMAIN_JA || "arisaftech-local.co.jp",
      };

      const newDomain = domainMap[newLocale as keyof typeof domainMap];
      const currentPath = window.location.pathname.replace(/^\/(en|ja)/, ""); // Remove existing locale
      const currentQuery = window.location.search;

      const protocol = window.location.protocol;
      const port = window.location.port ? `:${window.location.port}` : "";
      const newUrl = `${protocol}//${newDomain}${port}${currentPath}${currentQuery}`;

      console.log("Redirecting to:", newUrl);
      window.location.href = newUrl;
    } else {
      // Path-based redirection
      const currentPath = window.location.pathname.replace(/^\/(en|ja)/, ""); // Strip locale
      const newPath = `/${newLocale}${currentPath}`;
      const currentQuery = window.location.search;

      const newUrl = `${window.location.origin}${newPath}${currentQuery}`;
      console.log("Switching to path-based URL:", newUrl);
      window.location.href = newUrl;
    }
  };

  return (
    <div className="w-full flex justify-between border-b py-4">
      <div className="flex gap-4 items-center text-lg">
        <Link href={`/${locale}/`}>{t("home")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
        <Link href={`/${locale}/about/profile`}>{t("profile")}</Link>
      </div>
      <div className="flex gap-4 items-center text-lg">
        <select
          value={currentLocale}
          onChange={handleLanguageChange}
          className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
        >
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
