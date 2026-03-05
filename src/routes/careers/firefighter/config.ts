import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Firefighter',
	icon: '🚒',
	tagline: 'Running towards danger to keep people safe',
	speechBubbles: [
		"🔥 Hose on — let's go!",
		"🪜 Ladder's up — checking the roof!",
		'🐱 Rescued a cat from a tree!',
		'🚨 Alarm! Time to suit up!',
		'💪 Teamwork saves lives!'
	],
	character: {
		name: 'Blaze',
		hatEmoji: '⛑️',
		bodyColour: '#E74C3C',
		toolEmoji: '🪓',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Fire Station',
			emoji: '🚒',
			colour: '#C0392B',
			roofColour: '#922B21',
			width: 140,
			height: 160
		},
		{
			name: 'Training Tower',
			emoji: '🏗️',
			colour: '#7F8C8D',
			roofColour: '#616A6B',
			width: 100,
			height: 170
		},
		{
			name: 'Community Centre',
			emoji: '🏠',
			colour: '#F39C12',
			roofColour: '#D4AC0D',
			width: 130,
			height: 130
		}
	],
	environment: {
		skyTop: '#D35400',
		skyBottom: '#F5B041',
		grassColour: '#4A7C59',
		timeOfDay: 'sunset'
	},
	funFacts: [
		'Firefighter gear weighs about 30 kg — like carrying a child!',
		'Dalmatians became fire dogs because they calmed the horses',
		'Modern fire engines carry over 1,800 litres of water'
	],
	info: {
		whatYouDo: [
			'Respond to fires, accidents, and emergencies',
			'Rescue people trapped in buildings or vehicles',
			'Educate the community about fire safety',
			'Maintain equipment and train to stay fit'
		],
		keySkills: ['Bravery', 'Fitness', 'Teamwork', 'Quick thinking', 'Communication'],
		subjects: ['PE', 'Science', 'Design & Technology', 'Maths']
	}
};
