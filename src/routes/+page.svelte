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

<div class="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 font-[Fredoka]">
	<!-- Banner -->
	<div class="py-10 text-center" style="animation: bannerSlideIn 0.8s ease-out both">
		<h1 class="mb-2 text-5xl font-bold text-white drop-shadow-lg md:text-6xl">
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
				class="mx-auto mb-6 max-w-4xl px-6"
				style="animation: bannerSlideIn 1s ease-out 0.3s both"
			>
				<!-- eslint-disable svelte/no-navigation-without-resolve -- dynamic route from auto-discovery -->
				<a
					href="/careers/{featured.slug}"
					class="group relative block overflow-hidden rounded-2xl bg-white p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
					style="text-decoration: none; color: inherit"
					onclick={() => markVisited(featured.slug)}
				>
					<div
						class="absolute top-3 right-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-yellow-900 shadow"
					>
						⭐ Career of the Day
					</div>
					<div
						class="mb-2 text-7xl transition-transform duration-300 group-hover:scale-110"
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
		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-3">
			<!-- eslint-disable svelte/no-navigation-without-resolve -- dynamic route from auto-discovery -->
			{#each careers as { slug, config } (slug)}
				<a
					href="/careers/{slug}"
					class="group relative block transform rounded-2xl bg-white/90 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
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
