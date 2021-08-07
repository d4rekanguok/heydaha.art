<script>
	export let data;
	const alignOptions = ['start', 'end', 'center'];

	$: alignment = alignOptions[Math.floor(Math.random() * 3)];
</script>

<article class="card" style="--alignment: {alignment}">
	<a href="/art/{data.id}">
		<h1>{data.id}</h1>
		<img src={data.src} alt="" />
	</a>
</article>

<style>
	.card {
		align-self: var(--alignment, 'start');
	}
</style>
