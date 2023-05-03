<template>
    <div class="flex-column">
        <h3>Choose delivery method:</h3>
        <form @submit.prevent="submit" ref="deliveryForm">
            <div class="basket-delivery-methods">
                <radio :options="options" />
            </div>
            <the-button class="btn btn-primary btn-big">Go to the payment</the-button>
        </form>
        <the-button class="btn btn-secondary btn-big basket-delivery-methods__back-button"
            @click="this.$emit('setStep', 1)">Back to the delivery data
            form</the-button>
    </div>
</template>

<script>
import dpd from '@/assets/img/dpd.png'
import inpost from '@/assets/img/inpost.png'
import poczta from '@/assets/img/poczta.png'
export default {
    methods: {
        submit() {
            console.log('submit')
            this.$emit("setStep", 3)
        }
    },
    data() {
        return {
            options: [
                {
                    label: inpost,
                    alt: 'inpost',
                    name: 'delivery-method',
                    required: true,
                    image: true,
                },
                {
                    label: dpd,
                    alt: 'dpd',
                    name: 'delivery-method',
                    required: true,
                    image: true,
                },
                {
                    label: poczta,
                    alt: 'poczta',
                    name: 'delivery-method',
                    required: true,
                    image: true,
                },
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
            margin: 0 !important;
            margin-left: auto !important;
            margin-bottom: 16px !important;
            width: 400px;
        }
    }

}

.basket-delivery-methods {
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