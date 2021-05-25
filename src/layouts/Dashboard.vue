<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: "Dashboard",
        mounted() {
            this.getCurrentUser()
        },
        methods: {
            ...mapActions('user', ['getCurrentUser'])
        }
    }
</script>

<style scoped>

</style>
