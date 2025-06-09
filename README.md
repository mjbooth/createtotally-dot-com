This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Setup Overview

This project is structured with a lightweight Markdown CMS approach:

- `/content/` — Markdown files used as the content source.
- `/lib/` — Utilities for parsing Markdown and transforming into HTML.
- `/app/` — App Router structure with dynamic routes.

### TypeScript & Aliases

- Full TypeScript support enabled (`.ts` / `.tsx`).
- `@/` alias configured to resolve from the project root (`baseUrl: "."`).

### Linting & Formatting

- ESLint set up with `next/core-web-vitals` and `plugin:prettier/recommended`.
- Prettier config in `.prettierrc` for consistent code style.
- Run `npm run lint` to check types, formatting, and common errors.
- Run `npm run format` to auto-fix formatting.

### Development Commands

```bash
npm run dev      # Start local development server
npm run lint     # Run lint checks
npm run format   # Auto-format codebase
```

### Additional Notes

- Auto-generate static pages from Markdown files under `/content/blog`.
- Frontmatter (title, description) in Markdown is used for SEO metadata.
- Clean and scalable for future CMS-like expansions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
