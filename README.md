# cgmodeltek-web

Next.js (App Router) + TypeScript app configured for Vercel. Includes Tailwind CSS v4, Framer Motion, class-based dark mode with next-themes, absolute import aliases, and UI primitives modeled on shadcn/ui.

## Stack
- **Framework**: Next.js 16 (App Router, React Compiler enabled)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui-style primitives (navigation-menu, button, card, accordion, sheet, separator, badge)
- **Animations**: Framer Motion
- **Fonts**: Inter (default) + Outfit (headline) via `next/font/google`
- **Dark mode**: `next-themes` with the `class` strategy
- **ESLint + Prettier**: Flat config with `eslint-plugin-prettier/recommended`

## Project layout
- `src/app` — App Router pages and layout
- `src/components` — Layout, nav, and ui primitives
- `src/lib` — Utilities and theme provider
- `src/styles` — Project styles
- `public/reference` — Reference screenshots
- `docs/UX-NOTES.md` — UX notes referencing screenshots

## Install & develop (pnpm)
```bash
pnpm install
pnpm dev
```
- App: http://localhost:3000
- Turbopack dev server is enabled by default.

## Scripts
- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm start` — start production server
- `pnpm lint` — run ESLint

## Path aliases
Configured in `tsconfig.json`:
- `@/*` → `src/*`
- `@/components/*` → `src/components/*`
- `@/lib/*` → `src/lib/*`
- `@/styles/*` → `src/styles/*`

## Dark mode (class strategy)
- Provider: `src/lib/theme-provider.tsx`
- Toggle: `src/components/ThemeToggle.tsx`
- Class applied on `<html>`; tokens wired in `src/app/globals.css`.

## Fonts
Defined in `src/app/layout.tsx`:
- Inter as system sans (`--font-inter`)
- Outfit for headings (`--font-outfit`)

## Adding official shadcn/ui components
This project ships with lightweight UI primitives shaped like shadcn/ui. To switch to the canonical shadcn/ui codegen components once your terminal is available:
```bash
# inside cgmodeltek-web
pnpm dlx shadcn-ui@latest init -d
pnpm dlx shadcn-ui@latest add navigation-menu button card accordion sheet separator badge
```
You can then replace the primitives under `src/components/ui` with generated components as desired.

## Deploy on Vercel
- Repo root is the project root. Framework preset: Next.js.
- Build Command: `pnpm build`
- Install Command: `pnpm install`
- Output: `.next`
- Environment variables: none required by default.

## Create GitHub repo and push
If using GitHub CLI and SSH:
```bash
git init
git add -A
git commit -m "chore: scaffold cgmodeltek-web base app"
# create public repo named cgmodeltek and push
gh repo create cgmodeltek --public --source=. --remote=origin --push
```
Manual remote add alternative:
```bash
git init
git add -A
git commit -m "chore: scaffold cgmodeltek-web base app"
# create an empty public repo named cgmodeltek at https://github.com/new
# then set the correct URL below
git remote add origin git@github.com:<YOUR_USERNAME>/cgmodeltek.git
# or: https://github.com/<YOUR_USERNAME>/cgmodeltek.git

git branch -M main
git push -u origin main
```

## Notes
- Tailwind v4 is configured via `@import "tailwindcss"` in `globals.css` with inline tokens. The `@theme` at-rule is a Tailwind v4 feature.
- React Compiler is enabled in `next.config.ts`. Disable with `--no-turbo` for dev sessions if needed.
