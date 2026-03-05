import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Software Engineer',
	icon: '💻',
	tagline: 'Building the digital world, one line of code at a time',
	speechBubbles: [
		'💡 Just fixed a tricky bug!',
		'🚀 Deploying to production...',
		'☕ Coffee + code = magic',
		'🤖 Teaching computers to think!',
		'🎮 I get to build apps and games!'
	],
	character: {
		name: 'Dev',
		hatEmoji: '🎧',
		bodyColour: '#4A90D9',
		toolEmoji: '⌨️',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Tech Hub',
			emoji: '🖥️',
			colour: '#3498DB',
			roofColour: '#2980B9',
			width: 130,
			height: 160
		},
		{
			name: 'Coffee Shop',
			emoji: '☕',
			colour: '#8B6914',
			roofColour: '#6B4F12',
			width: 100,
			height: 120
		},
		{
			name: 'Server Room',
			emoji: '🗄️',
			colour: '#2C3E50',
			roofColour: '#1A252F',
			width: 120,
			height: 140
		}
	],
	environment: {
		skyTop: '#1a1a2e',
		skyBottom: '#16213e',
		grassColour: '#27ae60',
		timeOfDay: 'night'
	},
	funFacts: [
		'The first computer bug was an actual moth found in a machine in 1947!',
		'There are over 700 programming languages in the world',
		'The average app has about 50,000 lines of code'
	],
	info: {
		whatYouDo: [
			'Write code to build websites, apps, and games',
			'Solve problems and fix bugs in software',
			'Work in teams to plan and design new features',
			'Test software to make sure it works properly'
		],
		keySkills: ['Logical thinking', 'Problem-solving', 'Teamwork', 'Creativity', 'Maths'],
		subjects: ['Maths', 'Computer Science', 'Physics', 'Design & Technology']
	}
};
