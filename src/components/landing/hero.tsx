"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import anime from "@/lib/anime";

export function Hero() {
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
      .add(descRef.current, {
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1000,
      }, '-=800')
      .add(Array.from(buttonsRef.current.children), {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150),
        duration: 800,
      }, '-=600')
      .add(imageRef.current, {
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 1000,
      }, '-=1000');
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 opacity-0" ref={titleRef}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Atendimento Presencial e Online
              </span>
            </div>
            <h1
              ref={titleRef}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 leading-tight"
            >
              Cuidados com a <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Saúde Mental</span>
            </h1>
            <p
              ref={descRef}
              className="text-xl text-muted-foreground mb-8 opacity-0 leading-relaxed"
            >
              Na Clínica Equilíbrio, oferecemos atendimento psicológico humanizado e acolhedor para cuidar da sua saúde mental e bem-estar emocional com profissionais especializados.
            </p>

            {/* Features badges */}
            <div className="flex flex-wrap gap-4 mb-8 opacity-0" ref={descRef}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Psicólogos CRP Ativos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Horários Flexíveis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span>Ambiente Seguro</span>
              </div>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hover:scale-105 transition-all shadow-lg hover:shadow-xl group">
                <span>Agende sua Sessão</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-all border-2 hover:bg-primary/5">
                Conheça Nossos Serviços
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8 opacity-0" ref={buttonsRef}>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Pacientes Atendidos</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative opacity-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&h=400&fit=crop"
                  alt="Atendimento psicológico profissional"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-xl p-4 border hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Primeira Consulta</div>
                      <div className="text-sm text-muted-foreground">Avaliação Gratuita</div>
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