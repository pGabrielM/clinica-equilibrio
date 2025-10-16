"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const footerLinks = {
    services: [
      { name: t("services.psychotherapy"), href: "#services" },
      { name: t("services.coupleTherapy"), href: "#services" },
      { name: t("services.childPsychology"), href: "#services" },
      { name: t("services.groupTherapy"), href: "#services" },
    ],
    company: [
      { name: t("company.about"), href: "#" },
      { name: t("company.team"), href: "#team" },
      { name: t("company.blog"), href: "#blog" },
      { name: t("company.testimonials"), href: "#" },
    ],
    support: [
      { name: t("support.contact"), href: "#contact" },
      { name: t("support.faq"), href: "#" },
      { name: t("support.booking"), href: "#booking" },
      { name: t("support.privacy"), href: "#" },
    ],
  };

  return (
    <footer className="from-primary/95 to-primary text-primary-foreground relative overflow-hidden bg-gradient-to-br">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="bg-secondary/10 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-block">
              <h3 className="mb-4 text-3xl font-bold transition-transform group-hover:scale-105">
                Clínica Equilíbrio
              </h3>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm leading-relaxed">
              {t("description")}
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="mb-3 font-semibold">{t("newsletter.title")}</h4>
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletter.placeholder")}
                    className="text-primary-foreground placeholder:text-primary-foreground/50 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="text-primary rounded-lg bg-white px-6 py-2 font-semibold transition-colors hover:bg-white/90"
                  >
                    {t("newsletter.subscribe")}
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 rounded-lg bg-green-400/10 px-4 py-2 text-green-400">
                  <Check className="h-5 w-5" />
                  <span>{t("newsletter.success")}</span>
                </div>
              )}
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <button
                onClick={(e) => e.preventDefault()}
                className="flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-110 hover:bg-[#1877F2] hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-110 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-110 hover:bg-[#000000] hover:text-white"
                aria-label="X (Twitter)"
              >
                <FaXTwitter className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-110 hover:bg-[#25D366] hover:text-white"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">{t("servicesTitle")}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground inline-block transition-colors hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">{t("companyTitle")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground inline-block transition-colors hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">{t("supportTitle")}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground inline-block transition-colors hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-primary-foreground/20 border-t pt-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-primary-foreground/80 text-sm">{t("copyright")}</div>
            <div className="flex flex-wrap gap-6 text-sm md:justify-end">
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("terms")}
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {t("cookies")}
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-primary-foreground/10 mt-6 border-t pt-6">
            <p className="text-primary-foreground/60 text-center text-xs">{t("legalInfo")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
