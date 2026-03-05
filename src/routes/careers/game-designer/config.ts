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
