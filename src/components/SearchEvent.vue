<template>
  <div
    class="flex items-center justify-between rounded-[20px] mt-8 p-1 md:p-6 bg-[#FFFFFF] w-[100%] md:w-[660px] h-[80px] md:h-[100px]"
  >
    <!-- search bar ??-->
    <div class="flex items-center justify-center gap-4 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="hidden md:block size-4"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>

      <input
        class="outline-none w-24 md:w-[143px] h-[19px] text-[16px] text-[#4F4F4F]"
        type="text"
        placeholder="Search for an event"
      />
    </div>

    <select
      class="flex gap-1 md:gap-3 px-5 border-l-2 h-[30px] border-[#E0E0E0] outline-none text-[#4F4F4F]"
    >
      <option value="location">Categories</option>
      <option value="location">Location</option>
      <option value="event">Event</option>
      <option value="artist">Artist</option>
    </select>
    <button class="button">Search</button>
  </div>
</template>

<script>
export default {};
</script>
<style></style>
