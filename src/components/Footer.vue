<template>
	<div class="footer">
		<div class="links">
			<p>GitHub repo:</p>
			<a href="https://github.com/Stevnbak/WikiSearch" target="_blank">GitHub</a>
		</div>
		<div>
			<p>Made by</p>
			<p>
				<a href="https://github.com/stevnbak" target="_blank">Stevnbak</a>
				&
				<a href="https://github.com/verygreatfrog" target="_blank">VeryGreatFrog</a>
			</p>
		</div>
		<div>
			<p>Wiki data from</p>
			<a href="https://github.com/GameWikis/WikiLookup/" target="_blank">ABXY Wiki Lookup</a>
		</div>
	</div>
</template>

<style scoped>
	.footer {
		width: 100%;
		min-height: 7.5vh;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-top: 5px solid var(--accent);
		margin-top: 1rem;
		padding: 2rem;
	}
	a {
		color: var(--accent);
	}
	/* Credit */
	.footer div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.footer p {
		font-weight: bold;
	}
</style>
