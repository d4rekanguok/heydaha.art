<script>
	import Image from '$lib/Image.svelte';

	export let data;
	export let order = 0;
	const alignOptions = ['start', 'end', 'center'];
	const colors = ['salmon', 'pink', 'plum', 'mediumpurple', 'paleturquoise', 'chocolate'];

	$: alignment = alignOptions[Math.floor(Math.random() * 3)];
	$: color = colors[Math.floor(Math.random() * 5)];
	$: top = Math.floor(Math.random() * 60);
	$: sticker = (order % 5) + 1;
</script>

<article class="card" style="--alignment: {alignment}; --top: {top}px; --color: {color}">
	<a class="link sticker-{sticker}" href="/art/{data.id}">
		<Image class="image" id={data.id} />
	</a>
</article>

<style>
	.card {
		align-self: var(--alignment, 'start');
	}

	.link {
		position: relative;
		display: block;
		text-decoration: none;
		color: inherit;
		transform: translateY(var(--top, 0)) rotate(0deg);
		transition: transform 0.3s ease;
	}

	.link:after {
		content: '';
		position: absolute;
		top: 10px;
		left: 10px;
		bottom: 10px;
		right: 10px;
		background-color: var(--color, tomato);
		transform: rotate(0deg);
		transform-origin: center;
		transition: transform 0.3s ease;
		border-radius: 4px;
	}

	.link:before {
		content: '';
		position: absolute;
		top: -3rem;
		right: 15%;
		width: 6rem;
		height: 6rem;
		z-index: 10;
		opacity: 0;
		background-size: cover;
		transform: translateY(1rem);
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	:global(.sticker-1):before {
		background-image: url(/stickers/sticker-1.svg);
	}

	:global(.sticker-2):before {
		background-image: url(/stickers/sticker-2.svg);
	}

	:global(.sticker-3):before {
		background-image: url(/stickers/sticker-3.svg);
	}

	:global(.sticker-4):before {
		background-image: url(/stickers/sticker-4.svg);
	}

	:global(.sticker-5):before {
		background-image: url(/stickers/sticker-5.svg);
	}

	:global(.image) {
		position: relative;
		z-index: 2;
	}

	.link:hover {
		transform: translateY(var(--top, 0)) rotate(2deg);
	}

	.link:hover:after {
		transform: translate(-15px, -15px) rotate(-5deg);
	}

	.link:hover:before {
		transform: translateY(0);
		opacity: 1;
	}
</style>
