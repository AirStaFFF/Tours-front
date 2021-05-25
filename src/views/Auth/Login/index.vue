<template>
    <auth-layout>
        <template #header>
            <div class="auth-header__container">
                <h1>Login</h1>
            </div>
        </template>
        <template #content>
            <div class="auth-content__container">
                <form @submit.prevent="validate">
                    <form-input
                        v-model="$v.email.$model"
                        :field.sync="$v.email.$model"
                        type="email"
                        class="mt-2"
                        placeholder="Enter your email"
                        :errors="validationMessage($v.email)"
                        :is-valid="$v.email.$dirty && !$v.email.$anyError"
                        @input.native="$v.email.$touch()"
                        @blur.native="$v.email.$touch()"
                    />
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
                    <b-button
                        type="submit"
                        variant="outline-primary mt-2 w-100">Login</b-button>
                </form>
                <div class="auth-links mt-2">
                    Forgot your password?
                    <router-link to="/forgot" class="forgot-password">Reset</router-link>
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
import { validationRules } from '@/validations/auth/Login/Rules'
import { formMessages } from '@/validations/auth/Login/Messages'

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
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        validationMessage: validationMessage(formMessages),
        async submit() {
            try {
                const response = await this.login({
                    email: this.email,
                    password: this.password
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
