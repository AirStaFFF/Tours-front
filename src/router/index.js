import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import auth from './auth/index'
import tours from './tours/index'

import Auth from "../helpers/Auth";

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err)
}

function shouldRedirectToAccount(toRoute) {
    const blockedRoutes = ['login', 'register', 'forgot']
    const index = blockedRoutes.findIndex((route) => route === toRoute)
    return index !== -1 && Auth.getToken()
}

const routes = [
    ...auth,
    ...tours
]


const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
    // redirect logged in user to account page, in case an irrelevant route is accessed
    if (shouldRedirectToAccount(to.name)) {
        next({ name: 'tours-list' })
    }

    // all routes processing logic
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        const token = Auth.getToken()
        if (!token) {
            Auth.logout()
            router.push({ name: 'login'})
        } else {
            next()
        }
    } else {
        next();
    }
})

export default router
