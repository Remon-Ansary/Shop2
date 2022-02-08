<template>
  <div>
    <Navbar/>
    <!-- <router-link to="/">Products </router-link>
    <router-link to="/product">Product Details</router-link>
    <router-link to="/create">Add Product</router-link>
    <router-link to="/update">Update Product</router-link> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
  name: "App",
  components: {
    Navbar,
  }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
