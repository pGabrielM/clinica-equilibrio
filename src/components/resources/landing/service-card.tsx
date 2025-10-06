import { IService } from '@/types/landing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons';
import { Button } from '@/components/commons';
import { User, Heart, Baby, Users } from 'lucide-react';

interface ServiceCardProps {
  service: IService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ({ name }: { name: string }) => {
    const iconClass = 'w-8 h-8 text-primary';
    switch (name) {
      case 'User':
        return <User className={iconClass} />;
      case 'Heart':
        return <Heart className={iconClass} />;
      case 'Baby':
        return <Baby className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      default:
        return <User className={iconClass} />;
    }
  };

  return (
    <Card className="h-full hover:shadow-lg hover:scale-105 transition-all duration-300">
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
        <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors">
          Saiba mais
        </Button>
      </CardContent>
    </Card>
  );
}