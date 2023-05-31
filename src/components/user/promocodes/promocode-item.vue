<template>
    <box class="promocode-item">
        <p class="promocode-item__title">{{ promocode.name }}</p>
        <p class="promocode-item__code">
            <b>code:</b> {{ promocode.code }}
        </p>
        <p class="promocode-item__discount">
            <b>discount:</b> {{ promocode.discount * 100 }}%
        </p>
        <p class="promocode-item__condition">
            <b>conditions:</b> {{ promocode.condition }}
        </p>
        <button class="btn btn-primary promocode-item__button" :class="{ disabled: promocodeUsed }"
            @click="this.$emit('setActivePromocode', promocode.code)">Use promocode</button>
    </box>
</template>

<script>
export default {
    props: {
        promocode: {
            type: Object,
            default: () => { }
        },
        activePromocode: {
            type: String,
            default: ''
        }
    },
    computed: {
        promocodeUsed() {
            return this.activePromocode === this.promocode.code
        }
    }

}
</script>

<style lang="scss" scoped>
.promocode-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__title {
        font-size: 24px;
        font-weight: 700;
        margin-top: 0;
    }

    &__button {
        margin-left: auto !important;
    }
}
</style>