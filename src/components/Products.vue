<template>
  <div>
    <el-container> </el-container>
    <el-main>
      <h1>All products</h1>
      <el-row :gutter="10">
        <el-col
          :xs="11"
          :sm="8"
          :md="6"
          :lg="6"
          :xl="6"
          v-for="product in allProducts"
          v-bind:key="product.id"
        >
          <el-card class="card">
            <img v-bind:src="product.image" class="image" />
            <div style="padding: 0px">
              <span>{{ product.title }}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button"
                  >{{ product.price }} $</el-button
                >
              </div>
            </div>
            <router-link
              :to="{ name: 'ProductDetails', params: { id: product.id } }"
              class=""
              ><el-button class="button" type="primary">View Details</el-button>
            </router-link>
            <i
              class="el-icon-delete"
              v-on:click="deleteProduct(product.id)"
            ></i>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: "Products",

  data() {
    return {
      errorMessage: "",
    }
  },
  methods: {
    ...mapActions(["deleteProduct"]),
  },
  computed: mapGetters(["allProducts"]),

  mounted() {
    this.$store.dispatch("allProducts")
  },
}
</script>

<style scoped>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 10px;
  float: right;
}
.card {
  margin-bottom: 10px;
  height: 350px;
}
.image {
  width: 100%;
  height: 200px;
  display: block;
}
</style>
