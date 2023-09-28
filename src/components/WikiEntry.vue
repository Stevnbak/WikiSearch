<template>
	<a class="entry" :href="info.homepage" target="_blank">
		<h2>{{ info.name }}</h2>
		<div class="info">
			<p class="link">{{ info.homepage }}</p>
			<p class="lang">({{ info.lang }})</p>
		</div>
		<div class="details">
			<div v-if="info.api" class="logo">
				{{ getWikiLogo(info.api) }}
				<img :src="imageUrls[info.api]" />
			</div>
			<div class="categories" @click.prevent>
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
						if (!response) return;
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
		}
	});
</script>

<style scoped>
	.entry {
		position: relative;
		width: 100%;
		min-height: 20rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-decoration: none;
		border: 3px solid var(--color-border);
		border-right: none;
		border-left: none;
		background-color: var(--color-background-soft);
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
	.link {
		text-decoration: underline;
		color: var(--accent);
	}
	.lang {
		font-weight: bold;
		font-size: 1.25rem;
	}

	.info {
		max-width: 100%;
		min-width: 50%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.info p {
		margin: 0 1rem 0 1rem;
		max-width: 100%;
		word-break: break-all;
	}
	.categories {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: default;
	}
	.category {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.category div {
		min-width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
	}
	.category button {
		height: 1.5rem;
		aspect-ratio: 1;
		margin-left: 0.5rem;
	}
	.category ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		padding-left: 3rem;
		padding-right: 3rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}
	.logo img {
		width: 15rem;
		aspect-ratio: 1;
		max-width: 100%;
	}
</style>
