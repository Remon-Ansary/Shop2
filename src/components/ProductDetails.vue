<template>
  <div>
    <el-row :gutter="20">
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
                <router-link
                  :to="{
                    name: 'Products',
                  }"
                  class=""
                >
                  <el-button
                    v-on:click="deleteProduct(singleProduct.id)"
                    type="danger"
                    >delete</el-button
                  >
                </router-link>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import axios from "axios"
import { mapGetters, mapActions } from "vuex"
export default {
  name: "ProductDetails",

  data() {
    return {
      errorMessage: "",
      show: true,
    }
  },
  methods: {
    ...mapActions(["deleteProduct"]),
  },
  computed:
    // singleProduct() {
    //   return this.$store.getters.singleProduct
    // },
    mapGetters(["singleProduct"]),

  mounted() {
    this.$store.dispatch("singleProduct", this.$route.params.id)
  },
}
</script>

<style scoped>
.image {
  width: 300px;
  height: 300px;
  display: block;
}
</style>
