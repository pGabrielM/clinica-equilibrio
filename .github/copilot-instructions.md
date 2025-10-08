# Next.js 15 Landing Page - Copilot Instructions

## Project Overview

Next.js 15 landing page with TypeScript, TailwindCSS, Shadcn/UI, and Anime.js animations. Mental health clinic landing page with services showcase, team profiles, blog system, and contact/booking forms.

## Critical Folder Structure (Biotima Standard)

```
src/
├── app/                        # Next.js App Router
│   ├── (root)/                 # Main application routes
│   └── blog/[slug]/            # Dynamic blog routes
├── api/                        # API client layer (if needed)
├── components/
│   ├── commons/                # Generic reusable UI components
│   └── resources/              # Domain-specific components
│       └── landing/            # Landing page components
├── types/                      # TypeScript interfaces (.d.ts)
│   └── landings.d.ts           # Landing domain types (PLURAL naming)
├── schemas/                    # Zod validation schemas
│   └── landing.schema.ts
├── lib/                        # Library configurations
├── hooks/                      # Custom React hooks by resource
├── enum/                       # Enums by resource
└── utils/                      # Helper functions by resource
```

## TypeScript Conventions (CRITICAL)

### Interface Rules

- **NEVER use `type`, ALWAYS use `interface`**
- **Prefix all interfaces with `I`**: `IUser`, `IPost`, `IService`
- **One `.d.ts` file per resource** in `types/` with **PLURAL naming**: `landings.d.ts`
- **≤2 props**: type inline in component
- **>2 props**: create interface in resource's types file
- **NEVER define interfaces inside pages/components**

## Validation Commands

```bash
npm run lint:fix      # ALWAYS use this for validation
npx tsc --noEmit      # Type checking only
npm run dev           # Development server
```

**NEVER run `npm run build` during development**

## Component Organization

- `components/commons/`: Shadcn/UI components (button, input, dialog)
- `components/resources/landing/`: Landing-specific (hero, navbar, footer, services, team, booking-form, blog-card)

## Animation Patterns (Anime.js)

### Timeline with Stagger

```typescript
anime
  .timeline()
  .add(element, { opacity: [0, 1], duration: 800 })
  .add(cards, { scale: [0.95, 1], delay: anime.stagger(120) }, "-=400");
```

## Import Path Examples

```typescript
import { Button } from "@/components/commons/button";
import { Hero } from "@/components/resources/landing/hero";
import { IService } from "@/types/landings";
import { services } from "@/utils/landing-helper";
import anime from "@/lib/anime";
```

## Key Files

- `src/utils/landing-helper.ts`: Central data (services, team, blog posts)
- `src/types/landings.d.ts`: All landing interfaces
- `src/components/commons/`: Shadcn/UI components
- `src/lib/anime.ts`: Animation wrapper

---

_Follow Biotima standards for consistency across all workspace projects._
