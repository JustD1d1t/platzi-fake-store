import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      categories: [],
    };
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload.categories;
    },
  },
  actions: {
    fetchCategories({ commit }) {
      axios.get("https://api.escuelajs.co/api/v1/categories").then((res) => {
        commit("setCategories", {
          categories: res.data.slice(0, 5),
        });
      });
    },
  },
  getters: {},
};
