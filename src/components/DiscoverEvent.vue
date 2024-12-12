<script>
import EventTypes from "./EventTypes.vue";

export default {
  components: {
    EventTypes,
  },
};
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-8 md:mx-16"
  >
    <!-- Left Section -->
    <div class="col-span-2 lg:col-span-1">
      <p
        class="flex items-center lg:items-start justify-center lg:justify-start mt-8 md:mt-32 lg:mt-16 text-[32px] md:text-[28px] lg:text-[32px] leading-[37.5px] font-semibold"
      >
        Discover a World of Events Tailored Just for You
      </p>
      <div
        class="flex items-center lg:items-start justify-center lg:justify-start"
      >
        <button
          class="my-8 flex items-center justify-center bg-[#783EAD] w-[154px] h-[44px] hover:bg-[#380048] text-[#ffffff] font-semibold rounded-[10px] cursor-pointer"
        >
          View All Events
        </button>
      </div>
    </div>

    <!-- Right Section -->
    <EventTypes />
  </div>
</template>

<style></style>
