<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },

  data() {
    return {
      events: [
        {
          imageSrc: "/src/assets/1.png",
          title: "ISWIS Live Show",
          date: "Sun, Oct 3rd . 6pm",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nesciunt enim iure, alias reprehenderit cupiditate, explicabo suscipit deleniti laborum laudantium hjugfdsrg.",
          link: "product",
        },
        {
          imageSrc: "/src/assets/2.png",
          title: "ISWIS Live Show",
          date: "Sun, Oct 3rd . 6pm",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nesciunt enim iure, alias reprehenderit cupiditate, explicabo suscipit deleniti laborum laudantium hjugfdsrg.",
          link: "product",
        },
        {
          imageSrc: "/src/assets/3.png",
          title: "ISWIS Live Show",
          date: "Sun, Oct 3rd . 6pm",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nesciunt enim iure, alias reprehenderit cupiditate, explicabo suscipit deleniti laborum laudantium hjugfdsrg.",
          link: "product",
        },
      ],
    };
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
        <Card
          v-for="(event, index) in events"
          :key="index"
          :imageSrc="event.imageSrc"
          :title="event.title"
          :date="event.date"
          :description="event.description"
          :link="event.link"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
