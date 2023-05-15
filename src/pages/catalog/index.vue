<template>
  <section class="catalog">
    <div class="catalog__toggle-filters" v-if="!isComputerDevice">
      <the-button class="btn-svg" @click="toggleFilters">
        <font-awesome-icon icon="fa-solid fa-filter" class="svg-big" />
      </the-button>
    </div>
    <products-active-filters @removeFilter="removeFilter" @resetFilters="resetFilters" :filters="filters" />
    <div class="catalog__filters" ref="filters">
      <productsFilters :filters="filters" @setFilters="setFilters" @saveFilters="saveFilters" />
    </div>
    <div class="catalog__items">
      <productsBrick v-for="(product, index) in products" :product="product" :key="index"
        @displayNotification="displayNotification" />
    </div>
    <pagination :nextDisabled="nextPageLinkDisabled" :prevDisabled="prevPageLinkDisabled" @nextPage="getNextScooters"
      @prevPage="getPrevScooters" />
  </section>
  <notification :show="notificationVisible">{{ notificationText }}</notification>
</template>

<script>
import productsBrick from '../../components/products/products-brick';
import productsFilters from '@/components/products/products-filters'
import productsActiveFilters from '@/components/products/products-active-filters'
import { getProductsData } from '../../mock/products';
import isComputer from '../../helpers/isComputer';

const pageSize = 6;

export default {
  components: {
    productsBrick,
    productsFilters,
    productsActiveFilters
  },
  data() {
    return {
      products: [],
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
      notificationVisible: false,
      notificationText: undefined,
      nextPageLink: '',
      prevPageLink: '',
    }
  },
  computed: {
    isComputerDevice() {
      return isComputer();
    },
    nextPageLinkDisabled() {
      return this.nextPageLink === undefined
    },
    prevPageLinkDisabled() {
      return this.prevPageLink === undefined
    },
    offset() {
      return this.$route.query.offset ? Number(this.$route.query.offset) : 0;
    }
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
      const resPagination = getProductsData(0, this.query)
      this.nextPageLink = resPagination.nextPageLink;
      this.prevPageLink = resPagination.prevPageLink;
      this.products = resPagination.products;
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
      const resPagination = getProductsData(0, {});
      this.nextPageLink = resPagination.nextPageLink;
      this.prevPageLink = resPagination.prevPageLink;
      this.products = resPagination.products;
    },
    displayNotification(text) {
      this.notificationVisible = true;
      this.notificationText = text;
      setTimeout(() => {
        this.notificationText = undefined;
        this.notificationVisible = false;
      }, 1500);
    },
    getNextScooters() {
      this.$router.push(this.nextPageLink)
      const filters = { ...this.$route.query }
      const resPagination = getProductsData(this.offset + pageSize, filters);
      this.nextPageLink = resPagination.nextPageLink;
      this.prevPageLink = resPagination.prevPageLink;
      this.products = resPagination.products;
    },
    getPrevScooters() {
      this.$router.push(this.prevPageLink)
      const filters = { ...this.$route.query }
      const resPagination = getProductsData(this.offset - pageSize, filters);

      this.nextPageLink = resPagination.nextPageLink;
      this.prevPageLink = resPagination.prevPageLink;
      this.products = resPagination.products;
    }
  },
  watch: {
    '$route.query'() {
    }
  },
  mounted() {
    const filters = { ...this.$route.query }
    const resPagination = getProductsData(this.offset, filters)
    this.nextPageLink = resPagination.nextPageLink;
    this.prevPageLink = resPagination.prevPageLink;
    this.products = resPagination.products;
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
  grid-template-rows: 50px auto 1fr;
  grid-template-areas: 'filter' 'items';

  @media screen and (min-width: 1399px) {
    grid-template-columns: 250px 1fr 1fr 1fr;
    grid-template-areas: '. active-filters active-filters active-filters' 'filters items items items' 'filters pagination pagination pagination';
  }

  &:deep(.products-active-filters) {
    grid-area: active-filters
  }

  &:deep(.pagination) {
    grid-area: pagination
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
