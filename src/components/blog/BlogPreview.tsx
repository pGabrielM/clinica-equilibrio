import { posts } from '@/data/posts';
import { BlogCard } from './BlogCard';

export function BlogPreview() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Artigos sobre saúde mental, dicas de bem-estar e insights sobre psicologia.
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