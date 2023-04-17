<template>
    <section>
        <div class="product__general">
            <div class="product__image">
                <img :src="product.image" alt="">
            </div>
            <div class="product__details">
                <div class="product__main-info">
                    <product-description :name="product.name" :rating="product.rating"
                        :number-of-votes="product.numberOfVotes" :price="product.price">
                        <product-item-colors :available-colors="product.colors" :selected-variant="$route.params.id" />
                    </product-description>
                </div>
                <div class="product__description">
                    <p>{{ product.description }}</p>
                </div>
                <the-button class="btn btn-primary product__add-cart-button" @click="addBag">Add to Bag</the-button>
            </div>
        </div>
        <product-header>SPECIFICATIONS</product-header>
        <product-specifications :data="preparedDataTable" />
        <product-header>SHIPPING RATES</product-header>
        <div class="product__delivery-container">
            <product-delivery-table :data="this.product.deliveryTime" />
        </div>
    </section>
</template>

<script>
import { products } from '../../mock/products';
import productDescription from '@/components/products/item/product-description';
import productItemColors from '../../components/products/item/product-item-colors.vue';
import productHeader from '@/components/products/item/product-header'
import productSpecifications from '../../components/products/item/product-specifications.vue';
import productDeliveryTable from '@/components/products/item/product-delivery-table'
export default {
    components: {
        productDescription,
        productItemColors,
        productHeader,
        productSpecifications,
        productDeliveryTable
    },
    data() {
        return {
            products: products
        }
    },
    computed: {
        product() {
            const productLookingFor = this.products.find((product) => product.variants.some((variant) => variant.id === this.$route.params.id))
            const variantLookingFor = productLookingFor.variants.find((variant) => variant.id === this.$route.params.id)
            return {
                name: productLookingFor.name,
                price: productLookingFor.price,
                manufacturer: productLookingFor.manufacturer,
                country: productLookingFor.country,
                powerType: productLookingFor.powerType,
                engineCapacity: productLookingFor.engineCapacity,
                wheelSize: productLookingFor.wheelSize,
                seats: productLookingFor.seats,
                id: variantLookingFor.id,
                rating: variantLookingFor.rating,
                numberOfVotes: variantLookingFor.numberOfVotes,
                image: variantLookingFor.image,
                description: variantLookingFor.description,
                fastestDeliveryTime: variantLookingFor.fastestDeliveryTime,
                deliveryTime: variantLookingFor.deliveryTime,
                topSpeed: productLookingFor.topSpeed,
                colors: productLookingFor.variants.map(variant => ({
                    id: variant.id,
                    color: variant.color,
                    active: variant.id === this.$route.params.id
                }))

            };
        },
        preparedDataTable() {
            return {
                'Capacity': this.product.engineCapacity,
                'Top Speed': this.product.topSpeed,
                'Delivery time': this.product.fastestDeliveryTime,
                'Wheel Size': this.product.wheelSize
            }
        }
    },
    methods: {
        addBag() {
            console.log('addBag')
        }
    }

}
</script>

<style lang="scss" scoped>
.product {
    &__general {
        display: grid;
        margin-bottom: 24px;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, auto);

        @media screen and (min-width: 1023px) {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    &__image {
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            max-height: 400px;
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
    }

    &__main-info {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(2, auto);
        grid-template-areas: 'description cart' 'colors price';

        &:deep(.product__add-to-cart) {
            display: none;
        }

        &:deep(.product__colors) {
            grid-area: colors;
        }

        &:deep(.product__name) {
            margin-bottom: 0;
        }

        &:deep(.product__price) {
            grid-area: price;
            justify-self: end;
            margin-bottom: 0;
        }
    }

    &__add-cart-button {
        margin-top: auto !important;

        @media screen and (min-width: 1023px) {
            align-self: flex-end;
        }
    }

    &__delivery-container {
        width: 90%;
        margin: 0 auto;
        overflow-x: auto;
    }
}
</style>