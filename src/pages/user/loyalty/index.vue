<template>
    <h2>Loyalty points</h2>
    <div class="loyalty-points__description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nostrum vel consectetur quam facere molestias
            dolores, reiciendis corporis error incidunt accusamus in praesentium ipsam dolor exercitationem tempore eos
            fugit
            repellendus asperiores placeat at ex necessitatibus. Consequuntur inventore dolores sequi corrupti commodi nisi.
            Facere, est consectetur. In odio laboriosam nam cumque.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, alias eaque? Dicta eius autem dolorem corporis
            sint
            facilis aliquid molestiae amet doloremque tempore quisquam, porro harum animi minima nesciunt natus, quos
            adipisci
            iusto quis. Illum.</p>
    </div>
    <p class="loyalty-points__amount">For this moment you have <b>{{ user.loyaltyPoints }}</b> which you can use to reduce
        order amount.</p>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState('user', {
            user: 'user'
        }),
    }

}
</script>

<style lang="scss" scoped>
.loyalty-points {
    &__description {
        font-size: 24px;
    }

    &__amount {
        font-size: 20px;
    }
}
</style>