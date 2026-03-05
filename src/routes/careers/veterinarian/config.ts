import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Veterinarian',
	icon: '🐾',
	tagline: 'Caring for our furry, feathery, and scaly friends',
	speechBubbles: [
		'🐕 Good boy! All better now!',
		'💉 Vaccination time!',
		'🐱 Purring means happy!',
		'🩺 Heartbeat sounds strong!',
		'🦜 Even parrots need check-ups!'
	],
	character: {
		name: 'Vet',
		hatEmoji: '🧢',
		bodyColour: '#27AE60',
		toolEmoji: '🩺',
		legColour: '#2C3E50'
	},
	buildings: [
		{
			name: 'Animal Clinic',
			emoji: '🏥',
			colour: '#3498DB',
			roofColour: '#2980B9',
			width: 140,
			height: 150
		},
		{
			name: 'Pet Shelter',
			emoji: '🐶',
			colour: '#E67E22',
			roofColour: '#CA6F1E',
			width: 120,
			height: 130
		},
		{
			name: 'Farmyard',
			emoji: '🐄',
			colour: '#8B4513',
			roofColour: '#6E370F',
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
	info: {
		whatYouDo: [
			'Diagnose and treat sick or injured animals',
			'Perform surgery and prescribe medicine',
			'Advise pet owners on nutrition and care',
			'Work with farm animals, pets, or exotic species'
		],
		keySkills: ['Empathy', 'Science', 'Calm under pressure', 'Observation', 'Communication'],
		subjects: ['Biology', 'Chemistry', 'Maths', 'Physics']
	}
};
