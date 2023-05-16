<template>
    <section class="login">
        <h2>
            Login
        </h2>
        <login-form />
    </section>
</template>
  
<script>
import loginForm from '@/components/login/login-form'
export default {
    components: {
        loginForm
    },

}
</script>
  
<style lang="scss" scoped>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__form-actions {
        display: flex;
        justify-content: space-between;
    }

    &::v-deep(.box) {
        margin: 0 auto;
        width: 50%;
    }

}
</style>
