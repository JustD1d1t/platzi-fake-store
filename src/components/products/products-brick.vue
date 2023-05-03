<template>
    <div class="products-brick">
        <div class="products-brick__top">
            <the-button class="btn-svg" @click="toggleFavourite">
                <font-awesome-icon v-if="isInFavorites" icon="fa-solid fa-heart" class="svg-big"
                    @click="() => removeFromFavorite({ scooterId: product.variants[selectedVariant].id })" />
                <font-awesome-icon v-else icon="fa-regular fa-heart" class="svg-big"
                    @click="() => addToFavorite({ scooterId: product.variants[selectedVariant].id })" />
            </the-button>
        </div>
        <div class="products-brick__image">
            <img :src="product.variants[selectedVariant].image" alt="">
        </div>
        <div class="products-brick__bottom">
            <product-description :name="product.name" :rating="product.variants[selectedVariant].rating"
                :number-of-votes="product.variants[selectedVariant].numberOfVotes" :price="product.price"
                :available-colors="availableColors" :selectedVariant="selectedVariant"
                :id="product.variants[selectedVariant].id" :name-link="true" @changeColor="changeColor" @addToCart="() => addToCart({
                    scooter: product,
                    selectedVariant: selectedVariant
                })">
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
        ]),
        availableColors() {
            return this.product.variants.map(variant => variant.color)
        },
        isInFavorites() {
            return this.favorite.includes(this.product.variants[this.selectedVariant].id)
        }
    },
    methods: {
        ...mapMutations('user', [
            'addToFavorite',
            'removeFromFavorite',
            'addToCart'
        ]),
        toggleFavourite() {
            this.favourite = !this.favourite;
        },
        changeColor(index) {
            this.selectedVariant = index;
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