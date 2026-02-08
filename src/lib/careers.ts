import type { SceneConfig } from './types';

const modules = import.meta.glob<{ config: SceneConfig }>('../routes/careers/*/config.ts', {
	eager: true
});

export const careers = Object.entries(modules)
	.map(([path, mod]) => {
		const slug = path.split('/').at(-2);
		if (!slug) return undefined;
		return { slug, config: mod.config };
	})
	.filter((entry): entry is { slug: string; config: SceneConfig } => entry !== undefined)
	.sort((a, b) => a.config.title.localeCompare(b.config.title));
