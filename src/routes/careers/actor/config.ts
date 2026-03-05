import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Actor',
	icon: '🎭',
	tagline: 'Bringing characters to life on stage and screen',
	speechBubbles: [
		'🎬 And… action!',
		'😭 Real tears every take!',
		'🎭 To be or not to be…',
		'📜 Learning lines all night!',
		'⭐ Standing ovation!'
	],
	character: {
		name: 'Star',
		hatEmoji: '🎩',
		bodyColour: '#C0392B',
		toolEmoji: '📜',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Theatre',
			emoji: '🎭',
			colour: '#922B21',
			roofColour: '#7B241C',
			width: 140,
			height: 160
		},
		{
			name: 'Film Studio',
			emoji: '🎬',
			colour: '#2E4053',
			roofColour: '#1C2833',
			width: 130,
			height: 140
		},
		{
			name: 'Rehearsal Hall',
			emoji: '💃',
			colour: '#D4AC0D',
			roofColour: '#B7950B',
			width: 110,
			height: 120
		}
	],
	environment: {
		skyTop: '#C84B31',
		skyBottom: '#ECAC5F',
		grassColour: '#4A7C59',
		timeOfDay: 'sunset'
	},
	funFacts: [
		'The word "actor" comes from the Greek word for "doer"',
		'Some actors rehearse for 6 months before a single performance',
		'Motion capture suits let actors become CGI creatures in films'
	],
	info: {
		whatYouDo: [
			'Perform characters in theatre, film, TV, or voice-over',
			'Rehearse scenes and learn scripts by heart',
			'Work with directors to shape a performance',
			'Audition for new roles and build a portfolio'
		],
		keySkills: ['Creativity', 'Empathy', 'Confidence', 'Memorisation', 'Teamwork'],
		subjects: ['Drama', 'English', 'Dance', 'Music']
	}
};
