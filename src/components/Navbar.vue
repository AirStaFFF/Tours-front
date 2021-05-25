<template>
    <nav class="navbar">
        <span class="navbar-title">
            TOURS LIST
        </span>
        <div class="navbar-middle__items">
            <router-link
                :to="'/'"
                class="m-2"
            >
                Tours
            </router-link>
            <router-link
                v-if="user && user.role === 'admin'"
                :to="'/admin/tours'"
                class="m-2"
            >
                Admin Tours
            </router-link>

        </div>
        <div class="navbar-right__items">
            <template v-if="!user">
                <router-link
                    :to="'/login'"
                >
                    Sign in
                </router-link>
                <router-link
                    :to="'/register'"
                >
                    Sign up
                </router-link>
            </template>
            <template v-else>
                <router-link
                    :to="'/user'"
                    class="m-1"
                >
                    <b-button
                        variant="primary"
                    >
                        Account
                    </b-button>
                </router-link>
                <b-button
                    variant="outline-primary"
                    class="m-1"
                    @click="logout"
                >
                    Logout
                </b-button>
            </template>
        </div>
    </nav>
</template>

<script>
import Auth from "@/helpers/Auth";
import { mapMutations } from 'vuex'

export default {
    name: "Navbar",
    props: ['user'],
    methods: {
        ...mapMutations('user', ['SET_USER']),
        logout() {
            Auth.logout()
            this.SET_USER(null)
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped lang="scss">
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 64px;
        width: 100%;
        left: 0px;
        top: 0px;
        position: fixed;
        background: white;
        box-shadow: 0px 4px 8px #dedede;
        padding: 12px 23px;
        z-index: 1111;
    }
</style>
