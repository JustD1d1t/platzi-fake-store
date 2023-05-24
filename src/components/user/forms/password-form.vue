<template>
    <box>
        <form @submit.prevent="submit" class="password-form">
            <the-input v-for="field in fields" :field="field" :key="field.label" v-model="fields[field.name].value"
                :show-label="true" :error="errors[field.name]" />
            <div class="password-form__actions">
                <the-button class="btn btn-primary password-form__submit">
                    Change password
                </the-button>
            </div>
        </form>
    </box>
    <notification :show="notificationVisible" @hide="hideNotification">{{ notificationText }}</notification>
</template>

<script>
import { validatePassword, validateConfirmPassword } from "@/helpers/validators"
import { mapState } from 'vuex';

export default {
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
                oldPassword: {
                    label: 'Old password',
                    name: 'oldPassword',
                    type: 'password',
                    required: true,
                    value: '',
                    error: this.errors.password,
                    disabled: this.notificationVisible
                },
                newPassword: {
                    label: 'New password',
                    name: 'newPassword',
                    type: 'password',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible
                },
                confirmNewPassword: {
                    label: 'Confirm new password',
                    name: 'confirmNewPassword',
                    type: 'password',
                    required: true,
                    value: '',
                    disabled: this.notificationVisible
                },
            }
        }
    },
    methods: {
        submit() {
            validatePassword(this.fields.oldPassword.value, this.errors);
            if (this.user.password !== this.fields.oldPassword.value) {
                this.errors.oldPassword = "Password is wrong"
                return
            } else {
                delete this.errors.oldPassword
            }
            validateConfirmPassword(this.fields.newPassword.value, this.fields.confirmNewPassword.value, this.errors);

            if (Object.keys(this.errors).length) {
                return
            }
            this.user.password = this.fields.confirmNewPassword.value;
            this.displayNotification('Password has been changed');
            setTimeout(() => {
                this.$router.push({ name: 'account' })
            }, 1500);
        },
        displayNotification(text) {
            this.notificationVisible = true;
            this.notificationText = text;
        },
        hideNotification() {
            this.notificationVisible = false;
            this.notificationText = '';
        },
        changeToLogin() {
            this.$router.push({ name: "login" })
        }
    },
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