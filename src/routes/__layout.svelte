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
	Copyright {year}. Built with ❤️ by
	<a href="https://twitter.com/DerekNguyen10">@dereknguyen10</a>
</footer>

<style>
	:root {
		--bg-color: snow;
		--fg-color: midnightblue;
	}

	:global(html) {
		font-family: 'Work Sans', sans-serif;
		background-color: var(--bg-color, snow);
		color: var(--fg-color);
		--nav-width: 3rem;
	}

	@media (prefers-color-scheme) {
		:root {
			--bg-color: darkslateblue;
			--fg-color: aliceblue;
		}
	}

	.nav {
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 4rem;
		border-bottom: 1px solid pink;
		display: flex;
		align-items: center;
		padding: 0.75rem 1.5rem;
	}

	nav a {
		text-decoration: none;
		color: inherit;
	}

	.logo {
		text-transform: uppercase;
		font-weight: 800;
		font-size: 1rem;
		letter-spacing: 0.05em;
	}

	main,
	footer {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		padding: 1.5rem;
	}

	footer a {
		color: inherit;
	}

	@media (min-width: 25rem) {
		.nav {
			position: fixed;
			width: var(--nav-width, 3rem);
			border-right: 1px solid pink;
			border-bottom: none;
			height: 100%;
			flex-direction: column;
			padding: 3rem 0;
		}

		.logo {
			writing-mode: vertical-lr;
			text-orientation: mixed;
		}

		main,
		footer {
			box-sizing: border-box;
			position: relative;
			width: calc(100vw - var(--nav-width, 3rem));
			left: var(--nav-width, 3rem);
			padding: 2rem;
		}
	}

	@media (min-width: 60rem) {
		:global(html) {
			--nav-width: 4rem;
		}
	}
</style>
