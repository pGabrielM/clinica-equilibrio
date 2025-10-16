"use client";

import { services } from "@/utils/landing-helper";
import { ServiceCard } from "./service-card";
import { useEffect, useRef, useState } from "react";
import anime from "@/lib/anime";
import { Button } from "@/components/commons/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Services() {
  const t = useTranslations("services");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return services.slice(start, end);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      animateCards();
      animatePagination();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      animateCards();
      animatePagination();
    }
  };

  const animatePagination = () => {
    if (paginationRef.current) {
      const buttons = paginationRef.current.querySelectorAll("button");
      anime.timeline().add(buttons, {
        scale: [0.8, 1],
        opacity: [0.5, 1],
        duration: 400,
        delay: anime.stagger(50),
        easing: "spring(1, 80, 10, 0)",
      });
    }
  };

  const animateCards = () => {
    if (cardsRef.current?.children) {
      // Fade out and slide
      anime
        .timeline()
        .add(cardsRef.current.children, {
          opacity: [1, 0],
          scale: [1, 0.9],
          translateY: [0, -20],
          duration: 300,
          easing: "out-expo",
        })
        .add(
          cardsRef.current.children,
          {
            opacity: [0, 1],
            scale: [0.9, 1],
            translateY: [40, 0],
            rotate: [2, 0],
            delay: anime.stagger(100),
            duration: 600,
            easing: "out-expo",
          },
          "+=100"
        );
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline();

            if (titleRef.current) {
              tl.add(titleRef.current, {
                opacity: [0, 1],
                translateY: [-30, 0],
                duration: 800,
                easing: "out-expo",
              });
            }

            if (descRef.current) {
              tl.add(
                descRef.current,
                {
                  opacity: [0, 1],
                  translateY: [-20, 0],
                  duration: 600,
                  easing: "out-expo",
                },
                "-=400"
              );
            }

            if (cardsRef.current?.children) {
              tl.add(
                cardsRef.current.children,
                {
                  opacity: [0, 1],
                  translateY: [50, 0],
                  delay: anime.stagger(150),
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

    const section = document.getElementById("services");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2
            ref={titleRef}
            className="text-foreground mb-4 text-3xl font-bold opacity-0 md:text-4xl"
          >
            {t("title")}
          </h2>
          <p ref={descRef} className="text-muted-foreground mx-auto max-w-2xl text-xl opacity-0">
            {t("subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {getCurrentItems().map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="bg-background transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Anterior
            </Button>

            <div ref={paginationRef} className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentPage(index);
                    animateCards();
                    animatePagination();
                  }}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${currentPage === index
                      ? "bg-primary shadow-primary/50 w-8 shadow-lg"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125"
                    }`}
                  aria-label={`Ir para página ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="bg-background transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Próximo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Counter */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Exibindo {currentPage * itemsPerPage + 1}-
            {Math.min((currentPage + 1) * itemsPerPage, services.length)} de {services.length}{" "}
            serviços
          </p>
        </div>
      </div>
    </section>
  );
}
