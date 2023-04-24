<template>
  <header class="navigation__container" ref="navigationContainer">
    <router-link to="/" class="navigation__logo navigation__logo--mobile"
      ><img src="../../assets/img/LogoScooters.png" alt=""
    /></router-link>
    <nav class="navigation" ref="navigation">
      <ul class="navigation__menu">
        <li><router-link to="/catalog" class="bold">Catalog</router-link></li>
        <li><router-link to="/contacts" class="bold">Contacts</router-link></li>
        <li><router-link to="/about" class="bold">About us</router-link></li>
      </ul>
      <div class="navigation__logo navigation__logo--desktop">
        <router-link to="/"
          ><img src="../../assets/img/LogoScooters.png" alt=""
        /></router-link>
      </div>
      <ul class="navigation__user-actions">
        <li>
          <router-link to="/"
            ><font-awesome-icon icon="fa-solid fa-phone" class="svg-medium"
          /></router-link>
        </li>
        <li>
          <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-person" class="svg-medium" />
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <font-awesome-icon icon="fa-solid fa-heart" class="svg-medium" />
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <font-awesome-icon
              icon="fa-solid fa-cart-shopping"
              class="svg-medium"
            />
          </router-link>
        </li>
      </ul>
    </nav>
    <button
      className="navigation__hamburger"
      @click="handleMenu"
      ref="hamburger"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
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
    handleMenu() {
      this.$refs.hamburger.classList.toggle("is-active");
      this.$refs.navigation.classList.toggle("is-active");
    },
  },
  created() {
    this.fetchCategories();
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        this.$refs.navigationContainer.classList.add("active");
      } else {
        this.$refs.navigationContainer.classList.remove("active");
      }
    });
  },
};
</script>

<style lang="scss">
.navigation {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -102vw;
  width: 100vw;
  transition: transform 0.3s linear;
  background-color: $white;
  padding: 5rem 0;
  box-shadow: 0 0 12px 2px rgba($primary, 0.8);
  &.is-active {
    transform: translateX(102vw);
    @media screen and (min-width: 767px) {
      transform: translateX(300px);
    }
  }
  @media screen and (min-width: 767px) {
    left: -300px;
    width: 300px;
  }
  @media screen and (min-width: 1439px) {
    justify-content: space-between;
    align-items: center;
    position: static;
    flex-direction: row;
    box-shadow: none;
    height: auto;
    width: 100%;
    padding: 0;
  }
  &__container {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $white;
    z-index: 2;
    &.active {
      @media screen and (max-width: 1439px) {
        @include boxShadow;
      }
    }
    @media screen and (min-width: 1439px) {
      padding: 2rem 0;
      position: static;
    }
  }
  &__menu,
  &__logo--desktop,
  &__user-actions {
    @media screen and (min-width: 1439px) {
      flex: 0 0 33%;
      max-width: 33%;
    }
  }
  &__menu,
  &__user-actions {
    list-style: none;
    display: flex;
  }
  &__menu {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    @media screen and (min-width: 1439px) {
      flex-direction: row;
      justify-content: flex-start;
    }
    li {
      margin: 0 1rem;
      a {
        font-size: 1.5rem;
      }
    }
  }
  &__user-actions {
    justify-content: center;
    li {
      display: flex;
      align-items: center;
      svg {
        margin: 0.25rem 0.5rem;
        @media screen and (min-width: 1439px) {
          margin: 0.25rem;
        }
        @include hoverSVG;
      }
    }
    @media screen and (min-width: 1439px) {
      justify-content: flex-end;
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    &--mobile {
      @media screen and (min-width: 1439px) {
        display: none;
      }
    }
    &--desktop {
      display: none;
      cursor: pointer;
      @media screen and (min-width: 1439px) {
        display: flex;
      }
    }
  }
  &__hamburger {
    background-color: transparent;
    border: none;
    display: block;
    @media screen and (min-width: 1439px) {
      display: none;
    }
    &.is-active {
      transition: all 0.2s ease-in-out;
      transition-delay: 0.2s;
      transform: rotate(45deg);
      & span:nth-child(2) {
        width: 0px;
      }
      & span:nth-child(1),
      & span:nth-child(3) {
        transition-delay: 0.2s;
      }
      & span:nth-child(1) {
        transform: translateY(13px);
      }
      & span:nth-child(3) {
        transform: translateY(-6px) rotate(90deg);
      }
    }
    &:hover {
      cursor: pointer;
    }
    & > span {
      display: block;
      width: 30px;
      height: 3px;
      margin: 6px auto;
      background-color: black;
      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
