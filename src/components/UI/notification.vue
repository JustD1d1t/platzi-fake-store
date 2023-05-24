<template>
    <Transition>
        <box class="notification" v-if="show">
            <slot />
        </box>
    </Transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        show() {
            if (this.show) {
                setTimeout(() => {
                    this.$emit("hide")
                }, 1500);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.notification {
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    padding: 12px 16px;
    width: $container-width;
    max-width: 100%;
    color: $primary;
    font-weight: 600;
    font-size: 18px;
    z-index: 999;
    background-color: $white;
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