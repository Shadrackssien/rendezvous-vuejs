<script>
import Header from "../components/Header.vue";
import Event from "../components/Events.vue";
import Discover from "../components/DiscoverEvent.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Event,
    Discover,
    Footer,
  },
};
</script>

<template>
  <div class="home">
    <Header />
    <Event />
    <Discover />
    <Footer />
  </div>
</template>
