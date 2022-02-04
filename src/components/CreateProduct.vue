<template>
  <div>
    <div class="container">
      <h3>Add Item</h3>
    </div>
    <el-form @submit="onSubmit" label-width="100px">
      <el-form-item label="Product Name">
        <el-input type="text" class="form-control" v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="Product Price">
        <el-input type="text" class="form-control" v-model="price"></el-input>
      </el-form-item>
    </el-form>
    <form @submit="onSubmit">
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex"

export default {
  name: "CreateProduct",

  data() {
    return {
      title: "",
      price: "",
      category: "",
      image: "",
      
    }
  },
  methods: {
    ...mapActions(["createProduct"]),
    onSubmit(event) {
      event.preventDefault()
      this.createProduct(
        this.payload ={
          title: this.title,
          price: this.price,
          category: this.category,
          image: this.image,
        }
      )
      console.log("createProduct")
    },
  },
}
</script>

<style scoped></style>
