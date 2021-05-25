import Api from '@/helpers/Api'

import Auth from "@/helpers/Auth";

export default {
    async login({ state, commit }, payload) {
        const response = await Api.post('/api/v1/users/login', payload)
        await Auth.login(response.data)
        commit('user/SET_USER', response.data, { root: true })
        return response.data
    },
    async register({ state, commit }, payload) {
        const response = await Api.post('/api/v1/users/signup', payload)
        await Auth.login(response.data)
        commit('user/SET_USER', response.data, { root: true })
        return response.data
    },
    async forgot({ state, commit }, payload) {
        const response = await Api.post('/api/v1/users/forgot-password', payload)
        return response.data
    },
    async resetPassword({ state, commit }, payload) {
        const response = await Api.patch(`/api/v1/users/reset-password/${payload.token}`, payload.data)
        await Auth.login(response.data)
        commit('user/SET_USER', response.data, { root: true })
        return response.data
    }
}
