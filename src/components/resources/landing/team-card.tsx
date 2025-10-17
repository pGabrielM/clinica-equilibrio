import Image from "next/image";
import { type ITeamMember } from "@/types/landings";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/commons/card";
import { Badge } from "@/components/commons/badge";
import { useTranslations } from "next-intl";

interface TeamCardProps {
  member: ITeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const tGlobal = useTranslations();

  // Traduzir dados do membro
  const memberName = tGlobal(`team_data.${member.id}.name`);
  const memberSpecialty = tGlobal(`team_data.${member.id}.specialty`);
  const memberBio = tGlobal(`team_data.${member.id}.bio`);
  return (
    <Card className="group hover:border-primary/30 from-background to-muted/10 overflow-hidden border-2 bg-gradient-to-b text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      <CardHeader className="relative">
        {/* Background decoration */}
        <div className="from-primary/10 to-secondary/10 absolute top-0 right-0 left-0 -z-10 h-24 bg-gradient-to-br" />

        <div className="relative mb-6 flex justify-center">
          <div className="relative">
            {/* Animated border ring */}
            <div className="from-primary to-secondary absolute -inset-2 rounded-full bg-gradient-to-r opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
            <div className="ring-background relative h-32 w-32 overflow-hidden rounded-full shadow-xl ring-4">
              <Image
                src={member.image}
                alt={`Foto de ${member.name}`}
                width={128}
                height={128}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Online badge */}
            <div className="ring-background absolute right-2 bottom-2 h-4 w-4 rounded-full bg-green-500 ring-4" />
          </div>
        </div>

        <h3 className="text-foreground group-hover:text-primary mb-2 text-2xl font-bold transition-colors">
          {memberName}
        </h3>
        <Badge
          variant="secondary"
          className="group-hover:bg-primary group-hover:text-primary-foreground mt-2 px-4 py-1 text-sm transition-colors"
        >
          {memberSpecialty}
        </Badge>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="mb-6 text-base leading-relaxed">{memberBio}</CardDescription>

        {/* Action buttons */}
        <div className="flex justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            className="bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg p-2 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <button
            className="bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg p-2 transition-colors"
            aria-label="Email"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
          <button
            className="bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg p-2 transition-colors"
            aria-label="Agendar"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
