<script context="module">
	export const hydrate = false;
	import data from '$data/media.json';

	export const load = async ({ page, fetch }) => {
		const id = page.params.id;

		const media = data.find((item) => item.id === id);
		const content = await fetch(`/edit/${id}.json`).then((res) => res.json());

		return {
			props: {
				id,
				media,
				content: content.data
			}
		};
	};
</script>

<script>
	import { dev } from '$app/env';
	import Image from '$lib/Image.svelte';
	export let media;
	export let content;
</script>

<div class="container">
	<div class="image">
		<Image id={media.id} />
	</div>
	<div class="info">
		<header>
			<h1>{content.title || 'Unnamed'}</h1>
			<div>{media.date}</div>
			{#if dev}
				<a href="/edit/{media.id}">Edit</a>
			{/if}
		</header>

		{#if content.desc}
			<p class="desc">{content.desc}</p>
		{/if}
	</div>
</div>

<style>
	.container {
		position: relative;
	}

	.image {
		margin-bottom: 2rem;
	}

	h1 {
		line-height: 1.1;
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.desc {
		font-size: 1.5rem;
	}

	@media (min-width: 60rem) {
		.container {
			display: flex;
			gap: 2rem;
		}

		.image {
			width: 75%;
		}

		.info {
			width: 25%;
		}
	}
</style>
