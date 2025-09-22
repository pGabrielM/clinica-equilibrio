import Image from 'next/image';
import { TeamMember } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface TeamCardProps {
  member: TeamMember;
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
        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
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