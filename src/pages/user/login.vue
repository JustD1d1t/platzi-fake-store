<template>
    <section class="login">
        <login-form />
    </section>
</template>
  
<script>
import loginForm from '@/components/user/forms/login-form'
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
    flex-grow: 1;
    justify-content: center;

    &::v-deep(.box) {
        margin: 0 auto;
        width: 100%;

        @media screen and (min-width: 1023px) {
            width: 50%;
        }
    }

}
</style>
