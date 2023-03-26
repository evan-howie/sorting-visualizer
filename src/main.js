import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronUp, faChevronDown);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
