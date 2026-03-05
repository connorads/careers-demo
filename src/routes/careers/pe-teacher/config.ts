import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'PE Teacher',
	icon: '🏃',
	tagline: 'Getting young people moving, competing, and believing in themselves',
	speechBubbles: [
		'⚽ Pass and move, pass and move!',
		'🏅 New personal best — well done!',
		'🤸 Stretch it out, no pulling muscles!',
		"📣 One more lap, you've got this!",
		'🏀 Teamwork makes the dream work!'
	],
	character: {
		name: 'Coach K',
		hatEmoji: '🧢',
		bodyColour: '#2980B9',
		toolEmoji: '🏈',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Sports Hall',
			emoji: '🏟️',
			colour: '#E67E22',
			roofColour: '#CA6F1E',
			width: 140,
			height: 160
		},
		{
			name: 'Swimming Pool',
			emoji: '🏊',
			colour: '#3498DB',
			roofColour: '#2471A3',
			width: 120,
			height: 130
		},
		{
			name: 'Changing Rooms',
			emoji: '🚿',
			colour: '#95A5A6',
			roofColour: '#7F8C8D',
			width: 110,
			height: 120
		}
	],
	environment: {
		skyTop: '#87CEEB',
		skyBottom: '#B0E0E6',
		grassColour: '#27AE60',
		timeOfDay: 'day'
	},
	funFacts: [
		"Just 15 minutes of exercise can boost a student's concentration for hours!",
		'PE teachers often coach 10+ different sports across a single school year',
		'The UK introduced compulsory PE in schools way back in 1944'
	],
	info: {
		whatYouDo: [
			'Plan and deliver lessons across a range of sports and fitness activities',
			'Coach school teams and prepare them for competitions',
			'Teach healthy lifestyle habits and sportsmanship',
			'Adapt activities so every student can take part',
			'Organise sports days, fixtures, and outdoor adventures'
		],
		keySkills: ['Motivation', 'Communication', 'Fitness', 'Adaptability', 'First Aid'],
		subjects: ['Physical Education', 'Biology', 'Psychology', 'Health & Social Care']
	}
};
