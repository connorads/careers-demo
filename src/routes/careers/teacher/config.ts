import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Teacher',
	icon: '📚',
	tagline: 'Inspiring the next generation of thinkers',
	speechBubbles: [
		'📖 Who can answer this one?',
		'⭐ Great work, everyone!',
		'🎨 Let your creativity flow!',
		'🧪 Time for a science experiment!',
		'🌟 Every student can shine!'
	],
	character: {
		name: 'Ms Taylor',
		hatEmoji: '🍎',
		bodyColour: '#E74C3C',
		toolEmoji: '📖',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'School',
			emoji: '🏫',
			colour: '#E74C3C',
			roofColour: '#C0392B',
			width: 140,
			height: 160
		},
		{
			name: 'Library',
			emoji: '📚',
			colour: '#8E44AD',
			roofColour: '#6C3483',
			width: 110,
			height: 130
		},
		{
			name: 'Science Lab',
			emoji: '🧪',
			colour: '#1ABC9C',
			roofColour: '#148F77',
			width: 120,
			height: 140
		}
	],
	environment: {
		skyTop: '#5DADE2',
		skyBottom: '#AED6F1',
		grassColour: '#2ECC71',
		timeOfDay: 'day'
	},
	info: {
		whatYouDo: [
			'Plan and deliver lessons for primary or secondary pupils',
			'Mark work, give feedback, and track progress',
			'Support students with different learning needs',
			'Run clubs, trips, and extracurricular activities'
		],
		keySkills: ['Communication', 'Patience', 'Organisation', 'Creativity', 'Leadership'],
		subjects: ['English', 'Maths', 'Any subject you love', 'Psychology']
	}
};
