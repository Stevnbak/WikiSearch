<template>
	<header>
		<Header></Header>
	</header>
	<main>
		<SearchBar class="pages" @result="recieveResults"></SearchBar>
		<div class="pages">
			<!--<p class="status">Found {{ results.length }} results in {{ time }} ms</p>-->
			<div class="tab top">
				<div>
					<button @click.prevent="switchPage(1, true)" :disabled="currentPage == 1">First</button>
					<button @click.prevent="switchPage(-1, false)" :disabled="currentPage == 1">Previous</button>
				</div>
				<p>Page {{ currentPage }} of {{ totalPages }}</p>
				<div>
					<button @click.prevent="switchPage(1, false)" :disabled="currentPage == totalPages">Next</button>
					<button @click.prevent="switchPage(totalPages, true)" :disabled="currentPage == totalPages">Last</button>
				</div>
			</div>
			<div class="tab">
				<label>Results per page:</label>
				<select v-model="resultsPerPage" @change="changeResultsPerPage">
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="25">25</option>
					<option value="50">50</option>
				</select>
			</div>
		</div>
		<div class="entries" v-if="results.length != 0">
			<WikiEntry v-for="entry in results.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage)" :info="entry"></WikiEntry>
		</div>
		<div class="entries" v-else>
			<h2>No wikis found</h2>
		</div>
	</main>
	<footer>
		<Footer></Footer>
	</footer>
</template>

<script lang="ts">
	import {defineComponent} from "vue";
	import type {wikiData} from "@/main";
	import WikiEntry from "./components/WikiEntry.vue";
	import SearchBar from "./components/SearchBar.vue";
	import Footer from "./components/Footer.vue";
	import Header from "./components/Header.vue";

	export default defineComponent({
		data: () => ({
			results: [] as wikiData[],
			time: 0 as number,
			totalPages: 0 as number,
			currentPage: 1 as number,
			resultsPerPage: 10 as number
		}),
		components: {
			WikiEntry,
			SearchBar,
			Footer,
			Header
		},
		methods: {
			recieveResults(e: any) {
				console.log("Recieved result:", e);
				this.totalPages = Math.ceil(e.length / this.resultsPerPage);
				this.switchPage(1, true);
				this.results = e;
			},
			switchPage(value: number, set: boolean) {
				if (set) {
					this.currentPage = value;
				} else {
					this.currentPage += value;
				}
				if (this.currentPage < 1) this.currentPage = 1;
				if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
			},
			changeResultsPerPage() {
				this.totalPages = Math.ceil(this.results.length / this.resultsPerPage);
				this.switchPage(1, true);
			}
		},
		mounted() {}
	});
</script>

<style scoped>
	main {
		min-height: 85vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.entries {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		border-bottom: 3px solid var(--color-border);
		border-top: 3px solid var(--color-border);
	}

	/* Page selection */
	.pages {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.tab {
		width: 100%;
		min-height: 4rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		background-color: var(--color-background-soft);
	}
	.tab.top {
		border-radius: 0.75rem 0.75rem 0 0;
	}
	.pages button {
		width: 5rem;
		height: 1.5rem;
		border-radius: 0.4rem;
		border: none;
		padding: 0;
		margin-right: 0.2rem;
		margin-left: 0.2rem;
		font-weight: bold;
		cursor: pointer;
	}
	.pages button:disabled {
		cursor: not-allowed;
	}
	.pages select {
		width: 3rem;
		height: 1.5rem;
		padding: 0;
		margin-right: 0.2rem;
		margin-left: 0.2rem;
		font-weight: bold;
		text-align: center;
		border-radius: 0.4rem;
	}
	.pages .tab select:focus-within {
		border-radius: 0.4rem 0.4rem 0 0;
	}

	/* Mobile */
	@media screen and (max-width: 1200px) {
		.entries,
		.pages {
			width: 90%;
		}
	}
	@media screen and (max-width: 600px) {
		.tab.top {
			flex-direction: column;
		}
	}
</style>
