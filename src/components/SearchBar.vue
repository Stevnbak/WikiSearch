<template>
	<div class="settings">
		<div class="bar">
			<input type="text" id="search" v-model="text" :onkeydown="keyPress" />
			<button @click.prevent="Search">Search</button>
		</div>
		<p class="time">Time: {{ time }}ms</p>
	</div>
</template>

<script lang="ts">
	import {defineComponent} from "vue";
	import {search} from "../search";

	export default defineComponent({
		data: () => ({
			text: "" as string,
			time: 0 as number
		}),
		methods: {
			async Search() {
				let results = await search(this.text);
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
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
