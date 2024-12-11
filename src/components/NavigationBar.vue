<template>
  <div
    class="flex justify-between mt-12 mx-auto items-center w-[92%] h-[80px] text-primary rounded-[20px] bg-[#FFFFFF99] p-[12px_24px]"
  >
    <div class="font-bold md:text-3xl text-2xl cursor-pointer">rendezvous</div>

    <div
      class="nav-links lg:static absolute lg:min-h-fit min-h-[40vh] left-0 top-[-100%] w-full lg:w-auto flex items-center justify-between px-16 lg:px-0 transition-all duration-500 ease-in-out"
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
      <ion-icon
        onclick="onToggleMenu(this)"
        class="text-3xl cursor-pointer lg:hidden"
        name="menu-outline"
      ></ion-icon>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
