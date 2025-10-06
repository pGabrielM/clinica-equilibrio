import Image from 'next/image';
import { ITeamMember } from '@/features/landing/types/landing';
import { Card, CardContent, CardDescription, CardHeader } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';

interface TeamCardProps {
  member: ITeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group border-2 hover:border-primary/30 overflow-hidden bg-gradient-to-b from-background to-muted/10">
      <CardHeader className="relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />

        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            {/* Animated border ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-background shadow-xl">
              <Image
                src={member.image}
                alt={`Foto de ${member.name}`}
                width={128}
                height={128}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Online badge */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full ring-4 ring-background" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
          {member.name}
        </h3>
        <Badge variant="secondary" className="mt-2 px-4 py-1 text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {member.specialty}
        </Badge>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-base leading-relaxed mb-6">
          {member.bio}
        </CardDescription>

        {/* Action buttons */}
        <div className="flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
          <button className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" aria-label="Email">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="p-2 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors" aria-label="Agendar">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
}