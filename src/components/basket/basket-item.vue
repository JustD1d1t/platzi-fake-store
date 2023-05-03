<template>
    <div class="basket-item">
        <div class="basket-item__image">
            <img :src="scooter.image" :alt="scooter.name">
        </div>
        <div class="basket-item__details">
            <h2 class="basket-item__title">{{ scooter.name }}</h2>
            <div class="basket-item__rating">{{ scooter.rating }} <span>({{ scooter.numberOfVotes }})</span></div>
            <p class="basket-item__description">{{ scooter.description }}</p>
            <basket-quantity :scooter="scooter" />
        </div>
    </div>
</template>

<script>
import basketQuantity from '@/components/basket/basket-quantity'
export default {
    components: {
        basketQuantity
    },
    props: {
        scooter: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped>
.basket-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media screen and (min-width: 1199px) {
        flex-direction: row;
    }

    &__image {
        min-width: 400px;
        width: 400px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__details {
        flex-grow: 1;
        display: grid;
        width: 100%;

        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
        grid-template-areas: "title" "quantity" "rating" "description";

        @media screen and (min-width: 766px) {
            grid-template-columns: 1fr auto;
            grid-template-rows: repeat(3, auto);
            grid-template-areas: "title quantity" "rating ." "description description ";
        }

        @media screen and (min-width: 1199px) {
            grid-template-columns: 1fr 1fr 300px;
            grid-template-rows: repeat(3, auto);
            grid-template-areas: "title . quantity" "rating . ." "description description .";
        }

        // order: 2;
    }

    &__title {
        grid-area: title;
        margin-bottom: 0;
    }

    &__rating {
        grid-area: rating;
    }

    &__description {
        grid-area: description;
    }

    &::v-deep(.basket-item__quantity) {
        grid-area: quantity;
        // order: 1;
    }
}
</style>