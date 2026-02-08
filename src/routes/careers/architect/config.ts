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
		bodyColour: '#D4A017',
		toolEmoji: '📐',
		legColour: '#5D6D7E'
	},
	buildings: [
		{
			name: 'Design Studio',
			emoji: '✏️',
			colour: '#D5A253',
			roofColour: '#B8860B',
			width: 120,
			height: 150
		},
		{
			name: 'Construction Site',
			emoji: '🏗️',
			colour: '#CD6839',
			roofColour: '#A0522D',
			width: 130,
			height: 130
		},
		{
			name: 'City Hall',
			emoji: '🏛️',
			colour: '#8E9AAF',
			roofColour: '#6C757D',
			width: 140,
			height: 160
		}
	],
	environment: {
		skyTop: '#C84B31',
		skyBottom: '#ECAC5F',
		grassColour: '#4A7C59',
		timeOfDay: 'sunset'
	},
	info: {
		whatYouDo: [
			'Design homes, schools, offices, and public spaces',
			'Create blueprints, 3D models, and planning applications',
			'Work with structural engineers to keep buildings safe',
			'Visit construction sites to check builds match designs'
		],
		keySkills: ['Creativity', 'Maths', 'Problem-solving', 'Attention to detail', 'Drawing'],
		subjects: ['Maths', 'Art & Design', 'Physics', 'Design & Technology']
	}
};
