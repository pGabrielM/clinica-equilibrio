import Image from 'next/image';
import type { IBlogPost } from '@/types/landing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  post: IBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group border-2 hover:border-primary/30">
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
            Saúde Mental
          </span>
        </div>
        {/* Read time */}
        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-muted-foreground">5 min</span>
          </div>
        </div>
      </div>
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>5 de Janeiro, 2025</span>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </CardDescription>
        <Button
          variant="outline"
          className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn"
        >
          <span>Leia mais</span>
          <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </CardContent>
    </Card>
  );
}