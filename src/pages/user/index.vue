<template>
    <section class="user">
        <div class="user__side-menu">
            <user-side-menu />
        </div>
        <div class="user__content">
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
import userSideMenu from '../../components/user/user-side-menu';
export default {
    components: {
        userSideMenu
    },
}
</script>

<style lang="scss" scoped>
.user {
    display: flex;

    &__side-menu {}

    &__content {
        flex-grow: 1;
        margin-left: 16px;
    }
}
</style>