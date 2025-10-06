import { IService } from '@/features/landing/types/landing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { User, Heart, Baby, Users } from 'lucide-react';

interface ServiceCardProps {
  service: IService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ({ name }: { name: string }) => {
    const iconClass = 'w-12 h-12 text-primary';
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
    <Card className="h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group border-2 hover:border-primary/50 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <Icon name={service.icon} />
          </div>
          <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="text-base mb-6 flex-grow leading-relaxed">
          {service.desc}
        </CardDescription>
        <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn">
          <span>Saiba mais</span>
          <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </CardContent>
    </Card>
  );
}