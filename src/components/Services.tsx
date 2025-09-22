"use client"

import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, Baby, Heart, Users, Calendar, ArrowRight } from 'lucide-react'

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: User,
      title: 'Psicoterapia Individual',
      description: 'Atendimento personalizado para adultos, focado no autoconhecimento e resolução de questões emocionais específicas.',
      features: ['Ansiedade e depressão', 'Autoestima', 'Relacionamentos', 'Traumas'],
      duration: '50 minutos',
      frequency: 'Semanal ou quinzenal',
    },
    {
      icon: Baby,
      title: 'Psicoterapia Infantil',
      description: 'Cuidado especializado para crianças e adolescentes, utilizando técnicas lúdicas e apropriadas para cada faixa etária.',
      features: ['Dificuldades escolares', 'Comportamento', 'Medos e fobias', 'Desenvolvimento emocional'],
      duration: '45 minutos',
      frequency: 'Semanal',
    },
    {
      icon: Heart,
      title: 'Terapia de Casal',
      description: 'Trabalho conjunto para fortalecer relacionamentos, melhorar comunicação e resolver conflitos conjugais.',
      features: ['Comunicação', 'Conflitos', 'Intimidade', 'Projeto de vida'],
      duration: '60 minutos',
      frequency: 'Semanal ou quinzenal',
    },
    {
      icon: Users,
      title: 'Grupos de Apoio',
      description: 'Sessões em grupo para pessoas que compartilham experiências similares, promovendo apoio mútuo e crescimento.',
      features: ['Ansiedade', 'Luto', 'Dependência', 'Autoestima'],
      duration: '90 minutos',
      frequency: 'Semanal',
    },
    {
      icon: Calendar,
      title: 'Orientação Profissional',
      description: 'Apoio na escolha de carreira e desenvolvimento profissional, auxiliando na tomada de decisões importantes.',
      features: ['Escolha de carreira', 'Mudança profissional', 'Autoconhecimento', 'Planejamento'],
      duration: '50 minutos',
      frequency: 'Conforme necessidade',
    },
    {
      icon: ArrowRight,
      title: 'Avaliação Psicológica',
      description: 'Avaliações especializadas para diversos contextos, utilizando instrumentos validados e atualizados.',
      features: ['Concursos', 'CNH', 'Porte de arma', 'Clínica'],
      duration: 'Variável',
      frequency: 'Sob demanda',
    },
  ]

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="animate-on-scroll font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p 
            className="animate-on-scroll text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animation-delay-200"
          >
            Oferecemos uma ampla gama de serviços psicológicos especializados, 
            adaptados às necessidades específicas de cada pessoa e família.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll hover:shadow-xl transition-all duration-300 hover:scale-105 group border-primary/10 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Principais áreas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Duração:</span>
                      <p className="text-foreground/70">{service.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Frequência:</span>
                      <p className="text-foreground/70">{service.frequency}</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-md transition-all"
                >
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card/80 backdrop-blur-sm border border-primary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Primeira Consulta
            </h3>
            <p className="text-foreground/80 mb-6">
              A primeira sessão é dedicada ao acolhimento e compreensão das suas necessidades. 
              É um momento para conhecer melhor nossa abordagem e esclarecer dúvidas sobre o processo terapêutico.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Acolhimento</h4>
                <p className="text-sm text-foreground/70">Escuta ativa e empática das suas demandas</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Avaliação</h4>
                <p className="text-sm text-foreground/70">Compreensão do contexto e objetivos</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Planejamento</h4>
                <p className="text-sm text-foreground/70">Definição do melhor caminho terapêutico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services