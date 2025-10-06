'use client';

import { services } from '@/features/landing/utils/landing-helper';
import { ServiceCard } from './service-card';
import { useEffect, useRef } from 'react';
import anime from '@/shared/lib/anime';

export function Services() {
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
                translateY: [50, 0],
                delay: anime.stagger(150),
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

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0">
            Nossos Serviços
          </h2>
          <p ref={descRef} className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0">
            Oferecemos uma variedade de serviços psicológicos especializados para cuidar da sua saúde mental e bem-estar.
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}