"use client";

import { team } from "@/utils/landing-helper";
import { TeamCard } from "./team-card";
import { useEffect, useRef, useState } from "react";
import anime from "@/lib/anime";
import { Button } from "@/components/commons/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function Team() {
  const t = useTranslations("team");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(team.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return team.slice(start, end);
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
      // Fade out first
      anime
        .timeline()
        .add(cardsRef.current.children, {
          opacity: [1, 0],
          scale: [1, 0.95],
          translateX: [-20, 0],
          duration: 300,
          easing: "out-expo",
        })
        .add(
          cardsRef.current.children,
          {
            opacity: [0, 1],
            scale: [0.95, 1],
            translateX: [20, 0],
            translateY: [30, 0],
            delay: anime.stagger(120),
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
                  scale: [0.9, 1],
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

    const section = document.getElementById("team");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="bg-background py-20">
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
        <div ref={cardsRef} className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {getCurrentItems().map((member) => (
            <TeamCard key={member.id} member={member} />
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
              className="transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
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
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    currentPage === index
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
              className="transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
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
            {Math.min((currentPage + 1) * itemsPerPage, team.length)} de {team.length} profissionais
          </p>
        </div>
      </div>
    </section>
  );
}
