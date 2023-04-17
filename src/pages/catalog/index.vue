<template>
  <section class="catalog">
    <div class="catalog__filters">
      <productsFilters :filters="filters" :filteredProducts="filteredProducts" @setFilters="setFilters" />
    </div>
    <div class="catalog__items">
      <productsBrick v-for="(product, index) in filteredProducts" :product="product" :key="index" />
    </div>
  </section>
</template>

<script>
import productsBrick from '../../components/products/products-brick';
import productsFilters from '@/components/products/products-filters'
import { products } from '../../mock/products';

export default {
  components: {
    productsBrick,
    productsFilters
  },
  data() {
    return {
      products: products,
      filters: {
        manufacturer: {
          name: 'Manufacturer',
          options: ['Forte', 'Honda', 'Moto Tech', 'Mustang', 'Spark', 'Suzuki', 'Viper', 'Yiben', 'Yamaha']
        },
        country: {
          name: 'Country',
          options: ['Japan', 'China']
        },
        powerType: {
          name: 'Power Type',
          options: ['petrol', 'electric']
        },
        engineCapacity: {
          name: 'Engine Capacity',
          options: ['50', '80', '100', '125', '150']
        },
        wheelSize: {
          name: 'Wheel Size',
          options: ['10', '12'],
        },
        seats: {
          name: 'Seats',
          options: ['1', '2']
        }
      }
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
    }
  },
  methods: {
    setFilters(name, type) {
      const query = { ...this.$route.query }

      if (query[type]) {
        if (query[type].includes(name)) {
          query[type] = [...query[type].filter(q => q !== name)]
          if (query[type].length === 0) {
            delete query[type]
          }
        } else {
          query[type] = [...query[type], name]
        }
      } else {
        query[type] = [name]
      }

      this.$router.push({ query })
    }
  },
  watch: {
    '$route.query'() {
      console.log('a')
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  display: grid;
  grid-template-columns: 250px 1fr 1fr 1fr;
  grid-template-areas: 'filters items items items';

  &__filters {
    grid-area: filters;
  }

  &__items {
    grid-area: items;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto 1fr;
    gap: 35px 52px;
  }
}
</style>
