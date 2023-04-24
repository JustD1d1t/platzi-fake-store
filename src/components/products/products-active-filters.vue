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
    data() {
        return {
            formattedQueries: [],
        }
    },
    props: {
        queries: {
            type: Object,
            default: () => { }
        }
    },
    methods: {
        setActiveFilters() {
            const q = this.queries;
            this.formattedQueries = [];
            for (const key in q) {
                if (Array.isArray(q[key])) {
                    this.formattedQueries.push(...q[key].map(query => ({
                        type: key,
                        value: query,
                    })))
                } else {
                    this.formattedQueries.push({
                        type: key,
                        value: q[key]
                    })
                }
            }

        }
    },
    updated() {
        this.setActiveFilters();
    },
    watch: {
        '$route.query'() {
            this.setActiveFilters();
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