'use client'

import React from 'react'
import {
  Instagram,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Heart,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', href: 'hero' },
    { name: 'Sobre Nós', href: 'about' },
    { name: 'Serviços', href: 'services' },
    { name: 'Equipe', href: 'team' },
    { name: 'Blog', href: 'blog' },
    { name: 'Contato', href: 'contact' },
  ]

  const services = [
    'Psicoterapia Individual',
    'Psicoterapia Infantil',
    'Terapia de Casal',
    'Grupos de Apoio',
    'Orientação Profissional',
    'Avaliação Psicológica',
  ]

  const legalLinks = [
    'Política de Privacidade',
    'Termos de Uso',
    'Código de Ética',
    'LGPD',
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="mb-2 font-serif text-2xl font-semibold text-background">
                Clínica Equilíbrio
              </h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Cuidando da sua saúde mental com equilíbrio e empatia.
                Oferecemos atendimento psicológico humanizado e especializado.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="text-background/80 flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>Rua das Flores, 123 - Centro, SP</span>
              </div>
              <div className="text-background/80 flex items-center text-sm">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>(11) 9999-8888</span>
              </div>
              <div className="text-background/80 flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>contato@clinicaequilibrio.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-background">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 text-sm transition-colors hover:text-background"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold text-background">
              Nossos Serviços
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-background/80 text-left text-sm transition-colors hover:text-background"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div>
            <h4 className="mb-4 font-semibold text-background">
              Conecte-se Conosco
            </h4>
            <p className="text-background/80 mb-4 text-sm">
              Siga-nos nas redes sociais para dicas sobre saúde mental e
              bem-estar.
            </p>

            {/* Social Links */}
            <div className="mb-6 flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>

            {/* CTA */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="hover:bg-primary/90 w-full bg-primary text-white"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-background/20 border-t"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between py-6 md:flex-row">
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-6 md:space-y-0">
            <p className="text-background/80 text-sm">
              © 2025 Clínica Equilíbrio - Projeto Fictício para Portfólio
            </p>
            <div className="flex space-x-4">
              {legalLinks.map((link) => (
                <button
                  key={link}
                  className="text-background/60 hover:text-background/80 text-xs transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Professional Registration */}
          <div className="text-background/60 mt-4 flex items-center text-xs md:mt-0">
            <span>Feito com</span>
            <Heart className="mx-1 h-3 w-3 fill-current text-red-400" />
            <span>para demonstração</span>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="border-background/20 border-t py-4">
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4">
            <div className="flex items-start">
              <MessageCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-red-400" />
              <div>
                <p className="mb-1 text-sm font-medium text-background">
                  Emergências Psicológicas
                </p>
                <p className="text-background/80 text-xs leading-relaxed">
                  Se você está passando por uma crise ou tendo pensamentos
                  suicidas, procure ajuda imediatamente. CVV: 188 (24h) • CAPS •
                  UPA • SAMU: 192
                </p>
                <div className="mt-2 flex items-center">
                  <a
                    href="https://www.cvv.org.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-red-400 underline hover:text-red-300"
                  >
                    CVV - Centro de Valorização da Vida
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
