<template>
	<a class="entry" :href="info.homepage" target="_blank">
		<h2>{{ info.name }}</h2>
		<p>URL: {{ info.homepage }}</p>
		<div v-if="info.games" class="category games">
			<h3>Games</h3>
			<li v-for="game in info.games">{{ game }}</li>
		</div>
		<div v-if="info.series" class="category series">
			<h3>Series</h3>
			<li v-for="series in info.series">{{ series }}</li>
		</div>
		<div v-if="info.companies" class="category companies">
			<h3>Companies</h3>
			<li v-for="company in info.companies">{{ company }}</li>
		</div>
		<div v-if="info.genres" class="category genres">
			<h3>Genres</h3>
			<li v-for="genres in info.genres">{{ genres }}</li>
		</div>
	</a>
</template>

<script lang="ts">
	import {defineComponent} from "vue";
	import type {wikiData} from "@/main";
	import type {PropType} from "vue";

	export default defineComponent({
		props: {
			info: {
				type: Object as PropType<wikiData>,
				required: true
			}
		}
	});
</script>

<style scoped>
	.entry {
		width: 50%;
		max-width: 100%;
		min-height: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		border: 3px solid var(--color-border);
		padding: 10px;
	}
	@media screen and (max-width: 1079px) {
		.entry {
			width: 90%;
		}
	}
	.entry:hover {
		border-color: var(--color-border-hover);
	}

	h2,
	h3,
	p,
	li {
		width: 100%;
		text-decoration: none;
		color: var(--color-text);
	}
	h2 {
		text-align: center;
		color: var(--color-heading);
		font-size: 1.75rem;
		font-weight: bold;
	}
	h3 {
		text-align: center;
		color: var(--color-heading);
		font-weight: bold;
	}
	.category {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>