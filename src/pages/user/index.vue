<template>
    <section class="user">
        <user-menu />
    </section>
</template>

<script>
import userMenu from '@/components/user/user-menu'
export default {
    components: {
        userMenu
    },
}
</script>

<style lang="scss" scoped>
.user {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
}
</style>