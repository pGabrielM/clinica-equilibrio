import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Encontre seu <span className="text-primary">equilíbrio</span> emocional
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Na Clínica Equilíbrio, oferecemos terapia profissional e acolhedora para ajudar você a viver uma vida mais plena e saudável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Agende agora
              </Button>
              <Button variant="outline" size="lg">
                Saiba mais sobre nossos serviços
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/clinic-hero.jpg"
              alt="Clínica Equilíbrio - Ambiente acolhedor para terapia"
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