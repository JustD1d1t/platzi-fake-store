<template>
    <h2 class="promocodes__title">Promocodes</h2>
    <p class="promocodes__info"><strong>You can use only one promocode per order.</strong></p>
    <promocodes-container :promocodes="user.promocodes" :activePromocode="user.activePromocode"
        @setActivePromocode="setActivePromocode" />
</template>

<script>
import promocodesContainer from '@/components/user/promocodes/promocodes-container'
import { mapState, mapMutations } from "vuex"
export default {
    components: {
        promocodesContainer
    },

    computed: {
        ...mapState('user', {
            user: 'user'
        })
    },
    methods: {
        ...mapMutations('user', {
            setNewPromocodeActive: 'setNewPromocodeActive'
        }),
        setActivePromocode(code) {
            this.setNewPromocodeActive({ promocode: code })
        }
    }

}
</script>

<style lang="scss" scoped>
.promocodes {
    &__title {
        margin-bottom: 0;
    }

    &__info {
        font-size: 16px;
    }
}
</style>