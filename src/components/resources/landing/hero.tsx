"use client";

import { Button } from "@/components/commons";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-secondary py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Cuidados Médicos <span className="text-primary">Profissionais</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Na Clínica Equilíbrio, oferecemos atendimento humanizado com tecnologia avançada para cuidar da sua saúde e bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="hover:scale-105 transition-transform">
                Agende sua Consulta
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                Conheça Nossos Serviços
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://picsum.photos/600/400?random=medical"
              alt="Equipe médica profissional"
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