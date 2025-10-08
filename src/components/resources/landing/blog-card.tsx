import Image from 'next/image';
import Link from 'next/link';
import type { IBlogPost } from '@/types/landings';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/commons/card';
import { Button } from '@/components/commons/button';
import { Calendar, User, Clock } from 'lucide-react';

interface BlogCardProps {
  post: IBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  // Format date to Brazilian format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group border-2 hover:border-primary/30">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-video relative overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={post.image}
            alt={`Imagem do artigo: ${post.title}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
              {post.category}
            </span>
          </div>
          {/* Read time */}
          <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{post.readTime} min</span>
            </div>
          </div>
        </div>
      </Link>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 leading-tight cursor-pointer">
            {post.title}
          </CardTitle>
        </Link>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="w-4 h-4" />
          <span>{post.author}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </CardDescription>
        <Link href={`/blog/${post.slug}`}>
          <Button
            variant="outline"
            className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn"
          >
            <span>Leia mais</span>
            <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}