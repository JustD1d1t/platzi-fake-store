<template>
    <aside class="user-menu">
        <router-link v-for="item in menuItems" :key="item.label" :to="item.link">{{ item.label }}</router-link>
        <button class="anchor" @click="logout">Logout</button>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    label: 'Account',
                    link: '/user/account'
                },
                {
                    label: 'Change password',
                    link: '/user/password'
                },
                {
                    label: 'Favorites',
                    link: '/user/favorites'
                },
                {
                    label: 'Orders',
                    link: '/user/orders'
                },
            ]
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('jwt');
            this.$router.push("/")
        }
    }
}
</script>

<style lang="scss" scoped>
.user-menu {
    display: flex;
    flex-direction: column;
}
</style>