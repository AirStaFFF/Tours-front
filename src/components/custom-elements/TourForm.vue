<template>
    <div class="tour-form">
        <div class="tour-form__title">
            {{ mode }} Tour
        </div>
        <form @submit.prevent="validate">
            <div
                v-for="(element, id) in formElements"
                :key="id"
            >
                <form-input
                    v-if="element.component === 'input'"
                    v-model="$v.tour[element.field].$model"
                    :type="element.type"
                    :field.sync="$v.tour[element.field].$model"
                    :placeholder="element.placeholder"
                    :errors="validationMessage($v.tour[element.field])"
                    :is-valid="$v.tour[element.field].$dirty && !$v.tour[element.field].$anyError"
                    @input.native="$v.tour[element.field].$touch()"
                    @blur.native="$v.tour[element.field].$touch()"
                />
                <form-select
                    v-else-if="element.component === 'select'"
                    v-model="$v.tour[element.field].$model"
                    :field.sync="$v.tour[element.field].$model"
                    :placeholder="element.placeholder"
                    :errors="validationMessage($v.tour[element.field])"
                    :is-valid="$v.tour[element.field].$dirty && !$v.tour[element.field].$anyError"
                    @input.native="$v.tour[element.field].$touch()"
                    @blur.native="$v.tour[element.field].$touch()"
                    :options="element.options"
                />
            </div>
            <div class="tour-form__buttons">
                <b-button
                    variant="primary"
                    type="submit"
                    class="m-2"
                >
                    Create
                </b-button>
                <b-button
                    variant="primary"
                    class="m-2"
                    @click="$router.back()"
                >
                    Back
                </b-button>
            </div>
        </form>
    </div>
</template>

<script>
import formValidationMixin from '@/mixins/formValidationMixin.js'
import { validationMixin } from 'vuelidate';
import { validationMessage } from 'vuelidate-messages'
import { validationRules } from '@/validations/Tour/Edit/Rules'
import { formMessages } from '@/validations/Tour/Edit/Messages'

import FormElements from '@/constants/tour-form-elements'
import FormInput from "../form-elements/FormInput";
import FormSelect from "../form-elements/FormSelect";

export default {
    name: "TourForm",
    components: {
        FormInput,
        FormSelect
    },
    props: {
        mode: String,
        item: Object
    },
    data() {
        return {
            tour: {
                name: null,
                duration: null,
                rating: null,
                ratingsAverage: null,
                ratingsQuantity: null,
                maxGroupSize: null,
                difficulty: null,
                summary: null,
                description: null,
                price: null,
                discountPrice: null,
                slug: null
            }
        }
    },
    watch: {
        item(val) {
            console.log(val)
            if (val) this.tour = { ...this.tour, ...val }
        }
    },
    mixins: [
        validationMixin,
        formValidationMixin
    ],
    validations: {
        ...validationRules
    },
    computed: {
        formElements() {
            return FormElements
        }
    },
    methods: {
        validationMessage: validationMessage(formMessages),
        async submit() {
            await this.$emit('submit', this.tour)
            // await this.reset()
        },
        reset() {
            this.tour = {
                name: null,
                duration: null,
                rating: null,
                ratingsAverage: null,
                ratingsQuantity: null,
                maxGroupSize: null,
                difficulty: null,
                summary: null,
                description: null,
                price: null,
                discountPrice: null,
                slug: null
            }
            setTimeout(() => {
                this.$v.$reset()
            })
        }
    }
}
</script>

<style lang="scss">
    .tour-form {
        &__title {
            text-transform: capitalize;
            font-size: 24px;
        }
    }
</style>
