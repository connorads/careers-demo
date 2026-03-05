import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Pilot',
	icon: '✈️',
	tagline: 'Navigating the skies and connecting the world',
	speechBubbles: [
		'✈️ Cleared for take-off!',
		'☁️ Cruising at 35,000 feet!',
		'🌅 Sunrise from the cockpit — wow!',
		'📡 Roger that, air traffic control!',
		'🛬 Smooth landing — applause please!'
	],
	character: {
		name: 'Captain',
		hatEmoji: '🧢',
		bodyColour: '#1B2631',
		toolEmoji: '✈️',
		legColour: '#17202A'
	},
	buildings: [
		{
			name: 'Control Tower',
			emoji: '🗼',
			colour: '#D5D8DC',
			roofColour: '#ABB2B9',
			width: 100,
			height: 170
		},
		{
			name: 'Terminal',
			emoji: '🏢',
			colour: '#5DADE2',
			roofColour: '#2E86C1',
			width: 150,
			height: 140
		},
		{
			name: 'Hangar',
			emoji: '🛩️',
			colour: '#E59866',
			roofColour: '#CA6F1E',
			width: 130,
			height: 120
		}
	],
	environment: {
		skyTop: '#87CEEB',
		skyBottom: '#D4E6F1',
		grassColour: '#2ECC71',
		timeOfDay: 'day'
	},
	funFacts: [
		'Pilots fly over 700 million passengers a year worldwide!',
		'A Boeing 747 has over 6 million parts',
		'Pilots and co-pilots eat different meals in case one causes food poisoning'
	],
	info: {
		whatYouDo: [
			'Fly commercial, cargo, or private aircraft safely',
			'Navigate using instruments, radar, and weather data',
			'Communicate with air traffic control throughout the flight',
			'Perform pre-flight checks and manage emergencies'
		],
		keySkills: ['Quick decision-making', 'Spatial awareness', 'Communication', 'Calm under pressure', 'Teamwork'],
		subjects: ['Physics', 'Maths', 'Geography', 'English']
	}
};
