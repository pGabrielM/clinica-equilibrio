"use client"

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
      excerpt: 'A ansiedade é um transtorno cada vez mais comum. Conheça os principais sinais e quando buscar ajuda profissional.',
      date: '15 de Janeiro, 2024',
      readTime: '5 min de leitura',
      category: 'Ansiedade',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'A Importância da Terapia de Casal para Relacionamentos Saudáveis',
      excerpt: 'Descubra como a terapia de casal pode fortalecer vínculos e melhorar a comunicação entre parceiros.',
      date: '10 de Janeiro, 2024',
      readTime: '7 min de leitura',
      category: 'Relacionamentos',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Como Ajudar seu Filho a Lidar com as Emoções',
      excerpt: 'Dicas práticas para pais auxiliarem no desenvolvimento emocional saudável das crianças.',
      date: '5 de Janeiro, 2024',
      readTime: '6 min de leitura',
      category: 'Psicologia Infantil',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Mindfulness: Técnicas Simples para o Dia a Dia',
      excerpt: 'Aprenda exercícios de mindfulness que podem ser praticados facilmente no cotidiano para reduzir o estresse.',
      date: '1 de Janeiro, 2024',
      readTime: '4 min de leitura',
      category: 'Bem-estar',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Quando Buscar Ajuda Psicológica: Um Guia Completo',
      excerpt: 'Entenda os momentos e sinais que indicam a necessidade de acompanhamento psicológico profissional.',
      date: '28 de Dezembro, 2023',
      readTime: '8 min de leitura',
      category: 'Autoconhecimento',
      image: '/api/placeholder/400/250',
    },
    {
      title: 'Estratégias para Gerenciar o Estresse no Trabalho',
      excerpt: 'Técnicas eficazes para manter o equilíbrio mental e emocional mesmo em ambientes de trabalho desafiadores.',
      date: '25 de Dezembro, 2023',
      readTime: '6 min de leitura',
      category: 'Estresse',
      image: '/api/placeholder/400/250',
    },
  ]

  return (
    <section 
      id="blog" 
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="animate-on-scroll font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Conteúdo e <span className="text-primary">Orientação</span>
          </h2>
          <p 
            className="animate-on-scroll text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animation-delay-200"
          >
            Artigos e dicas sobre saúde mental, bem-estar emocional e crescimento pessoal, 
            escritos por nossa equipe de especialistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="animate-on-scroll hover:shadow-xl transition-all duration-300 hover:scale-105 group border-primary/10 overflow-hidden"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary/40" />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-foreground/60">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-foreground/60">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto"
                  >
                    Leia Mais
                    <ArrowRight className="w-3 h-3 ml-1" />
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
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
          >
            Ver Todos os Artigos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog