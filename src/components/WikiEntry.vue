<template>
	<a class="entry" :href="info.homepage" target="_blank">
		<h2>{{ info.name }}</h2>
		<div class="info">
			<div v-if="info.api" class="logo">
				{{ getWikiLogo(info.api) }}
				<img :src="imageUrls[info.api]" />
			</div>
			<p>URL: {{ info.homepage }}</p>
			<p>Language: {{ info.lang }}</p>
		</div>
		<div class="categories">
			<div v-if="info.games" class="category">
				<div>
					<h3>Games</h3>
					<button @click.prevent="changeCollapse('games')">{{ gamesCollapsed ? "+" : "-" }}</button>
				</div>
				<ul :style="'display: ' + (gamesCollapsed ? 'none' : 'block')">
					<li v-for="game in info.games">{{ game }}</li>
				</ul>
			</div>
			<div v-if="info.series" class="category">
				<div>
					<h3>Series</h3>
					<button @click.prevent="changeCollapse('series')">{{ seriesCollapsed ? "+" : "-" }}</button>
				</div>
				<ul :style="'display: ' + (seriesCollapsed ? 'none' : 'block')">
					<li v-for="series in info.series">{{ series }}</li>
				</ul>
			</div>
			<div v-if="info.companies" class="category">
				<div>
					<h3>Companies</h3>
					<button @click.prevent="changeCollapse('companies')">{{ companiesCollapsed ? "+" : "-" }}</button>
				</div>
				<ul :style="'display: ' + (companiesCollapsed ? 'none' : 'block')">
					<li v-for="company in info.companies">{{ company }}</li>
				</ul>
			</div>
			<div v-if="info.genres" class="category">
				<h3>Genres</h3>
				<button @click.prevent="changeCollapse('genres')">{{ genresCollapsed ? "+" : "-" }}</button>
				<ul :style="'display: ' + (genresCollapsed ? 'none' : 'block')">
					<li v-for="genres in info.genres">{{ genres }}</li>
				</ul>
			</div>
		</div>
	</a>
</template>

<script lang="ts">
	import {defineComponent} from "vue";
	import type {wikiData} from "@/main";
	import type {PropType} from "vue";
	export default defineComponent({
		data: () => ({
			imageUrls: {} as any,
			gamesCollapsed: true,
			companiesCollapsed: true,
			seriesCollapsed: true,
			genresCollapsed: true
		}),
		props: {
			info: {
				type: Object as PropType<wikiData>,
				required: true
			}
		},
		methods: {
			getWikiLogo(url: string): void {
				let getRequest = url + "?action=query&meta=siteinfo&formatversion=2&format=json&origin=*";
				///console.log(getRequest);
				fetch(getRequest, {})
					.then((response) => response.json())
					.catch(() => {
						this.imageUrls[url] = "none.png";
					})
					.then((response) => {
						let image = response.query.general.logo;
						if (image.includes("change-your-logo.svg")) {
							this.imageUrls[url] = "none.png";
						} else {
							this.imageUrls[url] = image;
						}
					});
			},
			changeCollapse(category: string) {
				switch (category) {
					case "games":
						this.gamesCollapsed = !this.gamesCollapsed;
						break;
					case "series":
						this.seriesCollapsed = !this.seriesCollapsed;
						break;
					case "companies":
						this.companiesCollapsed = !this.companiesCollapsed;
						break;
					case "genres":
						this.genresCollapsed = !this.genresCollapsed;
						break;
				}
			}
		},
		mounted() {
			console.log("Test");
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

	.info {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.categories {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.category {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.category div {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
	.category button {
		height: 1.5rem;
		aspect-ratio: 1;
	}
	.category ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.logo img {
		width: 15rem;
		height: 15rem;
	}
</style>
