<template>
    <div class="pagination">
        <button @click="this.$emit('prevPage')" class="pagination__prev" :class="{ disabled: prevDisabled }">Prev
            page</button>
        <button @click="this.$emit('nextPage')" class="pagination__next" :class="{ disabled: nextDisabled }">Next
            Page</button>
    </div>
</template>

<script>
export default {
    props: {
        nextDisabled: {
            type: Boolean,
            default: false
        },
        prevDisabled: {
            type: Boolean,
            default: true
        },
    },

}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__prev,
    &__next {
        font-size: 24px;
        background: none;
        border: none;
        transition: color 0.15s linear;
        cursor: pointer;

        &:hover {
            color: $secondary;
        }

        &.disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }
}
</style>