<template>
  <div
    class="overflow-hidden mx-auto border border-1-[#E0E0E0] rounded-lg bg-white flex flex-col gap-4 w-96 md:w-full h-[488px] shadow-lg text-black no-underline"
  >
    <img
      class="w-auto h-1/2 object-cover object-center rounded-t-lg transition-all duration-300 ease-in-out hover:scale-[1.02]"
      :src="imageSrc"
      :alt="title"
    />
    <div
      class="mx-4 text-[16px] font-bold leading-[18.75px] mt-1 text-ellipsis line-clamp-2"
    >
      Anything
      {{ title }}
    </div>
    <div class="mx-4 text-[14px] font-medium leading-[16.41px] mb-2">
      {{ price }}
    </div>
    <div
      class="mx-4 mb-3 text-[14px] font-normal leading-[16.41px] text-ellipsis line-clamp-4 overflow-hidden"
    >
      {{ description }}
    </div>
    <div class="mx-4 flex flex-row items-center gap-1 mb-3">
      <router-link
        class="text-primary text-[14px] leading-[16.41px] font-semibold"
        :to="link"
        >View details
      </router-link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="size-4 text-primary"
      >
        <path
          fill-rule="evenodd"
          d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
