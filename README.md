# Luxe Detailing 303

Website for Luxe Detailing 303, built with Next.js.

This repository currently contains only the project foundation — no visual
design, branding, or business content has been added yet. See
[Project status](#project-status) below.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- ESLint (flat config, `eslint-config-next`)

## Getting started

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | Description                              |
| ---------------- | ----------------------------------------- |
| `npm run dev`    | Start the local development server        |
| `npm run build`  | Create a production build                  |
| `npm run start`  | Serve the production build                 |
| `npm run lint`   | Run ESLint                                 |

Type-checking is not a separate script; run it directly with:

```bash
npx tsc --noEmit
```

## Folder structure

```
src/
  app/          App Router routes, layouts, and global styles
  components/   Reusable UI building blocks (structural only for now)
  lib/          Framework-agnostic helper functions
  config/       Non-content, non-secret app configuration (e.g. site.ts)
public/         Static assets (empty until visual identity is defined)
```

## Project status

This is a bootstrap commit only. Implemented:

- Next.js + TypeScript + Tailwind + ESLint, configured and passing
  lint / typecheck / build
- Minimal placeholder homepage
- Base SEO metadata scaffolding (title template, description,
  `metadataBase`), with `robots: noindex` set until real content exists
- Empty `components`, `lib`, `config`, and `public` directories with one
  example file each, establishing the intended structure

Deliberately **not** implemented yet (by design, pending further
instructions):

- Visual design / brand identity (colors, typography choices, logo)
- Real page content, services, pricing, or copy
- Supabase or any other data layer
- Authentication
- Booking functionality
- AI integrations
- Analytics

## Environment variables

None are required to run the app locally. `NEXT_PUBLIC_SITE_URL` can
optionally be set to override the default `http://localhost:3000` used in
metadata (e.g. for a deployed environment).
