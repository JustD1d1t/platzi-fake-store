<template>
  <h2 class="text-center">Scooters</h2>
  <div v-for="(scooter, index) in scootersMainpage.scooters" :key="index" class="scooter">
    <div class="scooter__image">
      <img :src="scooter.image" alt="" />
    </div>
    <div class="scooter__info">
      <h3>{{ scooter.name }}</h3>
      <span>{{ scooter.description }}</span>
      <the-button classes="btn btn-primary btn-big">Learn more</the-button>
    </div>
  </div>
</template>

<script>
import GP125ACGP from "@/assets/img/scooters/GP-125-ACGP.png";
import GP300LC from "@/assets/img/scooters/GP-300-LC.png";
import GT50AC from "@/assets/img/scooters/GT-50-AC.png";
export default {
  data() {
    return {
      scootersMainpage: {
        scooters: [
          {
            name: "GP 125 ACGP",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
            image: GP125ACGP,
          },
          {
            name: "GP 300 LC",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
            image: GP300LC,
          },
          {
            name: "GT 50 AC",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod amet mattis tortor sed. Integer ipsum, risus, at varius.",
            image: GT50AC,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.scooter {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;

  &__image {
    @include center;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;

      @media screen and (min-width: 1023px) {
        width: auto;
        height: auto;
      }
    }

    @media screen and (min-width: 767px) {
      flex: 0 0 60%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    margin-top: 16px;

    @media screen and (min-width: 767px) {
      align-items: flex-start;
      flex: 0 0 40%;
      text-align: left;
    }

    @media screen and (min-width: 1023px) {
      padding: 0 80px;
    }
  }

  button {
    @media screen and (min-width: 767px) {
      margin: 80px 0 30px 0;
    }
  }
}
</style>
