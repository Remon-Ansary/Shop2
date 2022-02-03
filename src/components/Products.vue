<template>
  <div>
    <el-container>
      <el-header> <Navbar /></el-header>
    </el-container>
    <el-main>
      <CreateProduct />
      <h1>All products</h1>

      <el-row>
        <el-col
          :span="8"
          v-for="product in allProducts"
          v-bind:key="product.id"
        >
          <el-card :body-style="{ padding: '10px' }">
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
import Navbar from "./Navbar.vue"
import CreateProduct from "./CreateProduct.vue"
import { mapGetters, mapActions } from "vuex"
export default {
  name: "Products",
  components: {
    Navbar: Navbar,
    CreateProduct: CreateProduct,
  },
  data() {
    return {
      errorMessage: "",
    }
  },
  methods: {
    ...mapActions(["getproducts", "deleteProduct"]),
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.getproducts()
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

.image {
  width: 100%;
  height: 300px;
  display: block;
}
</style>
