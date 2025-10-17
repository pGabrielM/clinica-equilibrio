import Link from "next/link";
import { Button } from "@/components/commons/button";
import { useTranslations } from "next-intl";

export function MobileMenu() {
  const t = useTranslations("nav");
  return (
    <div className="md:hidden">
      <div className="bg-background space-y-1 border-t px-2 pt-2 pb-3 sm:px-3">
        <Link
          href="#services"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          {t("services")}
        </Link>
        <Link
          href="#team"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          {t("team")}
        </Link>
        <Link
          href="#blog"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          {t("blog")}
        </Link>
        <Link
          href="#booking"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          {t("booking")}
        </Link>
        <Link
          href="#contact"
          className="text-muted-foreground hover:text-primary block px-3 py-2 transition-colors"
        >
          {t("contact")}
        </Link>
        <div className="px-3 py-2">
          <Link href="#booking">
            <Button className="w-full">{t("schedule")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
