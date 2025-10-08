import Image from "next/image";
import Link from "next/link";
import type { IBlogPost } from "@/types/landings";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/commons/card";
import { Button } from "@/components/commons/button";
import { Calendar, User, Clock } from "lucide-react";

interface BlogCardProps {
  post: IBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  // Format date to Brazilian format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Card className="group hover:border-primary/30 overflow-hidden border-2 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      <Link href={`/blog/${post.slug}`}>
        <div className="bg-muted relative aspect-video overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Image
            src={post.image}
            alt={`Imagem do artigo: ${post.title}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold">
              {post.category}
            </span>
          </div>
          {/* Read time */}
          <div className="absolute right-4 bottom-4 z-20 opacity-0 transition-opacity group-hover:opacity-100">
            <div className="bg-background/90 flex items-center gap-2 rounded-full px-3 py-1 backdrop-blur-sm">
              <Clock className="text-muted-foreground h-4 w-4" />
              <span className="text-muted-foreground text-xs">{post.readTime} min</span>
            </div>
          </div>
        </div>
      </Link>
      <CardHeader className="space-y-3">
        <div className="text-muted-foreground flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="group-hover:text-primary line-clamp-2 cursor-pointer text-xl leading-tight transition-colors">
            {post.title}
          </CardTitle>
        </Link>
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-6 line-clamp-3 text-base leading-relaxed">
          {post.excerpt}
        </CardDescription>
        <Link href={`/blog/${post.slug}`}>
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground hover:border-primary group/btn w-full transition-all"
          >
            <span>Leia mais</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
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
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
