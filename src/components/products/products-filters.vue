<template>
    <div class="products__filters-container" v-for="(filter, name) in filters" :key="filter.name">
        <span class="products__filters-header" role="button" @click="toggleFilters(name)">
            {{ filter.name }}
        </span>
        <div class="products__filters" :ref="name">
            <checkbox v-for="option in filter.options" :key="option" :name="option" :label="option"
                @checkboxClicked="this.$emit('setFilters', option, name)"
                :checked="activeQueries[name]?.includes(option)" />
        </div>
    </div>
    <the-button class="btn btn-primary btn-big" @click="this.$emit('saveFilters')">Save filters</the-button>
</template>

<script>
export default {
    props: {
        filters: {
            type: Object,
            default: () => { }
        },
        refName: {
            type: String,
            default: ''
        }
    },
    computed: {
        activeQueries() {
            return this.$route.query
        }
    },
    methods: {
        toggleFilters(name) {
            const filter = this.$refs[name][0];
            // this.$refs[name][0].classList.toggle('active')
            if (filter.style.height) {
                filter.style.height = ""
            } else {
                filter.style.height = filter.scrollHeight + "px"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.products {
    &__filters-container {
        margin-bottom: 8px;
    }

    &__filters {
        transition: height 0.15s linear;
        overflow: hidden;
        height: 0;
    }

    &__filters-header {
        padding: 0 16px;
        border: 2px solid $secondary;
        border-radius: 10px;
        font-size: 24px;
        display: block;
        margin-bottom: 8px;
        cursor: pointer;
    }
}
</style>