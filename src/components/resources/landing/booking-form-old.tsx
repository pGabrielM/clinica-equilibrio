"use client";

import { useState, useEffect, useRef } from "react";
import { services } from "@/utils/landing-helper";
import type { IBookingData } from "@/types/landings";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import anime from "@/lib/anime";

export function BookingForm() {
  const [formData, setFormData] = useState<IBookingData>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline();

            if (titleRef.current) {
              tl.add(titleRef.current, {
                opacity: [0, 1],
                translateY: [-30, 0],
                duration: 800,
                easing: "out-expo",
              });
            }

            if (descRef.current) {
              tl.add(
                descRef.current,
                {
                  opacity: [0, 1],
                  translateY: [-20, 0],
                  duration: 600,
                  easing: "out-expo",
                },
                "-=400"
              );
            }

            if (cardRef.current) {
              tl.add(
                cardRef.current,
                {
                  opacity: [0, 1],
                  scale: [0.95, 1],
                  duration: 800,
                  easing: "out-expo",
                },
                "-=200"
              );
            }

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("booking");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.service ||
      !formData.date ||
      !formData.time
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl">
            <CardContent className="py-12 text-center">
              <div className="mb-4 text-6xl text-green-600">✓</div>
              <h3 className="text-foreground mb-2 text-2xl font-bold">Agendamento enviado!</h3>
              <p className="text-muted-foreground">
                Entraremos em contato em breve para confirmar sua sessão.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-foreground mb-4 text-3xl font-bold opacity-0 md:text-4xl"
          >
            Agende sua sessão
          </h2>
          <p ref={descRef} className="text-muted-foreground text-xl opacity-0">
            Preencha o formulário abaixo e entraremos em contato para confirmar seu horário.
          </p>
        </div>
        <Card ref={cardRef} className="mx-auto max-w-2xl opacity-0">
          <CardHeader>
            <CardTitle>Formulário de Agendamento</CardTitle>
            <CardDescription>Todos os campos são obrigatórios.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-foreground mb-2 block text-sm font-medium">
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-foreground mb-2 block text-sm font-medium">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="service" className="text-foreground mb-2 block text-sm font-medium">
                  Serviço desejado
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="border-border focus:ring-primary w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:outline-none"
                  required
                  aria-required="true"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="date" className="text-foreground mb-2 block text-sm font-medium">
                    Data preferida
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="text-foreground mb-2 block text-sm font-medium">
                    Horário preferido
                  </label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full transition-transform hover:scale-105">
                Enviar agendamento
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
