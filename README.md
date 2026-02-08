# Careers Town

An interactive educational app where young people can explore different careers through animated town scenes — and watch AI and coding in action as new careers are created live.

Built with SvelteKit, Svelte 5, Tailwind CSS 4, and deployed to Cloudflare Workers.

## Getting started

```bash
bun install
bun run dev
```

## Adding a new career

Create two files in `src/routes/careers/{slug}/`:

1. `config.ts` — the career data (buildings, character, colours, speech bubbles)
2. `+page.svelte` — a short wrapper that renders the scene

Copy an existing career folder as a template. The home page auto-discovers new careers — no registry to update.

See [CLAUDE.md](./CLAUDE.md) for the full type reference and example.

## TODO

- [x] Fix architect career page — sunset sky/building colours
- [x] Add info panels with what you do, key skills, and useful subjects
- [ ] More seed careers (e.g. veterinarian, musician, chef, scientist)
- [ ] Responsive layout improvements for mobile/tablet
- [ ] Accessibility — keyboard navigation, screen reader labels, reduced motion support
- [ ] Deploy to production on Cloudflare

## Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `bun run dev`    | Start dev server             |
| `bun run build`  | Production build             |
| `bun run check`  | TypeScript check             |
| `bun run lint`   | Lint + format check          |
| `bun run test`   | Unit + e2e tests             |
| `bun run deploy` | Build + deploy to Cloudflare |
