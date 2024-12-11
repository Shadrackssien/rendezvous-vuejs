<script>
import Header from "./components/Header.vue";
import Event from "./components/Events.vue";
import Discover from "./components/DiscoverEvent.vue";

export default {
  components: {
    Header,
    Event,
    Discover,
  },
};
</script>

<template>
  <div class="overflow-x-hidden">
    <Header />
    <Event />
    <Discover />
  </div>
</template>
