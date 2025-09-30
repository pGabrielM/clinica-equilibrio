import { posts } from '@/utils/landing-helper';
import { BlogCard } from './blog-card';

export function BlogPreview() {
  return (
    <section id="blog" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artigos sobre saúde, bem-estar e dicas médicas para uma vida saudável.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}