import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
  faCartShopping,
  faHeart,
  faPerson,
  faMapLocationDot,
  faHelmetSafety,
  faTruck,
  faBox,
  faCreditCard,
  faHashtag,
  faTornado,
  faLaptop,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";

library.add(
  faPhone,
  faCartShopping,
  faHeart,
  faPerson,
  faMapLocationDot,
  faHelmetSafety,
  faTruck,
  faBox,
  faCreditCard,
  faHashtag,
  faTornado,
  faLaptop,
  heartRegular,
  faFilter
);

import TheButton from "../src/components/UI/TheButton.vue";
import TheInput from "@/components/form/input.vue";
import checkbox from "@/components/form/checkbox";
import text from "@/components/form/text";
import radio from "@/components/form/radio";
import notification from "@/components/UI/notification";
import badge from "@/components/UI/badge";
import pagination from "@/components/UI/pagination";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("TheButton", TheButton);
app.component("TheInput", TheInput);
app.component("checkbox", checkbox);
app.component("formText", text);
app.component("radio", radio);
app.component("notification", notification);
app.component("badge", badge);
app.component("pagination", pagination);
app.use(VueAxios, axios);

app.use(store);
app.use(router);
app.mount("#app");
