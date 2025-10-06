'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/commons';
import { MobileMenu } from './mobile-menu';
import anime from '@/lib/anime';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['services', 'team', 'blog', 'booking', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate navbar items on mount
    anime({
      targets: '.nav-link',
      opacity: [0, 1],
      translateY: [-20, 0],
      delay: anime.stagger(100, { start: 300 }),
      duration: 600,
      easing: 'easeOutExpo',
    });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b'
          : 'bg-background shadow-sm border-b'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary hover:scale-105 transition-transform">
              Clínica Equilíbrio
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className={`nav-link relative text-muted-foreground hover:text-primary transition-colors group ${activeSection === 'services' ? 'text-primary font-semibold' : ''
                }`}
            >
              Serviços
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${activeSection === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
            </Link>
            <Link
              href="#team"
              onClick={(e) => handleNavClick(e, '#team')}
              className={`nav-link relative text-muted-foreground hover:text-primary transition-colors group ${activeSection === 'team' ? 'text-primary font-semibold' : ''
                }`}
            >
              Equipe
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${activeSection === 'team' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
            </Link>
            <Link
              href="#blog"
              onClick={(e) => handleNavClick(e, '#blog')}
              className={`nav-link relative text-muted-foreground hover:text-primary transition-colors group ${activeSection === 'blog' ? 'text-primary font-semibold' : ''
                }`}
            >
              Blog
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${activeSection === 'blog' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
            </Link>
            <Link
              href="#booking"
              onClick={(e) => handleNavClick(e, '#booking')}
              className={`nav-link relative text-muted-foreground hover:text-primary transition-colors group ${activeSection === 'booking' ? 'text-primary font-semibold' : ''
                }`}
            >
              Agendamento
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${activeSection === 'booking' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`nav-link relative text-muted-foreground hover:text-primary transition-colors group ${activeSection === 'contact' ? 'text-primary font-semibold' : ''
                }`}
            >
              Contato
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform ${activeSection === 'contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
            </Link>
            <Button className="nav-link">Agende sua sessão</Button>
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