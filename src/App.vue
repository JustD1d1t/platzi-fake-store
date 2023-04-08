<template>
  <div class="container">
    <Navigation></Navigation>
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

<style>
.container {
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
