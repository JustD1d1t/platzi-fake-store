<template>
    <div class="basket-item__quantity">
        <button class="basket-item__quantity-toggler" @click="() => decreaseQuantity({ scooter: scooter })">-</button>
        <span class="basket-item__quantity-counter">{{ scooter.quantity }}</span>
        <button class="basket-item__quantity-toggler" @click="() => increaseQuantity({ scooter: scooter })">+</button>
        <span class="basket-item__quantity-price">{{ price.toFixed(2) }}</span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        scooter: {
            type: Object,
            default: () => { }
        }
    },
    computed: {
        price() {
            return this.scooter.quantity * this.scooter.price;
        }
    },
    methods: {
        ...mapMutations('user', ['increaseQuantity', 'decreaseQuantity'])
    }
}
</script>

<style lang="scss" scoped>
.basket-item {
    &__quantity {
        display: flex;
        align-items: center;
        font-size: 30px;
        line-height: 1;
        margin-bottom: auto;

        @media screen and (min-width: 1199px) {
            width: 300px;
            margin-left: 30px;
        }
    }

    &__quantity-toggler {
        border: none;
        background-color: transparent;
        font-size: 30px;
        margin: 16px;
        cursor: pointer;
    }

    &__quantity-price {
        width: 150px;
        margin-left: auto;

        @media screen and (min-width: 1199px) {
            margin-left: 30px;
        }
    }
}
</style>