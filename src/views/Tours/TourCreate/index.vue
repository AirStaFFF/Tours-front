<template>
    <div>
        <tour-form
            mode="create"
            @submit="create($event)"
        />
    </div>
</template>

<script>
import TourForm from "@/components/custom-elements/TourForm";
import { mapActions } from 'vuex'


export default {
    name: "index",
    components: {
        TourForm
    },
    methods: {
        ...mapActions('tours', ['createTour']),
        create(event) {
            this.createTour(event)
                .then(() => {
                    this.$bus.$emit('showSnackBar', 'Your tour was created', 'success')
                })
        }
    }
}
</script>

<style scoped>

</style>
