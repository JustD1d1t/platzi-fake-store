<template>
    <section class="password">
        <password-form />
    </section>
</template>
  
<script>
import passwordForm from '@/components/user/forms/password-form'
export default {
    components: {
        passwordForm
    },

}
</script>
  
<style lang="scss" scoped>
.password {
    display: flex;
    flex-direction: column;
    align-items: center;

    &::v-deep(.box) {
        margin: 0 auto;
        width: 100%;

        @media screen and (min-width: 1023px) {
            width: 50%;
        }
    }

}
</style>
