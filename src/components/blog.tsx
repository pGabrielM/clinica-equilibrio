'use client'

import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const blogPosts = [
    {
      title: '5 Sinais de Ansiedade que Você Não Deve Ignorar',
      excerpt:
        'A ansiedade é um transtorno cada vez mais comum. Conheça os principais sinais e quando buscar ajuda profissional.',
      date: '15 de Janeiro, 2024',
      readTime: '5 min de leitura',
      category: 'Ansiedade',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'A Importância da Terapia de Casal para Relacionamentos Saudáveis',
      excerpt:
        'Descubra como a terapia de casal pode fortalecer vínculos e melhorar a comunicação entre parceiros.',
      date: '10 de Janeiro, 2024',
      readTime: '7 min de leitura',
      category: 'Relacionamentos',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Como Ajudar seu Filho a Lidar com as Emoções',
      excerpt:
        'Dicas práticas para pais auxiliarem no desenvolvimento emocional saudável das crianças.',
      date: '5 de Janeiro, 2024',
      readTime: '6 min de leitura',
      category: 'Psicologia Infantil',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Mindfulness: Técnicas Simples para o Dia a Dia',
      excerpt:
        'Aprenda exercícios de mindfulness que podem ser praticados facilmente no cotidiano para reduzir o estresse.',
      date: '1 de Janeiro, 2024',
      readTime: '4 min de leitura',
      category: 'Bem-estar',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Quando Buscar Ajuda Psicológica: Um Guia Completo',
      excerpt:
        'Entenda os momentos e sinais que indicam a necessidade de acompanhamento psicológico profissional.',
      date: '28 de Dezembro, 2023',
      readTime: '8 min de leitura',
      category: 'Autoconhecimento',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Estratégias para Gerenciar o Estresse no Trabalho',
      excerpt:
        'Técnicas eficazes para manter o equilíbrio mental e emocional mesmo em ambientes de trabalho desafiadores.',
      date: '25 de Dezembro, 2023',
      readTime: '6 min de leitura',
      category: 'Estresse',
      image: '/api/placeholder/400/250',
    },
  ]

  return (
    <section id="blog" ref={sectionRef} className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="animate-on-scroll mb-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Conteúdo e <span className="text-primary">Orientação</span>
          </h2>
          <p className="animate-on-scroll text-foreground/80 animation-delay-200 mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            Artigos e dicas sobre saúde mental, bem-estar emocional e
            crescimento pessoal, escritos por nossa equipe de especialistas.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="animate-on-scroll border-primary/10 group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="from-primary/10 to-secondary/20 flex h-48 items-center justify-center bg-gradient-to-br">
                <BookOpen className="text-primary/40 h-16 w-16" />
              </div>

              <CardHeader className="pb-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="bg-primary/10 rounded-full px-2 py-1 text-xs text-primary">
                    {post.category}
                  </span>
                  <div className="text-foreground/60 flex items-center text-xs">
                    <Calendar className="mr-1 h-3 w-3" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-foreground/60 flex items-center text-xs">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:text-primary/80 hover:bg-primary/10 h-auto p-0 text-primary"
                  >
                    Leia Mais
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary px-8 py-4 text-primary hover:bg-primary hover:text-white"
          >
            Ver Todos os Artigos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog
