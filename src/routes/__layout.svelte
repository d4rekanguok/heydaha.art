<script>
	let year = new Date().getFullYear();
</script>

<nav class="nav">
	<a href="/">
		<h1 class="logo">Hey Daha</h1>
	</a>
</nav>
<main>
	<slot />
</main>
<footer>
	Copyright {year}. All artworks are properties. Built by
	<a href="https://twitter.com/DerekNguyen10">@dereknguyen10</a>
</footer>

<style>
	:global(html) {
		font-family: 'Work Sans', sans-serif;
		background-color: snow;
	}

	.nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 4rem;
		border-right: 1px solid pink;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 3rem 0;
	}

	nav a {
		text-decoration: none;
		color: inherit;
	}

	.logo {
		text-transform: uppercase;
		writing-mode: vertical-lr;
		text-orientation: mixed;
		font-weight: 800;
		font-size: 1rem;
		letter-spacing: 0.05em;
	}

	main,
	footer {
		box-sizing: border-box;
		position: relative;
		width: calc(100vw - 4rem);
		left: 4rem;
		padding: 2rem;
	}
</style>
