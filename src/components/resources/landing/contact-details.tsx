import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons';

export function ContactDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informações de contato</CardTitle>
        <CardDescription>
          Entre em contato conosco através dos canais abaixo.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-foreground">Endereço</h4>
          <p className="text-muted-foreground">
            Rua das Flores, 123<br />
            Centro, São Paulo - SP<br />
            CEP: 01234-567
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Telefone</h4>
          <p className="text-muted-foreground">(11) 9999-8888</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Email</h4>
          <p className="text-muted-foreground">contato@clinicaequilibrio.com.br</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Horário de atendimento</h4>
          <p className="text-muted-foreground">
            Segunda a Sexta: 8h às 18h<br />
            Sábado: 8h às 12h
          </p>
        </div>
      </CardContent>
    </Card>
  );
}