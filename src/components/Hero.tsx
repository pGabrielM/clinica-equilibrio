"use client"

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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10 overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-secondary/10 rounded-full animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up"
          >
            Cuidando da sua{' '}
            <span className="text-primary">saúde mental</span>
            <br />
            com equilíbrio e empatia
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200"
          >
            Na Clínica Equilíbrio, oferecemos atendimento psicológico humanizado e especializado, 
            com uma abordagem acolhedora que respeita sua individualidade e promove o bem-estar emocional.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400"
          >
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
            >
              Marcar Sessão
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
            >
              Conheça os Serviços
            </Button>
          </div>

          {/* Features */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-600"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Atendimento Humanizado</h3>
              <p className="text-foreground/70">
                Cuidado empático e personalizado para cada paciente
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Equipe Especializada</h3>
              <p className="text-foreground/70">
                Profissionais qualificados com diversas abordagens terapêuticas
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ambiente Seguro</h3>
              <p className="text-foreground/70">
                Espaço acolhedor que garante confidencialidade e privacidade
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero