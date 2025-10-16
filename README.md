# 🧠 Clínica Equilíbrio - Professional Psychology Clinic Landing Page

![Badges](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square) ![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square) ![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

> 🚀 **Fictional Portfolio Project** - A complete landing page for a psychology clinic, developed with Next.js, TypeScript, Tailwind CSS and professional animations with Anime.js.

---

## 📋 About the Project

**Clínica Equilíbrio** is a portfolio project demonstrating a complete and professional landing page for a psychology clinic. It features scalable architecture, modern componentization, professional animations, and multilingual support.

### 🎯 Objectives

- Showcase of modern web development skills
- Demonstration of React/Next.js architecture
- Best practices in TypeScript, TailwindCSS, and animations
- Standardized scalable structure with i18n
- Complete example of professional landing page for healthcare

### ✨ Key Features

- ✅ **Professional Design**: Modern interface with clean aesthetics
- ✅ **Responsive**: Works perfectly on all devices
- ✅ **Professional Animations**: All sections animated with Anime.js
- ✅ **Performance Optimized**: Next.js 15 with Turbopack
- ✅ **Strict TypeScript**: Complete type safety
- ✅ **Multilingual**: Full multilingual support (PT/EN/ES)
- ✅ **SEO Optimized**: Metadata and semantic structure
- ✅ **Accessible**: WCAG compliance with accessible components

---

## 🚀 Technologies Used

### Core

- Next.js 15.5.3 - React Framework with App Router
- React 19 - JavaScript Library
- TypeScript 5 - Typed Language

### Styling

- TailwindCSS 4 - Utility-first CSS
- Shadcn/UI - Accessible Components
- Lucide React - SVG Icons

### Animations

- Anime.js 4.2.0 - JavaScript Animations
- Framer Motion - React Animations

### Internationalization

- next-intl - Multilingual Support
- 80+ translation keys in 3 languages

### Quality

- ESLint - Code Linting
- Prettier - Code Formatting
- Radix UI - Accessibility Primitives

---

## 📦 Installation and Execution

### Prerequisites

- Node.js 18+
- npm or yarn

### Quick Start

```bash
git clone https://github.com/usuario/clinica-equilibrio.git
cd clinica-equilibrio
npm install
npm run dev
# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev       # Server with Turbopack
npm run build     # Production build
npm run start     # Production server
npm run lint      # Check code
npm run lint:fix  # Fix automatically
npm run format    # Format with Prettier
```

---

## 🏗️ Project Structure

```
clinica-equilibrio/
├── public/images/          # Optimized images
│   ├── blog/              # Blog post images
│   ├── hero/              # Hero section images
│   └── team/              # Team member photos
├── messages/              # Translations (PT/EN/ES)
├── src/
│   ├── app/
│   │   ├── [locale]/      # Routes by language
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── commons/       # Base components (Button, Card)
│   │   └── resources/
│   │       └── landing/   # Landing page components
│   ├── i18n/              # i18n configuration
│   ├── types/             # TypeScript interfaces
│   ├── utils/             # Data and helpers
│   └── lib/               # Anime.js, cn(), utilities
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 Landing Page Sections

| Section       | Description                                |
| ------------- | ------------------------------------------ |
| **Navbar**    | Fixed navigation with section indicators   |
| **Hero**      | Institutional presentation with animations |
| **Therapies** | 4 types of therapy offered                 |
| **Team**      | Psychologists profiles with hover effects  |
| **Blog**      | Mental health articles and insights        |
| **Booking**   | Session booking form                       |
| **Contact**   | Contact form and information               |
| **Footer**    | Links and clinic information               |

---

## 🌍 Internationalization (i18n)

Supports **3 languages** with automatic routing:

```
http://localhost:3000/pt   # Portuguese (default)
http://localhost:3000/en   # English
http://localhost:3000/es   # Spanish
```

### Usage in Components

```typescript
'use client';
import { useTranslations } from 'next-intl';

export function TherapyCard({ therapy }: Props) {
  const t = useTranslations();
  const title = t(therapy.titleKey);
  return <h3>{title}</h3>;
}
```

---

## 🎨 Color Palette

| Color           | Usage                   |
| --------------- | ----------------------- |
| Blue (#3b82f6)  | Primary, trust and calm |
| Amber (#f59e0b) | Warmth and welcoming    |
| Teal (#14b8a6)  | Balance and healing     |

---

## 📱 Responsiveness

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## ⚡ Performance

- Turbopack: ~10x faster builds
- Image Optimization: lazy loading
- Code Splitting: automatic
- SSG/ISR: as needed

---

## 🎯 Psychology Services

1. **Individual Psychotherapy** - Personalized treatment
2. **Couples Therapy** - Relationship strengthening
3. **Child Psychology** - Emotional development
4. **Group Therapy** - Collective sessions

---

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [next-intl](https://next-intl-docs.vercel.app/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Anime.js](https://animejs.com/documentation/)

---

## 👥 Author

**Developed by**: Gabriel M.  
**Type**: Fictional portfolio project  
**Year**: 2025
