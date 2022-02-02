<template>
  <div>
    <h1>Product details</h1>

    <div class="card">
      <div>{{ singleProduct.title }}</div>
      {{ singleProduct.price }}
      {{ singleProduct.category }}
      <router-link
        :to="{ name: 'UpdateProduct', params: { id: singleProduct.id } }"
        class="btn btn-primary"
        >Update</router-link
      >
      <button v-on:click="deleteProduct" class="btn btn-">delete</button>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "ProductDetails",
  created() {
    this.fetchProducts()
  },
  data() {
    return {
      singleProduct: [],
      errorMessage: "",
    }
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products/" + this.$route.params.id)
        .then((response) => {
          this.singleProduct = response.data
          console.log(response.data)
        })
        .catch((error) => {
          this.errorMessage = error.message
        })
    },
    deleteProduct() {
      let uri = "https://fakestoreapi.com/products/" + this.$route.params.id
      axios.delete(uri).then((response) => {
        //  this.$router.push({ name: "ProductDetails" })
        //  this.singleProduct.splice()
        alert("Product deleted")
        console.log(response.data)
      })
    },
  },
}
</script>

<style scoped></style>
