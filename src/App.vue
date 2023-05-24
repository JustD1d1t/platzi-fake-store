<template>
  <Navigation></Navigation>
  <div class="container">
    <router-view></router-view>
    <the-footer />
  </div>
</template>

<script>
import Navigation from "./components/main/Navigation.vue";
import TheFooter from "./components/main/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    TheFooter,
  },
};
</script>

<style></style>
