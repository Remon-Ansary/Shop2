<template>
  <div class="container">
    <Navbar />
    <div class="card">
      <h3>Edit Item</h3>
      <el-form @submit="onSubmit" label-width="100px">
        <el-form-item label="Product Name">
             <el-input
            type="text"
            class="form-control"
            v-model="singleProduct.id"
          ></el-input>
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
        <form @submit="onSubmit">
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    <div style="margin: 20px"></div>
    
    <div>
      <h2>Updated Product</h2>
      {{ singleProduct.title }} {{ singleProduct.price
      }}{{ singleProduct.category }}
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"

import Navbar from "./Navbar.vue"
export default {
  props: ["id"],
  name: "UpdateProduct",
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      title: this.singleProduct.title,
      price: this.singleProduct.price,

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
    ...mapActions(["updateProduct"]),
    onSubmit(event) {
      event.preventDefault()
      this.updateProduct(
        (this.payload = {
            id: this.singleProduct.id,
          title: this.singleProduct.title,
          price: this.singleProduct.price,
          category: this.category,
          image: this.image,
        })
      )
      console.log("updateProduct")
    },
  },
}
</script>

<style scoped></style>
