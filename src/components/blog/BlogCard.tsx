import Image from 'next/image';
import { Post } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative">
        <Image
          src={post.image}
          alt={`Imagem do artigo: ${post.title}`}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">
          {post.excerpt}
        </CardDescription>
        <Button variant="outline">
          Leia mais
        </Button>
      </CardContent>
    </Card>
  );
}