<template>
    <div class="products-brick">
        <div class="products-brick__top">
            <the-button class="btn-svg" @click="handleFavorite">
                <font-awesome-icon v-if="isInFavorites" icon="fa-solid fa-heart" class="svg-big" />
                <font-awesome-icon v-else icon="fa-regular fa-heart" class="svg-big" />
            </the-button>
        </div>
        <div class="products-brick__image">
            <img :src="product.variants[selectedVariant].image" alt="">
        </div>
        <div class="products-brick__bottom">
            <product-description :name="product.name" :rating="product.variants[selectedVariant].rating"
                :number-of-votes="product.variants[selectedVariant].numberOfVotes" :price="product.price"
                :available-colors="availableColors" :selectedVariant="selectedVariant"
                :id="product.variants[selectedVariant].variantId" :name-link="true" @changeColor="changeColor"
                @addToCart="addScooterToCart">
                <products-brick-colors :available-colors="availableColors" :selected-variant="selectedVariant"
                    @changeColor="changeColor" />
            </product-description>
        </div>
    </div>
</template>

<script>
import productDescription from '@/components/products/item/product-description'
import productsBrickColors from '@/components/products/products-brick-colors'
import { mapMutations, mapState } from 'vuex'
export default {
    emits: ['displayNotification'],
    components: {
        productDescription,
        productsBrickColors
    },
    props: {
        product: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            selectedVariant: 0,
        }
    },
    computed: {
        ...mapState('user', [
            'favorite',
            'user'
        ]),
        availableColors() {
            return this.product.variants.map(variant => variant.color)
        },
        isInFavorites() {
            const currentVariantId = this.product.variants[this.selectedVariant].variantId;
            if (Object.keys(this.user).length) {
                return this.user.favorite[currentVariantId]
            } else return this.favorite[currentVariantId]
        },
    },
    methods: {
        ...mapMutations('user', [
            'toggleFavorite',
            'addToCart'
        ]),
        changeColor(index) {
            this.selectedVariant = index;
        },
        addScooterToCart() {
            this.addToCart({
                scooter: this.product,
                selectedVariant: this.selectedVariant
            });
            this.$emit("displayNotification", "Added to cart")
        },
        handleFavorite() {
            this.$emit("displayNotification", this.isInFavorites ? 'Removed from favorites' : 'Added to favorites')
            this.toggleFavorite({
                scooter: this.product,
                selectedVariant: this.selectedVariant
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.products-brick {
    border: 1px solid $gray;
    padding: 8px;

    &__top {
        display: flex;
        justify-content: flex-end;
    }

    &__image {
        aspect-ratio: 1/1;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__bottom {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
        grid-template-areas: 'description cart' 'colors price';

        &:deep(.product__name) {
            margin-bottom: 0;
        }

        &:deep(.product__description) {
            grid-area: description;
        }

        &:deep(.product__add-to-cart) {
            grid-area: cart;
            justify-self: end;
            align-self: end;
        }

        &:deep(.products-brick__colors) {
            grid-area: colors;
        }

        &:deep(.product__price) {
            grid-area: price;
            justify-self: end;
            margin-bottom: 0;
        }
    }

}
</style>