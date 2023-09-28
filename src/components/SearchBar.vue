<template>
	<div class="settings">
		<div class="search bar">
			<input type="text" id="search" v-model="text" :onkeydown="keyPress" />
			<button @click.prevent="Search"><font-awesome-icon icon="fa-solid fa-search" class="icon" /></button>
		</div>
		<div class="filter bar">
			<p>Language:</p>
			<select v-model="lang" @change="Search">
				<option value="all">All</option>
				<option v-for="language in possibleLanguages" :value="language.toLowerCase()">{{ language }}</option>
			</select>
		</div>
	</div>
</template>

<script lang="ts">
	import {defineComponent} from "vue";
	import {search, Data} from "../search";

	export default defineComponent({
		data: () => ({
			text: "" as string,
			lang: "all" as string,
			time: 0 as number,
			possibleLanguages: [] as string[]
		}),
		methods: {
			async Search() {
				let results = await search(this.text, {lang: this.lang});
				this.time = results.time;
				this.$emit("result", results.result);
			},
			keyPress(e: KeyboardEvent) {
				if (e.code == "Enter") {
					this.Search();
				}
			}
		},
		mounted() {
			Data().then((data) => {
				data.map((a) => a.lang).forEach((l) => {
					if (!this.possibleLanguages.includes(l)) this.possibleLanguages.push(l);
				});
			});
			this.Search();
			document.getElementById("search")?.focus();
		}
	});
</script>

<style scoped>
	.settings {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0.75rem;
		margin-bottom: 1.5rem;
	}
	.bar {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		position: relative;
		background-color: var(--color-background-soft);
	}
	/* Search field */
	.search {
		border-radius: 0.75rem 0.75rem 0 0;
	}
	.search input[type="text"] {
		height: 2.5rem;
		width: 100%;
		border-radius: 0.75rem;
		border: 2px solid var(--color-border);
		padding: 0.2rem 3rem 0.2rem 1rem;
		font-size: 1rem;
	}
	.search button {
		height: 2.5rem;
		width: 3rem;
		border-radius: 0 0.75rem 0.75rem 0;
		border: none;
		cursor: pointer;
		font-size: 0.9rem;
		position: absolute;
		right: 0;
		border: 2px solid var(--color-border);
	}
	.search button:hover .icon {
		font-size: 1.1rem;
		transition: font-size 0.2s;
	}

	/* Language selector */
	.filter {
		padding: 0.5rem 0 0.5rem 0;
		border-radius: 0 0 0.75rem 0.75rem;
	}
	.filter p {
		margin-right: 0.5rem;
		font-size: 1.15rem;
	}
	.filter select {
		width: 5rem;
		height: 2rem;
		font-size: 1rem;
		border-radius: 0.4rem;
		text-align: center;
	}
	.filter select:focus-within {
		border-radius: 0.4rem 0.4rem 0 0;
	}
</style>
