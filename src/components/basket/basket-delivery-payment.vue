<template>
    <div class="flex-column">
        <h3>Choose delivery method:</h3>
        <form @submit.prevent="submit" ref="deliveryForm">
            <div class="basket-payment-methods">
                <radio :options="options" />
            </div>
            <the-button class="btn btn-primary btn-big">Pay</the-button>
        </form>
        <the-button class="btn btn-secondary btn-big basket-payment-methods__back-button"
            @click="this.$emit('setStep', 2)">Back to the delivery method
            form</the-button>
    </div>
</template>

<script>
import visa from '@/assets/img/visa.png'
import payu from '@/assets/img/payu.png'
import mastercard from '@/assets/img/mastercard.png'
export default {
    methods: {
        submit() {
            this.$emit("setStep", 4)
        }
    },
    data() {
        return {
            options: [
                {
                    label: visa,
                    alt: 'visa',
                    name: 'payment-method',
                    required: true,
                    image: true,
                },
                {
                    label: payu,
                    alt: 'payu',
                    name: 'payment-method',
                    required: true,
                    image: true,
                },
                {
                    label: mastercard,
                    alt: 'mastercard',
                    name: 'payment-method',
                    required: true,
                    image: true,
                },
                {
                    label: visa,
                    alt: 'another',
                    name: 'payment-method',
                    required: true,
                    image: true,
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-wrap: wrap;


    & button {
        margin: 0 auto 16px auto !important;
        width: 100%;

        @media screen and (min-width: 767px) {
            width: 400px;
            margin: 0 !important;
            margin-left: auto !important;
            margin-bottom: 16px !important;
        }
    }

}

.basket-payment-methods {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
    flex-wrap: wrap;

    &__back-button {
        margin: 0 auto 16px auto !important;
        width: 100%;
        padding: 1rem !important;

        @media screen and (min-width: 767px) {
            width: 400px;
            margin: 0 !important;
            margin-left: auto !important;
        }
    }

    &::v-deep(.form-field--radio) {
        flex-grow: 1;
    }
}
</style>