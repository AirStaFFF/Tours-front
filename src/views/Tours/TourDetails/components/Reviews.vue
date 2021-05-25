<template>
    <div class="reviews">
        <div class="border-bottom fs-2 mt-3 mb-2">
            Reviews ({{ review.length }})
        </div>
        <div
            class="reviews-review border-bottom"
            v-for="(review, id) in review"
            :key="id"
        >
            <div class="d-flex justify-content-between mb-1 py-2">
                <div class="reviewer-name d-flex justify-content-between">
                    {{ review.user.name }}
                </div>
                <div class="reviewer-rating">
                    {{ review.rating }}/5
                </div>
            </div>
            <div class="reviewer-review">
                {{ review.review }}
            </div>
            <div v-if="checkUser(review.user['_id'])">
                <b-button
                    variant="primary"
                    @click="selectForUpdate(review)"
                >
                    Update
                </b-button>
                <b-button
                    class="m-1"
                    variant="danger"
                    @click="deleteRev(review.id)"
                >Delete</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: "Reviews",
    props: {
        review: Array
    },
    computed: {
         ...mapState('user', ['user'])
    },
    methods: {
        ...mapActions('tours', ['deleteReview']),
        checkUser(reviewUserId) {
            return this.user['_id'] === reviewUserId
        },
        async deleteRev(reviewId) {
            try {
                await this.deleteReview({
                    reviewId
                })
                this.$bus.$emit('showSnackBar', 'Review was deleted', 'success')
                this.$emit('deleteReview', reviewId)
            } catch (e) {
                this.$bus.$emit('showSnackBar', e.message, 'error')
            }
        },
        selectForUpdate(review) {
            this.$bus.$emit('updateReview', review)
        }
    }
}
</script>

<style scoped>

</style>
