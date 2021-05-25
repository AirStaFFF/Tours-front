<template>
    <div class="user" v-if="user">
        <user-profile
            :user="userInfo"
        />
        <password-change/>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import UserProfile from "./components/UserProfile";
import PasswordChange from "./components/PasswordChange";

export default {
    name: "index.vue",
    components: {
        UserProfile,
        PasswordChange
    },
    mounted() {
        this.getCurrentUser()
    },
    computed: {
        ...mapState('user', ['user']),
        userInfo() {
            return this.user
        }
    },
    methods: {
        ...mapActions('user', ['getCurrentUser'])
    }
}
</script>

<style scoped>

</style>
