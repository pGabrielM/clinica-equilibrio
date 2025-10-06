"use client";

import { Button } from "@/components/commons";
import Image from "next/image";
import { useEffect, useRef } from "react";
import anime from "@/lib/anime";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    });

    timeline
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [-50, 0],
        duration: 1200,
      })
      .add({
        targets: descRef.current,
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1000,
      }, '-=800')
      .add({
        targets: buttonsRef.current?.children,
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(150),
        duration: 800,
      }, '-=600')
      .add({
        targets: imageRef.current,
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 1000,
      }, '-=1000');
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              ref={titleRef}
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6 opacity-0"
            >
              Cuidados com a <span className="text-primary">Saúde Mental</span>
            </h1>
            <p
              ref={descRef}
              className="text-xl text-muted-foreground mb-8 opacity-0"
            >
              Na Clínica Equilíbrio, oferecemos atendimento psicológico humanizado e acolhedor para cuidar da sua saúde mental e bem-estar emocional.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hover:scale-105 transition-transform">
                Agende sua Sessão
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
          <div ref={imageRef} className="relative opacity-0">
            <Image
              src="https://picsum.photos/600/400?random=psychology"
              alt="Atendimento psicológico profissional"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}