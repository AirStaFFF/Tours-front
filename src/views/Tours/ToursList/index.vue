<template>
    <div class="tours" v-if="tours">
        <tour-card
            v-for="(tour, id) in tours.data"
            :key="id"
            :card="tour"
        />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TourCard from "@/components/custom-elements/TourCard";

export default {
    name: "index",
    components: {
        TourCard
    },
    mounted() {
        this.getData()
    },
    computed: {
        ...mapState('tours', ['tours'])
    },
    methods: {
        ...mapActions('tours', ['getTours']),
        async getData(payload) {
            await this.getTours(payload)
        }
    }
}
</script>

<style lang="scss">
.tours {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
}
</style>
