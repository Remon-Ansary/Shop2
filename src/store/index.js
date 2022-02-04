import axios from "axios"
import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex)

//to handle state
const state = {
  products: [],
  singleProduct: null,
  updateProduct: [],
  newProduct: [],
}

//to handle state
const getters = {
  allProducts: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
  updateProduct: (state) => state.updateProduct,
}

//to handle actions
const actions = {
  getproducts({ commit }) {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      commit("SET_PRODUCTS", response.data),
      this.loading = true
    })
  },
  singleProduct({ commit }, productId) {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        commit("SET_SINGLE_PRODUCTS", response.data)
      })
  },
  updateProduct({ commit }, productId) {
    let uri = "https://fakestoreapi.com/products/" + this.id
    axios.patch(uri, this.singleProduct).then((response) => {
      // this.$router.push({ name: "ProductDetails" })
      this.updateProduct = response.data
      commit("SET_UPDATED_PRODUCTS", productId)
      console.log(response.data)
    })
  },
  deleteProduct({ commit }, id) {
    let uri = "https://fakestoreapi.com/products/" + id
    axios.delete(uri).then((response) => {
      console.log(response.data)
      alert('Deleted'+response.data.title)
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
  },
  SET_SINGLE_PRODUCTS(state, singleProduct) {
    state.singleProduct = singleProduct
  },
  SET_UPDATED_PRODUCTS(state, updateProduct) {
    state.updateProduct = updateProduct
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
