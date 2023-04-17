<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
}

.btn {
  padding: 0.5rem 2rem;
  border-radius: 50px;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  @include boxShadow;
  transition: color 0.15s linear, background-color 0.15s linear,
    box-shadow 0.15s linear;
  margin: 8px 0;
  text-align: center;
}

.btn-primary {
  color: $primary;
  background-color: $secondary;

  &:hover {
    color: $secondary;
    background-color: $primary;
    @include boxShadowHover;
  }
}

.btn-secondary {
  color: $secondary;
  background-color: $primary;

  &:hover {
    color: $primary;
    background-color: $secondary;
    @include boxShadowHover;
  }
}

.btn-big {
  padding: 1rem 3rem;
  font-size: 1.25rem;
}

.btn-wide {
  padding: 0.5rem 4rem;
}

.btn-svg {
  transition: transform 0.1s linear;

  &:deep(svg) {
    margin: 0;
    padding: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
}
</style>
