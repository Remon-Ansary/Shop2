import axios from "axios"
import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

//to handle state
const state = {
  products: null,
  singleProduct: null,
  updateProduct: null,
  newProduct: [],
}

//to handle state
const getters = {
  allProducts: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
}

//to handle actions
const actions = {
  allProducts({ commit }) {
    if (this.state.products == null) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("SET_PRODUCTS", response.data), (this.loading = true)
      })
    }
  },
  singleProduct({ commit }, productId) {

      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
          commit("SET_SINGLE_PRODUCTS", response.data)
        })
   
  },

  async updateProduct({ commit }, payload) {
      console.log(payload.id)
      // let uri = `https://fakestoreapi.com/products//${payload.id}`
      // axios.put(uri, payload).then((response) => {
        // console.log(response.data)
        commit("updateProduct", payload)
      // })
   
  },

  deleteProduct({ commit }, id) {
    let uri = "https://fakestoreapi.com/products/" + id
    axios.delete(uri).then((response) => {
      console.log(response.data)
      alert("Deleted  " + response.data.title)
      commit("DELETE_PRODUCT", id)
      
    })
  },

  // async createProduct({ commit }, title, price, image) {
  //   let uri = "https://fakestoreapi.com/products"
  //   axios.post(uri, { title, price, image }).then((response) => {
  //     console.log(response.data)
  //     commit("createProduct", response.data)
  //   })
  // },
  async createProduct({ commit }, payload) {
    console.log(payload)
    let uri = "https://fakestoreapi.com/products"

    axios.post(uri, payload).then((response) => {
      console.log(response.data)
      commit("createProduct", response.data)
    })
  },
}

//to handle mutations
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
    console.log("products" + state.products)
  },
  SET_SINGLE_PRODUCTS(state, singleProduct) {
    state.singleProduct = singleProduct
  },
  updateProduct: (state, payload) => {
    const index = state.products.findIndex(
      (product) => product.id === payload.id
    )

    if (index !== -1) {
      state.products.splice(index, 1, payload)
    }
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
