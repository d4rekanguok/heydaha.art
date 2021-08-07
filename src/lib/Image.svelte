<script>
	export let id;
	let className;
	let sizes;
	let alt;
	export { className as class };

	const getSrcset = (extension) => `
    /media/${id}/640.${extension} 640w,
    /media/${id}/960.${extension} 960w,
    /media/${id}/1280.${extension} 1280w
  `;
</script>

<picture>
	<source {sizes} srcset={getSrcset('webp')} type="image/webp" />
	<source {sizes} srcset={getSrcset('jpg')} type="image/jpeg" />
	<img class={className} src={`/media/${id}/640.webp`} {alt} loading="lazy" />
</picture>

<style>
	img {
		width: 100%;
	}
</style>
