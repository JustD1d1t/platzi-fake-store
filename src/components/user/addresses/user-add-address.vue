<template>
    <button class="btn btn-primary user-add-address__button" @click="this.$emit('openNewAddressModal')">
        Add new address
        <font-awesome-icon icon="fa-solid fa-circle-plus" class="svg-big" />
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.user-add-address {
    &__button {
        display: flex;
        align-items: center;

        svg {
            color: $white;
        }
    }
}
</style>