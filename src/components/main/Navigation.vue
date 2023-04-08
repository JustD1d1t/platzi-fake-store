<template>
  <header class="navigation">
    <ul class="navigation__menu">
      <li><router-link to="/catalog" class="bold">Catalog</router-link></li>
      <li><router-link to="/contacts" class="bold">Contacts</router-link></li>
      <li><router-link to="/about" class="bold">About us</router-link></li>
    </ul>
    <!-- <div class="navigation__logo"> -->
    <img src="../../assets/img/LogoScooters.png" alt="" />
    <!-- </div> -->
    <ul class="navigation__user-actions">
      <li><font-awesome-icon icon="fa-solid fa-phone" class="svg-medium" /></li>
      <li><font-awesome-icon icon="fa-solid fa-person" class="svg-medium" /></li>
      <li><font-awesome-icon icon="fa-solid fa-heart" class="svg-medium" /></li>
      <li>
        <font-awesome-icon icon="fa-solid fa-cart-shopping" class="svg-medium" />
      </li>
    </ul>
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("Categories", {
      categories: "categories",
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: "Categories/fetchCategories",
    }),
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  &__menu,
  &__logo,
  &__user-actions {
    flex: 0 0 33%;
    max-width: 33%;
  }
  &__menu,
  &__user-actions {
    list-style: none;
    display: flex;
  }
  &__menu {
    li {
      margin: 0 1rem;
      a {
        font-size: 1.5rem;
      }
    }
  }
  &__user-actions {
    justify-content: flex-end;
  }
  &__logo {
    text-align: center;
  }
}
</style>
