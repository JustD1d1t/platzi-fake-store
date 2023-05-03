<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__logo">
        <img src="../../assets/img/LogoScooters.png" alt="" />
      </div>
      <div class="footer__menu-container">
        <div class="footer__menu">
          <router-link
            v-for="(link, index) in firstColumnLinks"
            :to="link.url"
            class="footer__menu-item bold"
            :key="index"
            >{{ link.name }}</router-link
          >
        </div>
        <div class="footer__menu">
          <router-link
            v-for="(link, index) in secondColumnLinks"
            :to="link.url"
            class="footer__menu-item bold"
            :key="index"
            >{{ link.name }}</router-link
          >
        </div>
      </div>
      <div class="footer__buttons">
        <router-link to="/" class="btn btn-primary btn-wide"
          >Register</router-link
        >
        <router-link to="/" class="btn btn-secondary btn-wide"
          >Log in</router-link
        >
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__copyright">
        © ScootersStock, Inc. 2023. We love our users!
      </div>
      <div class="footer__socials">
        Follow us:
        <router-link to="/"
          ><font-awesome-icon icon="fa-solid fa-hashtag"
        /></router-link>
        <router-link to="/">
          <font-awesome-icon icon="fa-solid fa-tornado"
        /></router-link>
        <router-link to="/"
          ><font-awesome-icon icon="fa-solid fa-laptop"
        /></router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      firstColumnLinks: [
        {
          name: "Features",
          url: "/",
        },
        {
          name: "Live share",
          url: "/",
        },
        {
          name: "Video record",
          url: "/",
        },
      ],
      secondColumnLinks: [
        {
          name: "Featured artists",
          url: "/",
        },
        {
          name: "The Portal",
          url: "/",
        },
        {
          name: "Live events",
          url: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 0;
  margin-top: auto;
  &__top {
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
    border-bottom: 1px solid $primary;
    text-align: center;
    @media screen and (min-width: 767px) {
      flex-direction: row;
    }
  }
  &__bottom {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 767px) {
      justify-content: space-between;
      flex-direction: row;
      padding: 24px 0;
    }
  }
  &__menu-container {
    @include center;
    @media screen and (min-width: 767px) {
      margin-left: auto;
    }
  }
  &__menu {
    display: flex;
    flex-direction: column;
    margin: 0 24px;
    @media screen and (min-width: 1023px) {
      margin: 0 48px;
    }
  }
  &__buttons {
    display: flex;
    flex-direction: column;
  }
  &__socials {
    display: flex;
    align-items: center;
    svg {
      @include hoverSVG;
    }
  }
}
</style>
