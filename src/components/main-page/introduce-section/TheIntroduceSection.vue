<template>
  <section>
    <h2 class="text-center">About our company</h2>
    <h3 class="text-center">You're in good company</h3>
    <h4 class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin duis eget
      aliquam vel, sed nibh nunc, rhoncus dictum. Leo urna, eu faucibus mi et.
      Enim praesent vulputate sit vel sed turpis iaculis dolor luctus. Suscipit
      ac morbi commodo pellentesque elementum non et sapien nascetur.
    </h4>
    <div class="introduce__icons">
      <div class="introduce__icon">
        <font-awesome-icon icon="fa-solid fa-map-location-dot" />
      </div>
      <div class="introduce__icon">
        <font-awesome-icon icon="fa-solid fa-helmet-safety" />
      </div>
      <div class="introduce__icon">
        <font-awesome-icon icon="fa-solid fa-truck" />
      </div>
      <div class="introduce__icon">
        <font-awesome-icon icon="fa-solid fa-box" />
      </div>
      <div class="introduce__icon">
        <font-awesome-icon icon="fa-solid fa-credit-card" />
      </div>
      <div class="introduce__icon">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </div>
      <div class="introduce__icon">
        <font-awesome-icon icon="fa-solid fa-person" />
      </div>
      <div class="introduce__icon">
        <font-awesome-icon icon="fa-solid fa-helmet-safety" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.introduce {
  &__icons {
    display: grid;
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  &__icon {
    @include center;
    margin: 30px 0;
    svg {
      cursor: default;
      color: $secondary;
      width: 50px;
      height: 50px;
      @media screen and (min-width: 767px) {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
