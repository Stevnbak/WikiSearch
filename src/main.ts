import "./assets/main.css";

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

//FontAwesome icons
//Font Awesome
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
library.add(faSearch);
export default {FontAwesome: FontAwesomeIcon};

import {createApp} from "vue";
import App from "./App.vue";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("body");
