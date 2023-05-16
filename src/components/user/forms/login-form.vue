<template>
    <box>
        <form @submit.prevent="submit" class="login-form">
            <the-input :field="{
                label: 'E-mail',
                type: 'e-mail',
                required: true,
                error: errors.email
            }" v-model="email" :show-label="true" />
            <the-input :field="{
                label: 'Password',
                type: 'password',
                required: true,
                error: errors.password
            }" v-model="password" :show-label="true" />
            <checkbox :field="{
                label: 'I have read and gree to the Terms',
                error: errors.checkbox
            }" v-model="terms" />
            <div class="login-form__actions">
                <the-button class="btn btn-secondary login-form__register" @click.prevent="changeToRegister">
                    Change to register
                </the-button>
                <the-button class="btn btn-primary login-form__submit">Login</the-button>
            </div>
        </form>
    </box>
</template>

<script>
import { users } from '@/mock/users'
import { validateEmail, validatePassword, validateCheckbox } from "@/helpers/validators"
import { mapMutations } from 'vuex';

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
    }
}
</script>

<style lang="scss" scoped>
.login-form {

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