# CLAUDE.md

## Project overview

Marketing website for CreateTOTALLY, a creative automation platform for Figma & Adobe teams. Built with Next.js 15 (App Router) using Chakra UI v3 for styling, with content sourced from Hygraph (headless GraphQL CMS). Deployed on Vercel as a standalone build.

## Architecture

- `app/` — Next.js App Router pages and API routes
  - `app/layout.tsx` — Root layout with providers (Chakra, Navigation, Background contexts), GTM, Termly CMP
  - `app/[category]/[slug]/` — Dynamic blog/content pages
  - `app/features/[slug]/` — Feature pages with `FeaturesTemplate`
  - `app/platform/[slug]/` — Platform pages with `PlatformTemplate`
  - `app/api/submit-form/` — Form submission API (proxies to Tray.io webhook)
  - `app/get-started/` — Lead capture / demo request page
  - `app/server-sitemap.xml/` — Dynamic sitemap route
- `src/components/` — Shared React components (Footer, MainMenu, StructuredData, UI primitives)
- `src/context/` — React contexts (NavigationContext, BackgroundContext)
- `src/data/` — Static data for features, platform pages, blog category metadata
- `src/types/` — TypeScript type definitions (feature, platform, hygraph)
- `src/utils/` — Helpers for canonical URLs, JSON-LD structured data, icons
- `lib/hygraph/` — GraphQL client and types for Hygraph CMS
- `theme/` — Chakra UI v3 theme: tokens, semantic tokens, recipes, slot recipes, keyframes, text styles
- `public/` — Static assets (logos, images, SVGs, Lottie animations)
- `__tests__/` — Jest unit tests
- `e2e/` — Playwright end-to-end tests

## Tech stack

- **Framework**: Next.js 15 (App Router, standalone output)
- **Language**: TypeScript (strict mode)
- **UI**: Chakra UI v3, Framer Motion, GSAP
- **CMS**: Hygraph (GraphQL via `graphql-request`)
- **Forms**: React Hook Form → API route → Tray.io webhook
- **Analytics**: Google Tag Manager (GTM-KPHRZB4), React GA4
- **Consent**: Termly CMP
- **Testing**: Jest + Testing Library (unit), Playwright (e2e), Lighthouse CI (performance)
- **Linting**: ESLint (next/core-web-vitals + Prettier plugin)
- **Formatting**: Prettier

> **Note:** This project uses Chakra UI **v3**, which has a completely different API from v2. Do not reference v2 documentation or examples. Key differences: theming uses `createSystem` with tokens, semantic tokens, recipes, and slot recipes (not `extendTheme`); component props and import paths have changed. Always refer to the [Chakra UI v3 docs](https://www.chakra-ui.com/docs/get-started/introduction).

## Development setup

```bash
npm install
```

Requires environment variable:
- `HYGRAPH_ENDPOINT` — Hygraph GraphQL API URL (stored in `.env`, gitignored)

## Common commands

```bash
npm run dev              # Start dev server (localhost:3000)
npm run build            # Production build + sitemap generation
npm run start            # Serve production build
npm run lint             # ESLint check
npm run format           # Prettier auto-format
npm test                 # Run Jest unit tests
npm run test:watch       # Jest in watch mode
npm run test:coverage    # Jest with coverage report
npm run test:e2e         # Playwright e2e tests
npm run test:e2e:headed  # Playwright e2e with browser UI
ANALYZE=true npm run build  # Build with bundle analyzer
```

## Code style & conventions

- Prettier: single quotes, semicolons, 2-space indent, 100 char print width, trailing commas
- `@/` path alias resolves from project root (e.g., `@/src/components/Footer`)
- Pages use Next.js App Router conventions (`page.tsx`, `layout.tsx`)
- Dynamic page templates live alongside their route (e.g., `app/platform/[slug]/PlatformTemplate.tsx`)
- Static page data is in `src/data/` (features, platform definitions)
- Chakra UI v3 theme system with tokens, semantic tokens, recipes, and slot recipes in `theme/`
- TypeScript strict mode enabled; no `allowJs`

## Key concepts

- **Hygraph**: Headless CMS providing blog/content via GraphQL. Client in `lib/hygraph/client.ts` requires `HYGRAPH_ENDPOINT` env var
- **Dynamic routes**: `[category]/[slug]` for CMS content, `features/[slug]` and `platform/[slug]` for static data-driven pages
- **Form submission flow**: React Hook Form → `/api/submit-form` → Tray.io webhook (with honeypot spam protection)
- **SEO**: Structured data (JSON-LD) in `src/utils/jsonld.ts`, canonical URLs in `src/utils/canonical.ts`, next-sitemap for sitemap generation
- **Caching strategy**: Configured in `next.config.js` headers — 1yr immutable for static assets, 1day browser + 30day CDN for images

## What to avoid

- Do not commit `.env` files — they contain the Hygraph endpoint and are gitignored
- `next.config.js` uses `require()` (CommonJS) — don't convert to ESM imports
- Webpack config uses memory caching (`type: "memory"`) intentionally to avoid filesystem cache validation errors
- The `tsconfig.json` includes a `.tsx.old` file and a `.js` file — these are intentional legacy inclusions
- Images are served from `eu-west-2.graphassets.com` (Hygraph CDN) — this domain must stay in the `images.domains` config
