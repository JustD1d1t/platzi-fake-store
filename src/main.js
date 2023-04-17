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
  heartRegular
);

import TheButton from "../src/components/UI/TheButton.vue";
import TheInput from "@/components/form/input.vue";
import checkbox from "@/components/form/checkbox";
import DataTable from "@/components/UI/DataTable";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("TheButton", TheButton);
app.component("TheInput", TheInput);
app.component("checkbox", checkbox);
app.component("DataTable", DataTable);
app.use(VueAxios, axios);

app.use(store);
app.use(router);
app.mount("#app");
