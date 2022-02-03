<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateProduct">
          <div class="form-group">
            <label>Item Name:</label>
            <input
              type="text"
              class="form-control"
              v-model="singleProduct.title"
            />
          </div>
          <div class="form-group">
            <label>Item Price:</label>
            <input
              type="text"
              class="form-control"
              v-model="singleProduct.price"
            />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item" />
          </div>
        </form>
      </div>
    </div>
    <div>
      <h2>Updated Product</h2>
      {{ updatedProduct.title }} {{ updatedProduct.price
      }}{{ updatedProduct.category }}
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: ["id"],
  name: "UpdateProduct",
 
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
    this.$store.dispatch("singleProduct",this.id)
   
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
