<template>
    <div v-if="tour">
        <tour-form
            mode="create"
            :item="tour.data.item"
            @submit="update($event)"
        />
    </div>
</template>

<script>
import TourForm from "@/components/custom-elements/TourForm";
import { mapActions, mapState } from 'vuex'


export default {
    name: "index",
    components: {
        TourForm
    },
    async mounted() {
        await this.getTour({
            id: this.$route.params.id
        })
        console.log(this.tour)
    },
    computed: {
        ...mapState('tours', ['tour'])
    },
    methods: {
        ...mapActions('tours', ['updateTour', 'getTour']),
        update(event) {
            this.updateTour({
                id: this.$route.params.id,
                tour: event
            })
                .then(() => {
                    this.$bus.$emit('showSnackBar', 'Your tour was updated', 'success')
                })
        }
    }
}
</script>

<style scoped>

</style>
