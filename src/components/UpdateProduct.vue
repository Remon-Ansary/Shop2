<template>
  <div class="container">
    <Navbar />
    <div class="card">
      <h3>Edit Item</h3>
      <el-form
        v-on:submit.prevent="updateProduct"
       
        label-width="100px"
       
      >
        <el-form-item label="Product Name">
          <el-input
            type="text"
            class="form-control"
            v-model="singleProduct.title"
          ></el-input>
        </el-form-item>
        <el-form-item label="Product Price">
          <el-input
            type="text"
            class="form-control"
            v-model="singleProduct.price"
          ></el-input>
        </el-form-item>
       
      </el-form>
      <div class="card-header"></div>
      <div class="card-body">
        <form v-on:submit.prevent="updateProduct">
         
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item" />
          </div>
        </form>
      </div>
    </div>
    <div style="margin: 20px"></div>

    <div>
      <h2>Updated Product</h2>
      {{ updatedProduct.title }} {{ updatedProduct.price
      }}{{ updatedProduct.category }}
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Navbar from "./Navbar.vue"
export default {
  props: ["id"],
  name: "UpdateProduct",
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
        updatedProduct: [],
      errorMessage: "",
    }
  },
  computed: {
    singleProduct() {
      return this.$store.getters.singleProduct
    },
  },
  mounted() {
    this.$store.dispatch("singleProduct", this.id)
  },
    methods: {
    updateProduct() {
      let uri = "https://fakestoreapi.com/products/" + this.id
      axios.patch(uri, this.singleProduct).then((response) => {
        // this.$router.push({ name: "ProductDetails" })
        this.updatedProduct = response.data
        console.log(response.data)
      })
    },
  },
}
</script>

<style scoped></style>
