<template>
  <div class="banner">
    <div class="banner__left">
      <h1 class="bold">Touch the vintage</h1>
      <h2>Online vintage and electric scooters shop</h2>
      <button class="btn btn-primary btn-big">Shop now</button>
    </div>
    <div class="banner__right">
      <img :src="bannerScooters" alt="" />
    </div>
  </div>
</template>

<script>
import bannerScooters from "@/assets/img/banner_scooters.png";
export default {
  data() {
    return {
      bannerScooters,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-wrap: wrap;
  &__left {
    @include centerColumn;
  }
  &__left,
  &__right {
    width: 100%;
    @media screen and (min-width: 1023px) {
      width: 50%;
    }
  }
  &__right {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
