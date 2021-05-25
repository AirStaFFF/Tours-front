import Api from '@/helpers/Api'

export default {
    async getTours({ state, commit }, paylaod) {
        try {
            const response = await Api.get('/api/v1/tours', paylaod)
            commit('SET_TOURS', response.data)
        } catch (e) {
            console.log(e)
        }
    },
    async getTour({ state, commit }, payload) {
        try {
            const response = await Api.get(`/api/v1/tours/${payload.id}`)
            commit('SET_TOUR', response.data)
            return response.data
        } catch (e) {
            console.log(e)
        }
    },
    async createTour({ state, commit }, payload) {
        try {
            const response = await Api.post('/api/v1/tours', { ...payload })
            return response.data
        } catch (e) {
            console.log(e)
        }
    },
    async updateTour({ state, commit }, payload) {
        try {
            const response = await Api.patch(`/api/v1/tours/${payload.id}`, { ...payload.tour })
            return response.data
        } catch (e) {
            console.log(e)
        }
    },
    async deleteTour({ state, commit }, { id }) {
        try {
            await Api.delete(`/api/v1/tours/${id}`)
            commit('DELETE_TOUR', id)
        } catch (e) {
            console.log(e)
        }
    },
    async createReview({ state, commit }, { tourId, data }) {
        try {
            const response = await Api.post(`/api/v1/tours/${tourId}/reviews`, data)
            return response.data
        } catch (e) {
            console.log(e)
        }
    },
    async deleteReview({ state, commit }, { reviewId }) {
        await Api.delete(`/api/v1/reviews/${reviewId}`)
    },
    async updateReview({ state, commit }, payload) {
        const response = await Api.patch(`/api/v1/reviews/${payload.data.id}`, {
            review: payload.data.review,
            rating: payload.data.rating
        })
        return response.data
    }
}
