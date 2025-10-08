'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Check } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const footerLinks = {
    services: [
      { name: 'Psicoterapia Individual', href: '#services' },
      { name: 'Terapia de Casal', href: '#services' },
      { name: 'Psicologia Infantil', href: '#services' },
      { name: 'Terapia em Grupo', href: '#services' },
    ],
    company: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Nossa Equipe', href: '#team' },
      { name: 'Blog', href: '#blog' },
      { name: 'Depoimentos', href: '#' },
    ],
    support: [
      { name: 'Contato', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Agendamento', href: '#booking' },
      { name: 'Política de Privacidade', href: '#' },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-primary/95 to-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <h3 className="text-3xl font-bold mb-4 group-hover:scale-105 transition-transform">
                Clínica Equilíbrio
              </h3>
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-sm">
              Cuidando da sua saúde mental com profissionalismo, empatia e acolhimento.
              Mais de 10 anos transformando vidas.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                  >
                    Assinar
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg">
                  <Check className="w-5 h-5" />
                  <span>Inscrito com sucesso!</span>
                </div>
              )}
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <button
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 cursor-default"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 cursor-default"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 cursor-default"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 bg-white/10 hover:bg-white hover:text-primary rounded-lg flex items-center justify-center transition-all hover:scale-110 cursor-default"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-primary-foreground/80 text-sm">
              © 2025 Clínica Equilíbrio. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-6 text-sm md:justify-end">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/60 text-center">
              CRP: 06/12345 | CNPJ: 12.345.678/0001-90 | Responsável Técnico: Dra. Ana Carolina Silva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}