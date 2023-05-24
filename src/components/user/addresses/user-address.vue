<template>
    <box class="address">
        <h5>{{ address.name }}</h5>
        <p><span>{{ address.firstName }}</span> <span>{{ address.lastName }}</span></p>
        <p>{{ address.country }}</p>
        <p>
            <span>{{ address.city }}</span> <span>{{ address.zipCode }}</span>
        </p>
        <p>
            <span>{{ address.street }}</span> <span>{{ address.streetNumber }}</span><span v-if="address.houseNumber">/{{
                address.houseNumber }}</span>
        </p>
        <div class="address__button-container">
            <button class="btn btn-secondary address__remove-button btn-small" :class="{ disabled: address.default }"
                @click="this.$emit('removeAddress', address)">
                <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
            <button class="btn btn-primary btn-small" :class="{ disabled: address.default }"
                @click="this.$emit('setAsDefault', address)">Set as default</button>
        </div>
    </box>
</template>

<script>
export default {
    emits: ["removeAddress", "setAsDefault"],
    props: {
        address: {
            type: Object,
            default: () => { }
        },
        removeDisabled: {
            type: Boolean,
            default: false,
        },
    }

}
</script>

<style lang="scss">
.address {
    &__button-container {
        display: flex;
        justify-content: space-between;
    }

    &__remove-button {
        svg {
            color: $white;
        }
    }
}
</style>