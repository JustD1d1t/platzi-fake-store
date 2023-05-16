<template>
    <box>
        <form @submit.prevent="submit" class="register-form">
            <the-input :field="{
                label: 'E-mail',
                type: 'e-mail',
                required: true,
                error: errors.email,
                disabled: notificationVisible
            }" v-model="email" :show-label="true" />
            <the-input :field="{
                label: 'Password',
                type: 'password',
                required: true,
                error: errors.password,
                disabled: notificationVisible
            }" v-model="password" :show-label="true" />
            <the-input :field="{
                label: 'Password confirm',
                type: 'password',
                required: true,
                error: errors.confirmPassword,
                disabled: notificationVisible
            }" v-model="passwordConfirm" :show-label="true" />
            <checkbox :field="{
                label: 'I have read and gree to the Terms',
                required: true,
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
    <notification :show="notificationVisible">User has been created</notification>
</template>

<script>
import { users } from '@/mock/users'
import { validateEmail, validatePassword, validateConfirmPassword } from "@/helpers/validators"

export default {
    data() {
        return {
            email: '',
            password: '',
            passwordConfirm: '',
            terms: false,
            errors: {},
            notificationVisible: false,
            fields: [
                {
                    label: 'E-mail',
                    showLabel: true,
                    type: 'e-mail',
                    required: true,
                },
                {
                    label: 'Passowrd',
                    showLabel: true,
                    type: 'password',
                    required: true,
                }
            ]
        }
    },
    methods: {
        submit() {
            validateEmail(this.email, this.errors);
            validatePassword(this.password, this.errors);
            validateConfirmPassword(this.password, this.passwordConfirm, this.errors);
            if (Object.keys(this.errors).length) {
                return;
            }
            const user = users.find(user => user.email === this.email)
            if (!user) {
                users.push(
                    {
                        email: this.email,
                        password: this.password,
                    },
                )
                this.displayNotification()
            } else {
                this.errors.email = 'There is user with this e-mail'
            }
        },
        displayNotification() {
            this.notificationVisible = true;
            setTimeout(() => {
                this.notificationVisible = false;
                this.$router.push({ name: 'login' })
            }, 1500);
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