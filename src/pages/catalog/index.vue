<template>
  <section class="catalog">
    <div class="catalog__toggle-filters" v-if="!isComputerDevice">
      <the-button class="btn-svg" @click="toggleFilters">
        <font-awesome-icon icon="fa-solid fa-filter" class="svg-big" />
      </the-button>
    </div>
    <div class="catalog__toggle-filters catalog__toggle-filters--computer" v-else>
      <the-button class="btn-svg" @click="toggleFilters">
        <font-awesome-icon icon="fa-solid fa-filter" class="svg-big" />
      </the-button>
    </div>
    <products-active-filters @removeFilter="removeFilter" @resetFilters="resetFilters" />
    <div class="catalog__filters" ref="filters">
      <productsFilters :filters="filters" @setFilters="setFilters" @saveFilters="saveFilters" />
    </div>
    <div class="catalog__items">
      <productsBrick v-for="(product, index) in filteredProducts" :product="product" :key="index"
        @addedToCart="displayAddedNotification" />
    </div>
  </section>
  <notification :show="addedToCart">Added to cart</notification>
</template>

<script>
import productsBrick from '../../components/products/products-brick';
import productsFilters from '@/components/products/products-filters'
import productsActiveFilters from '@/components/products/products-active-filters'
import { products } from '../../mock/products';
import isComputer from '../../helpers/isComputer';

export default {
  components: {
    productsBrick,
    productsFilters,
    productsActiveFilters
  },
  data() {
    return {
      products: products,
      filters: {
        manufacturer: {
          name: 'Manufacturer',
          options: [
            {
              label: 'Forte',
              component: "checkbox"
            },
            {
              label: 'Honda',
              component: "checkbox"
            },
            {
              label: 'Moto Tech',
              component: "checkbox"
            },
            {
              label: 'Mustang',
              component: "checkbox"
            },
            {
              label: 'Spark',
              component: "checkbox"
            },
            {
              label: 'Suzuki',
              component: "checkbox"
            },
            {
              label: 'Viper',
              component: "checkbox"
            },
            {
              label: 'Yiben',
              component: "checkbox"
            },
            {
              label: 'Yamaha',
              component: "checkbox"
            },
          ]
        },
        country: {
          name: 'Country',
          options: [
            {
              label: 'Japan',
              component: "checkbox"
            },
            {
              label: 'China',
              component: "checkbox"
            }
          ]
        },
        powerType: {
          name: 'Power Type',
          options: [
            {
              label: 'petrol',
              component: "checkbox"
            },
            {
              label: 'electric',
              component: "checkbox"
            }
          ]
        },
        engineCapacity: {
          name: 'Engine Capacity',
          options: [
            {
              label: '50',
              component: "checkbox"
            },

            {
              label: '80',
              component: "checkbox"
            },
            {
              label: '100',
              component: "checkbox"
            },
            {
              label: '125',
              component: "checkbox"
            },
            {
              label: '150',
              component: "checkbox"
            }
          ]
        },
        wheelSize: {
          name: 'Wheel Size',
          options: [
            {
              label: '10',
              component: "checkbox"
            },
            {
              label: '12',
              component: "checkbox"
            }
          ],
        },
        seats: {
          name: 'Seats',
          options: [
            {
              label: '1',
              component: "checkbox"
            },
            {
              label: '2',
              component: "checkbox"
            }
          ]
        }
      },
      query: {},
      addedToCart: false,
    }
  },
  computed: {
    filteredProducts() {
      const filters = { ...this.$route.query }
      if (filters && Object.keys(filters).length === 0) {
        return this.products
      }
      let filteredProducts = [...this.products];
      if (filters.manufacturer) {
        filteredProducts = filteredProducts.filter(product => filters.manufacturer.includes(product.manufacturer))
      }
      if (filters.country) {
        filteredProducts = filteredProducts.filter(product => filters.country.includes(product.country))
      }
      if (filters.powerType) {
        filteredProducts = filteredProducts.filter(product => filters.powerType.includes(product.powerType))
      }
      if (filters.engineCapacity) {
        filteredProducts = filteredProducts.filter(product => filters.engineCapacity.includes(product.engineCapacity))
      }
      if (filters.wheelSize) {
        filteredProducts = filteredProducts.filter(product => filters.wheelSize.includes(product.wheelSize))
      }
      if (filters.seats) {
        filteredProducts = filteredProducts.filter(product => filters.seats.includes(product.seats))
      }
      return filteredProducts;
    },
    isComputerDevice() {
      return isComputer();
    },
  },
  methods: {
    setFilters(label, type) {
      if (this.query[type]) {
        if (this.query[type].includes(label)) {
          this.query[type] = [...this.query[type].filter(q => q !== label)]
          if (this.query[type].length === 0) {
            delete this.query[type]
          }
        } else {
          this.query[type] = [...this.query[type], label]
        }
      } else {
        this.query[type] = [label]
      }
    },
    saveFilters() {
      const query = this.query;
      this.$router.push({ query })
    },
    toggleFilters() {
      document.body.classList.toggle('overflow-hidden')
      this.$refs.filters.classList.toggle('active');
    },
    removeFilter(query) {
      const queries = this.query[query.type]
      if (Array.isArray(queries)) {
        this.query[query.type] = queries.filter(q => q !== query.value)
        if (this.query[query.type].length === 0) {
          delete this.query[query.type]
        }
      } else {
        delete this.query[query.type]
      }
      this.saveFilters();
    },
    resetFilters() {
      this.query = {};
      this.$router.push('/catalog');
    },
    displayAddedNotification() {
      this.addedToCart = true;
      setTimeout(() => {
        this.addedToCart = false;
      }, 1500);
    }
  },
  watch: {
    '$route.query'() {
    }
  },
  mounted() {
    this.query = { ...this.$route.query }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023) {
        this.$refs.filters.classList.remove("active")
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto 1fr;
  grid-template-areas: 'filter' 'items';

  @media screen and (min-width: 1399px) {
    grid-template-columns: 250px 1fr 1fr 1fr;
    grid-template-areas: 'filters active-filters active-filters active-filters' 'filters items items items';
  }

  &:deep(.products-active-filters) {
    grid-area: active-filters
  }

  &__filters {
    position: absolute;
    left: -100vw;
    background-color: $white;
    transition: transform 0.3s linear;
    z-index: 2;
    height: calc(100vh - 108px);
    padding: 16px 32px 16px 16px;

    @media screen and (min-width: 1399px) {
      position: static;
      padding: 0 16px 16px 0;
      height: auto;
    }

    &.active {
      transform: translateX(calc(100vw - 8px));
      overflow: auto;
    }

    @media screen and (min-width: 1023px) {
      grid-area: filters;
    }
  }

  &__items {
    grid-area: items;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto auto 1fr;
    gap: 35px 52px;

    @media screen and (min-width: 1023px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: auto auto 1fr;
      gap: 35px 52px;
    }
  }

  &__toggle-filters {
    grid-area: filter;
    justify-self: flex-end;
    margin-bottom: 16px;
  }
}
</style>
