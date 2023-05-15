<template>
    <div class="products-active-filters" v-if="formattedQueries.length">
        <span class="products-active-filters__title">Filters:</span>
        <span class="products-active-filters__item" v-for="query in formattedQueries" :key="query">{{ query.value }} <small
                @click="this.$emit('removeFilter', query)">&#x2715;</small></span>
        <the-button class="btn btn-primary btn-small no-shadow" @click="this.$emit('resetFilters')">Reset
            filters</the-button>
    </div>
</template>

<script>
export default {
    props: {
        filters: {
            type: Object,
            default: () => { }
        }
    },
    computed: {
        formattedQueries() {
            const q = this.$route.query;
            const formattedQueries = [];
            for (const key in q) {
                if (this.filters[key]) {
                    if (Array.isArray(q[key])) {
                        formattedQueries.push(...q[key].map(query => ({
                            type: key,
                            value: query,
                        })))
                    } else {
                        formattedQueries.push({
                            type: key,
                            value: q[key]
                        })
                    }
                }
            }
            return formattedQueries
        }
    },

}
</script>

<style lang="scss" scoped>
.products-active-filters {
    margin-bottom: 24px;

    &__title {
        margin-right: 16px;
    }

    &__item {
        padding: 4px 8px;
        margin-right: 8px;
        border: 2px solid $secondary;
        border-radius: 10px;
    }

    small {
        cursor: pointer;
    }
}
</style>