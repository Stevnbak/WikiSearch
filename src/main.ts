export type wikiData = {
	name: string;
	homepage: string;
	lang: string;
	api: string;
	companies?: string[];
	games?: string[];
	genres?: string[];
	series?: string[];
	systems?: string[];
};

import "./assets/main.css";

import {createApp} from "vue";
import App from "./App.vue";

createApp(App).mount("body");
