// "use client";

// import { useTranslations } from "next-intl";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import React, { ChangeEvent } from "react";

// const Navbar = ({ locale }: { locale: string }) => {
//   const t = useTranslations("NavbarLinks");
//   const pathname = usePathname();
//   const router = useRouter();

//   const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const newLocale = e.target.value;

//     // Modify the pathname to include the new locale
//     const segments = pathname.split("/");
//     segments[1] = newLocale; // Replace the locale segment
//     const newPath = segments.join("/");

//     router.push(newPath);
//   };

//   // Generate dynamic links with the correct locale prefix
//   const links = [
//     { key: "home", path: "" },
//     { key: "about", path: "about" },
//     { key: "profile", path: "about/profile" },
//   ];

//   return (
//     <div className="w-full flex justify-between border-b py-4">
//       <div className="flex gap-4 items-center text-lg">
//         {links.map(({ key, path }) => (
//           <Link key={key} href={`/${locale}/${path}`}>
//             {t(key)}
//           </Link>
//         ))}
//       </div>
//       <select
//         value={locale}
//         onChange={handleLanguageChange}
//         className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
//       >
//         <option value="en">EN</option>
//         <option value="ja">JA</option>
//       </select>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

const Navbar = ({ locale }: { locale: string }) => {
  const t = useTranslations("NavbarLinks");
  const pathname = usePathname();
  const router = useRouter();

  const domainMap = {
    en: "arisaftech.com",
    ja: "arisaftech.co.jp",
  };

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const currentPath = pathname;

    // Get the new domain based on the selected locale
    const newDomain = domainMap[newLocale as keyof typeof domainMap];

    // Construct the new URL with the appropriate domain
    const protocol = window.location.protocol;
    const port = window.location.port ? `:${window.location.port}` : "";
    const newUrl = `${protocol}//${newDomain}${port}${currentPath}`;

    // Navigate to the new URL
    window.location.href = newUrl;
  };

  // Generate links without locale prefix since we're using domains
  const links = [
    { key: "home", path: "/" },
    { key: "about", path: "/about" },
    { key: "profile", path: "/about/profile" },
  ];

  return (
    <div className="w-full flex justify-between border-b py-4">
      <div className="flex gap-4 items-center text-lg">
        {links.map(({ key, path }) => (
          <Link key={key} href={path}>
            {t(key)}
          </Link>
        ))}
      </div>
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none"
      >
        <option value="en">EN</option>
        <option value="ja">JA</option>
      </select>
    </div>
  );
};

export default Navbar;
