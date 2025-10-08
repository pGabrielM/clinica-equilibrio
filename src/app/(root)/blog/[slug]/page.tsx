import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/helpers/blog-content';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';

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
      title: 'Post não encontrado',
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
    return date.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section with Background Image */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/20 z-10" />

        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-20">
          <Link href="/#blog">
            <Button variant="outline" className="mb-6 text-white hover:bg-white/20 w-fit border-white/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>

          <Badge className="w-fit mb-4 bg-primary/90 text-primary-foreground hover:bg-primary">
            {post.category}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime} min de leitura</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2">
              {post.content.introduction}
            </p>
          </div>

          <Separator className="my-12" />

          {/* Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, index) => (
              <section key={index} className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full" />
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Conclusion */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 my-12">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="text-3xl">💡</span>
              Conclusão
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Share Section */}
          <div className="flex items-center justify-between py-8 border-t border-b">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Gostou deste artigo?</p>
              <p className="font-semibold">Compartilhe com amigos!</p>
            </div>
            <Button variant="outline" size="lg">
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar
            </Button>
          </div>

          {/* Author Bio */}
          <div className="bg-muted/50 rounded-2xl p-8 my-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Escrito por</p>
                <h3 className="text-xl font-bold text-foreground">{post.author}</h3>
              </div>
            </div>
            <p className="text-muted-foreground">
              Profissional especializado em saúde mental, dedicado a ajudar pessoas a alcançarem equilíbrio emocional e bem-estar.
            </p>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Artigos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <Badge className="mb-2">{relatedPost.category}</Badge>
                      <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center text-white my-16">
            <h2 className="text-3xl font-bold mb-4">Precisa de Ajuda Profissional?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Nossa equipe de psicólogos e psiquiatras está pronta para ajudá-lo a alcançar equilíbrio emocional e bem-estar.
            </p>
            <Link href="/#booking">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform">
                Agende sua Consulta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
