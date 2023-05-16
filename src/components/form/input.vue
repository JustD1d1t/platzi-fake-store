<template>
  <div class="form-field form-field--input" :class="{ half: field.width === 'half', full: field.width === 'full' }">
    <label :for="field.label" v-if="showLabel">{{ field.label }}</label>
    <input :type="field.type" :placeholder="field.label" :id="field.label" :required="field.required"
      :pattern="field.pattern" @input="$emit('update:modelValue', $event.target.value)">
    <span v-if="field.error" class="form-field__error">{{ field.error }}</span>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      default: () => { }
    },
    showLabel: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  position: relative;
  padding-bottom: 16px;

  &.half {
    width: 49%;
  }

  &.full {
    width: 100%;
  }

  &__error {
    color: $red;
    font-size: 14px;
    line-height: 14px;
    position: absolute;
    top: calc(100% - 14px);
    left: 4px;
  }
}

input {
  padding: 16px;
  border: 1px solid $light-gray;
  border-radius: 10px;

  &::placeholder {
    color: rgba($primary, 0.6);
  }
}
</style>