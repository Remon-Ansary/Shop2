<template>
  <div>
    <div class="container">
      <h3>Add Item</h3>
    </div>
    <el-form @submit="onSubmit" label-width="100px">
      <el-form-item label=" Name">
        <el-input type="text" class="form-control" v-model="title"></el-input>
      </el-form-item>
      <el-form-item label=" Price">
        <el-input type="text" class="form-control" v-model="price"></el-input>
      </el-form-item>
      <el-form-item label=" Image">
        <el-input type="text" class="form-control" v-model="image"></el-input>
      </el-form-item>

      <el-form-item label=" Category">
        <el-input
          type="text"
          class="form-control"
          v-model="category"
        ></el-input>
      </el-form-item>

      <el-alert
        title="success alert"
        type="success"
        v-show="!notification"
      ></el-alert>
    </el-form>
    <form @submit="onSubmit" v-on:click="notification = !notification">
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
      notification: true,
    }
  },
  methods: {
    ...mapActions(["createProduct"]),
    onSubmit(event) {
      event.preventDefault()
      this.createProduct(
        (this.payload = {
          title: this.title,
          price: this.price,
          category: this.category,
          image: this.image,
        })
      )
      console.log("createProduct")
      this.$router.push("/")
    },
  },
}
</script>

<style scoped></style>
