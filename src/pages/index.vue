<template>
  <main>
    <the-banner />
    <the-introduce-section />
    <the-scooters />
  </main>
</template>

<script>
import TheBanner from "../components/main-page/banner/TheBanner.vue";
import TheIntroduceSection from "@/components/main-page/introduce-section/TheIntroduceSection";
import TheScooters from "@/components/main-page/scooters/TheScooters";
export default {
  components: {
    TheBanner,
    TheIntroduceSection,
    TheScooters,
  },
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 108px;
}
</style>
