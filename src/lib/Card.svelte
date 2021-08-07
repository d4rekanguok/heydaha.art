<script>
	export let data;
	const alignOptions = ['start', 'end', 'center'];

	$: alignment = alignOptions[Math.floor(Math.random() * 3)];
</script>

<article class="card" style="--alignment: {alignment}">
	<h1>{data.path}</h1>
	<div>{data.date}</div>
	<a class="link" href="/art/{data.id}">
		<img src={`/media/${data.id}/640.webp`} alt="" />
	</a>
</article>

<style>
	.card {
		align-self: var(--alignment, 'start');
	}

	.link {
		text-decoration: none;
		color: inherit;
	}
</style>
