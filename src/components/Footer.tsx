"use client"

import React from 'react'
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  Heart,
  ExternalLink
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
    'Avaliação Psicológica'
  ]

  const legalLinks = [
    'Política de Privacidade',
    'Termos de Uso',
    'Código de Ética',
    'LGPD'
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-semibold text-background mb-2">
                Clínica Equilíbrio
              </h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Cuidando da sua saúde mental com equilíbrio e empatia. 
                Oferecemos atendimento psicológico humanizado e especializado.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-background/80">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Rua das Flores, 123 - Centro, SP</span>
              </div>
              <div className="flex items-center text-sm text-background/80">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>(11) 9999-8888</span>
              </div>
              <div className="flex items-center text-sm text-background/80">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>contato@clinicaequilibrio.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/80 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-background/80 hover:text-background transition-colors text-sm text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div>
            <h4 className="font-semibold text-background mb-4">Conecte-se Conosco</h4>
            <p className="text-background/80 text-sm mb-4">
              Siga-nos nas redes sociais para dicas sobre saúde mental e bem-estar.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              <Button
                variant="outline"
                size="sm"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>

            {/* CTA */}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-background/80 text-sm">
              © 2025 Clínica Equilíbrio - Projeto Fictício para Portfólio
            </p>
            <div className="flex space-x-4">
              {legalLinks.map((link) => (
                <button
                  key={link}
                  className="text-background/60 hover:text-background/80 transition-colors text-xs"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          {/* Professional Registration */}
          <div className="flex items-center text-xs text-background/60 mt-4 md:mt-0">
            <span>Feito com</span>
            <Heart className="w-3 h-3 mx-1 text-red-400 fill-current" />
            <span>para demonstração</span>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="border-t border-background/20 py-4">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <div className="flex items-start">
              <MessageCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-background text-sm font-medium mb-1">
                  Emergências Psicológicas
                </p>
                <p className="text-background/80 text-xs leading-relaxed">
                  Se você está passando por uma crise ou tendo pensamentos suicidas, 
                  procure ajuda imediatamente. CVV: 188 (24h) • CAPS • UPA • SAMU: 192
                </p>
                <div className="flex items-center mt-2">
                  <a 
                    href="https://www.cvv.org.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 text-xs underline flex items-center"
                  >
                    CVV - Centro de Valorização da Vida
                    <ExternalLink className="w-3 h-3 ml-1" />
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