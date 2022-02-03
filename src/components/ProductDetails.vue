<template>
  <div>
    <Navbar />
    <el-row :gutter="20" v-show="show">
      <el-col :span="10"
        ><div class="grid-content bg-purple">
          <img v-bind:src="singleProduct.image" class="image" /></div
      ></el-col>
      <el-col :span="20"
        ><div class="grid-content bg-purple">
          <h1>Product details</h1>
          <el-row :gutter="20">
            <el-col :span="20">
              <div>
                <span>Name: {{ singleProduct.title }}</span>
                <div class="bottom clearfix">
                  <el-button type="text" class="button"
                    >Price: {{ singleProduct.price }} $</el-button
                  >
                </div>
                <div>
                  <p>Category: {{ singleProduct.category }}</p>
                </div>
                <div>
                  <p>Description: {{ singleProduct.description }}</p>
                </div>
              </div>
              <!-- button -->
              <el-row :gutter="10">
                <el-divider></el-divider>
                <el-col :span="5">
                  <router-link
                    :to="{
                      name: 'UpdateProduct',
                      params: { id: singleProduct.id },
                    }"
                    class=""
                    ><el-button
                      class="button"
                      type="primary"
                      style="padding-left: "
                      >Update</el-button
                    >
                  </router-link>
                </el-col>
                <!-- <el-col :span="5">
                  <el-button
                    @click="show = !show"
                    v-on:click="deleteProduct(singleProduct.id)"
                    type="danger"
                    >delete</el-button
                  >
                </el-col> -->
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>

import Navbar from "./Navbar.vue"
// import axios from "axios"
export default {
  props:["id"],
  name: "ProductDetails",
 
  components: {

    Navbar: Navbar,
  },
  data() {
    return {
     
      errorMessage: "",
      show: true,
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
  //  methods: {
  //   deleteProduct() {
  //     let uri = "https://fakestoreapi.com/products/" + this.$route.params.id
  //     axios.delete(uri).then((response) => {
  //       //  this.$router.push({ name: "ProductDetails" })
  //       //  this.singleProduct.splice()
  //       alert("Product deleted")
  //       console.log(response.data)
  //     })
  //   },
  // },
}
 
</script>

<style scoped>
.image {
  width: 80%;
  height: 300px;
  display: block;
}
</style>
