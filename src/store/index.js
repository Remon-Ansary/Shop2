import axios from "axios"
import Vuex from "vuex"
import Vue from "vue"

//load Vuex
Vue.use(Vuex)

//to handle state
const state = {
  products: [],
}

//to handle state
const getters = {
  allProducts: (state) => state.products,
}

//to handle actions
const actions = {
  getproducts({ commit }) {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      commit("SET_PRODUCTS", response.data)
    })
  },
}

//to handle mutations
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
