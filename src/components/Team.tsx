"use client"

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
      description: 'Especialista em transtornos de ansiedade e depressão, com vasta experiência em terapia individual para adultos.',
      approaches: ['TCC', 'Mindfulness', 'Terapia de Aceitação'],
      image: '/api/placeholder/300/300', // Placeholder for professional photo
    },
    {
      name: 'Dr. Carlos Roberto Mendes',
      role: 'Psicólogo Clínico - CRP 12/23456',
      specialization: 'Psicologia Infantil e do Adolescente',
      experience: '12 anos de experiência',
      education: 'Mestre em Psicologia do Desenvolvimento - UNICAMP',
      description: 'Dedica-se ao atendimento de crianças e adolescentes, utilizando técnicas lúdicas e abordagens apropriadas para cada idade.',
      approaches: ['Ludoterapia', 'TCC Infantil', 'Sistêmica'],
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Dra. Mariana Costa Oliveira',
      role: 'Psicóloga Clínica - CRP 12/34567',
      specialization: 'Terapia de Casal e Família',
      experience: '10 anos de experiência',
      education: 'Especialista em Terapia Familiar - PUC-SP',
      description: 'Focada em terapia de casal e família, auxiliando na resolução de conflitos e fortalecimento dos vínculos afetivos.',
      approaches: ['Sistêmica', 'Emotionally Focused Therapy', 'Comunicação Não-Violenta'],
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Dr. Rafael Santos Lima',
      role: 'Psicólogo Clínico - CRP 12/45678',
      specialization: 'Psicologia Organizacional e Orientação Profissional',
      experience: '8 anos de experiência',
      education: 'Especialista em Psicologia Organizacional - FGV',
      description: 'Atua com orientação profissional, desenvolvimento de carreira e avaliações psicológicas para diversos contextos.',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="animate-on-scroll font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p 
            className="animate-on-scroll text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animation-delay-200"
          >
            Profissionais qualificados e experientes, dedicados a oferecer o melhor cuidado 
            em saúde mental com diferentes abordagens terapêuticas.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll hover:shadow-xl transition-all duration-300 group border-primary/10 overflow-hidden"
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Photo placeholder */}
                  <div className="w-full md:w-48 h-64 md:h-auto bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">
                        {member.role}
                      </p>
                      <p className="text-foreground/70 text-sm mb-3">
                        {member.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <Award className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{member.specialization}</p>
                          <p className="text-xs text-foreground/70">{member.education}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <p className="text-sm text-foreground/70">{member.experience}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium text-sm text-foreground mb-2">Abordagens:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.approaches.map((approach, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {approach}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white group-hover:shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Agendar com este profissional
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Formação Continuada
            </h3>
            <p className="text-foreground/80 mb-6">
              Nossa equipe mantém-se constantemente atualizada através de cursos, 
              congressos e supervisões, garantindo que você receba o melhor atendimento 
              baseado nas práticas mais atuais da psicologia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Educação Continuada</h4>
                <p className="text-sm text-foreground/70">Participação regular em cursos e especializações</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Certificações</h4>
                <p className="text-sm text-foreground/70">Profissionais certificados em suas especialidades</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Supervisão</h4>
                <p className="text-sm text-foreground/70">Supervisão clínica para garantir qualidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team