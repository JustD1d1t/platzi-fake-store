<template>
    <box>
        <form @submit.prevent="submit" class="password-form">
            <the-input :field="{
                label: 'Old password',
                type: 'password',
                required: true,
                error: errors.password,
                disabled: notificationVisible
            }" v-model="oldPassword" :show-label="true" />
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
            <div class="password-form__actions">
                <the-button class="btn btn-primary password-form__submit">
                    Change password
                </the-button>
            </div>
        </form>
    </box>
    <notification :show="notificationVisible">{{ notificationText }}</notification>
</template>

<script>
import { users } from '@/mock/users'
import { validatePassword, validateConfirmPassword } from "@/helpers/validators"
import { mapState } from 'vuex';

export default {
    data() {
        return {
            oldPassword: '',
            password: '',
            passwordConfirm: '',
            errors: {},
            notificationVisible: false,
            notificationText: '',
        }
    },
    methods: {
        submit() {
            validatePassword(this.password, this.errors);
            validateConfirmPassword(this.password, this.passwordConfirm, this.errors);
            if (Object.keys(this.errors).length) {
                return;
            }
            const user = users.find(user => user.email === this.email)
            if (user.password !== this.oldPassword) {
                this.displayNotification('Old password incorrect');
                return
            }
            user.password = this.password;
            this.displayNotification('Password has been changed');
            setTimeout(() => {
                this.$router.push({ name: 'account' })
            }, 1500);
        },
        displayNotification(text) {
            this.notificationVisible = true;
            this.notificationText = text;
            setTimeout(() => {
                this.notificationVisible = false;
                this.notificationText = '';
            }, 1500);
        },
        changeToLogin() {
            this.$router.push({ name: "login" })
        }
    },
    computed: {
        ...mapState('user', [
            'email',
        ]),
    }
}
</script>

<style lang="scss" scoped>
.password-form {
    &__actions {
        display: flex;
        justify-content: flex-end;
    }
}
</style>