<template>
    <div class="modal__background" v-if="open">
        <box class="modal">
            <button class="modal__close-button" @click="this.$emit('closeModal')">&#10005;</button>
            <slot />
        </box>
    </div>
</template>

<script>
export default {
    props: {
        open: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    background-color: $white;
    padding-top: 40px;
    position: relative;
    width: 90%;
    max-height: 90vh;
    overflow: auto;

    @media screen and (min-width: 1023px) {
        width: 50%;
    }

    &__background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.1);
        z-index: 1001;
        backdrop-filter: blur(2px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__close-button {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
}
</style>