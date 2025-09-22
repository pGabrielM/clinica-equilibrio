# Clínica Equilíbrio

Uma landing page completa para uma clínica de psicologia fictícia, desenvolvida com Next.js, TypeScript e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização utilitária
- **Componentes UI Locais** - Simulando shadcn/ui

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos para rodar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd clinica-equilibrio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/           # Componentes base (Button, Input, etc.)
│   ├── nav/          # Navbar e MobileMenu
│   ├── hero/         # Seção hero
│   ├── services/     # Seção de serviços
│   ├── team/         # Seção da equipe
│   ├── blog/         # Preview do blog
│   ├── booking/      # Formulário de agendamento
│   ├── contact/      # Formulário e detalhes de contato
│   └── footer/       # Rodapé
├── data/             # Dados mock (serviços, equipe, posts)
└── lib/              # Utilitários e tipos
```

## 🎨 Design e Funcionalidades

- **Responsivo**: Layout adaptável para desktop, tablet e mobile
- **Acessível**: Uso de ARIA labels, estrutura semântica
- **Interativo**: Formulários funcionais com validação básica
- **Moderno**: Design clean com foco em acolhimento e confiança
- **SEO Otimizado**: Metadata adequada e estrutura semântica

## 📚 Bibliotecas Opcionais

Para funcionalidades extras, considere instalar:

```bash
npm install @shadcn/ui lucide-react framer-motion class-variance-authority
```

- **@shadcn/ui**: Componentes UI mais avançados
- **lucide-react**: Ícones vetoriais
- **framer-motion**: Animações
- **class-variance-authority**: Gerenciamento de variantes de classe

## 📝 Seções da Landing Page

1. **Navbar** - Navegação com menu mobile
2. **Hero** - Apresentação institucional
3. **Serviços** - Lista de terapias oferecidas
4. **Equipe** - Perfis dos psicólogos
5. **Blog** - Preview de artigos
6. **Agendamento** - Formulário de marcação de sessão
7. **Contato** - Formulário e informações de contato
8. **Footer** - Links e informações adicionais

## 🎯 Objetivo

Este projeto serve como portfólio para demonstrar habilidades em desenvolvimento web moderno, focando em:

- Arquitetura de componentes
- TypeScript avançado
- Design responsivo
- UX/UI para aplicações de saúde
- Boas práticas de desenvolvimento

## 📄 Licença

Este projeto é fictício e destinado apenas para fins educacionais e de portfólio.
