# Clínica Equilíbrio

![CI](https://github.com/pGabrielM/clinica-equilibrio/actions/workflows/ci.yml/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

Landing page for a fictional psychology clinic, built as a portfolio piece: responsive layout,
entrance animations and a full translation into Portuguese, English and Spanish.

**Live:** [clinica-equilibrio-two.vercel.app](https://clinica-equilibrio-two.vercel.app)

## What's on the page

- Hero with animated entrance
- Four therapy services
- Team profiles
- Blog with statically generated articles
- Session booking form
- Contact form and clinic details

The blog is generated at build time (`generateStaticParams`), so articles are plain static HTML.

All names, photos and texts are fictional. The booking and contact forms validate input on the
client but do not send anything — there is no backend in this project.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · next-intl · Anime.js ·
Framer Motion · Radix UI · Lucide

## Running locally

Requirements: Node.js 22+.

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script                        | What it does                |
| ----------------------------- | --------------------------- |
| `npm run dev`                 | Development server          |
| `npm run build` / `npm start` | Production build and server |
| `npm run lint`                | ESLint                      |
| `npm run type-check`          | TypeScript, no emit         |
| `npm run format`              | Prettier                    |

## Structure

```
messages/                 translations (pt, en, es)
src/app/[locale]/         localized routes and layout
src/components/commons/   base UI components (button, card…)
src/components/resources/landing/   page sections
src/proxy.ts              locale negotiation (next-intl)
```

---

Built by [Gabriel Miranda](https://www.letinfo.dev) · MIT License
