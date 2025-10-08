"use client";

import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, MessageCircle, Check } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const footerLinks = {
    services: [
      { name: "Psicoterapia Individual", href: "#services" },
      { name: "Terapia de Casal", href: "#services" },
      { name: "Psicologia Infantil", href: "#services" },
      { name: "Terapia em Grupo", href: "#services" },
    ],
    company: [
      { name: "Sobre Nós", href: "#" },
      { name: "Nossa Equipe", href: "#team" },
      { name: "Blog", href: "#blog" },
      { name: "Depoimentos", href: "#" },
    ],
    support: [
      { name: "Contato", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Agendamento", href: "#booking" },
      { name: "Política de Privacidade", href: "#" },
    ],
  };

  return (
    <footer className="from-primary/95 to-primary text-primary-foreground relative overflow-hidden bg-gradient-to-br">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="bg-secondary/10 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-block">
              <h3 className="mb-4 text-3xl font-bold transition-transform group-hover:scale-105">
                Clínica Equilíbrio
              </h3>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm leading-relaxed">
              Cuidando da sua saúde mental com profissionalismo, empatia e acolhimento. Mais de 10
              anos transformando vidas.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4 className="mb-3 font-semibold">Newsletter</h4>
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className="text-primary-foreground placeholder:text-primary-foreground/50 flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="text-primary rounded-lg bg-white px-6 py-2 font-semibold transition-colors hover:bg-white/90"
                  >
                    Assinar
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 rounded-lg bg-green-400/10 px-4 py-2 text-green-400">
                  <Check className="h-5 w-5" />
                  <span>Inscrito com sucesso!</span>
                </div>
              )}
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              <button
                onClick={(e) => e.preventDefault()}
                className="hover:text-primary flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-110 hover:bg-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="hover:text-primary flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-110 hover:bg-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="hover:text-primary flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-110 hover:bg-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => e.preventDefault()}
                className="hover:text-primary flex h-10 w-10 cursor-default items-center justify-center rounded-lg bg-white/10 transition-all hover:scale-110 hover:bg-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground inline-block transition-colors hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground inline-block transition-colors hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground inline-block transition-colors hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-primary-foreground/20 border-t pt-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-primary-foreground/80 text-sm">
              © 2025 Clínica Equilíbrio. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap gap-6 text-sm md:justify-end">
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-primary-foreground/10 mt-6 border-t pt-6">
            <p className="text-primary-foreground/60 text-center text-xs">
              CRP: 06/12345 | CNPJ: 12.345.678/0001-90 | Responsável Técnico: Dra. Ana Carolina
              Silva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
