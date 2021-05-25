<template>
  <div id="app">
    <navbar
      :user="user"
    />
    <div class="content-wrapper">
      <dashboard v-if="user"/>
      <router-view v-else/>
      <snack-bar />
    </div>
  </div>
</template>


<script>
import SnackBar from "./components/SnackBar";
import Dashboard from './layouts/Dashboard'
import { mapState, mapActions } from 'vuex'
import Navbar from "./components/Navbar";
import Auth from "./helpers/Auth";

export default {
    components: {
      SnackBar,
      Dashboard,
      Navbar
    },
  mounted() {
      if (Auth.getToken()) {
          this.getCurrentUser()
      }
  },
  computed: {
        ...mapState('user', ['user'])
    },
    methods: {
        ...mapActions('user', ['getCurrentUser'])
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content-wrapper {
  padding-top: 84px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}
* {
  box-sizing: border-box;
}
html {
  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
