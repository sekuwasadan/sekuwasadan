# Sekuwa House Flame

React + Vite single-page app configured for Cloudflare Pages.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The build output is written to `dist/`.

## Cloudflare Pages

Use these settings when creating the Pages project:

- Build command: `pnpm build`
- Build output directory: `dist`
- Node.js version: `22`

This repo is configured as a standard static Vite SPA for Cloudflare Pages, so it does not require the Cloudflare Workers Vite plugin or a Wrangler configuration file.
