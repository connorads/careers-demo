/** A single building in the career town scene */
export type Building = {
	readonly name: string;
	readonly emoji: string;
	readonly colour: string;
	readonly roofColour: string;
	readonly width: number;
	readonly height: number;
};

/** Time of day determines sun/moon and sky rendering */
export type TimeOfDay = 'day' | 'sunset' | 'night';

/** The walking character in the scene */
export type Character = {
	readonly name: string;
	readonly hatEmoji: string;
	readonly bodyColour: string;
	readonly toolEmoji: string;
	readonly legColour: string;
};

/** Environment settings for sky, grass, and time */
export type Environment = {
	readonly skyTop: string;
	readonly skyBottom: string;
	readonly grassColour: string;
	readonly timeOfDay: TimeOfDay;
};

/** Full configuration for a career scene */
export type SceneConfig = {
	readonly title: string;
	readonly icon: string;
	readonly tagline: string;
	readonly speechBubbles: readonly string[];
	readonly character: Character;
	readonly buildings: readonly Building[];
	readonly environment: Environment;
};
