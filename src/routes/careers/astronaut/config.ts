import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Astronaut',
	icon: '🚀',
	tagline: 'Exploring the final frontier',
	speechBubbles: [
		'🌍 Earth looks tiny from up here!',
		'🛸 Running experiments in zero-G...',
		'⭐ One small step...',
		'🔭 Is that a new star?',
		'🧑‍🚀 Houston, we are GO!'
	],
	character: {
		name: 'Astro',
		hatEmoji: '🪖',
		bodyColour: '#ECF0F1',
		toolEmoji: '🔭',
		legColour: '#BDC3C7'
	},
	buildings: [
		{
			name: 'Launch Pad',
			emoji: '🚀',
			colour: '#7F8C8D',
			roofColour: '#616A6B',
			width: 130,
			height: 170
		},
		{
			name: 'Mission Control',
			emoji: '📡',
			colour: '#2C3E50',
			roofColour: '#1B2631',
			width: 140,
			height: 140
		},
		{
			name: 'Training Centre',
			emoji: '🏋️',
			colour: '#1ABC9C',
			roofColour: '#148F77',
			width: 120,
			height: 130
		}
	],
	environment: {
		skyTop: '#0B0D17',
		skyBottom: '#1B1F3B',
		grassColour: '#1E8449',
		timeOfDay: 'night'
	},
	funFacts: [
		'Astronauts grow up to 5 cm taller in space!',
		'A spacesuit costs about £10 million to make',
		'The ISS travels at 28,000 km/h — that is 16 sunrises a day'
	],
	info: {
		whatYouDo: [
			'Travel to space aboard rockets and spacecraft',
			'Conduct scientific experiments in orbit',
			'Maintain and repair the International Space Station',
			'Train for years in fitness, science, and survival skills'
		],
		keySkills: ['Fitness', 'Science', 'Teamwork', 'Calm under pressure', 'Problem-solving'],
		subjects: ['Physics', 'Maths', 'Engineering', 'Biology']
	}
};
