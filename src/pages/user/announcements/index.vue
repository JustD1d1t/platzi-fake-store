<template>
    <section class="account">
        <h2>announcements</h2>
    </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState('user', {
            user: 'user'
        }),
        username() {
            return `${this.user.firstName} ${this.user.lastName}`
        }
    }

}
</script>

<style lang="scss" scoped>
.account {}
</style>