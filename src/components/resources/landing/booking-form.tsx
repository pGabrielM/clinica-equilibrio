'use client';

import { useState, useEffect, useRef } from 'react';
import { services } from '@/utils/landing-helper';
import type { IBookingData } from '@/types/landings';
import { Button } from '@/components/commons/button';
import { Input } from '@/components/commons/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons/card';
import anime from '@/lib/anime';

export function BookingForm() {
  const [formData, setFormData] = useState<IBookingData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<IBookingData>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof IBookingData, boolean>>>({});
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && titleRef.current && descRef.current && cardRef.current) {
            const timeline = anime.timeline({});

            timeline
              .add(titleRef.current, {
                opacity: [0, 1],
                translateY: [-30, 0],
                duration: 800,
              })
              .add(descRef.current, {
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 600,
              }, '-=400')
              .add(cardRef.current, {
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 800,
              }, '-=200');

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('booking');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const validateField = (name: keyof IBookingData, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : '';
      case 'phone':
        return !/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(value) && value.length > 0
          ? 'Formato: (11) 99999-9999'
          : '';
      case 'service':
        return !value ? 'Selecione um serviço' : '';
      case 'date':
        return !value ? 'Selecione uma data' : '';
      case 'time':
        return !value ? 'Selecione um horário' : '';
      default:
        return '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<IBookingData> = {};
    (Object.keys(formData) as Array<keyof IBookingData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      service: true,
      date: true,
      time: true,
    });

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', service: '', date: '', time: '' });
        setTouched({});
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name as keyof IBookingData]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name as keyof IBookingData, value)
      }));
    }
  };

  const handleBlur = (name: keyof IBookingData) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, formData[name])
    }));
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-2 border-green-500/20 shadow-2xl">
            <CardContent className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Agendamento Recebido!</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Entraremos em contato em breve para confirmar sua sessão.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Tempo de resposta: até 24h</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0">
            Agende sua Sessão
          </h2>
          <p ref={descRef} className="text-xl text-muted-foreground max-w-2xl mx-auto opacity-0">
            Preencha o formulário e entraremos em contato para confirmar seu horário.
          </p>
        </div>

        <Card ref={cardRef} className="max-w-2xl mx-auto opacity-0 border-2 shadow-xl">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl">Formulário de Agendamento</CardTitle>
            <CardDescription className="text-base">
              Todos os campos são obrigatórios. Responderemos em até 24 horas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Nome Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={`transition-all ${touched.name && errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                  placeholder="Digite seu nome completo"
                />
                {touched.name && errors.name && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Telefone / WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur('phone')}
                  className={`transition-all ${touched.phone && errors.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                  placeholder="(11) 99999-9999"
                />
                {touched.phone && errors.phone && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Serviço */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Tipo de Serviço
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onBlur={() => handleBlur('service')}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${touched.service && errors.service
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-border focus:ring-primary'
                    }`}
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
                {touched.service && errors.service && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Data e Hora */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Data Preferida
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    onBlur={() => handleBlur('date')}
                    min={new Date().toISOString().split('T')[0]}
                    className={`transition-all ${touched.date && errors.date ? 'border-red-500 focus:ring-red-500' : 'focus:ring-primary'}`}
                  />
                  {touched.date && errors.date && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.date}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Horário Preferido
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    onBlur={() => handleBlur('time')}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${touched.time && errors.time
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-border focus:ring-primary'
                      }`}
                  >
                    <option value="">Selecione um horário</option>
                    <option value="08:00">08:00</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                  </select>
                  {touched.time && errors.time && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {errors.time}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full hover:scale-105 transition-all shadow-lg hover:shadow-xl group text-lg py-6"
              >
                <span>Confirmar Agendamento</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
