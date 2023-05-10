<template>
    <div class="basket-summary-item">
        <div class="basket-summary-item__top">
            <span class="basket-summary-item__name"><b>{{ scooter.name }}</b></span>
            <span>{{ scooter.quantity }} x {{ scooter.price }}</span>
        </div>
        <div class="basket-summary-item__body">
            <div class="basket-summary-item__details">
                <span><b>Engine:</b> {{ scooter.engineCapacity }}</span>
                <span><b>Color:</b> {{ scooter.color }}</span>
                <span><b>Power type:</b> {{ scooter.powerType }}</span>
                <span><b>Seats:</b> {{ scooter.seats }}</span>
            </div>
            <div class="basket-summary-item__image">
                <img :src="scooter.image" :alt="scooter.name">
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        scooter: {
            type: Object,
            default: () => { }
        },
    },
}
</script>

<style lang="scss" scoped>
.basket-summary-item {
    margin-bottom: 24px;

    &__name {
        font-size: 20px;
    }

    &__top {
        display: flex;
        justify-content: space-between;
    }

    &__body {
        display: flex;
    }

    &__details {
        display: flex;
        flex-direction: column;
    }

    &__image {
        width: 120px;
        margin-left: auto;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>