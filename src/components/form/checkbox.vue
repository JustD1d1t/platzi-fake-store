<template>
    <div class="form-field form-field--checkbox">
        <label :for="field.label">{{ field.label }}
            <input type="checkbox" :name="field.label" :id="field.label" :checked="checked"
                @click="this.$emit('checkboxClicked')">
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        field: {
            type: Object,
            default: () => { },
            required: true,
        },
        checked: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {
        console.log(this.checked)
    }

}
</script>

<style lang="scss" scoped>
.form-field {
    display: block;
    position: relative;
    padding-left: 35px;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
    margin-bottom: 16px;

    & label {
        cursor: pointer;

        &:hover input~.checkmark {
            border-color: $secondary;
        }

        & input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;

            &:checked~.checkmark {
                border-color: $secondary;
            }

            &:checked~.checkmark:after {
                display: block;
            }
        }

        & .checkmark {
            position: absolute;
            top: 6px;
            left: 3px;
            height: 25px;
            width: 25px;
            border: 1px solid $primary;
            border-radius: 5px;

            &:after {
                content: "";
                position: absolute;
                display: none;
                left: 8px;
                top: 4px;
                width: 5px;
                height: 10px;
                border: solid $secondary;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
    }


}
</style>