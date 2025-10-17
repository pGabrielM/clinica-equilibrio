"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/commons/button";
import { LanguageMenu } from "@/components/commons/language-menu";
import { MobileMenu } from "./mobile-menu";
import anime from "@/lib/anime";

export function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["services", "team", "blog", "booking", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate navbar items on mount
    anime({
      targets: ".nav-link",
      opacity: [0, 1],
      translateY: [-20, 0],
      delay: anime.stagger(100, { start: 300 }),
      duration: 600,
      easing: "easeOutExpo",
    });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 border-b shadow-lg backdrop-blur-md"
          : "bg-background border-b shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-primary text-2xl font-bold transition-transform hover:scale-105"
            >
              Clínica Equilíbrio
            </Link>
          </div>
          <div className="hidden items-center space-x-3 md:flex">
            <Link
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className={`nav-link transition-all duration-300 ${
                activeSection === "services"
                  ? "glass-nav-item-active text-primary"
                  : "glass-nav-item hover:text-primary text-slate-700"
              }`}
            >
              {t("services")}
            </Link>
            <Link
              href="#team"
              onClick={(e) => handleNavClick(e, "#team")}
              className={`nav-link transition-all duration-300 ${
                activeSection === "team"
                  ? "glass-nav-item-active text-primary"
                  : "glass-nav-item hover:text-primary text-slate-700"
              }`}
            >
              {t("team")}
            </Link>
            <Link
              href="#blog"
              onClick={(e) => handleNavClick(e, "#blog")}
              className={`nav-link transition-all duration-300 ${
                activeSection === "blog"
                  ? "glass-nav-item-active text-primary"
                  : "glass-nav-item hover:text-primary text-slate-700"
              }`}
            >
              {t("blog")}
            </Link>
            <Link
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className={`nav-link transition-all duration-300 ${
                activeSection === "booking"
                  ? "glass-nav-item-active text-primary"
                  : "glass-nav-item hover:text-primary text-slate-700"
              }`}
            >
              {t("booking")}
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={`nav-link transition-all duration-300 ${
                activeSection === "contact"
                  ? "glass-nav-item-active text-primary"
                  : "glass-nav-item hover:text-primary text-slate-700"
              }`}
            >
              {t("contact")}
            </Link>
            <Link href="#booking" onClick={(e) => handleNavClick(e, "#booking")}>
              <Button className="nav-link">{t("schedule")}</Button>
            </Link>
            <LanguageMenu />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <LanguageMenu />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </nav>
  );
}
