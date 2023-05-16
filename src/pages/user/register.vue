<template>
  <section class="register">
    <register-form />
  </section>
</template>
  
<script>
import registerForm from '@/components/user/forms/register-form'
export default {
  components: {
    registerForm
  }

}
</script>
  
<style lang="scss" scoped>
.register {
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