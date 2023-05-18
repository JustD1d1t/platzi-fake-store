<template>
    <aside class="user-menu">
        <router-link v-for="item in menuItems" :key="item.label" :to="item.link" class="user-menu__item">
            <font-awesome-icon :icon="`fa-solid ${item.icon}`" />
            {{ item.label }}
        </router-link>
        <button class="anchor user-menu__item" @click="logout">
            <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
            Logout
        </button>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    label: 'Account',
                    link: '/user/account',
                    icon: 'fa-solid fa-person'
                },
                {
                    label: 'Addresses',
                    link: '/user/addresses',
                    icon: "fa-solid fa-location-dot"
                },
                {
                    label: 'Change password',
                    link: '/user/password',
                    icon: "fa-solid fa-lock",
                },
                {
                    label: 'Favorites',
                    link: '/user/favorites',
                    icon: "fa-regular fa-heart"
                },
                {
                    label: 'Orders',
                    link: '/user/orders',
                    icon: "fa-solid fa-bag-shopping"
                },
                {
                    label: 'Promocodes',
                    link: '/user/promocodes',
                    icon: "fa-solid fa-tag"
                },
                {
                    label: 'Loyalty points',
                    link: '/user/loyalty',
                    icon: "fa-solid fa-star"
                },
                {
                    label: 'Announcements availability',
                    link: '/user/announcements',
                    icon: "fa-solid fa-bell"
                },
            ]
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('jwt');
            this.$router.push("/")
        }
    },
}
</script>

<style lang="scss" scoped>
.user-menu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    justify-items: center;

    @media screen and (min-width: 767px) {
        grid-template-columns: repeat(3, 1fr);
        width: 80%;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        text-align: center;
        margin-bottom: 25px;
        @include hoverChildColorSVG;

        @media screen and (min-width: 767px) {
            margin-bottom: 50px;
        }

        svg {
            width: 40px;
            height: 40px;
            margin-bottom: 8px;
            transition: color 0.15s linear, transform 0.15s linear;
        }
    }
}
</style>