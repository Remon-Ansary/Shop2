<template>
  <div class="container">
    <div class="card">
      <h3>Edit Item</h3>
      <el-form @submit="onSubmit" label-width="100px">
        <el-form-item label="Product ID">
          <el-input
            type="text"
            class="form-control"
            v-model="singleProduct.id"
          ></el-input>
        </el-form-item>

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
        <el-form-item label=" Category">
          <el-input
            type="text"
            class="form-control"
            v-model="singleProduct.category"
          ></el-input>
        </el-form-item>
        <el-form-item label=" Category">
          <el-input
            type="text"
            class="form-control"
            v-model="singleProduct.image"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="card-header"></div>
      <div class="card-body"></div>
    </div>
    <div style="margin: 20px"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  name: "UpdateProduct",
  data() {
    return {
      errorMessage: "",
    }
  },
  computed: mapGetters(["singleProduct"]),

  mounted() {
    this.$store.dispatch("singleProduct", this.$route.params.id)
  },
  methods: {
    ...mapActions(["updateProduct", "singleProduct"]),
    onSubmit(event) {
      event.preventDefault()
      this.updateProduct(
        (this.payload = {
          id: this.singleProduct.id,
          title: this.singleProduct.title,
          price: this.singleProduct.price,
          category: this.singleProduct.category,
          image: this.singleProduct.image,
        }),
        this.$router.push("/")
      )

      console.log("updateProduct")
    },
  },
}
</script>

<style scoped></style>
