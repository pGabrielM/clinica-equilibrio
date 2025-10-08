import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export function ContactDetails() {
  const contactItems = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Endereço",
      content: (
        <>
          Rua XV de Novembro, 1234
          <br />
          Centro, Curitiba - PR
          <br />
          CEP: 80020-310
        </>
      ),
      link: "https://maps.google.com/?q=Rua+XV+de+Novembro+Curitiba",
      linkText: "Ver no mapa",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone / WhatsApp",
      content: "(41) 3322-4455",
      link: "https://wa.me/5541933224455",
      linkText: "Enviar mensagem",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contato@clinicaequilibrio.psi.br",
      link: "mailto:contato@clinicaequilibrio.psi.br",
      linkText: "Enviar email",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário de Atendimento",
      content: (
        <>
          Segunda a Sexta: 7h às 20h
          <br />
          Sábado: 8h às 14h
          <br />
          <span className="text-sm font-medium text-green-600">
            Atendimento Online e Presencial
          </span>
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
            className="group hover:bg-muted/50 -mx-4 rounded-lg p-4 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-foreground group-hover:text-primary mb-2 font-semibold transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground mb-2 leading-relaxed">{item.content}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary group/link inline-flex items-center gap-1 text-sm hover:underline"
                  >
                    <span>{item.linkText}</span>
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Social Media Links */}
        <div className="mt-6 border-t pt-6">
          <h4 className="text-foreground mb-4 font-semibold">Redes Sociais</h4>
          <div className="flex gap-3">
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex h-10 w-10 cursor-default items-center justify-center rounded-lg transition-all hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex h-10 w-10 cursor-default items-center justify-center rounded-lg transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex h-10 w-10 cursor-default items-center justify-center rounded-lg transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
