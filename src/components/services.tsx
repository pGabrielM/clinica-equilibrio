'use client'

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
      description:
        'Atendimento personalizado para adultos, focado no autoconhecimento e resolução de questões emocionais específicas.',
      features: [
        'Ansiedade e depressão',
        'Autoestima',
        'Relacionamentos',
        'Traumas',
      ],
      duration: '50 minutos',
      frequency: 'Semanal ou quinzenal',
    },
    {
      icon: Baby,
      title: 'Psicoterapia Infantil',
      description:
        'Cuidado especializado para crianças e adolescentes, utilizando técnicas lúdicas e apropriadas para cada faixa etária.',
      features: [
        'Dificuldades escolares',
        'Comportamento',
        'Medos e fobias',
        'Desenvolvimento emocional',
      ],
      duration: '45 minutos',
      frequency: 'Semanal',
    },
    {
      icon: Heart,
      title: 'Terapia de Casal',
      description:
        'Trabalho conjunto para fortalecer relacionamentos, melhorar comunicação e resolver conflitos conjugais.',
      features: ['Comunicação', 'Conflitos', 'Intimidade', 'Projeto de vida'],
      duration: '60 minutos',
      frequency: 'Semanal ou quinzenal',
    },
    {
      icon: Users,
      title: 'Grupos de Apoio',
      description:
        'Sessões em grupo para pessoas que compartilham experiências similares, promovendo apoio mútuo e crescimento.',
      features: ['Ansiedade', 'Luto', 'Dependência', 'Autoestima'],
      duration: '90 minutos',
      frequency: 'Semanal',
    },
    {
      icon: Calendar,
      title: 'Orientação Profissional',
      description:
        'Apoio na escolha de carreira e desenvolvimento profissional, auxiliando na tomada de decisões importantes.',
      features: [
        'Escolha de carreira',
        'Mudança profissional',
        'Autoconhecimento',
        'Planejamento',
      ],
      duration: '50 minutos',
      frequency: 'Conforme necessidade',
    },
    {
      icon: ArrowRight,
      title: 'Avaliação Psicológica',
      description:
        'Avaliações especializadas para diversos contextos, utilizando instrumentos validados e atualizados.',
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="animate-on-scroll mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="animate-on-scroll text-foreground/80 animation-delay-200 mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            Oferecemos uma ampla gama de serviços psicológicos especializados,
            adaptados às necessidades específicas de cada pessoa e família.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="animate-on-scroll border-primary/10 bg-card/50 group backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-16 w-16 items-center justify-center rounded-xl transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-foreground">
                      Principais áreas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 rounded-full px-2 py-1 text-xs text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">
                        Duração:
                      </span>
                      <p className="text-foreground/70">{service.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">
                        Frequência:
                      </span>
                      <p className="text-foreground/70">{service.frequency}</p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={scrollToContact}
                  className="hover:bg-primary/90 w-full bg-primary transition-all group-hover:shadow-md"
                >
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card/80 border-primary/10 mx-auto max-w-4xl rounded-xl border p-8 backdrop-blur-sm">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Primeira Consulta
            </h3>
            <p className="text-foreground/80 mb-6">
              A primeira sessão é dedicada ao acolhimento e compreensão das suas
              necessidades. É um momento para conhecer melhor nossa abordagem e
              esclarecer dúvidas sobre o processo terapêutico.
            </p>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
              <div>
                <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h4 className="mb-2 font-semibold text-foreground">
                  Acolhimento
                </h4>
                <p className="text-foreground/70 text-sm">
                  Escuta ativa e empática das suas demandas
                </p>
              </div>
              <div>
                <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h4 className="mb-2 font-semibold text-foreground">
                  Avaliação
                </h4>
                <p className="text-foreground/70 text-sm">
                  Compreensão do contexto e objetivos
                </p>
              </div>
              <div>
                <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h4 className="mb-2 font-semibold text-foreground">
                  Planejamento
                </h4>
                <p className="text-foreground/70 text-sm">
                  Definição do melhor caminho terapêutico
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
