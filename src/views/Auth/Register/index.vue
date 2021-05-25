<template>
    <auth-layout>
        <template #header>
            <div class="auth-header__container">
                <h1>Register</h1>
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
                        v-model="$v.name.$model"
                        :field.sync="$v.name.$model"
                        type="text"
                        class="mt-2"
                        placeholder="Enter your name"
                        :errors="validationMessage($v.name)"
                        :is-valid="$v.name.$dirty && !$v.name.$anyError"
                        @input.native="$v.name.$touch()"
                        @blur.native="$v.name.$touch()"
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
                        variant="outline-primary mt-2 w-100">Register</b-button>
                </form>
                <div class="auth-links mt-2">
                    Forgot your password?
                    <router-link to="/forgot" class="forgot-password">Reset</router-link>
                    or
                    <router-link to="/login" class="forgot-password">Login Account</router-link>
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
    import { validationRules } from '@/validations/auth/Register/Rules'
    import { formMessages } from '@/validations/auth/Register/Messages'

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
                password: '',
                name: '',
                passwordConfirm: ''
            }
        },
        methods: {
            ...mapActions('auth', ['register']),
            validationMessage: validationMessage(formMessages),
            async submit() {
                try {
                    const response = await this.register({
                        email: this.email,
                        name: this.name,
                        password: this.password,
                        passwordConfirm: this.passwordConfirm
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
