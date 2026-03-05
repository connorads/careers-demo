import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Doctor',
	icon: '🩺',
	tagline: 'Healing people and saving lives every day',
	speechBubbles: [
		'💊 Time for rounds!',
		'🫀 Heartbeat sounds strong!',
		'📋 Checking test results...',
		'😊 Another patient feeling better!',
		'🔬 Science saves lives!'
	],
	character: {
		name: 'Doc',
		hatEmoji: '⚕️',
		bodyColour: '#FFFFFF',
		toolEmoji: '🩺',
		legColour: '#2980B9'
	},
	buildings: [
		{
			name: 'Hospital',
			emoji: '🏥',
			colour: '#ECF0F1',
			roofColour: '#E74C3C',
			width: 140,
			height: 170
		},
		{
			name: 'Pharmacy',
			emoji: '💊',
			colour: '#27AE60',
			roofColour: '#1E8449',
			width: 100,
			height: 120
		},
		{
			name: 'Research Lab',
			emoji: '🔬',
			colour: '#8E44AD',
			roofColour: '#6C3483',
			width: 120,
			height: 140
		}
	],
	environment: {
		skyTop: '#87CEEB',
		skyBottom: '#B0E0E6',
		grassColour: '#2ECC71',
		timeOfDay: 'day'
	},
	funFacts: [
		'Your body has about 100,000 km of blood vessels!',
		'The heart beats around 100,000 times every single day',
		'It takes at least 10 years of training to become a hospital consultant'
	],
	info: {
		whatYouDo: [
			'Diagnose illnesses and prescribe treatments',
			'Examine patients and order medical tests',
			'Work in hospitals, GP surgeries, or specialist clinics',
			'Keep up with the latest medical research'
		],
		keySkills: ['Communication', 'Empathy', 'Science', 'Decision-making', 'Resilience'],
		subjects: ['Biology', 'Chemistry', 'Maths', 'English']
	}
};
