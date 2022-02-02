<template>
  <div>
    <Navbar />
    <h1>All products</h1>
    <!-- <div v-for="product in products" v-bind:key="product.id">
      <div class="">
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          class=""
        >
          <div>Name:{{ product.title }}</div>
          <div>Price:{{ product.price }}</div>
        </router-link>
      </div>
    </div> -->
    <el-row>
      <el-col :span="8" v-for="product in products" v-bind:key="product.id">
        <el-card :body-style="{ padding: '10px' }">
          <!-- <img v-bind:src="product.image" class="image" /> -->
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
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios"
import Navbar from "./Navbar.vue"
export default {
  name: "Products",
  components: {
    Navbar: Navbar,
  },
  created() {
    this.fetchProducts()
  },
  data() {
    return {
      products: [],
      errorMessage: "",
    }
  },

  methods: {
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          this.products = response.data
          console.log(response.data)
        })
        .catch((error) => {
          this.errorMessage = error.message
        })
    },
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
