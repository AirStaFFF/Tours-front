export default {
    SET_TOURS(state, payload) {
        state.tours = payload
    },
    SET_TOUR(state, payload) {
        state.tour = payload
    },
    DELETE_TOUR(state, payload) {
        state.tours.data = state.tours.data.filter((item) => item['_id'] !== payload)
    }
}
