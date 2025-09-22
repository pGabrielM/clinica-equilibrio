import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

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
          <h4 className="font-semibold text-gray-900">Endereço</h4>
          <p className="text-gray-600">
            Rua das Flores, 123<br />
            Centro, São Paulo - SP<br />
            CEP: 01234-567
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Telefone</h4>
          <p className="text-gray-600">(11) 9999-8888</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Email</h4>
          <p className="text-gray-600">contato@clinicaequilibrio.com.br</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Horário de atendimento</h4>
          <p className="text-gray-600">
            Segunda a Sexta: 8h às 18h<br />
            Sábado: 8h às 12h
          </p>
        </div>
      </CardContent>
    </Card>
  );
}