<template>
    <div class="user-profile">
        <div class="fs-2">
            YOUR PASSWORD SETTINGS
        </div>
        <form @submit.prevent="validate">
            <fieldset>
                <legend class="mb-0">Current Password</legend>
                <form-input
                    v-model="$v.currentPassword.$model"
                    :field.sync="$v.currentPassword.$model"
                    type="password"
                    class="mt-2"
                    placeholder="Enter your current password"
                    :errors="validationMessage($v.currentPassword)"
                    :is-valid="$v.currentPassword.$dirty && !$v.currentPassword.$anyError"
                    @input.native="$v.currentPassword.$touch()"
                    @blur.native="$v.currentPassword.$touch()"
                />
            </fieldset>
            <fieldset class="mt-2">
                <legend class="mb-0">New Password</legend>
                <form-input
                    v-model="$v.password.$model"
                    :field.sync="$v.password.$model"
                    type="password"
                    class="mt-2"
                    placeholder="Enter your new password"
                    :errors="validationMessage($v.password)"
                    :is-valid="$v.password.$dirty && !$v.password.$anyError"
                    @input.native="$v.password.$touch()"
                    @blur.native="$v.password.$touch()"
                />
            </fieldset>
            <fieldset class="mt-2">
                <legend class="mb-0">Password confirm</legend>
                <form-input
                    v-model="$v.passwordConfirm.$model"
                    :field.sync="$v.passwordConfirm.$model"
                    type="password"
                    class="mt-2"
                    placeholder="Enter your confirm password"
                    :errors="validationMessage($v.passwordConfirm)"
                    :is-valid="$v.passwordConfirm.$dirty && !$v.passwordConfirm.$anyError"
                    @input.native="$v.passwordConfirm.$touch()"
                    @blur.native="$v.passwordConfirm.$touch()"
                />
            </fieldset>
            <b-button
                type="submit"
                variant="outline-primary mt-2"
            >Save Changes</b-button>
        </form>
        <hr/>
    </div>
</template>

<script>
import FormInput from "@/components/form-elements/FormInput";
// validations

import formValidationMixin from '@/mixins/formValidationMixin.js'
import { validationMixin } from 'vuelidate';
import { validationMessage } from 'vuelidate-messages'
import { validationRules } from '@/validations/user/PasswordChange/Rules'
import { formMessages } from '@/validations/user/PasswordChange/Messages'

import { mapActions } from 'vuex'

export default {
    name: "PasswordChange",
    props: {
        user: Object
    },
    mixins: [
        validationMixin,
        formValidationMixin
    ],
    validations: {
        ...validationRules
    },
    components: {
        FormInput
    },
    data() {
        return {
            currentPassword: '',
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        validationMessage: validationMessage(formMessages),
        ...mapActions('user', ['changePassword']),
        submit() {
            this.changePassword({
                passwordCurrent: this.currentPassword,
                password: this.password,
                passwordConfirm: this.passwordConfirm
            })
                .then(() => {
                    this.$bus.$emit('showSnackBar', 'Successful password change', 'success')
                })
                .catch((e) => {
                    this.$bus.$emit('showSnackBar', e.message, 'error')
                })
        }
    }
}
</script>

<style scoped>

</style>
