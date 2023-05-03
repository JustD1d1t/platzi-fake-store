<template>
    <div class="basket-step-counter">
        <span class="basket-step-number" :class="{ active: step === 'one' }"></span>
        <span class="basket-step-number" :class="{ active: step === 'two' }"></span>
        <span class="basket-step-number" :class="{ active: step === 'three' }"></span>
    </div>
</template>

<script>
export default {
    props: {
        step: {
            type: String,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped>
.basket-step-counter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid $primary;
    height: 0;
    margin: 40px auto;
    width: 100%;

    @media screen and (min-width: 1023px) {
        width: 40vw;

    }
}

.basket-step-number {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid $secondary;
    background-color: white;
    position: relative;

    &.active {
        &::before {
            width: 14px;
            height: 14px;
            content: "";
            background-color: $secondary;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 7px;
            transform: translateX(-50%) translateY(-50%);
        }
    }
}
</style>