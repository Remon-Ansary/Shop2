<template>
  <div>
    <Navbar/>
    
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>Add Item</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="createProduct">
            <div class="form-group">
              <label>Item Name:</label>
              <input
                type="text"
                class="form-control"
                v-model="createdProduct.title"
              />
            </div>
            <div class="form-group">
              <label>Item Price:</label>
              <input
                type="text"
                class="form-control"
                v-model="createdProduct.price"
              />
            </div>
            <div class="form-group">
              <label>Description:</label>
              <input
                type="text"
                class="form-control"
                v-model="createdProduct.description"
              />
            </div>
            <div class="form-group">
              <label>Image:</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Category:</label>
              <input
                type="text"
                class="form-control"
                v-model="createdProduct.category"
              />
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-primary" value="Add Item" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Navbar from "./Navbar.vue"
export default {
  name: "CreateProduct",
  created() {
    this.fetchProducts()
  },
    components: {
    Navbar: Navbar,
  },
  data() {
    return {
      createdProduct: {},
    }
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          this.products = response.data
          
        })
        .catch((error) => {
          this.errorMessage = error.message
        })
    },
    createProduct() {
      let uri = "https://fakestoreapi.com/products"
      axios.post(uri, this.createdProduct).then((response) => {
        console.log(response.data)
        this.fetchProducts()
      })
    },
    
  },
}
</script>

<style scoped></style>
