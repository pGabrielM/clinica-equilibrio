import { IService } from '@/types/landing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons';
import { Button } from '@/components/commons';
import { Stethoscope, Heart, Baby, Bone } from 'lucide-react';

interface ServiceCardProps {
  service: IService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ({ name }: { name: string }) => {
    const iconClass = 'w-8 h-8 text-primary';
    switch (name) {
      case 'Stethoscope':
        return <Stethoscope className={iconClass} />;
      case 'Heart':
        return <Heart className={iconClass} />;
      case 'Baby':
        return <Baby className={iconClass} />;
      case 'Bone':
        return <Bone className={iconClass} />;
      default:
        return <Stethoscope className={iconClass} />;
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Icon name={service.icon} />
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">
          {service.desc}
        </CardDescription>
        <Button variant="outline" className="w-full">
          Saiba mais
        </Button>
      </CardContent>
    </Card>
  );
}