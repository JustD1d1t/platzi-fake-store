<template>
    <span class="badge">
        <slot />
    </span>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.badge {
    position: absolute;
    top: 100%;
    right: 0;
    transform: translateY(-100%);
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: $black;
    color: $white;
    font-size: 14px;
    line-height: 14px;
    @include center;
}
</style>