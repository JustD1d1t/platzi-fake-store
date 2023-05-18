<template>
    <box>
        <form @submit.prevent="submit" class="login-form">
            <the-input v-for="field in fields" :field="field" :key="field.label" v-model="fields[field.name].value"
                :show-label="true" :error="errors[field.name]" />
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
import { mapMutations, mapState } from 'vuex';

export default {
    data() {
        return {
            terms: false,
            errors: {},
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
                    // value: this.user.email,
                    value: 'test@example.com',
                    disabled: false,
                },
                password: {
                    label: 'Password',
                    name: 'password',
                    type: 'password',
                    required: true,
                    // value: this.user.password,
                    value: 'Test123',
                    disabled: false,
                }
            }
        }
    },
    methods: {
        ...mapMutations('user', ['setUserMail']),
        submit() {
            validateEmail(this.fields.email.value, this.fields.email);
            validatePassword(this.fields.password.value, this.fields.password);
            validateCheckbox(this.terms, this.errors);
            const user = users.find(user => user.email === this.fields.email.value)
            if (!user) {
                return this.errors.email = "Cannot find user with this email. Try 'test@example.com'"
            } else {
                this.errors.email = null
            }
            if (user.password === this.fields.password.value) {
                localStorage.setItem("jwt", 'test')
                this.setUserMail(this.fields.email.value)
                this.$router.push({ name: "user" })
            } else {
                this.errors.password = "Wrong password. Try 'Test123'"
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