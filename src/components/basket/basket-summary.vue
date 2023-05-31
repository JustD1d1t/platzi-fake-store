<template>
    <div class="basket-summary">
        <div class="basket-summary__top">
            <h3>Total</h3>
            <h4>{{ totalCost.toFixed(2) }}</h4>
        </div>
        <div class="basket-summary__content">
            <basketSummaryItem v-for="scooter in addedToCart" :key="scooter.name" :scooter="scooter" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import basketSummaryItem from '@/components/basket/basket-summary-item'
export default {
    components: {
        basketSummaryItem
    },
    props: {
        totalCost: {
            type: Number,
            default: 0
        }
    },
    computed: {
        ...mapState('user', [
            'addedToCart',
        ]),
    }
}
</script>

<style lang="scss" scoped>
.basket-summary {
    border: 1px solid $light-gray;
    border-radius: 10px;
    max-height: 500px;
    overflow: auto;
    background-color: white;

    @include scrollBar;

    &__content {
        padding: 0 16px;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        position: sticky;
        top: 0;
        background-color: white;
        padding: 16px;

        h3,
        h4 {
            margin-bottom: 0;
        }
    }
}
</style>