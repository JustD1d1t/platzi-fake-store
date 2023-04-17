<template>
    <div class="product__colors">
        <button v-for="(color, index) in availableColors" :key="index" class="product__color"
            :class="{ 'active-white': index === selectedVariant && color === 'white', 'active': index === selectedVariant }"
            :style="{ 'background-color': color }" @click="this.$emit('changeColor', index)">
        </button>
    </div>
</template>

<script>
export default {
    emits: ['changeColor'],
    props: {
        availableColors: {
            type: Array,
            default: () => []
        },
        selectedVariant: {
            type: Number,
            default: NaN
        },
    }

}
</script>

<style lang="scss" scoped>
.product {
    &__colors {
        display: flex;
    }

    &__color {
        width: 30px;
        height: 30px;
        border: 1px solid $gray;
        border-radius: 50%;
        margin-right: 8px;
        cursor: pointer;

        &.active {
            position: relative;

            &::after {
                width: 15px;
                height: 5px;
                border-left: 3px solid $white;
                border-bottom: 3px solid $white;
                content: '';
                position: absolute;
                transform: rotate(-45deg) translateX(-3px) translateY(-10px);
            }
        }

        &.active-white {
            &::after {
                border-color: $black !important;
            }
        }
    }

}
</style>