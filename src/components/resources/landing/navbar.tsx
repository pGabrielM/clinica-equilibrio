'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/commons';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Clínica Equilíbrio
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="#team" className="text-muted-foreground hover:text-primary transition-colors">
              Equipe
            </Link>
            <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="#booking" className="text-muted-foreground hover:text-primary transition-colors">
              Agendamento
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </Link>
            <Button>Agende sua consulta</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </nav>
  );
}