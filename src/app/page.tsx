'use client';

import { Hero } from '@/components/landing/hero';
import { Services } from '@/components/landing/services';
import { Team } from '@/components/landing/team';
import { BlogPreview } from '@/components/landing/blog-preview';
import { BookingForm } from '@/components/landing/booking-form';
import { ContactForm } from '@/components/landing/contact-form';
import { ContactDetails } from '@/components/landing/contact-details';
import { useEffect, useRef } from 'react';
import anime from '@/lib/anime';

export default function Home() {
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
                easing: 'out-expo',
              });
            }

            if (contactDescRef.current) {
              tl.add(contactDescRef.current, {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 600,
                easing: 'out-expo',
              }, '-=400');
            }

            if (contactGridRef.current?.children) {
              tl.add(contactGridRef.current.children, {
                opacity: [0, 1],
                translateX: [-50, 0],
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

    const section = document.getElementById('contact');
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
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 ref={contactTitleRef} className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0">
              Entre em contato
            </h2>
            <p ref={contactDescRef} className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0">
              Estamos aqui para ajudar. Entre em contato conosco para dúvidas ou agendamentos.
            </p>
          </div>
          <div ref={contactGridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </section>
    </>
  );
}
