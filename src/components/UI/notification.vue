<template>
    <Transition>
        <div class="notification" v-if="show">
            <slot />
        </div>
    </Transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }

}
</script>

<style lang="scss" scoped>
.notification {
    position: fixed;
    top: 80px;
    background-color: $green;
    border-radius: 10px;
    border: 2px solid $primary;
    padding: 12px 16px;
    width: $container-width;
    max-width: 100%;
    color: $primary;
    font-weight: 600;
    font-size: 18px;
    z-index: 999;
    left: 0;

    @media screen and (min-width: 1023px) {
        left: auto;
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>