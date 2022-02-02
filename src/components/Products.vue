<template>
  <div>
      <Navbar/>
    <h1>Fetch products</h1>
    <el-button type="success" round>Success</el-button>
    <div v-for="product in products" v-bind:key="product.id">
      <div class="">
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          class=""
        >
          <div>Name:{{ product.title }}</div>
          <div>Price:{{ product.price }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Navbar from "./Navbar.vue"
export default {
  name: "Products",
  components: {
    "Navbar": Navbar,
  },
  created() {
    this.fetchProducts()
  },
  data() {
    return {
      products: [],
      errorMessage: "",
    }
  },

  methods: {
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          this.products = response.data
          console.log(response.data)
        })
        .catch((error) => {
          this.errorMessage = error.message
        })
    },
  },
}
</script>

<style scoped></style>
