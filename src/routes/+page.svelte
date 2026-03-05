<script lang="ts">
	import { browser } from '$app/environment';
	import { careers } from '$lib/careers';

	// ── Career of the day (date-seeded) ──
	const featuredIndex = new Date().getDate() % careers.length;
	const featured = careers.length > 0 ? careers[featuredIndex] : null;

	// ── Visited careers tracker ──
	const STORAGE_KEY = 'careers-town-visited';

	function getVisited(): Set<string> {
		if (!browser) return new Set();
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return new Set();
			const parsed: unknown = JSON.parse(raw);
			if (!Array.isArray(parsed)) return new Set();
			return new Set(parsed.filter((v): v is string => typeof v === 'string'));
		} catch {
			return new Set();
		}
	}

	let visited = $state(getVisited());

	function markVisited(slug: string) {
		visited.add(slug);
		if (browser) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify([...visited]));
		}
	}
</script>

<svelte:head>
	<title>Careers Town</title>
</svelte:head>

<div
	class="relative min-h-screen overflow-hidden font-[Fredoka]"
	style="background: linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 50%, #7EC850 65%, #5DAE3B)"
>
	<!-- Sun -->
	<div class="pointer-events-none absolute" aria-hidden="true" style="top: 8%; left: 75%;">
		<div
			class="rounded-full"
			style="
				width: 80px;
				height: 80px;
				background: radial-gradient(circle, #FFF9C4 0%, #FFEE58 40%, #FFD600 100%);
				box-shadow: 0 0 60px 30px rgba(255, 238, 88, 0.4), 0 0 120px 60px rgba(255, 214, 0, 0.2);
				animation: sunPulse 4s ease-in-out infinite;
			"
		></div>
	</div>

	<!-- Clouds (sunrise tinted) -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		{#each Array(5) as _, i}
			{@const top = 8 + (i * 11) % 25}
			{@const delay = i * 6}
			{@const duration = 25 + (i % 3) * 10}
			{@const scale = 0.7 + (i % 3) * 0.3}
			{@const cloudColours = ['#FFFFFF', '#F5F5F5', '#FAFAFA', '#FFFFFF', '#F0F0F0']}
			<div
				class="absolute"
				style="
					top: {top}%;
					opacity: 0.85;
					animation: cloudDrift {duration}s linear {delay}s infinite;
					transform: scale({scale});
				"
			>
				<div class="relative" style="width: 120px; height: 40px;">
					<div class="absolute rounded-full" style="width: 60px; height: 40px; left: 0; top: 10px; background: {cloudColours[i]};"></div>
					<div class="absolute rounded-full" style="width: 80px; height: 50px; left: 20px; top: 0; background: {cloudColours[i]};"></div>
					<div class="absolute rounded-full" style="width: 60px; height: 40px; left: 60px; top: 10px; background: {cloudColours[i]};"></div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Banner -->
	<div class="py-6 text-center sm:py-10" style="animation: bannerSlideIn 0.8s ease-out both">
		<h1 class="mb-2 text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
			<span style="animation: iconBounce 2s ease-in-out infinite; display: inline-block"> 🏘️ </span>
			Careers Town
		</h1>
		<p class="text-lg text-white/80">Explore exciting careers — click a card to visit!</p>

		<!-- Progress indicator -->
		{#if careers.length > 0}
			<p class="mt-2 text-sm text-white/60">
				You've explored {visited.size} of {careers.length} careers!
			</p>
		{/if}
	</div>

	{#if careers.length > 0}
		<!-- Featured career of the day -->
		{#if featured}
			<div
				class="mx-auto mb-6 max-w-4xl px-4 sm:px-6"
				style="animation: bannerSlideIn 1s ease-out 0.3s both"
			>
				<!-- eslint-disable svelte/no-navigation-without-resolve -- dynamic route from auto-discovery -->
				<a
					href="/careers/{featured.slug}"
					class="group relative block overflow-hidden rounded-2xl bg-white p-4 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
					style="text-decoration: none; color: inherit"
					onclick={() => markVisited(featured.slug)}
				>
					<div
						class="absolute top-3 right-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900 shadow"
					>
						⭐ Career of the Day
					</div>
					<div
						class="mb-2 text-5xl transition-transform duration-300 group-hover:scale-110 sm:text-7xl"
						style="animation: iconBounce 3s ease-in-out infinite"
					>
						{featured.config.icon}
					</div>
					<h2 class="mb-1 text-2xl font-bold text-gray-800">{featured.config.title}</h2>
					<p class="text-sm text-gray-500">{featured.config.tagline}</p>
					{#if visited.has(featured.slug)}
						<span class="mt-2 inline-block text-green-500">✓ Visited</span>
					{/if}
				</a>
				<!-- eslint-enable svelte/no-navigation-without-resolve -->
			</div>
		{/if}

		<!-- Career cards grid -->
		<div
			class="mx-auto grid max-w-4xl grid-cols-1 gap-4 px-4 pb-12 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-3"
		>
			<!-- eslint-disable svelte/no-navigation-without-resolve -- dynamic route from auto-discovery -->
			{#each careers as { slug, config } (slug)}
				<a
					href="/careers/{slug}"
					class="group relative block transform rounded-2xl bg-white/90 p-4 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-6"
					style="text-decoration: none; color: inherit"
					onclick={() => markVisited(slug)}
				>
					{#if visited.has(slug)}
						<span class="absolute top-2 right-2 text-green-500">✓</span>
					{/if}
					<div
						class="mb-3 text-6xl transition-transform duration-300 group-hover:scale-110"
						style="animation: iconBounce 3s ease-in-out infinite"
					>
						{config.icon}
					</div>
					<h2 class="mb-1 text-xl font-bold text-gray-800">{config.title}</h2>
					<p class="text-sm text-gray-500">{config.tagline}</p>
				</a>
			{/each}
			<!-- eslint-enable svelte/no-navigation-without-resolve -->
		</div>
	{:else}
		<div class="py-20 text-center">
			<p class="text-2xl text-white/80">No careers yet! Add one to get started.</p>
		</div>
	{/if}
</div>
