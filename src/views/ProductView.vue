<script>
import NavigationBar from "../components/NavigationBar.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  components: {
    NavigationBar,
    Footer,
  },
  data() {
    return {
      product: null,
      isLoading: true,
    };
  },
  async mounted() {
    const productId = this.$route.params.id;
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      this.product = res.data;
      console.log(this.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<template>
  <div class="product">
    <NavigationBar />

    <div v-if="isLoading" class="text-center mt-8">Loading product...</div>
    <!-- image -->
    <div v-else>
      <div class="mx-4 md:mx-8 lg:mx-16 mt-8 mb-[60px] rounded-lg">
        <img
          class="w-[100%] h-[480px] object-cover object-center border border-gray-300 rounded-[20px]"
          :src="product.image"
          :alt="product.title"
        />
      </div>

      <!-- Main content -->
      <div class="flex flex-col lg:flex-row justify-between lg:mx-16 gap-4">
        <!-- Product content -->
        <div>
          <!-- title -->
          <div class="mx-4 md:mx-8 lg:mx-16 flex flex-col gap-2">
            <h1
              class="text-[20px] md:text-[24px] leading-[28.13px] mb-8 md:mb-0 font-bold w-96 md:w-[650px] h-[30px]"
            >
              {{ product.title }}
            </h1>

            <!-- details -->
            <div class="flex flex-col gap-[8px]">
              <div class="flex flex-row gap-2">
                <img
                  class="w-[18px] h-[19.5px] mt-8"
                  src="/src/assets/vector1.png"
                  alt="vector 1"
                />
                <p class="mt-8">{{ "Price: $ " + product.price }}</p>
              </div>
              <div class="flex flex-row gap-2">
                <img
                  class="w-[18px] h-[19.5px]"
                  src="/src/assets/vector2.png"
                  alt="vector 1"
                />
                <p>
                  {{ "Category: " + product.category }}
                </p>
              </div>
              <div class="flex flex-row gap-2">
                <img
                  class="w-[18px] h-[19.5px]"
                  src="/src/assets/vector3.png"
                  alt="vector 1"
                />
                <p>
                  {{
                    "Rating: " +
                    product.rating.rate +
                    " " +
                    product.rating.count +
                    " reviews"
                  }}
                </p>
              </div>
            </div>

            <!-- description -->
            <div class="mt-8">
              <p class="font-bold text-[16px] leading-[18.75px] mb-4">
                Event description
              </p>
              <p class="w-[95%] lg:w-[875px] text-[16px] leading-[18.75px]">
                {{ product.description }}
              </p>
            </div>

            <!-- Ticket Pricing -->
            <div class="mt-8 lg:mt-16">
              <p class="font-bold text-[16px] leading-[18.75px] mb-8">
                Tickets Pricing
              </p>
              <div class="flex flex-row gap-16">
                <div class="flex flex-col gap-2">
                  <p
                    class="text-[17px] md:text-[20px] font-medium leading-[23.44px]"
                  >
                    Single
                  </p>
                  <p class="text-[#9B51E0]">NGN 5,000</p>
                </div>
                <div class="flex flex-col gap-2">
                  <p
                    class="text-[17px] md:text-[20px] font-medium leading-[23.44px]"
                  >
                    Pair
                  </p>
                  <p class="text-[#9B51E0]">NGN 9,000</p>
                </div>
              </div>
              <button class="button mt-8">Buy now</button>
            </div>
          </div>
        </div>

        <!-- Contact Organizers and Directions -->
        <div>
          <!-- Contact Organizers and Directions -->
          <div>
            <!-- Contact Organizers -->
            <div class="flex flex-col gap-4 mt-8 lg:mt-16 mx-4 md:mx-8 lg:mx-0">
              <p class="font-bold text-[16px] leading-[18.75px] mb-2">
                Contact Organizers
              </p>
              <div class="flex flex-row gap-[24px]">
                <img src="/src/assets/p1.png" alt="p 1" />
                <img src="/src/assets/p2.png" alt="p 1" />
                <img src="/src/assets/p3.png" alt="p 1" />
              </div>
            </div>

            <!-- Directions -->
            <div class="flex flex-col gap-4 mt-8 lg:mt-16 mx-4 md:mx-8 lg:mx-0">
              <p class="font-bold text-[16px] leading-[18.75px] mb-2">
                Directions
              </p>
              <img
                class="w-[400px] h-[452px]"
                src="/src/assets/directions.png"
                alt="directions"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
