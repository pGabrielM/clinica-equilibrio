'use client';

import { team } from '@/helpers/landing-helper';
import { TeamCard } from './team-card';
import { useEffect, useRef, useState } from 'react';
import anime from '@/lib/anime';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Team() {
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
      setCurrentPage(prev => prev + 1);
      animateCards();
      animatePagination();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      animateCards();
      animatePagination();
    }
  };

  const animatePagination = () => {
    if (paginationRef.current) {
      const buttons = paginationRef.current.querySelectorAll('button');
      anime.timeline()
        .add(buttons, {
          scale: [0.8, 1],
          opacity: [0.5, 1],
          duration: 400,
          delay: anime.stagger(50),
          easing: 'spring(1, 80, 10, 0)',
        });
    }
  };

  const animateCards = () => {
    if (cardsRef.current?.children) {
      // Fade out first
      anime.timeline()
        .add(cardsRef.current.children, {
          opacity: [1, 0],
          scale: [1, 0.95],
          translateX: [-20, 0],
          duration: 300,
          easing: 'out-expo',
        })
        .add(cardsRef.current.children, {
          opacity: [0, 1],
          scale: [0.95, 1],
          translateX: [20, 0],
          translateY: [30, 0],
          delay: anime.stagger(120),
          duration: 600,
          easing: 'out-expo',
        }, '+=100');
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
                easing: 'out-expo',
              });
            }

            if (descRef.current) {
              tl.add(descRef.current, {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 600,
                easing: 'out-expo',
              }, '-=400');
            }

            if (cardsRef.current?.children) {
              tl.add(cardsRef.current.children, {
                opacity: [0, 1],
                scale: [0.9, 1],
                delay: anime.stagger(200),
                duration: 800,
                easing: 'out-expo',
              }, '-=200');
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('team');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0">
            Nossa Equipe
          </h2>
          <p ref={descRef} className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0">
            Conheça nossos {team.length} psicólogos especializados, prontos para oferecer o cuidado que você precisa.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              className="hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentPage === index
                    ? 'bg-primary w-8 shadow-lg shadow-primary/50'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-125'
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
              className="hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próximo
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Exibindo {currentPage * itemsPerPage + 1}-{Math.min((currentPage + 1) * itemsPerPage, team.length)} de {team.length} profissionais
          </p>
        </div>
      </div>
    </section>
  );
}