<nav class="nav">
	<h1 class="logo">Daha Art</h1>
</nav>
<main>
	<slot />
</main>

<style>
	:global(html) {
		font-family: 'Work Sans', sans-serif;
		background-color: snow;
	}

	.nav {
		position: absolute;
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

	.logo {
		text-transform: uppercase;
		writing-mode: vertical-lr;
		text-orientation: mixed;
		font-weight: 800;
		font-size: 1rem;
		letter-spacing: 0.05em;
	}

	main {
		position: relative;
		left: 4rem;
		padding: 2rem;
	}
</style>
