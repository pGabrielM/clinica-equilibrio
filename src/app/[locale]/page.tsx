"use client";

import { Hero } from "@/components/resources/landing/hero";
import { Services } from "@/components/resources/landing/services";
import { Team } from "@/components/resources/landing/team";
import { BlogPreview } from "@/components/resources/landing/blog-preview";
import { BookingForm } from "@/components/resources/landing/booking-form";
import { ContactForm } from "@/components/resources/landing/contact-form";
import { ContactDetails } from "@/components/resources/landing/contact-details";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import anime from "@/lib/anime";

export default function Home() {
  const t = useTranslations("contact");
  const contactTitleRef = useRef<HTMLHeadingElement>(null);
  const contactDescRef = useRef<HTMLParagraphElement>(null);
  const contactGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline();

            if (contactTitleRef.current) {
              tl.add(contactTitleRef.current, {
                opacity: [0, 1],
                translateY: [-30, 0],
                duration: 800,
                easing: "out-expo",
              });
            }

            if (contactDescRef.current) {
              tl.add(
                contactDescRef.current,
                {
                  opacity: [0, 1],
                  translateY: [-20, 0],
                  duration: 600,
                  easing: "out-expo",
                },
                "-=400"
              );
            }

            if (contactGridRef.current?.children) {
              tl.add(
                contactGridRef.current.children,
                {
                  opacity: [0, 1],
                  translateX: [-50, 0],
                  delay: anime.stagger(200),
                  duration: 800,
                  easing: "out-expo",
                },
                "-=200"
              );
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Team />
      <BlogPreview />
      <BookingForm />
      <section id="contact" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2
              ref={contactTitleRef}
              className="text-foreground mb-4 text-3xl font-bold opacity-0 md:text-4xl"
            >
              {t("title")}
            </h2>
            <p
              ref={contactDescRef}
              className="text-muted-foreground mx-auto max-w-2xl text-xl opacity-0"
            >
              {t("subtitle")}
            </p>
          </div>
          <div ref={contactGridRef} className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </section>
    </>
  );
}
