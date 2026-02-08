import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Architect',
	icon: '🏗️',
	tagline: 'Designing buildings that shape our cities',
	speechBubbles: [
		'📐 Measuring twice, cutting once!',
		'🏛️ Classical or modern?',
		'✏️ Sketching a new design...',
		'🧱 Strong foundations matter!',
		'🌆 Imagining the skyline of tomorrow!'
	],
	character: {
		name: 'Archie',
		hatEmoji: '⛑️',
		bodyColour: '#F39C12',
		toolEmoji: '📐',
		legColour: '#7F8C8D'
	},
	buildings: [
		{
			name: 'Design Studio',
			emoji: '✏️',
			colour: '#F1C40F',
			roofColour: '#D4AC0D',
			width: 120,
			height: 150
		},
		{
			name: 'Construction Site',
			emoji: '🏗️',
			colour: '#E67E22',
			roofColour: '#CA6F1E',
			width: 130,
			height: 130
		},
		{
			name: 'City Hall',
			emoji: '🏛️',
			colour: '#BDC3C7',
			roofColour: '#95A5A6',
			width: 140,
			height: 160
		}
	],
	environment: {
		skyTop: '#FF6B35',
		skyBottom: '#FFB347',
		grassColour: '#58D68D',
		timeOfDay: 'sunset'
	}
};
