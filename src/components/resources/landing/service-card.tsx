import { type IService } from "@/types/landings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import { Button } from "@/components/commons/button";
import { User, Heart, Baby, Users } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceCardProps {
  service: IService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const t = useTranslations("services");
  const Icon = ({ name }: { name: string }) => {
    const iconClass = "w-12 h-12 text-primary";
    switch (name) {
      case "User":
        return <User className={iconClass} />;
      case "Heart":
        return <Heart className={iconClass} />;
      case "Baby":
        return <Baby className={iconClass} />;
      case "Users":
        return <Users className={iconClass} />;
      default:
        return <User className={iconClass} />;
    }
  };

  return (
    <Card className="group hover:border-primary/50 from-background to-muted/20 h-full border-2 bg-gradient-to-br transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader>
        <div className="mb-4 flex items-start justify-between">
          <div className="bg-primary/10 group-hover:bg-primary/20 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110">
            <Icon name={service.icon} />
          </div>
          <div className="bg-primary/5 flex h-8 w-8 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100">
            <svg
              className="text-primary h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
        <CardTitle className="group-hover:text-primary text-2xl transition-colors">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col">
        <CardDescription className="mb-6 flex-grow text-base leading-relaxed">
          {service.desc}
        </CardDescription>
        <Button
          variant="outline"
          className="hover:bg-primary hover:text-primary-foreground hover:border-primary group/btn w-full transition-all"
        >
          <span>{t("learnMore")}</span>
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </CardContent>
    </Card>
  );
}
