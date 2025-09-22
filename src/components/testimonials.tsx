'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonials = (): React.ReactElement => {
  const sectionRef = useRef<HTMLElement>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect((): (() => void) => {
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

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = (): void => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  useEffect((): (() => void) => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="animate-on-scroll mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Histórias de <span className="text-primary">Transformação</span>
          </h2>
          <p className="animate-on-scroll text-foreground/80 animation-delay-200 mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            Conheça as experiências de pessoas que encontraram apoio e
            crescimento em nossa clínica. Seus depoimentos são nossa maior
            motivação.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="animate-on-scroll border-primary/10 bg-card/50 animation-delay-400 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="relative">
                {/* Quote Icon */}
                <div className="bg-primary/10 absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full">
                  <Quote className="h-6 w-6 text-primary" />
                </div>

                {/* Stars */}
                <div className="mb-6 flex justify-center">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-current text-yellow-400"
                      />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground/80 mb-8 text-center text-lg italic leading-relaxed md:text-xl">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="text-center">
                  <div className="text-lg font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-foreground/60 text-sm">
                    {testimonials[currentTestimonial].age} •{' '}
                    {testimonials[currentTestimonial].service}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${
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
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div className="animate-on-scroll animation-delay-600">
            <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
              500+
            </div>
            <div className="text-foreground/70">Pacientes Atendidos</div>
          </div>
          <div className="animate-on-scroll animation-delay-800">
            <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
              95%
            </div>
            <div className="text-foreground/70">Taxa de Satisfação</div>
          </div>
          <div className="animate-on-scroll animation-delay-1000">
            <div className="mb-2 text-3xl font-bold text-primary md:text-4xl">
              5+
            </div>
            <div className="text-foreground/70">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
