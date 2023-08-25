import { createStore } from 'vuex'

export default createStore({
    state: {
        cart: []
    },

    mutations: {
        addProduct(state, data) {
            const item = state.cart.find((item) => item.id === data.id)
            if (item) {
                item.quantity++
            } else {
                state.cart.push({ ...data, quantity: 1 })
            }
        },

        removeProduct(state, id) {
            const product = state.cart.findIndex(item => item.id === id)
            state.cart.splice(product, 1)
        }
    }
})