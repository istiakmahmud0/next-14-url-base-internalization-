import React from "react";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

const page = ({ params }: { params: { locale: string } }) => {
  console.log("about", params.locale);
  const t = useTranslations("AboutPage");
  return <div>{t("desc")}</div>;
};

export default page;
