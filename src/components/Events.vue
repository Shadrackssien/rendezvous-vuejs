<script>
import Card from "./Card.vue";
import axios from "axios";

export default {
  components: {
    Card,
  },
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        this.products = res.data.map((product) => ({
          imageSrc: product.image,
          title: product.title,
          price: product.price,
          description: product.description,
          link: "product/" + product.id, // Replace with the actual product ID", // Assuming the link would be a product page
        }));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
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
        <!-- Show loading state -->
        <div v-if="isLoading">Loading products...</div>
        <!-- Render products -->
        <Card
          v-else
          v-for="(product, index) in products"
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
