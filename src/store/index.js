import axios from "axios"
import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)

//to handle state
const state = {
  products: [],
  singleProduct: [],
  updateProduct: [],
  newProduct: [],
}

//to handle state
const getters = {
  allProducts: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
}

//to handle actions
const actions = {
  async allProducts({ commit }) {
    if (this.state.products.length === 0) {
      const response = await axios.get("https://fakestoreapi.com/products")
      commit("SET_PRODUCTS", response.data), (this.loading = true)
    }
  },

  async singleProduct({ commit }, productId) {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    )

    commit("SET_SINGLE_PRODUCTS", response.data)
  },

  async updateProduct({ commit }, payload) {
    console.log(payload.id)

    commit("updateProduct", payload)
  },

  deleteProduct({ commit }, id) {
    commit("DELETE_PRODUCT", id)
  },

  async createProduct({ commit }, payload) {
    let uri = "https://fakestoreapi.com/products"
    const response = await axios.post(uri, payload)

    commit("createProduct", response.data)
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

  updateProduct: (state, payload) => {
    const index = state.products.findIndex(
      (product) => product.id === payload.id
    )

    state.products.splice(index, 1, payload)
  },

  DELETE_PRODUCT(state, id) {
    state.products = state.products.filter((product) => product.id !== id)
  },

  createProduct: (state, payload) => state.products.unshift(payload),
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
