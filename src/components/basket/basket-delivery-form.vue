<template>
    <div>
        <h3>Enter your name and address:</h3>
        <form @submit.prevent="submit" ref="deliveryForm">
            <component v-for="field in fields" :key="field.label" :field="field" :is="field.component">{{ field.label }}
            </component>
            <the-button class="btn btn-primary btn-fullwidth btn-big">Go to the delivery</the-button>
        </form>
        <the-button class="btn btn-secondary btn-fullwidth btn-big" @click="this.$emit('setStepZero', 0)">Back to
            basket</the-button>
    </div>
</template>

<script>
export default {
    methods: {
        submit() {
            console.log('submit')
            this.$emit("setStep", 2)
        }
    },
    data() {
        return {
            fields: [
                {
                    label: 'Name',
                    width: 'full',
                    component: "the-input",
                    required: true
                },
                {
                    label: 'Last name',
                    width: 'full',
                    component: "the-input",
                    required: true
                },
                {
                    label: 'Street',
                    width: 'full',
                    component: "the-input",
                    required: true
                },
                {
                    label: 'House Number',
                    width: 'full',
                    component: "the-input",
                    required: true
                },
                {
                    label: 'Flat Number',
                    width: 'full',
                    component: "the-input",
                    required: true
                },
                {
                    label: 'Zip Code',
                    width: 'half',
                    component: "the-input",
                    required: true,
                },
                {
                    label: 'City',
                    width: 'half',
                    component: "the-input",
                    required: true
                },
                {
                    label: 'Country',
                    width: 'full',
                    component: "the-input",
                    required: true
                },
                {
                    label: 'This is the address of company',
                    component: "checkbox"
                },
                {
                    label: 'How can we contact you?',
                    component: "h4",
                },
                {
                    label: 'E-mail',
                    width: 'full',
                    component: "the-input",
                    type: 'e-mail',
                },
                {
                    label: 'Phone number',
                    width: 'full',
                    component: "the-input"
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>