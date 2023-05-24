<template>
    <box>
        <form @submit.prevent="submit" class="register-form">
            <the-input v-for="field in fields" :field="field" :key="field.label" v-model="fields[field.name].value"
                :show-label="true" :error="errors[field.name]" />
            <checkbox :field="{
                label: 'I have read and gree to the Terms',
                required: true,
                error: errors.checkbox
            }" v-model="terms" />
            <div class="register-form__actions">
                <the-button class="btn btn-secondary register-form__login" @click.prevent="changeToLogin">
                    Change to login
                </the-button>
                <the-button class="btn btn-primary register-form__submit">Register

                </the-button>
            </div>
        </form>
    </box>
    <notification :show="notificationVisible" @hide="hideNotification">User has been created</notification>
</template>

<script>
import { users } from '@/mock/users'
import { validateEmail, validatePassword, validateConfirmPassword, validateCheckbox } from "@/helpers/validators"
import { mapState } from 'vuex'

export default {
    data() {
        return {
            terms: false,
            errors: {},
            notificationVisible: false,
        }
    },
    computed: {
        ...mapState('user', ['user']),
        fields() {
            return {
                email: {
                    label: 'E-mail',
                    name: 'email',
                    type: 'e-mail',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                password: {
                    label: 'Password',
                    name: 'password',
                    type: 'password',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
                confirmPassword: {
                    label: 'Confirm  password',
                    name: 'confirmPassword',
                    type: 'password',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible,
                },
            }
        }
    },
    methods: {
        submit() {
            validateEmail(this.fields.email.value, this.errors);
            validatePassword(this.fields.password.value, this.errors);
            validateConfirmPassword(this.fields.password.value, this.fields.confirmPassword.value, this.errors);
            validateCheckbox(this.terms, this.errors);
            if (Object.keys(this.errors).length) {
                return;
            }
            const user = users.find(user => user.email === this.fields.email.value)
            if (!user) {
                users.push(
                    {
                        email: this.fields.email.value,
                        password: this.fields.password.value,
                    },
                )
                this.displayNotification()
            } else {
                this.errors.email = 'There is user with this e-mail'
            }
        },
        displayNotification() {
            this.notificationVisible = true;
        },
        hideNotification() {
            this.notificationVisible = false;
            this.$router.push({ name: 'login' })
        },
        changeToLogin() {
            this.$router.push({ name: "login" })
        }
    }
}
</script>

<style lang="scss" scoped>
.register-form {

    &__register {
        order: 2;

        @media screen and (min-width: 767px) {
            order: 0;
        }
    }

    &__actions {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        @media screen and (min-width: 767px) {
            flex-direction: row;
        }
    }
}
</style>