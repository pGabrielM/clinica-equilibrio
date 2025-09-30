import Image from 'next/image';
import { ITeamMember } from '@/types/landing';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/commons';
import { Badge } from '@/components/commons';

interface TeamCardProps {
  member: ITeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <Image
            src={member.image}
            alt={`Foto de ${member.name}`}
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
        <Badge variant="secondary" className="mt-2">
          {member.specialty}
        </Badge>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {member.bio}
        </CardDescription>
      </CardContent>
    </Card>
  );
}