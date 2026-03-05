import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Army Soldier',
	icon: '🪖',
	tagline: 'Protecting, serving, and leading with courage',
	speechBubbles: [
		'🪖 Mission briefing at 0600!',
		'💪 Teamwork makes the dream work!',
		'🗺️ Navigation training today!',
		'🎖️ Earned a new badge!',
		'🤝 We never leave anyone behind!'
	],
	character: {
		name: 'Sarge',
		hatEmoji: '🪖',
		bodyColour: '#4A6741',
		toolEmoji: '🔭',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Barracks',
			emoji: '🏛️',
			colour: '#6B7B3A',
			roofColour: '#4E5C2A',
			width: 140,
			height: 150
		},
		{
			name: 'Training Ground',
			emoji: '🏋️',
			colour: '#8B7355',
			roofColour: '#6E5B43',
			width: 120,
			height: 120
		},
		{
			name: 'Command Centre',
			emoji: '📡',
			colour: '#5B6E4A',
			roofColour: '#3E4D33',
			width: 130,
			height: 160
		}
	],
	environment: {
		skyTop: '#87CEEB',
		skyBottom: '#B0E0E6',
		grassColour: '#2ECC71',
		timeOfDay: 'day'
	},
	funFacts: [
		'The British Army is over 360 years old — founded in 1660!',
		'Army dogs have their own ranks and can outrank their handlers',
		'Soldiers carry up to 45 kg of kit on a long march'
	],
	info: {
		whatYouDo: [
			'Protect people and keep the peace at home and abroad',
			'Train in fitness, navigation, and specialist skills',
			'Work as part of a close-knit team under pressure',
			'Operate vehicles, technology, and communications equipment',
			'Help communities during natural disasters and emergencies'
		],
		keySkills: ['Leadership', 'Discipline', 'Teamwork', 'Fitness', 'Problem-solving'],
		subjects: ['PE', 'Geography', 'Engineering', 'IT']
	}
};
