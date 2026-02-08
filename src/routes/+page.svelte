<script lang="ts">
	import { careers } from '$lib/careers';
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
	</div>

	<!-- Career cards grid -->
	{#if careers.length > 0}
		<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-3">
			<!-- eslint-disable svelte/no-navigation-without-resolve -- dynamic route from auto-discovery -->
			{#each careers as { slug, config } (slug)}
				<a
					href="/careers/{slug}"
					class="group block transform rounded-2xl bg-white/90 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					style="text-decoration: none; color: inherit"
				>
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
