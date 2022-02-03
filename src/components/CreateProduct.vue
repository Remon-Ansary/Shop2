<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>Add Item</h3>
        </div>
        <div class="card-body">
          <el-form v-on:submit.prevent="createProduct" label-width="100px">
            <el-form-item label="Product Name">
              <el-input
                type="text"
                class="form-control"
                v-model="createdProduct.title"
              ></el-input>
            </el-form-item>
            <el-form-item label="Product Price">
              <el-input
                type="text"
                class="form-control"
                v-model="createdProduct.price"
              ></el-input>
            </el-form-item>
            <el-form-item label="Product Description">
              <el-input
                type="text"
                class="form-control"
                v-model="createdProduct.description"
              ></el-input>
            </el-form-item>
            <el-form-item label="Product Category">
              <el-input
                type="text"
                class="form-control"
                v-model="createdProduct.category"
              ></el-input>
            </el-form-item>
          </el-form>
          <form v-on:submit.prevent="createProduct">
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
