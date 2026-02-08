# Careers Town

SvelteKit 2 + Svelte 5 + Tailwind 4 + Cloudflare Workers

## Commands

```bash
bun run dev      # Dev server
bun run check    # TypeScript check
bun run lint     # Lint + format check
bun run test     # Unit + e2e tests
bun run deploy   # Build + deploy to Cloudflare
```

## Adding a New Career

1. Create `src/routes/careers/{slug}/config.ts` — export a `SceneConfig`
2. Create `src/routes/careers/{slug}/+page.svelte` — import config + render `CareerScene`

Copy an existing career folder as a template. See `src/lib/types.ts` for the full type.

The home page auto-discovers careers via `import.meta.glob` — no manual registry needed.

### Example config.ts

```typescript
import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Veterinarian',
	icon: '🐾',
	tagline: 'Caring for our furry friends',
	speechBubbles: ['🐕 Good boy!', '💉 Vaccination time!'],
	character: {
		name: 'Vet',
		hatEmoji: '🧢',
		bodyColour: '#27AE60',
		toolEmoji: '🩺',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Clinic',
			emoji: '🏥',
			colour: '#3498DB',
			roofColour: '#2980B9',
			width: 130,
			height: 150
		}
	],
	environment: {
		skyTop: '#87CEEB',
		skyBottom: '#B0E0E6',
		grassColour: '#2ECC71',
		timeOfDay: 'day'
	},
	info: {
		whatYouDo: ['Look after sick and injured animals', 'Perform surgery and prescribe medicine'],
		keySkills: ['Empathy', 'Science', 'Calm under pressure'],
		subjects: ['Biology', 'Chemistry', 'Maths']
	}
};
```

### Example +page.svelte

```svelte
<script lang="ts">
	import CareerScene from '$lib/components/CareerScene.svelte';
	import { config } from './config';
</script>

<CareerScene {config} />
```

## Architecture

- `src/lib/types.ts` — `SceneConfig` & `Building` types
- `src/lib/careers.ts` — Auto-discovery via `import.meta.glob`
- `src/lib/components/CareerScene.svelte` — Animated town scene component
- `src/routes/careers/*/config.ts` — Career data (the fun readable bit)
- `src/routes/careers/*/+page.svelte` — 5-line wrapper rendering `CareerScene`
- `src/routes/layout.css` — All `@keyframes` animations (global)
