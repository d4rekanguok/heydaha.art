<script context="module">
	export const hydrate = false;
</script>

<script>
	import Card from '$lib/Card.svelte';
	import data from '$data/media.json';
</script>

<svelte:head>
	<title>Hey Daha!</title>
</svelte:head>

<header>
	<p class="intro">
		<span class="cursive">Hi there!</span> The artworks below are created by a little girl from South
		Korea. Enjoy!
	</p>
</header>

<ul class="grid">
	{#each data as art, i (art.id)}
		<Card data={art} order={i} />
	{/each}
</ul>

<style>
	header {
		margin-bottom: 4rem;
	}

	.intro {
		font-size: 1.75rem;
		line-height: 1.25;
	}

	.cursive {
		font-family: 'Reenie Beanie', cursive;
		font-size: 1.5em;
		color: pink;
	}

	.grid {
		display: grid;
		gap: 5rem;
		grid-template-columns: 1fr;
		grid-auto-rows: minmax(200px, auto);
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	@media (min-width: 25rem) {
		.grid {
			gap: 2rem;
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 60rem) {
		.intro {
			max-width: 60%;
		}

		.grid {
			gap: 5rem;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 100rem) {
		.intro {
			max-width: 50rem;
		}

		.grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}
</style>
