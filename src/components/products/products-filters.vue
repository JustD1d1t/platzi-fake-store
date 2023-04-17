<template>
    <div class="products__filters-container">
        <div class="products__filters" v-for="(filter, name) in filters" :key="filter.name">
            <span class="products__filters-header">
                {{ filter.name }}
            </span>
            <checkbox v-for="option in filter.options" :key="option" :name="option" :label="option"
                @checkboxClicked="this.$emit('setFilters', option, name)"
                :checked="activeQueries[name]?.includes(option)" />
        </div>
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
        activeQueries() {
            return this.$route.query
        }
    }
}
</script>

<style lang="scss" scoped>
.products {
    &__filters {
        margin-bottom: 8px;
    }

    &__filters-container {
        padding-right: 40px;
    }

    &__filters-header {
        padding: 0 16px;
        border: 2px solid $secondary;
        border-radius: 10px;
        font-size: 24px;
        display: block;
        margin-bottom: 8px;
    }
}
</style>