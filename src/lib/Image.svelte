<script>
	export let id;
	let className = '';
	let sizes = `(max-width: 400px) 100%, (max-width: 600px) 50%, (max-width: 960px) 33%, 25%`;
	let alt;
	export { className as class };

	const getSrcset = (
		extension
	) => `/media/${id}/640.${extension} 640w, /media/${id}/960.${extension} 960w, /media/${id}/1280.${extension} 1280w
  `;
</script>

<picture class={className}>
	<source {sizes} srcset={getSrcset('webp')} type="image/webp" />
	<source {sizes} srcset={getSrcset('jpg')} type="image/jpeg" />
	<img src={`/media/${id}/640.webp`} {alt} loading="lazy" />
</picture>

<style>
	img {
		width: 100%;
	}
</style>
