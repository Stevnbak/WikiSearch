<template>
	<header>
		<Header></Header>
	</header>
	<main>
		<div class="search">
			<SearchBar @result="recieveResults"></SearchBar>
		</div>
		<div class="entries" v-if="results.length != 0">
			<p class="status">Found {{ results.length }} results in {{ time }} ms</p>
			<WikiEntry v-for="entry in results" :info="entry"></WikiEntry>
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
			time: 0 as number
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
				this.results = e;
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
	.search {
		width: 50%;
		height: 10rem;
	}
</style>
