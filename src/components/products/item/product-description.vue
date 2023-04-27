<template>
    <div class="product__description">
        <router-link :to="`/product/${id}`" v-if="nameLink" class="product__name product__name--link">{{ name
        }}</router-link>
        <h1 v-else class="product__name">{{ name }}</h1>
        <div class="product__rating">{{ rating }} <span>({{ numberOfVotes }})</span></div>
    </div>
    <div class="product__add-to-cart">
        <the-button classes="btn-svg" @click="this.$emit('addToCart')">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" class="svg-big" />
        </the-button>
    </div>
    <slot />
    <h4 class="product__price">
        {{ price }}
    </h4>
</template>

<script>
export default {
    emits: ['addToCart', 'changeColor'],
    props: {
        name: {
            type: String,
            default: ''
        },
        rating: {
            type: Number,
            default: NaN
        },
        numberOfVotes: {
            type: Number,
            default: NaN
        },
        price: {
            type: Number,
            default: NaN
        },
        availableColors: {
            type: Array,
            default: () => []
        },
        selectedVariant: {
            type: Number,
            default: NaN
        },
        nameLink: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            deafult: '',
        }
    },
    methods: {
        changeColor(index) {
            this.$emit('changeColor', index)
        }
    }

}
</script>

<style lang="scss" scoped>
.product {
    &__name {
        &--link {
            font-size: 1.953rem;
        }
    }
}
</style>