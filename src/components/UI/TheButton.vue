<template>
  <button>Button</button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  border-radius: $border-radius;
  padding: $button-padding;
  transition: color 0.15s linear, background-color 0.15s linear,
    border-color 0.15s linear, box-shadow 0.15s linear;
  margin: 0.5rem;
  &.primary {
    background-color: $secondary;
    color: $primary;
    border: 3px solid $primary;
    &:hover {
      @include boxShadow;
      color: $secondary;
      background-color: $primary;
      border-color: $secondary;
    }
  }

  &.secondary {
    background-color: $primary;
    color: $secondary;
    border: 3px solid $secondary;
    &:hover {
      @include boxShadow;
      color: $primary;
      background-color: $secondary;
      border-color: $primary;
    }
  }

  &:hover {
    @include boxShadow;
  }
}
</style>
