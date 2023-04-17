<template>
    <div class="product__colors">
        <router-link :to="`/product/${obj.id}`" v-for="(obj, index) in availableColors" :key="index" class="product__color"
            :class="{ 'active-white': index === selectedVariant && obj.color === 'white', 'active': index + 1 === Number(selectedVariant) }"
            :style="{ 'background-color': obj.color }" @click="this.$emit('changeColor', index)">
        </router-link>
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
            type: String,
            default: ''
        },
        id: {
            type: String,
            default: ''
        }
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
                top: 13px;
                left: 14px;
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