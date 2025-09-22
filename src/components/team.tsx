'use client'

import React, { useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Award, Clock, Mail } from 'lucide-react'

const Team = () => {
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

  const teamMembers = [
    {
      name: 'Dra. Ana Paula Silva',
      role: 'Psicóloga Clínica - CRP 12/12345',
      specialization: 'Terapia Cognitivo-Comportamental',
      experience: '15 anos de experiência',
      education: 'Doutora em Psicologia Clínica - USP',
      description:
        'Especialista em transtornos de ansiedade e depressão, com vasta experiência em terapia individual para adultos.',
      approaches: ['TCC', 'Mindfulness', 'Terapia de Aceitação'],
      image: '/api/placeholder/300/300', // Placeholder for professional photo
    },
    {
      name: 'Dr. Carlos Roberto Mendes',
      role: 'Psicólogo Clínico - CRP 12/23456',
      specialization: 'Psicologia Infantil e do Adolescente',
      experience: '12 anos de experiência',
      education: 'Mestre em Psicologia do Desenvolvimento - UNICAMP',
      description:
        'Dedica-se ao atendimento de crianças e adolescentes, utilizando técnicas lúdicas e abordagens apropriadas para cada idade.',
      approaches: ['Ludoterapia', 'TCC Infantil', 'Sistêmica'],
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Dra. Mariana Costa Oliveira',
      role: 'Psicóloga Clínica - CRP 12/34567',
      specialization: 'Terapia de Casal e Família',
      experience: '10 anos de experiência',
      education: 'Especialista em Terapia Familiar - PUC-SP',
      description:
        'Focada em terapia de casal e família, auxiliando na resolução de conflitos e fortalecimento dos vínculos afetivos.',
      approaches: [
        'Sistêmica',
        'Emotionally Focused Therapy',
        'Comunicação Não-Violenta',
      ],
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Dr. Rafael Santos Lima',
      role: 'Psicólogo Clínico - CRP 12/45678',
      specialization: 'Psicologia Organizacional e Orientação Profissional',
      experience: '8 anos de experiência',
      education: 'Especialista em Psicologia Organizacional - FGV',
      description:
        'Atua com orientação profissional, desenvolvimento de carreira e avaliações psicológicas para diversos contextos.',
      approaches: ['Coaching', 'Análise de Perfil', 'Orientação Vocacional'],
      image: '/api/placeholder/300/300',
    },
  ]

  return (
    <section
      id="team"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="animate-on-scroll mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="animate-on-scroll text-foreground/80 animation-delay-200 mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            Profissionais qualificados e experientes, dedicados a oferecer o
            melhor cuidado em saúde mental com diferentes abordagens
            terapêuticas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="animate-on-scroll border-primary/10 group overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Photo placeholder */}
                  <div className="from-primary/10 to-secondary/20 flex h-64 w-full items-center justify-center bg-gradient-to-br md:h-auto md:w-48">
                    <div className="bg-primary/20 flex h-32 w-32 items-center justify-center rounded-full">
                      <GraduationCap className="h-16 w-16 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h3 className="mb-1 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                        {member.name}
                      </h3>
                      <p className="mb-2 text-sm font-medium text-primary">
                        {member.role}
                      </p>
                      <p className="text-foreground/70 mb-3 text-sm">
                        {member.description}
                      </p>
                    </div>

                    <div className="mb-6 space-y-3">
                      <div className="flex items-start">
                        <Award className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {member.specialization}
                          </p>
                          <p className="text-foreground/70 text-xs">
                            {member.education}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                        <p className="text-foreground/70 text-sm">
                          {member.experience}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-2 text-sm font-medium text-foreground">
                        Abordagens:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.approaches.map((approach, idx) => (
                          <span
                            key={idx}
                            className="bg-primary/10 rounded-full px-2 py-1 text-xs text-primary"
                          >
                            {approach}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary transition-all hover:bg-primary hover:text-white group-hover:shadow-md"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Agendar com este profissional
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 border-primary/10 mx-auto max-w-4xl rounded-xl border p-8">
            <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              Formação Continuada
            </h3>
            <p className="text-foreground/80 mb-6">
              Nossa equipe mantém-se constantemente atualizada através de
              cursos, congressos e supervisões, garantindo que você receba o
              melhor atendimento baseado nas práticas mais atuais da psicologia.
            </p>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
              <div>
                <div className="bg-primary/10 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">
                  Educação Continuada
                </h4>
                <p className="text-foreground/70 text-sm">
                  Participação regular em cursos e especializações
                </p>
              </div>
              <div>
                <div className="bg-primary/10 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">
                  Certificações
                </h4>
                <p className="text-foreground/70 text-sm">
                  Profissionais certificados em suas especialidades
                </p>
              </div>
              <div>
                <div className="bg-primary/10 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-2 font-semibold text-foreground">
                  Supervisão
                </h4>
                <p className="text-foreground/70 text-sm">
                  Supervisão clínica para garantir qualidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
