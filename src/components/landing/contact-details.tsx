import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';

export function ContactDetails() {
  const contactItems = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Endereço',
      content: (
        <>
          Rua XV de Novembro, 1234<br />
          Centro, Curitiba - PR<br />
          CEP: 80020-310
        </>
      ),
      link: 'https://maps.google.com/?q=Rua+XV+de+Novembro+Curitiba',
      linkText: 'Ver no mapa'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone / WhatsApp',
      content: '(41) 3322-4455',
      link: 'https://wa.me/5541933224455',
      linkText: 'Enviar mensagem'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contato@clinicaequilibrio.psi.br',
      link: 'mailto:contato@clinicaequilibrio.psi.br',
      linkText: 'Enviar email'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Horário de Atendimento',
      content: (
        <>
          Segunda a Sexta: 7h às 20h<br />
          Sábado: 8h às 14h<br />
          <span className="text-sm text-green-600 font-medium">Atendimento Online e Presencial</span>
        </>
      ),
    },
  ];

  return (
    <Card className="border-2 shadow-xl">
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl">Informações de Contato</CardTitle>
        <CardDescription className="text-base">
          Estamos sempre disponíveis para atendê-lo da melhor forma.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="group hover:bg-muted/50 p-4 rounded-lg transition-all duration-300 -mx-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  {item.content}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1 group/link"
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Social Media Links */}
        <div className="border-t pt-6 mt-6">
          <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
          <div className="flex gap-3">
            <button
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-primary-foreground transition-all hover:scale-110 cursor-default"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-primary-foreground transition-all hover:scale-110 cursor-default"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-primary-foreground transition-all hover:scale-110 cursor-default"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}