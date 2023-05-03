<template>
    <div v-if="step === 0">
        <h2 class="text-center" v-if="!isAnyScooterInCart">There is no items in your basket</h2>
        <div v-else class="basket-items">
            <basketItem v-for="scooter in addedToCart" :key="scooter.id" :scooter="scooter" />
        </div>
        <the-button class="btn btn-primary btn-big finish-shopping-button" @click="() => setStep(1)">Finish
            shopping</the-button>
    </div>
    <div v-if="step === 1">
        <basketStepCounter step="one" />
        <h2>Delivery Data</h2>
        <div class="basket-step-one__container">
            <basketDeliveryForm @setStep="setStep" class="basket-step-one__form" />
            <div class="basket-step-one__details">
                <basketPromoCode @activateCode="activateCode" :promocodeActivated="isPromocodeActivated" />
                <basketSummary :total-cost="totalCost" />
            </div>
        </div>
    </div>
    <div v-if="step === 2">
        <basketStepCounter step="two" />
        <h2>Delivery Methods</h2>
        <basketDeliveryMethod @setStep="setStep" />
    </div>
    <div v-if="step === 3">
        <basketStepCounter step="three" />
        <h2>Payment Methods</h2>
        <basketDeliveryPayment @setStep="setStep" />
    </div>
    <div class="success-page" v-if="step === 4">
        <h2><b>Success!</b></h2>
        <div class="success-page__icon"></div>
        <h3>Thank you for your order!</h3>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import basketItem from '@/components/basket/basket-item'
import basketStepCounter from '@/components/basket/basket-step-counter'
import basketDeliveryForm from '@/components/basket/basket-delivery-form'
import basketPromoCode from "@/components/basket/basket-promo-code"
import basketSummary from '@/components/basket/basket-summary'
import basketDeliveryMethod from '@/components/basket/basket-delivery-method'
import basketDeliveryPayment from '@/components/basket/basket-delivery-payment'

export default {
    components: {
        basketItem,
        basketStepCounter,
        basketDeliveryForm,
        basketPromoCode,
        basketSummary,
        basketDeliveryMethod,
        basketDeliveryPayment
    },
    data() {
        return {
            step: 0,
            deliveryData: {},
            promocodeActivated: false,
        }
    },
    computed: {
        ...mapState('user', [
            'addedToCart',
        ]),
        isAnyScooterInCart() {
            return Object.keys(this.addedToCart).length
        },
        totalCost() {
            let total = 0;

            for (const key in this.addedToCart) {
                total += this.addedToCart[key].quantity * this.addedToCart[key].price
            }

            return total;
        },
        isPromocodeActivated() {
            return this.promocodeActivated;
        }
    },
    methods: {
        setStep(step) {
            console.log('aa')
            this.step = step
        },
        activateCode(code) {
            if (code === "promocode") {
                this.promocodeActivated = true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.basket-items {
    max-height: 70vh;
    overflow: auto;

    @include scrollBar;
}

.finish-shopping-button {
    margin-left: auto !important;
    display: block;
    margin-top: 40px !important;
}

.basket-step-one {
    &__container {
        display: grid;
        grid-template-columns: 1fr;

        @media screen and (min-width: 1023px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    &__details {
        display: flex;
        flex-direction: column;
        justify-self: end;
        width: 100%;
        order: 1;
        margin-bottom: 32px;

        @media screen and (min-width: 1023px) {
            width: 350px;
            order: 2;
        }
    }

    &__form {
        order: 2;

        @media screen and (min-width: 1023px) {
            order: 1;
        }
    }
}

.success-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    justify-content: center;

    &__icon {
        width: 150px;
        height: 150px;
        border-radius: 75px;
        background-color: $secondary;
        position: relative;
        margin-bottom: 24px;

        &::before {
            content: "";
            border-bottom: 5px solid $white;
            border-right: 5px solid $white;
            height: 80px;
            width: 20px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(calc(-50% + 4px)) translateY(calc(-50% - 8px)) rotateZ(45deg);
        }
    }
}
</style>