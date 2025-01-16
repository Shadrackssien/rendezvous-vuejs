<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },

  computed: {
    products() {
      return this.$store.getters["getProducts"];
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  mounted() {
    this.$store.dispatch("products/fetchProducts");
  },
  // methods: {
  //   async fetchProducts() {
  //     this.isLoading = true;
  //     try {
  //       const res = await axios.get("https://fakestoreapi.com/products");
  //       this.products = res.data.map((product) => ({
  //         imageSrc: product.image,
  //         title: product.title,
  //         price: product.price,
  //         description: product.description,
  //         link: "product/" + product.id,
  //       }));
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       this.isLoading = false;
  //     }
  //   },
  // },
};
</script>

<template>
  <div>
    <div class="flex flex-col my-16 mx-auto md:m-16 font-semibold bg-[#FFFFFF]">
      <div class="flex justify-between">
        <div class="text-[28px] leading-tight md:text-[32px]">
          Trending events
        </div>
        <div
          class="cursor-pointer flex items-center justify-center gap- md:gap-1"
        >
          <a class="text-primary" href="#"> View all trending events </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="hidden md:block size-5 text-primary"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div id="container">
        <!-- loading state -->
        <div
          class="flex items-center justify-center"
          v-if="$store.state.isLoading"
        >
          <div class="font-semibold mr-8 text-primary">
            Products Loading, please wait...
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle
              fill="#432361"
              stroke="#432361"
              stroke-width="3"
              r="15"
              cx="40"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.4"
              ></animate>
            </circle>
            <circle
              fill="#432361"
              stroke="#432361"
              stroke-width="3"
              r="15"
              cx="100"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="-.2"
              ></animate>
            </circle>
            <circle
              fill="#432361"
              stroke="#432361"
              stroke-width="3"
              r="15"
              cx="160"
              cy="65"
            >
              <animate
                attributeName="cy"
                calcMode="spline"
                dur="2"
                values="65;135;65;"
                keySplines=".5 0 .5 1;.5 0 .5 1"
                repeatCount="indefinite"
                begin="0"
              ></animate>
            </circle>
          </svg>
        </div>
        <!-- Render products -->
        <Card
          v-else
          v-for="(product, index) in $store.state.products"
          :key="index"
          :imageSrc="product.imageSrc"
          :title="product.title"
          :price="'$ ' + product.price"
          :description="product.description"
          :link="product.link"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
