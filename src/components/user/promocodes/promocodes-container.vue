<template>
    <section class="promocodes">
        <promocode-item v-for="promocode in promocodes" :promocode="promocode" :key="promocode.code"
            :activePromocode="activePromocode" @setActivePromocode="this.$emit('setActivePromocode', promocode.code)" />
    </section>
</template>

<script>
import promocodeItem from '@/components/user/promocodes/promocode-item'
export default {
    components: {
        promocodeItem
    },
    props: {
        promocodes: {
            type: Array,
            default: () => { }
        },
        activePromocode: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.promocodes {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr;
    gap: 20px;

    @media screen and (min-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 1023px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1199px) {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>