<template>
    <p>
        {{ field.label }}
    </p>
</template>

<script>
export default {
    props: {
        field: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style></style>