import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Financial Analyst',
	icon: '💰',
	tagline: 'Making sense of money so businesses can thrive',
	speechBubbles: [
		'📊 The numbers are looking great!',
		'💹 Markets are up today!',
		'🧮 Let me crunch those figures...',
		'📈 Revenue grew 20% this quarter!',
		'💡 I see a smart investment here!'
	],
	character: {
		name: 'Finn',
		hatEmoji: '🎩',
		bodyColour: '#2C3E50',
		toolEmoji: '💼',
		legColour: '#1A252F'
	},
	buildings: [
		{
			name: 'Stock Exchange',
			emoji: '🏛️',
			colour: '#D4AC0D',
			roofColour: '#B7950B',
			width: 150,
			height: 160
		},
		{
			name: 'Bank HQ',
			emoji: '🏦',
			colour: '#2E86C1',
			roofColour: '#1B4F72',
			width: 130,
			height: 140
		},
		{
			name: 'Consulting Firm',
			emoji: '🏢',
			colour: '#7D8CA3',
			roofColour: '#5D6D7E',
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
		'The global stock market is worth over $100 trillion!',
		'Warren Buffett bought his first stock at age 11',
		'The word "budget" comes from the French word for leather bag'
	],
	info: {
		whatYouDo: [
			'Analyse company finances and spot trends',
			'Build models to forecast future profits',
			'Advise businesses on where to invest money',
			'Present findings to clients and senior leaders'
		],
		keySkills: ['Numeracy', 'Critical thinking', 'Attention to detail', 'Communication', 'Excel'],
		subjects: ['Maths', 'Economics', 'Business Studies', 'Statistics']
	}
};
