import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Chef',
	icon: '👨‍🍳',
	tagline: 'Turning fresh ingredients into unforgettable meals',
	speechBubbles: [
		'🔥 Flambé time!',
		'🧂 Season to perfection...',
		'🍝 Order up — table five!',
		'🍰 Wait till you taste this dessert!',
		'👃 Follow your nose!'
	],
	character: {
		name: 'Chef Marco',
		hatEmoji: '👨‍🍳',
		bodyColour: '#FDFEFE',
		toolEmoji: '🍳',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Restaurant',
			emoji: '🍽️',
			colour: '#C0392B',
			roofColour: '#922B21',
			width: 140,
			height: 160
		},
		{
			name: 'Market',
			emoji: '🥬',
			colour: '#27AE60',
			roofColour: '#1E8449',
			width: 110,
			height: 120
		},
		{
			name: 'Bakery',
			emoji: '🥐',
			colour: '#F0B27A',
			roofColour: '#E59866',
			width: 120,
			height: 140
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
			'Plan menus and create new recipes',
			'Prepare and cook food under time pressure',
			'Lead a kitchen team and manage supplies',
			'Ensure food safety and hygiene standards'
		],
		keySkills: ['Creativity', 'Time management', 'Teamwork', 'Attention to detail', 'Taste'],
		subjects: ['Food Technology', 'Business Studies', 'Chemistry', 'Art & Design']
	}
};
