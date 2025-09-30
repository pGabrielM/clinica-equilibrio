'use client';

import { useState } from 'react';
import type { IContactData } from '@/types/landing.d.ts';
import { Button } from '@/components/commons';
import { Input } from '@/components/commons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons';

export function ContactForm() {
  const [formData, setFormData] = useState<IContactData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Mensagem enviada!</h3>
        <p className="text-muted-foreground">
          Obrigado pelo contato. Responderemos em breve.
        </p>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Envie sua mensagem</CardTitle>
        <CardDescription>
          Entre em contato conosco para dúvidas ou informações adicionais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
              Nome
            </label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
              Mensagem
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
              aria-required="true"
            />
          </div>
          <Button type="submit" className="w-full">
            Enviar mensagem
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}