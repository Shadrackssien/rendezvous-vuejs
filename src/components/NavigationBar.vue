<script>
import MdMenuIcon from "vue-ionicons/dist/md-menu.vue";
import MdCloseIcon from "vue-ionicons/dist/md-close.vue";

export default {
  components: {
    MdMenuIcon,
    MdCloseIcon,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <div
    class="flex justify-between mt-12 mx-auto items-center w-[92%] h-[80px] text-primary rounded-[20px] bg-[#FFFFFF99] p-[12px_24px]"
  >
    <router-link class="font-bold md:text-3xl text-2xl cursor-pointer" :to="'/'"
      >rendezvous</router-link
    >

    <div
      class="nav-links lg:static absolute lg:min-h-fit min-h-[40vh] left-0 top-[-100%] w-full lg:w-auto flex items-center justify-between px-16 lg:px-0 transition-all duration-500 ease-in-out"
      :class="{
        'top-[0]': isMenuOpen,
        'top-[-100%]': !isMenuOpen,
      }"
    >
      <ul
        class="flex lg:flex-row flex-col lg:items-center font-bold p-2 gap-4 text-[#ffffff] lg:text-primary text-[20px] lg:text-[16px]"
      >
        <li><a class="discover" href="#">Discover</a></li>
        <li><a class="about" href="#">About Us</a></li>
      </ul>
      <ul
        class="flex lg:flex-row flex-col lg:items-center font-bold p-2 gap-4 text-[#ffffff] lg:text-primary text-[20px] lg:text-[16px]"
      >
        <li><a class="faqs" href="#">FAQs</a></li>
        <li><a class="contact" href="#">Contact Us</a></li>
      </ul>
    </div>

    <div class="flex items-center gap-4 font-bold text-[16px]">
      <button class="hidden md:block cursor-pointer">Log in</button>
      <button class="button">Sign Up</button>
      <div @click="toggleMenu" class="lg:hidden cursor-pointer">
        <MdMenuIcon v-if="!isMenuOpen" w="36" h="36" />
        <MdCloseIcon v-else w="36" h="36" />
      </div>
    </div>
  </div>
</template>

<style></style>
