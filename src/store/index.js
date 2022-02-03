import axios from "axios"
import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

//to handle state
const state = {
  products: [],
  singleProduct: null,
}

//to handle state
const getters = {
  allProducts: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
}

//to handle actions
const actions = {
  getproducts({ commit }) {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      commit("SET_PRODUCTS", response.data)
    })
  },
  singleProduct({ commit },productId) {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        commit("SET_SINGLE_PRODUCTS", response.data)
      })
  },
}

//to handle mutations
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_SINGLE_PRODUCTS(state, singleProduct) {
    state.singleProduct = singleProduct
  },
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
