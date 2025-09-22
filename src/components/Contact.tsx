"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Calendar,
  MessageCircle
} from 'lucide-react'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds (for demo purposes)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: ['Rua das Flores, 123', 'Centro - São Paulo, SP', 'CEP: 01234-567'],
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: ['(11) 9999-8888', '(11) 3333-4444'],
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: ['contato@clinicaequilibrio.com.br', 'agendamento@clinicaequilibrio.com.br'],
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: ['Segunda a Sexta: 8h às 20h', 'Sábados: 8h às 16h', 'Domingos: Fechado'],
    },
  ]

  const services = [
    'Psicoterapia Individual',
    'Psicoterapia Infantil',
    'Terapia de Casal',
    'Grupos de Apoio',
    'Orientação Profissional',
    'Avaliação Psicológica'
  ]

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="animate-on-scroll font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Agende sua <span className="text-primary">Consulta</span>
          </h2>
          <p 
            className="animate-on-scroll text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animation-delay-200"
          >
            Estamos prontos para ouvir você. Entre em contato conosco e dê o primeiro passo 
            em direção ao seu bem-estar emocional e mental.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-on-scroll border-primary/10 animation-delay-400">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold text-foreground">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Solicitar Agendamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 py-2 border border-primary/20 rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos um pouco sobre o que você gostaria de trabalhar ou esclarecer dúvidas..."
                      className="border-primary/20 focus:border-primary min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Solicitação
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Solicitação Enviada!
                  </h3>
                  <p className="text-foreground/70">
                    Recebemos sua mensagem e entraremos em contato em breve para agendar sua consulta.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="animate-on-scroll border-primary/10 hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.content.map((item, idx) => (
                          <p key={idx} className="text-foreground/70 text-sm">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="animate-on-scroll border-destructive/20 bg-destructive/5 animation-delay-1000">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Situações de Emergência
                    </h3>
                    <p className="text-foreground/70 text-sm mb-2">
                      Se você está passando por uma crise ou pensamentos suicidas, procure ajuda imediatamente:
                    </p>
                    <p className="text-sm font-medium text-destructive">
                      CVV: 188 • SAMU: 192 • Polícia: 190
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="animate-on-scroll border-primary/10 animation-delay-1200">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary/40 mx-auto mb-4" />
                  <p className="text-foreground/60">Mapa da localização da clínica</p>
                  <p className="text-sm text-foreground/40">(Integração com Google Maps)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact