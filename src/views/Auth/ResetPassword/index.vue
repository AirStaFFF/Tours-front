<template>
    <auth-layout>
        <template #header>
            <div class="auth-header__container">
                <h1>Reset Password</h1>
            </div>
        </template>
        <template #content>
            <div class="auth-content__container">
                <form @submit.prevent="validate">
                    <form-input
                        v-model="$v.password.$model"
                        :field.sync="$v.password.$model"
                        type="password"
                        class="mt-2"
                        placeholder="Enter your password"
                        :errors="validationMessage($v.password)"
                        :is-valid="$v.password.$dirty && !$v.password.$anyError"
                        @input.native="$v.password.$touch()"
                        @blur.native="$v.password.$touch()"
                    />
                    <form-input
                        v-model="$v.passwordConfirm.$model"
                        :field.sync="$v.passwordConfirm.$model"
                        type="password"
                        class="mt-2"
                        placeholder="Confirm your password"
                        :errors="validationMessage($v.passwordConfirm)"
                        :is-valid="$v.passwordConfirm.$dirty && !$v.passwordConfirm.$anyError"
                        @input.native="$v.passwordConfirm.$touch()"
                        @blur.native="$v.passwordConfirm.$touch()"
                    />
                    <b-button
                        type="submit"
                        variant="outline-primary mt-2 w-100">Reset Password</b-button>
                </form>
                <div class="auth-links mt-2">
                    Forgot your password?
                    <router-link to="/forgot" class="forgot-password">Forgot</router-link>
                    or
                    <router-link to="/register" class="forgot-password">Register Account</router-link>
                </div>
            </div>
        </template>
    </auth-layout>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import FormInput from "@/components/form-elements/FormInput";

// validations

import formValidationMixin from '@/mixins/formValidationMixin.js'
import { validationMixin } from 'vuelidate';
import { validationMessage } from 'vuelidate-messages'
import { validationRules } from '@/validations/auth/ResetPassword/Rules'
import { formMessages } from '@/validations/auth/ResetPassword/Messages'

//VUEX
import { mapActions } from 'vuex'

export default {
    name: "index",
    components: {
        AuthLayout,
        FormInput
    },
    mixins: [
        validationMixin,
        formValidationMixin
    ],
    validations: {
        ...validationRules
    },
    data() {
        return {
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        ...mapActions('auth', ['resetPassword']),
        validationMessage: validationMessage(formMessages),
        async submit() {
            try {
                const response = await this.resetPassword({
                    data: {
                        password: this.password,
                        passwordConfirm: this.passwordConfirm
                    },
                    token: this.$route.params.token
                })
                this.$router.push('/')
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style lang="scss">

</style>
