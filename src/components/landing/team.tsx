'use client';

import { team } from '@/helpers/landing-helper';
import { TeamCard } from './team-card';
import { useEffect, useRef } from 'react';
import anime from '@/lib/anime';

export function Team() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
            Conheça nossos psicólogos especializados, prontos para oferecer o cuidado que você precisa.
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}