# Clínica Equilíbrio

Uma landing page completa para uma clínica de psicologia, desenvolvida com Next.js, TypeScript, Tailwind CSS e animações profissionais com Anime.js.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização utilitária
- **Anime.js** - Animações suaves e profissionais
- **Lucide React** - Ícones modernos
- **Componentes UI** - Design System personalizado

## ✨ Funcionalidades

- ✅ **Header Fixo** - Navegação sempre acessível com scroll suave
- ✅ **Indicadores de Seção Ativa** - Mostra em qual seção o usuário está
- ✅ **Animações Profissionais** - Todas as seções animadas com Anime.js
- ✅ **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- ✅ **Tema de Psicologia** - Conteúdo adaptado para clínica psicológica
- ✅ **Interações Suaves** - Hover effects e transições elegantes

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
- `npm run lint:fix` - Corrige problemas de lint automaticamente

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx       # Layout principal com navbar fixa
│   ├── page.tsx         # Página principal com animações
│   └── globals.css      # Estilos globais
├── components/
│   ├── commons/         # Componentes reutilizáveis (Button, Input, Card)
│   └── resources/
│       └── landing/     # Componentes da landing page
│           ├── navbar.tsx         # Header fixo com indicadores
│           ├── hero.tsx           # Hero com animações
│           ├── services.tsx       # Serviços com scroll animations
│           ├── team.tsx           # Equipe com animações
│           ├── blog-preview.tsx   # Blog com animações
│           ├── booking-form.tsx   # Formulário de agendamento
│           ├── contact-form.tsx   # Formulário de contato
│           └── ...
├── data/
│   ├── services.ts      # Dados dos serviços psicológicos
│   ├── team.ts          # Dados da equipe de psicólogos
│   └── posts.ts         # Dados dos artigos do blog
└── lib/
    ├── anime.ts         # Wrapper do Anime.js
    ├── cn.ts            # Utilitário de classes CSS
    └── types.ts         # Tipos TypeScript

```

## 🎨 Design e Funcionalidades

### Navegação

- **Header Fixo**: Permanece visível durante o scroll
- **Scroll Suave**: Animação suave ao clicar nos links de navegação
- **Seção Ativa**: Indica visualmente em qual seção o usuário está
- **Menu Mobile**: Menu responsivo para dispositivos móveis

### Animações

- **Hero Section**: Fade-in sequencial dos elementos
- **Services**: Animação ao entrar no viewport
- **Team**: Scale e fade com stagger effect
- **Blog**: Slide-in horizontal dos cards
- **Booking & Contact**: Animações suaves dos formulários

### Interatividade

- **Hover Effects**: Elevação e escala dos cards
- **Botões Animados**: Feedback visual nas interações
- **Formulários Validados**: Validação básica dos campos
- **Feedback Visual**: Confirmação de envio de formulários

## 🧠 Serviços de Psicologia

1. **Psicoterapia Individual** - Atendimento personalizado
2. **Terapia de Casal** - Fortalecimento de relacionamentos
3. **Psicologia Infantil** - Desenvolvimento emocional infantil
4. **Terapia em Grupo** - Sessões coletivas

## 📚 Dependências Principais

```json
{
  "animejs": "^4.2.0",
  "@types/animejs": "^3.1.x",
  "lucide-react": "^0.544.0",
  "next": "15.5.3",
  "react": "19.1.0",
  "tailwindcss": "^4"
}
```

## 📝 Seções da Landing Page

1. **Navbar** - Navegação fixa com indicadores de seção
2. **Hero** - Apresentação institucional animada
3. **Serviços** - Serviços psicológicos com animações
4. **Equipe** - Perfis dos psicólogos com hover effects
5. **Blog** - Artigos sobre saúde mental
6. **Agendamento** - Formulário de marcação de sessão
7. **Contato** - Formulário e informações de contato
8. **Footer** - Links e informações adicionais

## 🎯 Objetivo

Este projeto demonstra habilidades em:

- Arquitetura de componentes React moderna
- TypeScript avançado com tipagem forte
- Animações profissionais com Anime.js
- Design responsivo e acessível
- UX/UI para aplicações de saúde mental
- Navegação otimizada e intuitiva
- Boas práticas de desenvolvimento web

## � Próximas Melhorias

- [ ] Integração com backend real
- [ ] Sistema de autenticação
- [ ] Painel administrativo
- [ ] Agendamento online integrado
- [ ] Chat em tempo real
- [ ] Blog completo com CMS

## 📄 Licença

Este projeto é destinado para fins educacionais e de portfólio.
