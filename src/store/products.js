import axios from "axios";

const productsStore = {
  namespaced: true,
  state: () => ({
    products: [],
    isLoading: false,
  }),
  mutations: {
    setProducts(state, products) {
      state.products = products;
      console.log(state.products);
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("setLoading", true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const products = await res.data.map((product) => ({
          imageSrc: product.image,
          title: product.title,
          price: product.price,
          description: product.description,
          link: "product/" + product.id,
        }));
        commit("setProducts", products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    getProducts: (state) => state.products,
    isLoading: (state) => state.isLoading,
  },
};

export default productsStore;
