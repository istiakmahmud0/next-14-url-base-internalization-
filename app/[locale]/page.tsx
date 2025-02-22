import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "NavbarLinks" });

  return {
    title: t("homeTitle"),
  };
}

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex w-full items-center justify-center">
      <div className="text-3xl font-bold mt-20">{t("title")}</div>
    </div>
  );
}
