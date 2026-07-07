# NZ Solutions Next.js Starter

A responsive, multilingual Next.js starter for a telecom + digital engineering company website.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-ready component structure
- next-intl for language routing
- Jotai for lightweight UI state
- React Hook Form + Zod for contact forms

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main folders

- `src/app/[locale]` — localized routes
- `src/components` — reusable UI and page sections
- `src/constants` — services, navigation, theme, company info
- `src/messages` — translation files
- `src/store` — Jotai atoms
- `src/i18n` — next-intl routing and request config

## Tailwind CSS v4 note

This starter is configured for Tailwind CSS v4. The important files are:

- `postcss.config.mjs` uses `@tailwindcss/postcss`
- `src/app/globals.css` imports Tailwind with `@import "tailwindcss";`
- Theme tokens are defined in `@theme inline`

If you previously installed dependencies before this fix, delete `node_modules` and `package-lock.json`, then run `npm install` again.
