import Vuex from "vuex";

import Categories from "./modules/categories/categories";
import appState from "./modules/app-state/app-state";
import user from "./modules/user/user";

export default new Vuex.Store({
  modules: {
    Categories,
    appState,
    user,
  },
});
