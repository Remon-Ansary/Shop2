<template>
  <div>
    <el-container>
      <el-header> <Navbar /></el-header>
    </el-container>
    <el-main>
      <h1>All products</h1>
      <el-row>
        <el-col
          :span="8"
          v-for="getproduct in getproducts"
          v-bind:key="getproduct.id"
        >
          <el-card :body-style="{ padding: '10px' }">
            <img v-bind:src="getproduct.image" class="image" />
            <div style="padding: 0px">
              <span>{{ getproduct.title }}</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button"
                  >{{ getproduct.price }} $</el-button
                >
              </div>
            </div>
            <router-link
              :to="{ name: 'ProductDetails', params: { id: getproduct.id } }"
              class=""
              ><el-button class="button" type="primary">View Details</el-button>
            </router-link>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue"
export default {
  name: "Products",
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      errorMessage: "",
    }
  },
  computed: {
    getproducts() {
      return this.$store.getters.allProducts
    },
  },
  mounted() {
    this.$store.dispatch("getproducts")
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
