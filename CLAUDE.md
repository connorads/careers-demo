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

### Creation Checklist

A good career config has:

- **5 speech bubbles** — varied, fun, and use relevant emoji
- **3 buildings** — different sizes/colours for visual variety
- **4+ whatYouDo items** — clear, teen-friendly language
- **5 keySkills** — mix of soft and hard skills
- **3–4 subjects** — real school subjects
- **3 funFacts** — surprising, memorable, ideally with numbers
- **Contrasting colours** — buildings should stand out against the sky/grass

### Colour guidance by timeOfDay

| `timeOfDay` | `skyTop`        | `skyBottom`     | `grassColour` | Notes                                   |
| ----------- | --------------- | --------------- | ------------- | --------------------------------------- |
| `day`       | `#87CEEB`-range | `#B0E0E6`-range | `#2ECC71`     | Bright blues, vivid greens              |
| `sunset`    | `#C84B31`-range | `#ECAC5F`-range | `#4A7C59`     | Warm oranges/reds, muted greens         |
| `night`     | `#0B0D17`-range | `#1A1A3E`-range | `#1E8449`     | Deep blues/purples, darker greens       |

Use building colours that contrast with the sky — light buildings on dark skies, warm buildings on cool skies.

### Example config.ts (day)

```typescript
import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Veterinarian',
	icon: '🐾',
	tagline: 'Caring for our furry, feathery, and scaly friends',
	speechBubbles: [
		'🐕 Good boy! All better now!',
		'💉 Vaccination time!',
		'🐱 Purring means happy!',
		'🩺 Heartbeat sounds strong!',
		'🦜 Even parrots need check-ups!'
	],
	character: {
		name: 'Vet',
		hatEmoji: '🧢',
		bodyColour: '#27AE60',
		toolEmoji: '🩺',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Animal Clinic',
			emoji: '🏥',
			colour: '#3498DB',
			roofColour: '#2980B9',
			width: 140,
			height: 150
		},
		{
			name: 'Pet Shelter',
			emoji: '🐶',
			colour: '#E67E22',
			roofColour: '#CA6F1E',
			width: 120,
			height: 130
		},
		{
			name: 'Farmyard',
			emoji: '🐄',
			colour: '#8B4513',
			roofColour: '#6E370F',
			width: 110,
			height: 120
		}
	],
	environment: {
		skyTop: '#87CEEB',
		skyBottom: '#B0E0E6',
		grassColour: '#2ECC71',
		timeOfDay: 'day'
	},
	funFacts: [
		'Dogs can smell diseases like cancer and diabetes!',
		'A cat has 230 bones — humans only have 206',
		'Vets treat everything from hamsters to elephants'
	],
	info: {
		whatYouDo: [
			'Diagnose and treat sick or injured animals',
			'Perform surgery and prescribe medicine',
			'Advise pet owners on nutrition and care',
			'Work with farm animals, pets, or exotic species'
		],
		keySkills: ['Empathy', 'Science', 'Calm under pressure', 'Observation', 'Communication'],
		subjects: ['Biology', 'Chemistry', 'Maths', 'Physics']
	}
};
```

### Example config.ts (night)

```typescript
import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Game Designer',
	icon: '🎮',
	tagline: 'Creating worlds that millions play in',
	speechBubbles: [
		'🕹️ Playtesting the new level!',
		'🎨 Tweaking the colour palette...',
		'🐛 Found a bug — or is it a feature?',
		'💡 What if the dragon could fly?',
		'⭐ Five-star review incoming!'
	],
	character: {
		name: 'Pixel',
		hatEmoji: '🎧',
		bodyColour: '#8E44AD',
		toolEmoji: '🕹️',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Game Studio',
			emoji: '🖥️',
			colour: '#6C3483',
			roofColour: '#512E5F',
			width: 140,
			height: 160
		},
		{
			name: 'Motion Capture',
			emoji: '🤸',
			colour: '#2E4053',
			roofColour: '#1C2833',
			width: 110,
			height: 130
		},
		{
			name: 'Arcade',
			emoji: '🕹️',
			colour: '#E74C3C',
			roofColour: '#C0392B',
			width: 120,
			height: 140
		}
	],
	environment: {
		skyTop: '#0F0C29',
		skyBottom: '#302B63',
		grassColour: '#1E8449',
		timeOfDay: 'night'
	},
	funFacts: [
		'Minecraft was created by one person in just 6 days!',
		'The gaming industry is bigger than films and music combined',
		'The average game takes 3–5 years to develop'
	],
	info: {
		whatYouDo: [
			'Design characters, levels, and game mechanics',
			'Write stories and dialogue for game worlds',
			'Prototype and playtest to make games fun',
			'Work with artists, programmers, and sound designers'
		],
		keySkills: ['Creativity', 'Problem-solving', 'Storytelling', 'Teamwork', 'Coding'],
		subjects: ['Computer Science', 'Art & Design', 'Maths', 'English']
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
- `src/routes/+page.svelte` — Home page with featured career, visited tracker, card grid
- `src/routes/careers/*/config.ts` — Career data (the fun readable bit)
- `src/routes/careers/*/+page.svelte` — 5-line wrapper rendering `CareerScene`
- `src/routes/layout.css` — All `@keyframes` animations (global)

## Demo Workflow

Teenagers explore existing careers, then describe a new one to the AI. The AI creates the two files (`config.ts` + `+page.svelte`), the dev server hot-reloads, and the new career appears on the home page instantly.
