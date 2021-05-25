<template>
    <div class="user-profile">
        <div class="fs-2">
            YOUR PROFILE SETTINGS
        </div>
        <form @submit.prevent="validate">
            <fieldset>
                <legend class="mb-0">Name</legend>
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
            </fieldset>
            <fieldset class="mt-2">
                <legend class="mb-0">Email</legend>
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
import { validationRules } from '@/validations/user/UserProfile/Rules'
import { formMessages } from '@/validations/user/UserProfile/Messages'

import { mapActions } from 'vuex'

export default {
    name: "UserProfile",
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
            name: '',
            email: ''
        }
    },
    mounted() {
        this.name = this.user.name
        this.email = this.user.email
    },
    methods: {
        validationMessage: validationMessage(formMessages),
        ...mapActions('user', ['updateUserData']),
        submit() {
            this.updateUserData({
                name: this.name,
                email: this.email
            })
                .then(() => {
                    this.$bus.$emit('showSnackBar', 'Successful data change', 'success')
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
