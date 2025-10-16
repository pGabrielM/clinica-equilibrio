import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];

export const { locales, defaultLocale } = routing;

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
