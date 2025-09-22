"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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

  const testimonials = [
    {
      name: 'Maria S.',
      age: '32 anos',
      service: 'Psicoterapia Individual',
      text: 'A terapia na Clínica Equilíbrio transformou minha vida. Encontrei um espaço seguro para trabalhar minha ansiedade e hoje me sinto muito mais confiante e equilibrada.',
      rating: 5,
    },
    {
      name: 'João M.',
      age: '28 anos',
      service: 'Terapia de Casal',
      text: 'Nossa psicóloga nos ajudou a reconstruir a comunicação no nosso relacionamento. As sessões foram fundamentais para fortalecermos nosso vínculo.',
      rating: 5,
    },
    {
      name: 'Ana Carolina P.',
      age: '45 anos',
      service: 'Orientação Profissional',
      text: 'Depois de anos indecisa sobre minha carreira, finalmente encontrei clareza sobre meus objetivos. O processo foi muito esclarecedor e transformador.',
      rating: 5,
    },
    {
      name: 'Carlos E.',
      age: '35 anos',
      service: 'Psicoterapia Individual',
      text: 'O acolhimento e profissionalismo da equipe são excepcionais. Sinto que estou em um ambiente verdadeiramente seguro para me expressar.',
      rating: 5,
    },
    {
      name: 'Luciana R.',
      age: '29 anos',
      service: 'Grupos de Apoio',
      text: 'Participar do grupo de apoio me fez perceber que não estava sozinha. A troca de experiências foi muito enriquecedora e terapêutica.',
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Auto-advance every 5 seconds
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="animate-on-scroll font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Histórias de <span className="text-primary">Transformação</span>
          </h2>
          <p 
            className="animate-on-scroll text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animation-delay-200"
          >
            Conheça as experiências de pessoas que encontraram apoio e crescimento 
            em nossa clínica. Seus depoimentos são nossa maior motivação.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="animate-on-scroll border-primary/10 bg-card/50 backdrop-blur-sm animation-delay-400">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-foreground/80 text-center mb-8 leading-relaxed italic">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="text-center">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-foreground/60 text-sm">
                    {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].service}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? 'bg-primary' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-on-scroll animation-delay-600">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-foreground/70">Pacientes Atendidos</div>
          </div>
          <div className="animate-on-scroll animation-delay-800">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-foreground/70">Taxa de Satisfação</div>
          </div>
          <div className="animate-on-scroll animation-delay-1000">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-foreground/70">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials