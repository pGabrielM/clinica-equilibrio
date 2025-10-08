import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/utils/blog-content";
import { Button } from "@/components/commons/button";
import { Badge } from "@/components/commons/badge";
import type { IBlogSection } from "@/types/landings";
import { Separator } from "@/components/commons/separator";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: `${post.title} | Clínica Equilíbrio`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        (p.category === post.category || p.tags.some((tag: string) => post.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <article className="from-background to-muted/20 min-h-screen bg-gradient-to-b">
      {/* Hero Section with Background Image */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        {/* Gradient Overlays */}
        <div className="to-background absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50" />
        <div className="from-primary/30 to-secondary/20 absolute inset-0 z-10 bg-gradient-to-r via-transparent" />

        <div className="relative z-20 container mx-auto flex h-full flex-col justify-end px-4 pb-16">
          <Link href="/#blog">
            <Button
              variant="outline"
              className="mb-6 w-fit border-white/30 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>

          <Badge className="bg-primary/90 text-primary-foreground hover:bg-primary mb-4 w-fit">
            {post.category}
          </Badge>

          <h1 className="mb-6 max-w-4xl text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime} min de leitura</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Introduction */}
          <div className="prose prose-lg mb-12 max-w-none">
            <p className="text-muted-foreground border-primary border-l-4 py-2 pl-6 text-xl leading-relaxed italic">
              {post.content.introduction}
            </p>
          </div>

          <Separator className="my-12" />

          {/* Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section: IBlogSection, index: number) => (
              <section key={index} className="scroll-mt-24">
                <h2 className="text-foreground mb-6 flex items-center gap-3 text-3xl font-bold">
                  <span className="bg-primary h-8 w-2 rounded-full" />
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.paragraphs.map((paragraph: string, pIndex: number) => (
                    <p key={pIndex} className="text-muted-foreground text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Conclusion */}
          <div className="bg-primary/5 border-primary/20 my-12 rounded-2xl border-2 p-8">
            <h2 className="text-foreground mb-4 flex items-center gap-2 text-2xl font-bold">
              <span className="text-3xl">💡</span>
              Conclusão
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Share Section */}
          <div className="flex items-center justify-between border-t border-b py-8">
            <div>
              <p className="text-muted-foreground mb-2 text-sm">Gostou deste artigo?</p>
              <p className="font-semibold">Compartilhe com amigos!</p>
            </div>
            <Button variant="outline" size="lg">
              <Share2 className="mr-2 h-5 w-5" />
              Compartilhar
            </Button>
          </div>

          {/* Author Bio */}
          <div className="bg-muted/50 my-12 rounded-2xl p-8">
            <div className="mb-4 flex items-center gap-4">
              <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
                <User className="text-primary h-8 w-8" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Escrito por</p>
                <h3 className="text-foreground text-xl font-bold">{post.author}</h3>
              </div>
            </div>
            <p className="text-muted-foreground">
              Profissional especializado em saúde mental, dedicado a ajudar pessoas a alcançarem
              equilíbrio emocional e bem-estar.
            </p>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-foreground mb-8 text-3xl font-bold">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <Badge className="mb-2">{relatedPost.category}</Badge>
                      <h3 className="group-hover:text-primary line-clamp-2 text-lg font-bold transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="from-primary to-primary/80 my-16 rounded-2xl bg-gradient-to-br p-12 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Precisa de Ajuda Profissional?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
              Nossa equipe de psicólogos e psiquiatras está pronta para ajudá-lo a alcançar
              equilíbrio emocional e bem-estar.
            </p>
            <Link href="/#booking">
              <Button
                size="lg"
                variant="secondary"
                className="transition-transform hover:scale-105"
              >
                Agende sua Consulta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
