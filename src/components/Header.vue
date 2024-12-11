<script>
import NavBar from "./NavigationBar.vue";
import SearchEvent from "./SearchEvent.vue";

export default {
  components: {
    NavBar,
    SearchEvent,
  },
};
</script>

<template>
  <div
    class="relative flex w-[100%] h-[640px] flex-col bg-[url('./assets/header.jpg')] bg-cover bg-center"
  >
    <!-- overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60 lg:bg-opacity-30">
      <NavBar />
      <div
        class="flex flex-col lg:flex-row justify-between mt-[150px] lg:mt-[300px] mx-4 md:mx-16"
      >
        <div
          class="text-[28px] md:text-[32px] leading-tight font-bold w-[400px] md:w-[531px] h-[160px] text-[#FFFFFF]"
        >
          Ready to Rock? Discover the Hottest Events Here - Your Calendar's New
          Best Friend!
        </div>

        <SearchEvent />
      </div>
    </div>
  </div>
</template>

<style></style>
