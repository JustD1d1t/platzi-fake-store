<template>
    <section class="password">
        <back-user-arrow />
        <h1 class="text-center">Change password</h1>
        <password-form />
    </section>
</template>
  
<script>
import passwordForm from '@/components/user/forms/password-form'
import backUserArrow from '@/components/user/back-user-arrow'
export default {
    components: {
        passwordForm,
        backUserArrow
    },

}
</script>
  
<style lang="scss" scoped>
.password {
    display: flex;
    flex-direction: column;

    &::v-deep(.box) {
        margin: 0 auto;
        width: 100%;

        @media screen and (min-width: 1023px) {
            width: 50%;
        }
    }

}
</style>
