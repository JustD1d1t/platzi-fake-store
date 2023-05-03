<template>
    <div class="form-field form-field--radio" v-for="option in options" :key="option.label">
        <input type="radio" :name="option.name" :required="option.required" :id="option.image ? option.alt : option.label">
        <label :for="option.image ? option.alt : option.label">
            <div class="form-field--radio__image" v-if="option.image">
                <img :src="option.label" :alt="option.alt">
            </div>
            <span v-else>{{ option.label }}</span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped>
.form-field--radio {
    display: flex;
    align-items: flex-start;
    margin-bottom: 24px;

    label {
        cursor: pointer;
    }

    &__image {
        border: 1px solid $light-gray;
        border-radius: 10px;
        margin-left: 12px;
        padding: 8px;
        width: 300px;
        height: 150px;

        & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>