<template>
    <box>
        <form @submit.prevent="submit" class="login-form">
            <the-input :field="{
                label: 'E-mail',
                showLabel: true,
                type: 'e-mail',
                required: true,
                error: errors.email
            }" v-model="email" />
            <the-input :field="{
                label: 'Password',
                showLabel: true,
                type: 'password',
                required: true,
                error: errors.password
            }" v-model="password" />
            <checkbox :field="{
                label: 'I have read and gree to the Terms',
                required: true,
            }" v-model="terms" />
            <div class="login-form__actions">
                <the-button class="btn btn-secondary">Change to register</the-button>
                <the-button class="btn btn-primary">Login</the-button>
            </div>
        </form>
    </box>
</template>

<script>
import { users } from '@/mock/users'

export default {
    data() {
        return {
            email: '',
            password: '',
            terms: false,
            errors: {},
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
            this.validateEmail();
            this.validatePassword();
            if (Object.keys(this.errors).length) {
                return;
            }
            const user = users.find(user => user.email === this.email)
            if (!user) {
                return this.errors.email = "Cannot find user with this email. Try 'test@example.com'"
            }
            if (user.password === this.password) {
                localStorage.setItem("jwt", 'test')
                this.$router.push({ name: "account" })
            } else {
                return this.errors.password = "Wrong password. Try 'Test123'"
            }
        },
        validateEmail() {
            const isMailValid = String(this.email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
            if (!isMailValid) {
                this.errors.email = "Type correct email"
            } else {
                delete this.errors.email;
            }
        },
        validatePassword() {
            if (this.password.length < 6) {
                this.errors.password = "Password is not strong enough"
            } else {
                delete this.errors.password
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login-form {
    &__actions {
        display: flex;
        justify-content: space-between;
    }
}
</style>