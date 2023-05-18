<template>
    <router-link to="/user" class="back-user-arrow">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        Back to user page
    </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.back-user-arrow {
    display: flex;
    align-items: center;
    @include hoverChildColorSVG;
}
</style>