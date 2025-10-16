"use client";

import { useLocale } from "next-intl";
import { Languages, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export function LanguageMenu() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(-[a-z]{2})?/, "") || "/";

  const languages = [
    { code: "pt", name: "Português", flag: "/brazil-flag-rounded.png" },
    { code: "en", name: "English", flag: "/united-states-flag-rounded.png" },
    { code: "es", name: "Español", flag: "/spain-flag-rounded.png" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    if (langCode === locale) {
      setIsOpen(false);
      return;
    }

    setIsOpen(false);
    startTransition(() => {
      router.replace(`/${langCode}${pathWithoutLocale}`);
      router.refresh();
    });
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
      >
        <Languages className="h-4 w-4" />
        <Image
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          width={16}
          height={16}
          className="rounded-sm"
        />
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-3 w-3" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 z-20 mt-2 w-48 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl"
            >
              <div className="p-2">
                {languages.map((lang, index) => (
                  <motion.button
                    key={lang.code}
                    type="button"
                    onClick={() => handleLanguageChange(lang.code)}
                    disabled={isPending || locale === lang.code}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full"
                  >
                    <div
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-all ${
                        locale === lang.code
                          ? "bg-blue-50 font-medium text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      } ${isPending ? "cursor-wait opacity-50" : "cursor-pointer"}`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        width={20}
                        height={20}
                        className="rounded-sm"
                      />
                      <span className="flex-1">{lang.name}</span>
                      {locale === lang.code && <div className="h-2 w-2 rounded-full bg-blue-600" />}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
