<template>
    <form
        v-if="user"
        class="review-form mt-4"
        @submit.prevent="validate"
    >
        <p class="fs-3">Create review</p>
        <div class="d-flex review-form align-items-start">
            <form-input
                v-model="$v.reviewText.$model"
                :field.sync="$v.reviewText.$model"
                placeholder="Add some text"
                :errors="validationMessage($v.reviewText)"
                :is-valid="$v.reviewText.$dirty && !$v.reviewText.$anyError"
                @input.native="$v.reviewText.$touch()"
                @blur.native="$v.reviewText.$touch()"
                class="w-100 review-form__input"
            />
            <form-select
                v-model="$v.reviewRating.$model"
                :field.sync="$v.reviewRating.$model"
                class="mt-2 review-form__select"
                :errors="validationMessage($v.reviewRating)"
                :is-valid="$v.reviewRating.$dirty && !$v.reviewRating.$anyError"
                @input.native="$v.reviewRating.$touch()"
                @blur.native="$v.reviewRating.$touch()"
                :options="options"
            />
        </div>
        <b-button
            type="submit"
            variant="outline-primary mt-2 w-100"
        >Create</b-button>
    </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import formValidationMixin from '@/mixins/formValidationMixin.js'
import { validationMixin } from 'vuelidate';
import { validationMessage } from 'vuelidate-messages'
import { validationRules } from '@/validations/Tour/Review/Rules'
import { formMessages } from '@/validations/Tour/Review/Messages'

import FormInput from "@/components/form-elements/FormInput";
import FormSelect from "@/components/form-elements/FormSelect";

export default {
    name: "Review",
    components: {
        FormSelect,
        FormInput
    },
    mixins: [
        validationMixin,
        formValidationMixin
    ],
    validations: {
        ...validationRules
    },
    computed: {
        ...mapState('user', ['user'])
    },
    data() {
        return {
            reviewText: null,
            reviewRating: null,
            id: null,
            options: [
                {
                    value: null,
                    text: 'Select Rating'
                },
                {
                    value: 1,
                    text: '1/5'
                },
                {
                    value: 2,
                    text: '2/5'
                },
                {
                    value: 3,
                    text: '3/5'
                },
                {
                    value: 4,
                    text: '4/5'
                },
                {
                    value: 5,
                    text: '5/5'
                },
            ]
        }
    },
    mounted() {
        this.$bus.$on('updateReview', (review) => {
            this.reviewRating = review.rating
            this.reviewText = review.review
            this.id = review.id
        })
    },
    methods: {
        validationMessage: validationMessage(formMessages),
        ...mapActions('tours', ['createReview', 'updateReview']),
        async submit() {
            if (this.id) {
                this.update()
                return
            }
            await this.create()
        },
        async update() {
            const response = await this.updateReview({
                tourId: this.$route.params.id,
                data: {
                    id: this.id,
                    review: this.reviewText,
                    rating: this.reviewRating
                }
            })
            if (response.data) {
                this.$bus.$emit('showSnackBar', 'Successful review updated', 'success')
                response.data.item.user = this.user
                this.$emit('updateReview', response.data.item)
                await this.clearForm()
            }
        },
        async create() {
            const response = await this.createReview({
                tourId: this.$route.params.id,
                data: {
                    review: this.reviewText,
                    rating: this.reviewRating
                }
            })
            if (response.data) {
                this.$bus.$emit('showSnackBar', 'Successful review added', 'success')
                response.data.item.user = this.user
                this.$emit('addedReview', response.data.item)
                await this.clearForm()
            }
        },
        async clearForm() {
            this.reviewRating = null
            this.reviewText = null
            this.id = null
            setTimeout(() => {
                this.$v.$reset()
            })
        }
    }
}
</script>

<style lang="scss">
    .review-form {

        &__input {
            margin-right: 10px;
        }
        &__select {
            height: 52px;
            .custom-select {
                height: 36px;
            }
        }
    }
</style>
