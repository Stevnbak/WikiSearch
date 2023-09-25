import type {wikiData} from "@/main";

let rawData: wikiData[];
export async function Data() {
	if (rawData) return rawData as wikiData[];
	else {
		let response = await fetch("https://raw.githubusercontent.com/GameWikis/WikiLookup/master/WikiLookup.json");
		let raw = await response.json();
		//For testing to make list bigger:
		let data = [];
		for (let i = 0; i < 10; i++) {
			data.push(...raw);
		}
		rawData = data;
		return rawData as wikiData[];
	}
}

export async function search(searchTerm: string, options: {lang: string}) {
	const startTime = Date.now();
	const data = (await Data()).filter((a) => options.lang == "all" || a.lang == options.lang);
	console.log("Search: " + searchTerm);
	//No search
	if (searchTerm == "") return {result: data.slice(0, 50), time: Date.now() - startTime};
	//Filter from settings

	//Search
	let score = [] as {wiki: wikiData; score: number}[];
	data.forEach((wiki) => {
		score.push({wiki: wiki, score: 0});
	});
	//Search through wiki titles
	score
		.filter((a) => a.wiki.name.toLowerCase().includes(searchTerm))
		.forEach((item) => {
			item.score += 10;
		});
	//Search through categories
	let categories = {games: 9, series: 8, companies: 5, genres: 2};
	for (let category of Object.keys(categories) as ["games", "series", "companies", "genres"]) {
		score.forEach((item) => {
			if (item.wiki[category]) {
				let amount = item.wiki[category]!.filter((entry: string) => entry.toLowerCase().includes(searchTerm)).length;
				let total = item.wiki[category]!.length;
				item.score += (amount / total) * categories[category];
			}
		});
	}
	//Sort
	console.log(score);
	let results = score
		.filter((a) => a.score != 0)
		.sort((a, b) => b.score - a.score)
		.map((a) => a.wiki);
	//Return
	return {result: results.slice(0, 50), time: Date.now() - startTime};
}
