<template>
	<div class="settings">
		<div class="bar">
			<input type="text" id="search" v-model="text" :onkeydown="keyPress" />
			<button @click.prevent="Search">Search</button>
		</div>
		<div class="bar">
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
	}
	.bar {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
