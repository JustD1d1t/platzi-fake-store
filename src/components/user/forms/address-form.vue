<template>
    <h2 class="text-center">New address form</h2>
    <form @submit.prevent="submit" class="address-form">
        <the-input v-for="field in fields" :field="field" :key="field.label" v-model="fields[field.name].value"
            :show-label="true" :error="errors[field.name]" />
        <div class="address-form__actions">
            <the-button class="btn btn-primary address-form__submit" :class="{ disabled: notificationVisible }">
                Add new address
            </the-button>
        </div>
    </form>
    <notification :show="notificationVisible" @hide="hideNotification">{{ notificationText }}</notification>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    emits: ['closeNewAddressModal'],
    data() {
        return {
            errors: {},
            notificationVisible: false,
            notificationText: '',
        }
    },
    computed: {
        ...mapState('user', [
            'user',
        ]),
        fields() {
            return {
                addressName: {
                    label: 'Address name',
                    name: 'addressName',
                    type: 'text',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                firstName: {
                    label: 'First name',
                    name: 'firstName',
                    type: 'text',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                lastName: {
                    label: 'Last name',
                    name: 'lastName',
                    type: 'text',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                country: {
                    label: 'Country',
                    name: 'country',
                    type: 'text',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                city: {
                    label: 'City',
                    name: 'city',
                    type: 'text',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                zipCode: {
                    label: 'Zip code',
                    name: 'zipCode',
                    type: 'text',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                street: {
                    label: 'Street',
                    name: 'street',
                    type: 'text',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                streetNumber: {
                    label: 'Street Number',
                    name: 'streetNumber',
                    type: 'text',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                houseNumber: {
                    label: 'House Number',
                    name: 'houseNumber',
                    type: 'text',
                    required: false,
                    value: '',
                    disabled: this.notificationVisible,
                },
            }
        }
    },
    methods: {
        ...mapMutations('user', [
            'addNewAddress'
        ]),
        submit() {
            this.addNewAddress({
                address: {
                    name: this.fields.addressName.value,
                    firstName: this.fields.firstName.value,
                    lastName: this.fields.lastName.value,
                    street: this.fields.street.value,
                    streetNumber: this.fields.streetNumber.value,
                    houseNumber: this.fields.houseNumber.value,
                    zipCode: this.fields.zipCode.value,
                    country: this.fields.country.value,
                    city: this.fields.city.value,
                    default: false,
                }
            })
            this.displayNotification('New address has been added')
        },
        displayNotification(text) {
            this.notificationVisible = true;
            this.notificationText = text;
        },
        hideNotification() {
            this.notificationVisible = false;
            this.notificationText = '';
            this.$emit("closeNewAddressModal")
        },
        changeToLogin() {
            this.$router.push({ name: "login" })
        }
    },
}
</script>

<style lang="scss" scoped>
.address-form {
    gap: 10px;
    flex-wrap: wrap;

    @media screen and (min-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        grid-template-columns: repeat(2, 1fr);
    }

    &__actions {
        grid-column: 1/3;
        display: flex;
        justify-content: flex-end;
    }
}
</style>