<template>
	<header>
		<Header></Header>
	</header>
	<main>
		<SearchBar class="search" @result="recieveResults"></SearchBar>
		<div class="pages">
			<p class="status">Found {{ results.length }} results in {{ time }} ms</p>
			<div class="tab">
				<button @click.prevent="switchPage(1, true)" :disabled="currentPage == 1">First</button>
				<button @click.prevent="switchPage(-1, false)" :disabled="currentPage == 1">Previous</button>
				<p>Page {{ currentPage }} of {{ totalPages }}</p>
				<button @click.prevent="switchPage(1, false)" :disabled="currentPage == totalPages">Next</button>
				<button @click.prevent="switchPage(totalPages, true)" :disabled="currentPage == totalPages">Last</button>
				<div>
					<label>Results per page:</label>
					<select v-model="resultsPerPage" @change="changeResultsPerPage">
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">30</option>
						<option value="40">40</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>
				</div>
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
		min-height: 90vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.entries {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.search,
	.pages {
		width: 50%;
		height: 10rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.tab {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
