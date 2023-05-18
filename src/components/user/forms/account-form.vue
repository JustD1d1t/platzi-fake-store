<template>
    <box>
        <form @submit.prevent="submit" class="account-form">
            <the-input v-for="(field, index) in fields" :field="field" :key="field.label" v-model="fields[index].value"
                :show-label="true" />
            <div class="account-form__actions">
                <the-button class="btn btn-primary account-form__submit">Save data</the-button>
            </div>
        </form>
    </box>
</template>

<script>
import { users } from '@/mock/users'
import { validateEmail, validatePassword, validateCheckbox } from "@/helpers/validators"
import { mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            errors: {},
        }
    },
    computed: {
        ...mapState('user', ['user']),
        fields() {
            return [
                {
                    label: 'E-mail',
                    showLabel: true,
                    type: 'e-mail',
                    required: true,
                    value: this.user.email,
                    disabled: true,
                },
                {
                    label: 'Mobile',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.mobile,
                },
                {
                    label: 'Name',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.firstName,
                    disabled: false,
                },
                {
                    label: 'Last name',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.lastName,
                    disabled: false,
                },
                {
                    label: 'Country',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.country,
                    disabled: false,
                },
                {
                    label: 'City',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.city,
                    disabled: false,
                },
                {
                    label: 'Zip code',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.zipCode,
                    disabled: false,
                },
                {
                    label: 'Street',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.street,
                    disabled: false,
                },
                {
                    label: 'Street number',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.streetNumber,
                    disabled: false,
                },
                {
                    label: 'House number',
                    showLabel: true,
                    type: 'text',
                    required: true,
                    value: this.user.houseNumber,
                    disabled: false,
                },
            ]
        }
    },
    methods: {
        ...mapMutations('user', ['setUserMail']),
        submit() {
            validateEmail(this.email, this.errors);
            validatePassword(this.password, this.errors);
            validateCheckbox(this.terms, this.errors);
            if (Object.keys(this.errors).length) {
                return;
            }
            const user = users.find(user => user.email === this.email)
            if (!user) {
                return this.errors.email = "Cannot find user with this email. Try 'test@example.com'"
            }
            if (user.password === this.password) {
                localStorage.setItem("jwt", 'test')
                this.setUserMail(this.email)
                this.$router.push({ name: "account" })
            } else {
                return this.errors.password = "Wrong password. Try 'Test123'"
            }
        },
        changeToRegister() {
            this.$router.push({ name: "register" })
        }
    },
}
</script>

<style lang="scss" scoped>
.account-form {
    display: grid;
    column-gap: 20px;
    grid-template-columns: 1fr;

    @media screen and (min-width: 1023px) {
        grid-template-columns: 1fr 1fr;
    }

    &__actions {
        display: flex;
        justify-content: flex-end;

        @media screen and (min-width: 1023px) {
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }

}
</style>