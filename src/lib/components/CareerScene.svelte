<script lang="ts">
	import { resolve } from '$app/paths';
	import type { SceneConfig } from '$lib/types';

	interface Props {
		config: SceneConfig;
	}

	let { config }: Props = $props();

	// ── Character walking state ──
	let characterX = $state(10);
	let walkingRight = $state(true);

	// ── Speech bubble cycling ──
	let bubbleIndex = $state(0);
	const currentBubble = $derived(config.speechBubbles[bubbleIndex]);

	// Walk between buildings
	$effect(() => {
		const interval = setInterval(() => {
			if (walkingRight) {
				characterX += 0.5;
				if (characterX >= 75) walkingRight = false;
			} else {
				characterX -= 0.5;
				if (characterX <= 10) walkingRight = true;
			}
		}, 50);
		return () => clearInterval(interval);
	});

	// Cycle speech bubbles
	$effect(() => {
		const interval = setInterval(() => {
			bubbleIndex = (bubbleIndex + 1) % config.speechBubbles.length;
		}, 3500);
		return () => clearInterval(interval);
	});

	/** Darken a hex colour by a percentage (0–1) */
	function darken(hex: string, amount: number): string {
		const num = parseInt(hex.replace('#', ''), 16);
		const r = Math.max(0, ((num >> 16) & 0xff) - Math.round(255 * amount));
		const g = Math.max(0, ((num >> 8) & 0xff) - Math.round(255 * amount));
		const b = Math.max(0, (num & 0xff) - Math.round(255 * amount));
		return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
	}

	const isNight = $derived(config.environment.timeOfDay === 'night');
	const isSunset = $derived(config.environment.timeOfDay === 'sunset');

	const clouds = [
		{ id: 'c1', top: '8%', size: '3rem', dur: '25s', delay: '0s' },
		{ id: 'c2', top: '14%', size: '2.5rem', dur: '30s', delay: '-8s' },
		{ id: 'c3', top: '20%', size: '2rem', dur: '35s', delay: '-15s' }
	];

	const birds = [
		{ id: 'b1', top: '12%', left: '20%', dur: '8s', delay: '0s' },
		{ id: 'b2', top: '18%', left: '60%', dur: '10s', delay: '-3s' }
	];

	const starIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const sparkleIndices = [0, 1, 2, 3, 4, 5];
	const treePositions = [5, 30, 55, 80, 95];
	const flowerPositions = [12, 25, 42, 65, 88];
</script>

<svelte:head>
	<title>{config.icon} {config.title} — Careers Town</title>
</svelte:head>

<div
	class="relative min-h-screen overflow-hidden font-[Fredoka]"
	style="background: linear-gradient(to bottom, {config.environment.skyTop}, {config.environment
		.skyBottom})"
