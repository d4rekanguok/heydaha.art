<script>
	import Image from '$lib/Image.svelte';

	export let data;
	const alignOptions = ['start', 'end', 'center'];

	$: alignment = alignOptions[Math.floor(Math.random() * 3)];
</script>

<article class="card" style="--alignment: {alignment}">
	<a class="link" href="/art/{data.id}">
		<Image id={data.id} />
	</a>
</article>

<style>
	.card {
		align-self: var(--alignment, 'start');
	}

	header {
		margin-bottom: 1rem;
	}

	.link {
		text-decoration: none;
		color: inherit;
	}
</style>
