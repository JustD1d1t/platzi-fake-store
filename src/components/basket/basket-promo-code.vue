<template>
    <p v-if="promocodeActivated" class="basket-promo-code__activated">Discount code activated</p>
    <form @submit.prevent="submit" class="basket-promo-code" v-else>
        <component v-for="field in fields" :key="field.label" :field="field" :is="field.component" :ref="field.ref">{{
            field.label }}
        </component>
        <the-button class="btn btn-primary" ref="button">Activate</the-button>
    </form>
</template>

<script>
export default {
    props: {
        promocodeActivated: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            fields: [
                {
                    label: 'Promocode',
                    component: "the-input",
                    width: 'full',
                    ref: 'promocode'
                },
            ]
        }
    },
    methods: {
        submit() {
            const code = this.$refs.promocode[0]['$el'].querySelector("input").value;
            this.$emit("activateCode", code)
        }
    }
}
</script>

<style lang="scss" scoped>
.basket-promo-code {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 36px;

    &::v-deep(.form-field) {
        margin-bottom: 0;
    }

    &__activated {
        font-size: 24px;
        margin-bottom: 36px;
    }
}
</style>