'use client';

import { useState } from 'react';
import { Button } from '@/components/commons/button';
import { Input } from '@/components/commons/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons/card';

interface IEnhancedContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<IEnhancedContactData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    preferredContact: 'email',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof IEnhancedContactData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof IEnhancedContactData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Telefone inválido. Use: (XX) XXXXX-XXXX';
    }

    if (!formData.subject) {
      newErrors.subject = 'Selecione um motivo';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem muito curta (mínimo 10 caracteres)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Mock submission
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        preferredContact: 'email',
        message: '',
      });
      setErrors({});
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name as keyof IEnhancedContactData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
    if (errors.phone) {
      setErrors({ ...errors, phone: undefined });
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-2 shadow-xl">
        <CardContent className="py-16">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Mensagem enviada com sucesso!</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Recebemos sua mensagem e nossa equipe entrará em contato em até 24 horas úteis.
            </p>
            <div className="mt-6 p-4 bg-primary/5 rounded-lg inline-block">
              <p className="text-sm text-muted-foreground">
                📧 Um email de confirmação foi enviado para <strong>{formData.email}</strong>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 shadow-xl">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl">Entre em Contato</CardTitle>
        <CardDescription className="text-base">
          Preencha o formulário abaixo e nossa equipe responderá em breve. Atendimento humanizado e confidencial.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
              Nome completo <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-2">
                Telefone <span className="text-red-500">*</span>
              </label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="(41) 99999-9999"
                className={errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Subject and Preferred Contact Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-2">
                Motivo do contato <span className="text-red-500">*</span>
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-input'
                  }`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              >
                <option value="">Selecione uma opção</option>
                <option value="primeira-consulta">Agendar primeira consulta</option>
                <option value="retorno">Retorno de paciente</option>
                <option value="informacoes">Informações sobre serviços</option>
                <option value="urgencia">Caso de urgência</option>
                <option value="outros">Outros assuntos</option>
              </select>
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-600">{errors.subject}</p>
              )}
            </div>

            <div>
              <label htmlFor="preferred-contact" className="block text-sm font-medium text-foreground mb-2">
                Forma de contato preferida
              </label>
              <select
                id="preferred-contact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              >
                <option value="email">Email</option>
                <option value="phone">Telefone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
              Mensagem <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva brevemente o motivo do seu contato..."
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent resize-none ${errors.message
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-input focus:ring-primary'
                }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">
              Mínimo de 10 caracteres ({formData.message.length}/10)
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="bg-muted/50 border border-border rounded-lg p-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              🔒 <strong>Privacidade e Confidencialidade:</strong> Todas as informações fornecidas são tratadas
              com sigilo profissional conforme o Código de Ética da Psicologia e a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full h-12 text-base font-semibold">
            Enviar mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}