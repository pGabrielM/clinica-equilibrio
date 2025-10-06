import Image from 'next/image';
import type { IBlogPost } from '@/types/landing.d.ts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons';
import { Button } from '@/components/commons';

interface BlogCardProps {
  post: IBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={post.image}
          alt={`Imagem do artigo: ${post.title}`}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-4">
          {post.excerpt}
        </CardDescription>
        <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors">
          Leia mais
        </Button>
      </CardContent>
    </Card>
  );
}