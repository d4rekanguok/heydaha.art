<script>
	import Card from '$lib/Card.svelte';
	import data from '$data/media.json';
</script>

<header>
	<p class="intro">
		Hi there! The artworks below are created by a little girl from South Korea. Enjoy!
	</p>
</header>

<ul class="grid">
	{#each data as art (art.id)}
		<Card data={art} />
	{/each}
</ul>

<style>
	header {
		margin-bottom: 4rem;
	}

	.intro {
		font-size: 2rem;
	}

	.grid {
		display: grid;
		gap: 5rem;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: minmax(200px, auto);
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	@media (min-width: 60rem) {
		.intro {
			max-width: 70%;
		}
	}
</style>
