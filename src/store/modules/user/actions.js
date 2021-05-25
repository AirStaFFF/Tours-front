import Api from '@/helpers/Api'

import Auth from "@/helpers/Auth";

export default {
    async getCurrentUser({ state, commit }, payload) {
        const response = await Api.get('/api/v1/users/me')
        commit('SET_USER', response.data.data.item)
        return response.data
    },
    async updateUserData({ state, commit }, payload) {
        const response = await Api.patch('/api/v1/users/update-me', payload)
        // commit('UPDATE_USER', response.data.user)
    },
    async changePassword({ state, commit }, payload) {
        const response = await Api.patch('/api/v1/users/update-password', payload)
        await Auth.login(response.data)
    }
}
