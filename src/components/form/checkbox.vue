<template>
    <div class="form-control">
        <label :for="name">{{ label }}
            <input type="checkbox" :name="name" :id="name" :checked="checked" @click="this.$emit('checkboxClicked')">
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            default: ''
        },
        checked: {
            type: Boolean,
            default: false,
        }
    }

}
</script>

<style lang="scss" scoped>
.form-control {
    display: block;
    position: relative;
    padding-left: 35px;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

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