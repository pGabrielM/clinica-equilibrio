'use client'

import React, { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { HandHeart, GraduationCap, Brain, Target } from 'lucide-react'

const About = (): React.ReactElement => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect((): (() => void) | void => {
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

  const features = [
    {
      icon: HandHeart,
      title: 'Atendimento humanizado',
      description:
        'Oferecemos um cuidado empático e personalizado, onde cada paciente é tratado com respeito, dignidade e compreensão.',
    },
    {
      icon: GraduationCap,
      title: 'Equipe especializada',
      description:
        'Nossa equipe é formada por psicólogos qualificados e experientes, com formação em diversas abordagens terapêuticas.',
    },
    {
      icon: Brain,
      title: 'Diversas abordagens terapêuticas',
      description:
        'Trabalhamos com múltiplas técnicas e metodologias para encontrar a melhor forma de auxiliar cada pessoa.',
    },
    {
      icon: Target,
      title: 'Foco no bem-estar',
      description:
        'Nosso objetivo é promover o equilíbrio emocional e mental, contribuindo para uma vida mais plena e saudável.',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="animate-on-scroll mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Sobre a <span className="text-primary">Clínica Equilíbrio</span>
          </h2>
          <p className="animate-on-scroll text-foreground/80 animation-delay-200 mx-auto max-w-4xl text-lg leading-relaxed md:text-xl">
            Fundada com o propósito de oferecer cuidados psicológicos de
            excelência, a Clínica Equilíbrio é um espaço dedicado ao bem-estar
            mental e emocional. Acreditamos que a saúde mental é fundamental
            para uma vida plena e equilibrada, e trabalhamos com dedicação para
            proporcionar um ambiente acolhedor e seguro onde nossos pacientes
            possam encontrar o apoio necessário para suas jornadas de
            crescimento pessoal.
          </p>
        </div>

        <div className="mb-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="animate-on-scroll animation-delay-400 space-y-6">
              <div>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-primary">
                  Nossa Missão
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Promover o bem-estar mental e emocional através de atendimento
                  psicológico humanizado e de qualidade, respeitando a
                  individualidade de cada pessoa e oferecendo um espaço seguro
                  para crescimento e transformação pessoal.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-primary">
                  Nossos Valores
                </h3>
                <ul className="text-foreground/80 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>
                      Ética e confidencialidade em todos os atendimentos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Respeito à diversidade e individualidade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Acolhimento e empatia em cada consulta</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>Compromisso com a excelência profissional</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="animate-on-scroll animation-delay-600 space-y-6">
              <div>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-primary">
                  Nossa Visão
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ser reconhecida como referência em cuidados psicológicos,
                  contribuindo para uma sociedade mais saudável emocionalmente,
                  onde cada pessoa possa viver com equilíbrio, autoconhecimento
                  e bem-estar.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-primary">
                  Nosso Compromisso
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Estamos comprometidos em oferecer um atendimento de
                  excelência, mantendo-nos sempre atualizados com as melhores
                  práticas da psicologia e proporcionando um ambiente seguro e
                  acolhedor para todos os nossos pacientes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="animate-on-scroll border-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
