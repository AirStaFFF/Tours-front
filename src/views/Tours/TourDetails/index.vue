<template>
    <div class="tour-details pb-5" v-if="tour">
        <div class="tour-details__title">
            {{ tour.name }}
        </div>
        <div class="tour-details__description border-bottom mb-2">
            {{ tour.description }}
        </div>
        <div class="tour-details__info">
            <div class="info-difficulty fs-5 border-bottom mb-2">
                Difficulty: {{ tour.difficulty }}
            </div>
            <div class="info-group__size fs-5 border-bottom">
                Max group size: {{ tour.maxGroupSize }}
            </div>
            <div class="info-start">

            </div>
            <div class="info-guides">
                <div class="border-bottom fs-2 mt-3 mb-2">Tour Guides</div>
                <div class="d-flex">
                    <div
                        class="guide"
                        v-for="(guide, id) in tour.guides"
                        :key="id"
                    >
                        <div class="guide-name">{{ guide.name }}</div>
                        <div class="guide-role">{{ guide.role }}</div>
                        <div class="guide-email">{{ guide.email }}</div>
                    </div>
                </div>
            </div>
            <div class="info-locations">

            </div>
            <div class="info-price mt-3 mb-2 border-bottom border-top w-100">
                <span class="fs-4 ">Price {{ tour.price }}$</span>
            </div>
        </div>
        <reviews
            :review="tour.review"
            @deleteReview="deleteReview($event)"
        />
        <review-form
            @addedReview="addReview($event)"
            @updateReview="updateReview($event)"
        />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ReviewForm from "./components/ReviewForm";
import Reviews from "./components/Reviews";

export default {
    name: "index",
    components: {
        ReviewForm,
        Reviews
    },
    data() {
        return {
            tour: null,
            reviewText: null,
            reviewRating: null
        }
    },
    computed: {
        ...mapState('user', ['user'])
    },
    async mounted() {
        await this.getData()
    },
    methods: {
        ...mapActions('tours', ['getTour']),
        async getData() {
            const response = await this.getTour(this.$route.params)
            this.tour = response.data.item
        },
        addReview(event) {
            this.tour.review.push(event)
        },
        deleteReview(event) {
            this.tour.review = this.tour.review.filter((item) => item.id !== event)
        },
        updateReview(event) {
            const index = this.tour.review.findIndex((item) => item.id === event.id)
            if (index !== -1) this.tour.review.splice(index, 1, event)
        }
    }
}
</script>

<style lang="scss">
.tour-details {
    &__title {
        font-size: 32px;
    }
    &-description {
    }
    .reviews {

    }
    .guide {
        margin-right: 20px;
    }
}
</style>