>
	<!-- ── Banner ── -->
	<div class="relative z-20 py-4 text-center" style="animation: bannerSlideIn 0.8s ease-out both">
		<a
			href={resolve('/')}
			class="mb-2 inline-block rounded-full bg-white/20 px-4 py-1 text-sm text-white no-underline backdrop-blur-sm transition-colors hover:bg-white/30"
		>
			← Back to Careers Town
		</a>
		<h1 class="m-0 text-4xl text-white drop-shadow-lg md:text-5xl">
			<span style="animation: iconBounce 2s ease-in-out infinite; display: inline-block">
				{config.icon}
			</span>
			{config.title}
		</h1>
		<p class="mt-1 text-lg text-white/80">{config.tagline}</p>
	</div>

	<!-- ── Sun / Moon ── -->
	{#if isNight}
		<div
			class="absolute top-16 right-12 z-10 text-6xl"
			style="animation: sunPulse 4s ease-in-out infinite"
		>
			🌙
		</div>
		<!-- Stars -->
		{#each starIndices as i (i)}
			<div
				class="absolute z-10 text-sm"
				style="top: {8 + ((i * 7) % 30)}%; left: {5 + ((i * 13) % 90)}%; animation: sparkleAnim {2 +
					(i % 3)}s ease-in-out {i * 0.4}s infinite"
			>
				✨
			</div>
		{/each}
	{:else if isSunset}
		<div
			class="absolute top-20 right-16 z-10 text-7xl"
			style="animation: sunPulse 4s ease-in-out infinite; filter: hue-rotate(20deg)"
		>
			🌅
		</div>
	{:else}
		<div
			class="absolute top-16 right-12 z-10 text-7xl"
			style="animation: sunPulse 4s ease-in-out infinite"
		>
			☀️
		</div>
	{/if}

	<!-- ── Clouds ── -->
	{#each clouds as cloud (cloud.id)}
		<div
			class="absolute z-10"
			style="top: {cloud.top}; font-size: {cloud.size}; animation: cloudDrift {cloud.dur} linear {cloud.delay} infinite"
		>
			☁️
		</div>
	{/each}

	<!-- ── Birds ── -->
	{#each birds as bird (bird.id)}
		<div
			class="absolute z-10 text-xl"
			style="top: {bird.top}; left: {bird.left}; animation: birdFly {bird.dur} ease-in-out {bird.delay} infinite"
		>
			🐦
		</div>
	{/each}

	<!-- ── Sparkles ── -->
	{#each sparkleIndices as i (i)}
		<div
			class="absolute z-10"
			style="top: {30 + ((i * 11) % 40)}%; left: {10 +
				((i * 17) % 80)}%; animation: sparkleAnim {2 + (i % 2)}s ease-in-out {i * 0.7}s infinite"
		>
			✨
		</div>
	{/each}

	<!-- ── Ground ── -->
	<div
		class="absolute right-0 bottom-0 left-0 z-0"
		style="height: 35%; background: linear-gradient(to bottom, {config.environment
			.grassColour}, {darken(config.environment.grassColour, 0.1)})"
	></div>

	<!-- ── Path ── -->
	<div
		class="absolute bottom-[12%] left-0 z-[1] h-8 w-full rounded-sm opacity-40"
		style="background: {darken(config.environment.grassColour, 0.15)}"
	></div>

	<!-- ── Trees ── -->
	{#each treePositions as leftPct, i (leftPct)}
		<div
			class="absolute bottom-[28%] z-[2] origin-bottom text-4xl"
			style="left: {leftPct}%; animation: treeWave {3 + (i % 2)}s ease-in-out {i * 0.5}s infinite"
		>
			🌳
		</div>
	{/each}

	<!-- ── Flowers ── -->
	{#each flowerPositions as leftPct, i (leftPct)}
		<div
			class="absolute bottom-[26%] z-[2] origin-bottom text-xl"
			style="left: {leftPct}%; animation: flowerSway {2 + (i % 2)}s ease-in-out {i * 0.3}s infinite"
		>
			🌸
		</div>
	{/each}

	<!-- ── Buildings ── -->
	<div class="absolute right-0 bottom-[20%] left-0 z-[5] flex items-end justify-center gap-6 px-8">
		{#each config.buildings as building, i (building.name)}
			<div class="origin-bottom" style="animation: buildingBounceIn 0.6s ease-out {i * 0.15}s both">
				<!-- Roof -->
				<div
					class="mx-auto rounded-t-xl"
					style="width: {building.width}px; height: 20px; background: {building.roofColour}"
				></div>
				<!-- Body -->
				<div
					class="relative rounded-b-lg"
					style="width: {building.width}px; height: {building.height}px; background: {building.colour}"
				>
					<!-- Emoji sign -->
					<div class="pt-2 text-center text-3xl">{building.emoji}</div>
					<!-- Name -->
					<div
						class="mt-1 text-center text-xs font-bold text-white drop-shadow"
						style="text-shadow: 0 1px 2px rgba(0,0,0,0.3)"
					>
						{building.name}
					</div>
					<!-- Windows -->
					<div class="mt-2 flex justify-center gap-2">
						<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
						{#each { length: Math.min(3, Math.floor(building.width / 40)) } as _, w (w)}
							<div
								class="rounded-sm bg-yellow-200/70"
								style="width: 16px; height: 16px; animation: windowGlow 3s ease-in-out {w *
									0.5}s infinite"
							></div>
						{/each}
					</div>
					<!-- Door -->
					<div
						class="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-lg"
						style="width: 24px; height: 32px; background: {darken(building.colour, 0.2)}"
					></div>
				</div>
			</div>
		{/each}
	</div>

	<!-- ── Character ── -->
	<div
		class="absolute bottom-[13%] z-10"
		style="left: {characterX}%; transition: left 0.05s linear; animation: characterBob 1s ease-in-out infinite"
	>
		<div class="flex flex-col items-center" style="transform: scaleX({walkingRight ? 1 : -1})">
			<!-- Hat -->
			<div class="-mb-1 text-2xl">{config.character.hatEmoji}</div>
			<!-- Head -->
			<div
				class="relative flex h-9 w-9 items-center justify-center rounded-full bg-amber-200 shadow"
			>
				<!-- Eyes -->
				<div class="flex gap-2">
					<div
						class="h-1.5 w-1.5 rounded-full bg-gray-800"
						style="animation: blink 4s ease-in-out infinite"
					></div>
					<div
						class="h-1.5 w-1.5 rounded-full bg-gray-800"
						style="animation: blink 4s ease-in-out 0.1s infinite"
					></div>
				</div>
				<!-- Smile -->
				<div class="absolute bottom-2 h-1.5 w-3 rounded-b-full border-b-2 border-gray-700"></div>
			</div>
			<!-- Body -->
			<div class="-mt-1 flex items-start gap-0">
				<!-- Tool arm -->
				<div class="-mr-1 origin-top text-lg" style="animation: toolWave 1s ease-in-out infinite">
					{config.character.toolEmoji}
				</div>
				<!-- Torso -->
				<div
					class="h-10 w-8 rounded-t-sm rounded-b-lg"
					style="background: {config.character.bodyColour}"
				></div>
			</div>
			<!-- Legs -->
			<div class="-mt-0.5 flex gap-1">
				<div
					class="h-5 w-2.5 origin-top rounded-b"
					style="background: {config.character
						.legColour}; animation: legWalk 0.6s ease-in-out infinite"
				></div>
				<div
					class="h-5 w-2.5 origin-top rounded-b"
					style="background: {config.character
						.legColour}; animation: legWalk 0.6s ease-in-out 0.3s infinite"
				></div>
			</div>
		</div>

		<!-- Speech bubble -->
		<div
			class="absolute -top-16 left-1/2 z-20 -translate-x-1/2 rounded-2xl bg-white px-4 py-2 text-sm font-bold whitespace-nowrap shadow-lg"
			style="animation: bubbleFloat 3.5s ease-in-out infinite; transform-origin: bottom center"
		>
			{currentBubble}
			<!-- Bubble tail -->
			<div
				class="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-white"
			></div>
		</div>
	</div>
</div>
