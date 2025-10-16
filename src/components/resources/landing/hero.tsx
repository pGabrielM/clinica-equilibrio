"use client";

import { Button } from "@/components/commons/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import anime from "@/lib/anime";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !descRef.current || !buttonsRef.current || !imageRef.current) return;

    const timeline = anime.timeline({});

    timeline
      .add(titleRef.current, {
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1200,
      })
      .add(
        descRef.current,
        {
          opacity: [0, 1],
          translateY: [-30, 0],
          duration: 1000,
        },
        "-=800"
      )
      .add(
        Array.from(buttonsRef.current.children),
        {
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(150),
          duration: 800,
        },
        "-=600"
      )
      .add(
        imageRef.current,
        {
          opacity: [0, 1],
          scale: [0.9, 1],
          duration: 1000,
        },
        "-=1000"
      );
  }, []);

  return (
    <section className="from-primary/10 via-background to-primary/5 relative overflow-hidden bg-gradient-to-br py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="bg-primary/5 absolute top-20 right-10 h-72 w-72 rounded-full blur-3xl" />
      <div className="bg-secondary/10 absolute bottom-10 left-10 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 inline-block opacity-0" ref={titleRef}>
              <span className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                {t("badge")}
              </span>
            </div>
            <h1
              ref={titleRef}
              className="text-foreground mb-6 text-4xl leading-tight font-bold opacity-0 lg:text-6xl"
            >
              {t("title")}
              <span className="text-primary from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-transparent">
                {" "}
              </span>
            </h1>
            <p
              ref={descRef}
              className="text-muted-foreground mb-8 text-xl leading-relaxed opacity-0"
            >
              {t("subtitle")}
            </p>

            {/* Features badges */}
            <div className="mb-8 flex flex-wrap gap-4 opacity-0" ref={descRef}>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-3 w-3 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>{t("features.activePsychologists")}</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-3 w-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span>{t("features.flexibleSchedules")}</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-100">
                  <svg
                    className="h-3 w-3 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span>{t("features.safeEnvironment")}</span>
              </div>
            </div>

            <div ref={buttonsRef} className="flex flex-col gap-4 sm:flex-row">
              <a href="#booking">
                <Button
                  size="lg"
                  className="group shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  <span>{t("cta")}</span>
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary/5 border-2 transition-all hover:scale-105"
                >
                  {t("serviceLink")}
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8 opacity-0" ref={buttonsRef}>
              <div>
                <div className="text-primary text-3xl font-bold">10+</div>
                <div className="text-muted-foreground text-sm">{t("trustBadge")}</div>
              </div>
              <div className="bg-border h-12 w-px" />
              <div>
                <div className="text-primary text-3xl font-bold">500+</div>
                <div className="text-muted-foreground text-sm">{t("patientsServed")}</div>
              </div>
              <div className="bg-border h-12 w-px" />
              <div>
                <div className="text-primary text-3xl font-bold">98%</div>
                <div className="text-muted-foreground text-sm">{t("satisfaction")}</div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative opacity-0">
            <div className="group relative">
              <div className="from-primary to-secondary absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-25 blur transition duration-1000 group-hover:opacity-40" />
              <div className="relative">
                <Image
                  src="/images/hero/terapia-sessao.jpg"
                  alt="Atendimento psicológico profissional"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                {/* Floating card */}
                <div className="bg-background absolute -bottom-6 -left-6 hidden rounded-xl border p-4 shadow-xl lg:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">Primeira Consulta</div>
                      <div className="text-muted-foreground text-sm">Avaliação Gratuita</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
