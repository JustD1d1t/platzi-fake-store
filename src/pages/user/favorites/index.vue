<template>
    <div v-if="!isAnyScooterInFavorite">
        <h2 class="text-center">You don't have favorite scooters</h2>
    </div>
    <div v-else>
        <h2 class="text-center">Favorite scooters</h2>
        <section class="favorite">
            <productsBrick v-for="(product, index) in user.favorite" :product="product" :key="index"
                :pickedVariant="product.id" @displayNotification="displayNotification"
                @addedToFavorite="displayNotification" />
        </section>
        <notification :show="notificationVisible" @hide="hideNotification">{{ notificationText }}</notification>
    </div>
</template>

<script>
import { mapState } from "vuex"
import productsBrick from "@/components/products/products-brick";
export default {
    components: {
        productsBrick
    },
    data() {
        return {
            notificationVisible: false,
            notificationText: undefined
        }
    },
    computed: {
        ...mapState('user', {
            user: "user"
        }),
        favorite() {
            return this.user.favorite
        },
        isAnyScooterInFavorite() {
            return Object.keys(this.user.favorite).length
        },
    },
    methods: {
        displayNotification(text) {
            this.notificationText = text;
            this.notificationVisible = true;
        },
        hideNotification() {
            this.notificationText = undefined;
            this.notificationVisible = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.favorite {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'items';
    grid-template-columns: 1fr;
    gap: 20px;

    @media screen and (min-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1023px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1399px) {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>