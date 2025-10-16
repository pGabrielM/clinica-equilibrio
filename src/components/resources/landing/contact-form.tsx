"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/commons/button";
import { Input } from "@/components/commons/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";

interface IEnhancedContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  preferredContact: "phone" | "email" | "whatsapp";
  message: string;
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [formData, setFormData] = useState<IEnhancedContactData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    preferredContact: "email",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof IEnhancedContactData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof IEnhancedContactData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("errors.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errors.emailInvalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phoneRequired");
    } else if (!/^\(\d{2}\)\s?\d{4,5}-?\d{4}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = t("errors.phoneInvalid");
    }

    if (!formData.subject) {
      newErrors.subject = t("errors.subjectRequired");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("errors.messageRequired");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("errors.messageShort");
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
    console.warn("Formulário enviado:", formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        preferredContact: "email",
        message: "",
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
    const cleaned = value.replace(/\D/g, "");
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
      <Card className="h-fit border-2 shadow-xl">
        <CardContent className="py-16">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-foreground mb-3 text-2xl font-bold">{t("success.title")}</h3>
            <p className="text-muted-foreground mx-auto max-w-md">{t("success.message")}</p>
            <div className="bg-primary/5 mt-6 inline-block rounded-lg p-4">
              <p className="text-muted-foreground text-sm">
                📧 {t("success.confirmation", { email: formData.email })}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-fit border-2 shadow-xl">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl">{t("title")}</CardTitle>
        <CardDescription className="text-base">{t("subtitle")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="contact-name"
              className="text-foreground mb-2 block text-sm font-medium"
            >
              {t("name")} <span className="text-red-500">*</span>
            </label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("namePlaceholder")}
              className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="contact-email"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                {t("email")} <span className="text-red-500">*</span>
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("emailPlaceholder")}
                className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact-phone"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                {t("phone")} <span className="text-red-500">*</span>
              </label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder={t("phonePlaceholder")}
                className={errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-600">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Subject and Preferred Contact Row */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="contact-subject"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                {t("subject")} <span className="text-red-500">*</span>
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`focus:ring-primary bg-background w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:outline-none ${
                  errors.subject ? "border-red-500 focus:ring-red-500" : "border-input"
                }`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              >
                <option value="">{t("subjectPlaceholder")}</option>
                <option value="primeira-consulta">{t("subjectOptions.firstAppointment")}</option>
                <option value="retorno">{t("subjectOptions.return")}</option>
                <option value="informacoes">{t("subjectOptions.information")}</option>
                <option value="urgencia">{t("subjectOptions.urgency")}</option>
                <option value="outros">{t("subjectOptions.other")}</option>
              </select>
              {errors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-600">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferred-contact"
                className="text-foreground mb-2 block text-sm font-medium"
              >
                {t("preferredContact")}
              </label>
              <select
                id="preferred-contact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="border-input focus:ring-primary bg-background w-full rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:outline-none"
              >
                <option value="email">{t("preferredContactOptions.email")}</option>
                <option value="phone">{t("preferredContactOptions.phone")}</option>
                <option value="whatsapp">{t("preferredContactOptions.whatsapp")}</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contact-message"
              className="text-foreground mb-2 block text-sm font-medium"
            >
              {t("message")} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder={t("messagePlaceholder")}
              className={`w-full resize-none rounded-md border px-3 py-2 focus:border-transparent focus:ring-2 focus:outline-none ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-input focus:ring-primary"
              }`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {errors.message}
              </p>
            )}
            <p className="text-muted-foreground mt-1 text-xs">
              {t("messageMinLength", { count: formData.message.length })}
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="bg-muted/50 border-border rounded-lg border p-4">
            <p className="text-muted-foreground text-xs leading-relaxed">{t("privacyNotice")}</p>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="h-12 w-full text-base font-semibold">
            {t("submit")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
