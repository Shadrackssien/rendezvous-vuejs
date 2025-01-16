import axios from "axios";
import { createStore } from "vuex";

const productStore = createStore({
  state: {
    products: [],
    isLoading: false,
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default productStore;
