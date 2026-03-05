import type { SceneConfig } from '$lib/types';

export const config: SceneConfig = {
	title: 'Musician',
	icon: '🎵',
	tagline: "Making the soundtrack to people's lives",
	speechBubbles: [
		'🎸 Sound check — one, two!',
		'🎤 This crowd is electric!',
		'🎹 Writing a new melody...',
		'🥁 Drop the beat!',
		'🎧 Mixing the final track!'
	],
	character: {
		name: 'Melody',
		hatEmoji: '🎩',
		bodyColour: '#2E86C1',
		toolEmoji: '🎸',
		legColour: '#1A1A2E'
	},
	buildings: [
		{
			name: 'Recording Studio',
			emoji: '🎙️',
			colour: '#2C3E50',
			roofColour: '#1B2631',
			width: 140,
			height: 150
		},
		{
			name: 'Concert Hall',
			emoji: '🎶',
			colour: '#8E44AD',
			roofColour: '#6C3483',
			width: 150,
			height: 170
		},
		{
			name: 'Music Shop',
			emoji: '🎸',
			colour: '#D4AC0D',
			roofColour: '#B7950B',
			width: 110,
			height: 120
		}
	],
	environment: {
		skyTop: '#0C0C1D',
		skyBottom: '#1A1A3E',
		grassColour: '#1E8449',
		timeOfDay: 'night'
	},
	info: {
		whatYouDo: [
			'Write, compose, and perform original music',
			'Record tracks in studios and produce albums',
			'Play live gigs, festivals, and concerts',
			'Collaborate with other artists and producers'
		],
		keySkills: ['Creativity', 'Discipline', 'Performance', 'Collaboration', 'Listening'],
		subjects: ['Music', 'English', 'Drama', 'Media Studies']
	}
};
