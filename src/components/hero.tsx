'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Heart, Shield, Users } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="to-secondary/10 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/10 animate-float absolute left-10 top-20 h-32 w-32 rounded-full"></div>
        <div className="bg-secondary/15 animate-float-delayed absolute right-20 top-40 h-24 w-24 rounded-full"></div>
        <div className="bg-primary/5 animate-float absolute bottom-32 left-1/4 h-40 w-40 rounded-full"></div>
        <div className="bg-secondary/10 animate-float-delayed absolute bottom-20 right-10 h-28 w-28 rounded-full"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="animate-fade-in-up mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            Cuidando da sua <span className="text-primary">saúde mental</span>
            <br />
            com equilíbrio e empatia
          </h1>

          {/* Subtitle */}
          <p className="text-foreground/80 animate-fade-in-up animation-delay-200 mx-auto mb-8 max-w-3xl text-lg leading-relaxed md:text-xl">
            Na Clínica Equilíbrio, oferecemos atendimento psicológico humanizado
            e especializado, com uma abordagem acolhedora que respeita sua
            individualidade e promove o bem-estar emocional.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="hover:bg-primary/90 bg-primary px-8 py-4 text-lg text-white"
            >
              Marcar Sessão
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('services')}
              className="border-primary px-8 py-4 text-lg text-primary hover:bg-primary hover:text-white"
            >
              Conheça os Serviços
            </Button>
          </div>

          {/* Features */}
          <div className="animate-fade-in-up animation-delay-600 mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Atendimento Humanizado
              </h3>
              <p className="text-foreground/70">
                Cuidado empático e personalizado para cada paciente
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Equipe Especializada
              </h3>
              <p className="text-foreground/70">
                Profissionais qualificados com diversas abordagens terapêuticas
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Ambiente Seguro</h3>
              <p className="text-foreground/70">
                Espaço acolhedor que garante confidencialidade e privacidade
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
        <div className="animate-bounce">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
